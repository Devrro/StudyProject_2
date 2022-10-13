from rest_framework.generics import ListCreateAPIView, ListAPIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.shortcuts import get_object_or_404
from typing import Type
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from apps.users.serializers import UserSerializer
from .models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


class UserListCreateView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset
        return qs

class UserListView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        qs = self.queryset
        return qs


class UserListSelfView(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):

        qs = self.queryset.filter(email=self.request.user)
        return qs


class UserListByIdView(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset.filter(id=self.kwargs.get('pk'))
        return qs

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
