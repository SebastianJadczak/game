from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200, db_index=True)
    short_descriptions = models.TextField()
    descriptions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='media/img_point/%Y/%m%d')
    author = models.CharField(max_length=30) 

    def __str__(self):
        return self.title


class Question(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=150, db_index=True)
    good_answer = models.CharField(max_length=150, db_index=True)
    first_answer = models.CharField(max_length=150, db_index=True)
    second_answer = models.CharField(max_length=150, db_index=True)
    third_answer = models.CharField(max_length=150, db_index=True)
    fourth_answer = models.CharField(max_length=150, db_index=True)

    def __str__(self):
        return self.question

class Faq(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=250, db_index=True)
    answer = models.TextField()

    def __str__(self):
        return self.question

class News(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    user = models.CharField(max_length=150, db_index=True)

    class Meta:
        verbose_name_plural = "News"

class Sponsored(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField( max_length=30)
    www = models.CharField( max_length=30)
    image = models.ImageField(upload_to='media/sponsored/%Y/%m%d')

class Contact(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,related_name='owner', on_delete=models.CASCADE)
    contacts_list = models.ManyToManyField(User, related_name='contacts')