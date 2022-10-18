from django.db import models

from .constants.roles_choices import ROLE_CHOICES

# Create your models here.

class UserRoles(models.Model):
    class Meta:
        db_table = 'user_roles'

    patients = models.SmallIntegerField(choices=ROLE_CHOICES, primary_key=True)

