from django.db import models

from apps.doctors.models import DoctorsModel


# Create your models here.

class ClinicModel(models.Model):
    class Meta:
        db_table = 'hospital'

    hospital_name = models.CharField(max_length=210)
    address = models.CharField(
        max_length=255,
        blank=False,
        null=False,)
    doctor_list = models.ManyToManyField(DoctorsModel)
