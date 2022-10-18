from rest_framework.generics import  ListAPIView, CreateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from typing import Type
from django.contrib.auth import get_user_model
from apps.users.serializers import UserSerializer
from .models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


class UserCreateView(CreateAPIView):
    """Create user view"""

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
