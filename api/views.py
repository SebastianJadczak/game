from django.shortcuts import render
from rest_framework import generics,  viewsets
from .serializers import PostSerializer, PostDetailSerializer, QuestionSerializer, FaqSerializer
from .models import Post, Question, Faq


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer


class QuestionView(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class FaqView(generics.ListAPIView):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
