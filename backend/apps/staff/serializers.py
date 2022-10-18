from rest_framework.serializers import ModelSerializer

from apps.staff.models import DoctorsModel


class DoctorSerializer(ModelSerializer):
    class Meta:
        model = DoctorsModel
        fields = (
            'id',
            'doctor',
            'specialization',
            'patients',
        )

