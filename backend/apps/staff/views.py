import rest_framework.pagination
from rest_framework.generics import ListAPIView, CreateAPIView, GenericAPIView, get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework.pagination import LimitOffsetPagination

from typing import Type

from .models import DoctorsModel
from .serializers import DoctorSerializer
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
                return Response(serializer.validated_data, status=200)
            else:
                return Response({'error': serializer.errors}, status=400)
        return Response('Can`t add user', status=402)
