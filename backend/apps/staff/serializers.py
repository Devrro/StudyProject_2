from rest_framework.serializers import ModelSerializer

from apps.staff.models import DoctorsModel, DoctorsListOfSpecializations


class SpecializationSerializer(ModelSerializer):
    class Meta:
        model = DoctorsListOfSpecializations
        fields = ('id', 'specialization')
        read_only_fields = ('id',)


class DoctorSerializer(ModelSerializer):
    class Meta:
        model = DoctorsModel
        fields = (
            'id',
            'doctor',
            'specialization',
            'patients',
        )
        read_only_fields = ('id', 'doctor')

