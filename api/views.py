from django.shortcuts import render
from rest_framework import generics,  viewsets
from .serializers import PostSerializer, PostDetailSerializer, QuestionSerializer, FaqSerializer, NewsSerializer, SponsoredSerializer
from .models import Post, Question, Faq, News, Sponsored


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

class NewsListView(generics.ListAPIView):
    queryset=News.objects.all()
    serializer_class = NewsSerializer


class SponsoredListView(generics.ListAPIView):
    queryset=Sponsored.objects.all()
    serializer_class = SponsoredSerializer