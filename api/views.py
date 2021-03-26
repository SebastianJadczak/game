from django.shortcuts import render
from rest_framework import generics,  viewsets
from .serializers import PostSerializer, PostDetailSerializer, QuestionSerializer
from .models import Post, Question


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer


class QuestionView(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
