from django.db import models


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
