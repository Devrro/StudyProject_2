# Generated by Django 4.1.2 on 2022-10-24 11:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0003_remove_patientsmodel_patient_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patientsmodel',
            old_name='patient_id',
            new_name='patient',
        ),
    ]
