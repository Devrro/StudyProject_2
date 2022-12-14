# Generated by Django 4.1.2 on 2022-10-13 13:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('patients', '0002_initial'),
        ('staff', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctorsmodel',
            name='doctor',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='doctor', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='doctorsmodel',
            name='patients',
            field=models.ManyToManyField(related_name='patients', to='patients.patientsmodel'),
        ),
        migrations.AddField(
            model_name='doctorsmodel',
            name='specialization',
            field=models.ManyToManyField(to='staff.doctorsspecialization'),
        ),
    ]
