from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Post, Question, Faq, News, Sponsored, Contact
from rest_framework import serializers
from rest_framework.authtoken.models import Token


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'short_descriptions',
                  'descriptions', 'created_at', 'author', 'image', 'id')


class PostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"

class FaqSerializer(serializers.ModelSerializer):
      class Meta:
        model = Faq
        fields = "__all__"

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"

class SponsoredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsored
        fields = "__all__"

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['id', 'username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    