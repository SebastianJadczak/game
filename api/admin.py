from django.contrib import admin
from .models import Post, Question, Faq, News, Sponsored

admin.site.register(Post)
admin.site.register(Question)
admin.site.register(Faq)
admin.site.register(News)
admin.site.register(Sponsored)
