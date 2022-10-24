from django.db import models

from apps.clinic.models import ClinicModel
from apps.patients.models import PatientsModel
from apps.staff.models import DoctorsModel

# Create your models here.


class AppointmentModel(models.Model):
    class Meta:
        db_table = 'appointment'

    patient = models.ForeignKey(PatientsModel, on_delete=models.DO_NOTHING)
    doctor = models.ForeignKey(DoctorsModel, on_delete=models.DO_NOTHING)
    appointment_time = models.SmallIntegerField(choices=((1, '9:30'), (2, '10:30')))
    appointment_dat = models.DateField(choices=((1, '9:30'), (2, '10:30')))
    clinic = models.ForeignKey(ClinicModel, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
