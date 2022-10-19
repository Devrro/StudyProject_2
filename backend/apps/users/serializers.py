from typing import Type

from rest_framework.serializers import ModelSerializer, BooleanField
from rest_framework.serializers import ValidationError
from apps.patients.models import PatientsModel
from apps.staff.models import DoctorsModel
from apps.users.models import ProfileModel

from django.contrib.auth import get_user_model

UserModel = get_user_model()


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ('user', 'id')


class UserSerializer(ModelSerializer):
    profile: Type[ProfileSerializer] = ProfileSerializer()
    is_patient = BooleanField(required=False, write_only=True)
    is_doctor = BooleanField(required=False, write_only=True,)

    class Meta:
        model = UserModel
        fields = (
            'id',
            'email',
            'password',
            'is_patient',
            'is_doctor',
            'created_at',
            'updated_at',
            'last_login',
            'is_staff',
            'is_active',
            'is_superuser',
            'profile',
        )
        read_only_fields = (
            'id',
            'created_at',
            'updated_at',
            'is_staff',
            'is_active',
            'is_superuser',
            'profile',
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate_is_doctor(self,value):
        if not value or value is None:
            raise ValidationError('Field is a doctor must be set')
        return value
    def validate_is_patient(self,value):
        if not value or value is None:
            raise ValidationError('Field is a patient must be set')
        return value

    def validate(self, attrs):
        if 'is_patient' not in attrs and 'is_doctor' not in attrs:
            raise ValidationError('You must set at least one field from:"is_doctor","is_patient"')
        return attrs

    def create(self, validated_data):
        profile = validated_data.pop('profile')
        is_patient = validated_data.pop('is_patient',False)
        is_doctor = validated_data.pop('is_doctor',False)
        user = UserModel.objects.create_user(**validated_data)
        if is_patient:
            PatientsModel.objects.create(patient=user)
        if is_doctor:
            DoctorsModel.objects.create(doctor=user)
        ProfileModel.objects.create(**profile, user=user)
        return user
