from django.shortcuts import render
from rest_framework import generics,  viewsets, request
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import PostSerializer, PostDetailSerializer, QuestionSerializer, FaqSerializer, NewsSerializer, SponsoredSerializer, ContactsSerializer, UserSerializer
from .models import Post, Question, Faq, News, Sponsored,Contact

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

class ContactsListView(viewsets.ReadOnlyModelViewSet):
    queryset=Contact.objects.all()
    serializer_class = ContactsSerializer
    # authentication_classes = [TokenAuthentication,]
    # permission_classes =[IsAuthenticated,]

    def retrieve(self, request, *args, **kwargs):
    #     params = kwargs
        # contacts = Contact.objects.filter(user=params['pk'])
        contacts = Contact.objects.all()
        serializer = ContactsSerializer(contacts, many=True)
        return Response(serializer.data)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['post',]
    
