# Generated by Django 4.1.3 on 2022-11-02 12:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('projectsAdmin', '0003_alter_project_create_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='create_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date-created'),
        ),
        migrations.AlterField(
            model_name='projectgroup',
            name='create_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date-created'),
        ),
    ]
