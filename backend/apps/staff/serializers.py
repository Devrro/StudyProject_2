from typing import Type

from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer, SerializerMethodField

from ..users.models import UserModel as UserModelTyping
from ..users.serializers import UserSerializer
from .models import DoctorsListOfSpecializations, DoctorsModel

UserModel: Type[UserModelTyping] = get_user_model()


class SpecializationSerializer(ModelSerializer):
    class Meta:
        model = DoctorsListOfSpecializations
        fields = ('id', 'specialization')
        read_only_fields = ('id',)


class DoctorSerializer(ModelSerializer):
    """
    This serializer is user to edit doctors` info
    """

    class Meta:
        model = DoctorsModel
        fields = (
            'id',
            'doctor',
            'specialization',
            'patients',
        )
        read_only_fields = ('doctor', 'id')


class DoctorPatientsSerializer(ModelSerializer):

    patients = UserSerializer(many=True,read_only=True)
    """
    This serializer provides you access to doctors` patients
    """

    class Meta:
        model = DoctorsModel
        fields = (
            'patients',
        )
        read_only_fields = ('patients',)


class DoctorInfoSerializer(ModelSerializer):
    """
    This serializer works only for retrieving data about doctor from server
    """
    doctor = UserSerializer(read_only=True)
    specialization = SerializerMethodField()
    class Meta:
        model = DoctorsModel
        fields = (
            'doctor',
            'specialization',
        )

    def get_specialization(self, obj: DoctorsModel):
        list_of_specs = []
        for i in obj.specialization.all():
            spec = SpecializationSerializer(instance=i)
            list_of_specs.append(spec.data.get('specialization'))
        return list_of_specs
