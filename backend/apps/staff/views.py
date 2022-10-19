from rest_framework.generics import ListAPIView, CreateAPIView, get_object_or_404, RetrieveUpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import status

from typing import Type

from .models import DoctorsModel, DoctorsListOfSpecializations
from .serializers import DoctorSerializer, SpecializationSerializer
from ..patients.models import PatientsModel
from ..patients.serializers import PatientsSerializer
from ..users.models import UserModel as UserModelTyping
from ..users.serializers import UserSerializer

UserModel: Type[UserModelTyping] = get_user_model()


class DoctorListView(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = (AllowAny,)
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        qs = self.queryset.filter(doctor__isnull=False)
        return qs


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
