from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200, db_index=True)
    short_descriptions = models.TextField()
    descriptions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='media/img_point/%Y/%m%d')
    author = models.CharField(max_length=30)

    def __str__(self):
        return self.title
