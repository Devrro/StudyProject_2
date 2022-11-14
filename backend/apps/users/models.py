from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from ..UserRoles.models import UserRoles
from .managers import UserManager
from .services import upload_to


class UserModel(AbstractBaseUser, PermissionsMixin):
    class Meta:
        db_table = 'auth_users'

    email = models.EmailField(unique=True, )
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    user_role = models.ManyToManyField(UserRoles, related_name='user_roles')

    USERNAME_FIELD = 'email'
    objects = UserManager()


class ProfileModel(models.Model):
    class Meta:
        db_table = 'profile'

    first_name = models.CharField(max_length=30)
    second_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    age = models.IntegerField(validators=[MaxValueValidator(102), MinValueValidator(0)])
    phone_number = models.CharField(max_length=20, blank=True, null=False)
    avatar = models.ImageField(upload_to=upload_to, blank=True,null=False)
    about_user = models.TextField(blank=True,null=False,default='')
    user = models.OneToOneField(UserModel, on_delete=models.CASCADE, related_name='profile')
