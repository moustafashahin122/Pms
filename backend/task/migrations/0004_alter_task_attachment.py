# Generated by Django 4.2.2 on 2023-06-19 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_rename_user_id_information_request_receiver_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='attachment',
            field=models.FileField(blank=True, null=True, upload_to='files/'),
        ),
    ]
