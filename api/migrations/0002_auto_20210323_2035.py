# Generated by Django 3.1.2 on 2021-03-23 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=200)),
                ('short_descriptions', models.TextField()),
                ('descriptions', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.CharField(max_length=30)),
            ],
        ),
        migrations.DeleteModel(
            name='Room',
        ),
    ]
