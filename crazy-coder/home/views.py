from django.shortcuts import render, redirect
from posts.models import Post
from django.contrib import messages
from home.forms import SubscribeForm
from django.views import generic


class home(generic.ListView):
    paginate_by = 5
    queryset = Post.objects.filter(status=1).order_by("-created_on")
    template_name = "posts/index.html"


def subscribe(request):
  form = SubscribeForm(request.POST)
  if form.is_valid():
    form.save()
    messages.info(request, "thanks for subscribing !")
  return redirect("index")