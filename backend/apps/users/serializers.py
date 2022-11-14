from typing import Type

from django.contrib.auth import get_user_model
from django.db.transaction import atomic

from rest_framework.serializers import BooleanField, ModelSerializer, ValidationError

from apps.patients.models import PatientsModel
from apps.staff.models import DoctorsModel
from apps.UserRoles.models import UserRoles
from apps.UserRoles.serializers import RoleSerializer
from apps.users.models import ProfileModel

UserModel = get_user_model()


class AvatarSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        fields = ('avatar',)


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ('user', 'id')


class UserRoleSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('user_role',)


class UserSerializer(ModelSerializer):
    profile: Type[ProfileSerializer] = ProfileSerializer()
    is_patient = BooleanField(required=False, write_only=True)
    is_doctor = BooleanField(required=False, write_only=True)
    user_role = RoleSerializer(many=True, read_only=True)

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
            'user_role',
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
            'user_role': {'required': False}
        }

    def validate(self, attrs):
        if 'is_patient' not in attrs and 'is_doctor' not in attrs:
            raise ValidationError('You must set at least one field from:"is_doctor","is_patient"')
        return attrs

    @atomic
    def create(self, validated_data):
        profile = validated_data.pop('profile')
        is_patient = validated_data.pop('is_patient', False)
        is_doctor = validated_data.pop('is_doctor', False)
        if not is_patient and not is_doctor:
            raise ValidationError(detail='User must be a patient or a doctor!')
        user: UserModel = UserModel.objects.create_user(**validated_data)
        if is_patient:
            PatientsModel.objects.create(patient=user)
            role = UserRoles.objects.get(pk=2)
            user.user_role.add(role)
        if is_doctor:
            DoctorsModel.objects.create(doctor=user)
            role = UserRoles.objects.get(pk=1)
            user.user_role.add(role)
        ProfileModel.objects.create(**profile, user=user)
        return user
