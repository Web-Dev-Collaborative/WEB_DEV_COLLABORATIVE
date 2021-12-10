from django.shortcuts import render
from posts.models import Post
from django.views import generic

class PostDetail(generic.DetailView):
    model = Post
    template_name = 'posts/post_detail.html'