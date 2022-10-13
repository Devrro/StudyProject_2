from django.db import models

from django.contrib.auth import get_user_model
from typing import Type

from ..patients.models import PatientsModel
from ..users.models import UserModel as UserModelTyping
from .constants.doctors_spec_choices import DOCTOR_SPEC_CHOICES

UserModel: Type[UserModelTyping] = get_user_model()


# Create your models here.


class DoctorsSpecialization(models.Model):
    class Meta:
        db_table = 'doctors_spec'

    specialization = models.SmallIntegerField(choices=DOCTOR_SPEC_CHOICES, blank=True)


class DoctorsModel(models.Model):
    class Meta:
        db_table = 'doctors'

    doctor = models.OneToOneField(UserModel, related_name='doctor', on_delete=models.CASCADE)
    specialization = models.ManyToManyField(DoctorsSpecialization)
    patients = models.ManyToManyField(PatientsModel, related_name='patients')
