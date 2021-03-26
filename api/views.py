from django.shortcuts import render
from rest_framework import generics,  viewsets
from .serializers import PostSerializer, PostDetailSerializer, QuestionSerializer, AnswerViewSerializer
from .models import Post, Question, Answers


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer


class QuestionView(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerView(generics.RetrieveAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswerViewSerializer
