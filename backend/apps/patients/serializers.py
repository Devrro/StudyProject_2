from rest_framework.serializers import ModelSerializer

from apps.patients.models import PatientsModel


class PatientsSerializer(ModelSerializer):
    class Meta:
        model = PatientsModel
        fields = ('id','patient',)
        read_only_fields = ('id',)
