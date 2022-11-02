from django.utils import timezone 
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class ProjectGroup(models.Model):
    name = models.CharField(max_length=200)
    project_count = models.IntegerField(default=0)
    project_keys = models.CharField(max_length=_MAX_LENGTH)
    create_date = models.DateTimeField('date-created', default=timezone.now)

    def __str__(self):
        return self.name



class Project(models.Model):
    group = models.ForeignKey(ProjectGroup, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    path = models.CharField(max_length=200)
    preview_link = models.CharField(max_length=500)
    description_link = models.CharField(max_length=500)
    code_link = models.CharField(max_length=500)
    create_date = models.DateTimeField('date-created', default=timezone.now)

    
    def __str__(self):
        return self.name

