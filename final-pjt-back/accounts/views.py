from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import User
from .serializers import ProfileSerializer
from movies.serializers import MovieListSerializer, ReviewSerializer
from movies.models import Review


# Create your views here.
@api_view(['GET'])
def profile(request, username):
    user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(user)
    return Response(serializer.data)

    
@api_view(['POST'])
def follow(request, username):
    me = request.user
    you = get_object_or_404(User, username=username)
    
    if you.followers.filter(pk=me.pk).exists():
        you.followers.remove(me)
    else:
        you.followers.add(me)
    return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
def newsfeed(request):
    me = request.user
    followings = me.followings.all()
    reviews = Review.objects.filter(user__in=followings).order_by('-updated_at')
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def wish_movies(request):
    me = request.user
    wish_movies = me.wish_movies.all()
    serializer = MovieListSerializer(wish_movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def my_reviews(request):
    me = request.user
    my_reviews = me.reviews.order_by('-updated_at')
    serializer = ReviewSerializer(my_reviews, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def other_reviews(request, username):
    you = get_object_or_404(User, username=username)
    your_reviews = Review.objects.filter(user=you).order_by('-updated_at')
    serializer = ReviewSerializer(your_reviews, many=True)
    return Response(serializer.data)