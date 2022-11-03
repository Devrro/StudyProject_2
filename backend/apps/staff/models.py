from typing import Type

from django.contrib.auth import get_user_model
from django.db import models

from ..patients.models import PatientsModel
from ..users.models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


class DoctorsListOfSpecializations(models.Model):
    class Meta:
        db_table = 'doctors_spec_list'

    specialization = models.CharField(max_length=120, blank=False)


class DoctorsModel(models.Model):
    class Meta:
        db_table = 'doctors'

    doctor = models.OneToOneField(
        UserModel,
        primary_key=True,
        blank=False,
        null=False,
        related_name='doctor',
        on_delete=models.CASCADE,
    )
    specialization = models.ManyToManyField(
        DoctorsListOfSpecializations,
        blank=True
    )
    patients = models.ManyToManyField(
        PatientsModel,
        related_name='patients',
        blank=True
    )
