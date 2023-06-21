from django.db import models
from accounts.models import UserAccount
# Create your models here.
class Workspace(models.Model):
    name=models.CharField(max_length=50)
    description=models.CharField(max_length=250)
    image=models.ImageField(upload_to='images/')
    owner_id = models.ForeignKey('accounts.UserAccount', on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class WorkspaceMember(models.Model):
    user_roles = (
        ('l', 'Leader'),
        ('d', 'Developer'),
        ('t', 'Tester'),
    )
    Workspace_id = models.ForeignKey('Workspace', on_delete=models.CASCADE)
    user_id = models.ForeignKey('accounts.UserAccount', on_delete=models.CASCADE)
    role=models.CharField(max_length=1,choices=user_roles)