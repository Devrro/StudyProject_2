from django.db import models

from django.contrib.auth import get_user_model
from typing import Type

from ..users.models import UserModel as UserModelTyping

UserModel: Type[UserModelTyping] = get_user_model()


# Create your models here.

class PatientsModel(models.Model):
    class Meta:
        db_table = 'patients'

    patient = models.OneToOneField(UserModel, related_name='patient', on_delete=models.CASCADE)
