from django.contrib import admin
from .models import Movie, Article, Comment

# Register your models here.
admin.site.register(Movie)
admin.site.register(Article)
admin.site.register(Comment)