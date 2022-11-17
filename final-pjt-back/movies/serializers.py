from rest_framework import serializers
from .models import Movie, Article, Comment

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'poster_path', 'id',)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('movie', 'review', 'user', 'like_users','id','username',)


class ArticleSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ('movie', 'comments', 'like_users', 'user', 'username','movie_title')


class MovieDetailSerializer(serializers.ModelSerializer):
    reviews = ArticleSerializer(many=True, read_only=True)
    class Meta:
        model = Movie
        fields = '__all__'