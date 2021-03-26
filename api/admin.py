from django.contrib import admin
from .models import Post, Question, Answers

admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Answers)
