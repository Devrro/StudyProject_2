from typing import Type

from rest_framework.serializers import ModelSerializer

from apps.users.models import ProfileModel

from django.contrib.auth import get_user_model

UserModel = get_user_model()


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = ProfileModel
        exclude = ('user',)


class UserSerializer(ModelSerializer):
    profile: Type[ProfileSerializer] = ProfileSerializer()

    class Meta:
        model = UserModel
        fields = '__all__'
        read_only_fields = (
            'id',
            'email',
            'created_at',
            'updated_at',
            'is_staff',
            'is_active',
            'is_superuser',
            'profile'
        )

    def create(self, validated_data):
        profile = validated_data.pop('profile')
        user = UserModel.objects.create_user(**validated_data)
        ProfileModel.objects.create(**profile, user=user)
        return user
