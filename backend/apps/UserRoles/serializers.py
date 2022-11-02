from rest_framework.serializers import CharField, IntegerField, ModelSerializer

from apps.UserRoles.models import UserRoles


class RoleSerializer(ModelSerializer):
    role = CharField(source='get_roles_display')
    code = IntegerField(source='roles')
    class Meta:
        model = UserRoles
        fields = ('role', 'code')
