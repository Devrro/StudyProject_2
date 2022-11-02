from typing import Type

from django.contrib.auth import get_user_model
from django.db import models

from ..users.models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


# Create your models here.

class PatientsModel(models.Model):
    class Meta:
        db_table = 'patients'

    patient = models.OneToOneField(
        UserModel,
        primary_key=True,
        on_delete=models.CASCADE,
    )
