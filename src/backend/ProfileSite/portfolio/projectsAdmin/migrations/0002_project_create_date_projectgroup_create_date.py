# Generated by Django 4.1.3 on 2022-11-02 12:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectsAdmin', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 2, 12, 44, 48, 809001, tzinfo=datetime.timezone.utc), verbose_name='date-created'),
        ),
        migrations.AddField(
            model_name='projectgroup',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 11, 2, 12, 44, 48, 780201, tzinfo=datetime.timezone.utc), verbose_name='date-created'),
        ),
    ]
