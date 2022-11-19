from rest_framework import serializers
from .models import Movie

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('title', 'poster_path', 'overview','vote_avg', 'id', 'backdrop_path')


# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = '__all__'
#         read_only_fields = ('movie', 'article', 'user', 'like_users','id','username',)


# class ArticleSerializer(serializers.ModelSerializer):
#     comments = CommentSerializer(many=True, read_only=True)
#     class Meta:
#         model = Article
#         fields = '__all__'
#         read_only_fields = ('movie', 'comments', 'like_users', 'user', 'username','movie_title')


class MovieDetailSerializer(serializers.ModelSerializer):
    # articles = ArticleSerializer(many=True, read_only=True)
    class Meta:
        model = Movie
        fields = '__all__'