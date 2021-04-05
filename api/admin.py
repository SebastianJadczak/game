from django.contrib import admin
from .models import Post, Question, Faq

admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Faq)
