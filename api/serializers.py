from rest_framework import serializers
from .models import Post, Question, Faq, News, Sponsored


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