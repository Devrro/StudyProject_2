# Generated by Django 4.1.2 on 2022-10-13 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserRoles',
            fields=[
                ('patients', models.SmallIntegerField(choices=[(1, 'doctor'), (2, 'patient'), (3, 'main_doctor')], primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'user_roles',
            },
        ),
    ]
