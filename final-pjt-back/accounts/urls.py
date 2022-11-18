from django.urls import path
from . import views

urlpatterns = [
    # GET -> 사용자 디테일 
    path('profile/<username>/', views.profile),
    path('follow/<username>/', views.follow),

    # path('recommend/', views.recommend),
    # path('newsfeed/', views.newsfeed),
    path('wish_movies/', views.wish_movies),
    path('my_articles/', views.my_articles),
    path('other_articles/<username>/', views.other_articles),
]