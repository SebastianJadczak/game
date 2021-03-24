from django.shortcuts import render
from rest_framework import generics,  viewsets
from .serializers import PostSerializer, PostDetailSerializer
from .models import Post


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
