from django.urls import path, include
from .views import PostView, PostDetailView, QuestionView, AnswerView
from rest_framework import routers

urlpatterns = [
    path('post', PostView.as_view()),
    path('post/<int:pk>', PostDetailView.as_view(), name='post_detail'),
    path('question/<int:pk>', QuestionView.as_view(), name='question'),
    path('answer/<int:pk>', AnswerView.as_view(), name='answer')
]
