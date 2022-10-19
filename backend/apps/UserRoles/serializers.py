from rest_framework.serializers import ModelSerializer

from apps.UserRoles.models import UserRoles


class RoleSerializer(ModelSerializer):
    class Meta:
        model = UserRoles
        fields = ('id',)

