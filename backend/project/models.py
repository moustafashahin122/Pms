from django.db import models
from workspace.models import Workspace
# Create your models here.
class Project(models.Model):
    name=models.CharField(max_length=50)
    description=models.CharField(max_length=250)
    start_date=models.DateTimeField()
    end_date=models.DateTimeField()
    workspace_id = models.ForeignKey('workspace.Workspace', on_delete=models.CASCADE)
    def __str__(self):
        return self.name