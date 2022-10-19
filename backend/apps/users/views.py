from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from typing import Type
from django.contrib.auth import get_user_model
from apps.users.serializers import UserSerializer
from .models import UserModel as UserModelTyping
from rest_framework.response import Response
from rest_framework import status

from ..patients.models import PatientsModel
from ..patients.serializers import PatientsSerializer
from ..staff.models import DoctorsModel
from ..staff.serializers import DoctorSerializer

UserModel: Type[UserModelTyping] = get_user_model()


class UserCreateView(CreateAPIView):

    """
        Create user view
        post:
            For user signup you have to provide full credentials
            Additionally you can set two keys:
                is_patient or is_doctor
            When you do, user automatically will be registered as a patient or\and as a doctor
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
