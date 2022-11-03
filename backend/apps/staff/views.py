from typing import Type

from django.contrib.auth import get_user_model
from django.db.models import Q, Subquery

from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateAPIView, get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from ..patients.models import PatientsModel
from ..patients.serializers import PatientsSerializer
from ..users.models import UserModel as UserModelTyping
from ..users.serializers import UserSerializer
from .models import DoctorsListOfSpecializations, DoctorsModel
from .serializers import DoctorInfoSerializer, DoctorPatientsSerializer, DoctorSerializer, SpecializationSerializer

UserModel: Type[UserModelTyping] = get_user_model()


class DoctorListView(ListAPIView):
    """
    This view allows to see all users who were registered as a doctors via paginated list of results
    Only one method (get) allowed to this view.
        get:
            Returns list of doctors
    """

    queryset = DoctorsModel.objects.all()
    serializer_class = DoctorInfoSerializer
    permission_classes = (AllowAny,)
    pagination_class = LimitOffsetPagination


class DoctorListByID(ListAPIView):
    queryset = DoctorsModel.objects.all()
    serializer_class = DoctorInfoSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        pk = self.kwargs.get('pk')
        qs = self.queryset.filter(pk=pk)
        return qs
    #
    # def get(self, request, *args, **kwargs):
    #     qs = self.get_queryset()
    #     doctor_serializer = self.serializer_class(instance=qs)
    #     return Response(doctor_serializer.data, status=status.HTTP_200_OK)


# class DoctorListPatientsByID(ListAPIView):
#     queryset = UserModel.objects.all()
#     serializer_class = DoctorSerializer
#     permission_classes = (AllowAny,)
#
#
#     # def get_queryset(self):
#     #     pk = self.kwargs.get('pk')
#     #     qs = self.queryset.filter()
#     #     return qs

class DoctorListPatientsByID(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


    def get_queryset(self):
        pk = self.kwargs.get('pk')
        qs = self.queryset.filter(patientsmodel__patients__doctor_id__exact=pk)
        print(qs.query)
        return qs


class DoctorSpecializationsList(ListAPIView):
    queryset = DoctorsListOfSpecializations.objects.all()
    serializer_class = SpecializationSerializer
    permission_classes = (AllowAny,)


class DoctorCreateView(CreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        user_id = self.request.query_params.get('user_id')
        if user_id:
            user = get_object_or_404(self.queryset, pk=user_id)
            user_dict = {'doctor': user.id}
            serializer = self.serializer_class(data=user_dict, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.validated_data, status=status.HTTP_200_OK)
            else:
                return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response('You need to provide user`s id', status=status.HTTP_400_BAD_REQUEST)


class DoctorAddSpecializationsView(RetrieveUpdateAPIView):
    queryset = DoctorsModel.objects.all()
    doctor_spec_queryset = DoctorsListOfSpecializations.objects.all()
    doctor_spec_serializer = SpecializationSerializer

    serializer_class = DoctorSerializer
    permission_classes = (IsAuthenticated,)

    """
        update:
            For this endpoint you have to provide a dict
            named 'specialization' with  specialization ids or
            list of ids to be set for a doctor 
    """

    def update(self, request, *args, **kwargs):

        user_id = kwargs.get('pk')
        spec = request.data.get('specialization')
        doctor_obj: DoctorsModel = get_object_or_404(self.get_queryset(), doctor_id=user_id)

        if spec:
            if isinstance(spec, list):
                for i in spec:
                    if doctor_obj.specialization.filter(pk=i):
                        return Response('Specialization was set already. Check doctor specializations',
                                        status=status.HTTP_400_BAD_REQUEST)
                    else:
                        try:
                            specialization = get_object_or_404(self.doctor_spec_queryset, pk=i)
                            doctor_obj.specialization.add(specialization)
                            doctor_obj.save()
                        except ValueError:
                            return Response(ValueError, status=status.HTTP_400_BAD_REQUEST)
                return Response('Doctors specializations was set', status=status.HTTP_200_OK)
            elif isinstance(spec, int):
                specialization = get_object_or_404(self.doctor_spec_queryset, pk=spec)
                doctor_obj.specialization.add(specialization)
                doctor_obj.save()
            else:
                return Response(ValueError, status=status.HTTP_400_BAD_REQUEST)

        return Response('Something went wrong', status=status.HTTP_200_OK)


class DoctorAddPatientsView(RetrieveUpdateAPIView):
    queryset = DoctorsModel.objects.all()
    serializer_class = DoctorSerializer
    patient_serializer = PatientsSerializer
    patient_queryset = PatientsModel.objects.all()
    permission_classes = (IsAuthenticated,)

    """
        update:
            For this endpoint you have to provide a dict
            named 'patients' with  patients ids or
            list of ids to be set for a doctor 
    """

    def update(self, request, *args, **kwargs):
        """

        :param request:
            :patch
                To make this view work you have to provide obj 'patients' type[INT\\LIST] with ids of patients
        :param args:
        :param kwargs:
        :return:
        """
        user_id = kwargs.get('pk')
        patients = request.data.get('patients')
        doctor_obj: DoctorsModel = get_object_or_404(self.get_queryset(), doctor_id=user_id)

        if patients:
            if isinstance(patients, list):
                for i in patients:
                    try:
                        patient = UserModel.objects.all().get(pk=i)
                        print(patient)
                        doctor_obj.patients.add(patient)
                        doctor_obj.save()
                    except ValueError:
                        return Response(ValueError, status=status.HTTP_400_BAD_REQUEST)
                return Response('Patient(`s) was added', status=status.HTTP_200_OK)
            # elif isinstance(patients, int):
            #     patient = get_object_or_404(UserModel.objects.all(), pk=spec)
            #     doctor_obj.patients.add(patient)
            #     doctor_obj.save()
        return Response('Something went wrong', status=status.HTTP_200_OK)
