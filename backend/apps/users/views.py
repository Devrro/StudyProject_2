from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import AllowAny

from typing import Type
from django.contrib.auth import get_user_model

from apps.users.serializers import UserSerializer
from .models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


class UserListCreateView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset.filter()