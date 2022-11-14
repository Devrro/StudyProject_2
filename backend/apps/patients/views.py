from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from apps.patients.serializers import PatientsSerializer
from apps.users.models import UserModel as UserModelTyping
from apps.users.serializers import UserSerializer

UserModel: UserModelTyping = get_user_model()


class ListAllPatientsView(ListAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (AllowAny,)

    def get_queryset(self):
        qs = self.queryset.filter(patientsmodel__isnull=False)
        return qs
