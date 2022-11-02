import uuid
from random import randint

from django.core.management import BaseCommand

from django.contrib.auth import get_user_model

from apps.staff.models import DoctorsModel
from apps.users.models import UserModel as UserModelTyping, ProfileModel
from django.utils.crypto import get_random_string
from typing import Type

from apps.users.serializers import UserSerializer
from core.enums.users_constants import male_names_enum, female_names_enum, second_names_enum

UserModel: Type[UserModelTyping] = get_user_model()


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('total', type=int, help='Total amount of users to create')

        # Optional argument
        parser.add_argument('-p', '--prefix', type=str, help='Define a username prefix')
        # Optional argument
        parser.add_argument('-dc', '-doctor', action='store_true', help='Define if user is a doctor')

    def handle(self, *args, **options):
        total = options.get('total')
        prefix = options.get('prefix')
        doctor = options.get('doctor')
        patient = not options.get('doctor')
        if not doctor:
            doctor = False

        for i in range(total):
            if prefix:
                email = prefix + str(uuid.uuid4()) + '@gmail.com'
            else:
                email = str(str(uuid.uuid4()).split('-')[0]) + '@gmail.com'
            password = '111111'

            data = {
                'email': email,
                'password': password,
                'is_doctor': doctor,
                'is_patient': patient,
                'first_name': get_random_string(length=5),
                'second_name': get_random_string(length=5),
                'last_name': get_random_string(length=8),
            }
            if not UserModel.objects.filter(email=email):
                user = UserModel.objects.create_user(email=email, password=password)
                profile = ProfileModel.objects.create(
                    user=user,
                    first_name=data['first_name'],
                    second_name=data['second_name'],
                    last_name=data['last_name'],
                    age=randint(18, 70)
                )
                if doctor:
                    doc = DoctorsModel.objects.create(doctor_id=user.id)
                if user:
                    self.stdout.write(self.style.SUCCESS(UserSerializer(instance=user).data))