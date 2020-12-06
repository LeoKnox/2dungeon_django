# Generated by Django 3.1.4 on 2020-12-06 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=75, verbose_name='Name')),
                ('description', models.CharField(max_length=240)),
                ('width', models.IntegerField()),
                ('height', models.IntegerField()),
                ('floor', models.CharField(max_length=5)),
            ],
        ),
    ]
