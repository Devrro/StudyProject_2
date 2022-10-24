from typing import Type

from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView, RetrieveUpdateAPIView, get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from apps.users.serializers import UserRoleSerializer, UserSerializer

from ..patients.models import PatientsModel
from ..patients.serializers import PatientsSerializer
from ..staff.models import DoctorsModel
from ..staff.serializers import DoctorSerializer
from ..UserRoles.models import UserRoles
from .models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


class UserCreateView(CreateAPIView):
    """
        Create user view
        post:
            For user signup you have to provide full credentials
            When you do, user automatically will be registered as a patient or\and as a doctor
            Additionally you can set "is_doctor" field to be true, if you want to register user as a doctor
            User is always registered as a patient. To change that behavior you must set field "is_patient" to false.
    """

    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class UserListView(ListAPIView):
    """Retrieve users view"""

    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        qs = self.queryset
        return qs


class UserListUpdateRolesView(RetrieveUpdateAPIView):
    """
    Retrieve user`s roles by id view
    """

    queryset = UserModel.objects.all()
    serializer_class = UserRoleSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        pk = self.kwargs.get('pk')
        qs = self.queryset.filter(id=pk)
        return qs

    def get(self, request, *args, **kwargs):
        qs = self.get_queryset()
        # print(qs.query)
        serializer = self.serializer_class(qs, many=True)
        if serializer:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        qs = self.queryset()
        user: UserModel = self.get_object()
        user_role = self.kwargs.get('user_role')
        role_query = UserRoles.objects.all()

        if isinstance(user_role, list):
            for i in list:
                obj = get_object_or_404(role_query, pk=i)
                user.user_role.add(obj)
                user.save()
            return Response('Roles were added to user', status=status.HTTP_200_OK)

        if isinstance(user_role, int):
            obj_role = get_object_or_404(role_query, pk=user_role)
            user.user_role.add(obj_role)
            user.save()
            return Response(obj_role, status=status.HTTP_200_OK)


class UserListSelfView(ListAPIView):
    """
    Retrieve self user by email.
    This view is used mostly while logging to obtain user`s account
    """

    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        qs = self.queryset.filter(email=self.request.user)
        return qs


class UserListByIdView(ListAPIView):
    """
    This view allows you to get users by their ID`s
    """

    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset.filter(id=self.kwargs.get('pk'))
        return qs

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
