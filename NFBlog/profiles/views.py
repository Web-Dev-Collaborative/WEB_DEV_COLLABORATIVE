from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect, get_object_or_404
from django.http import Http404
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .forms import IndividualProfileForm, CompanyProfileForm
from .models import Profile


def signup(request):
    form = UserCreationForm(request.POST)
    if form.is_valid():
        user = form.save()

        password = form.cleaned_data.get('password1')
        user = authenticate(username=user.username, password=password)
        login(request, user)

        profile_type = request.POST.get('type')
        return redirect('create_profile', profile_type=profile_type)
    else:
        return render(request, 'signup.html', {
            "form": form,
        })


def profiles(request):
    profiles = Profile.objects.all()
    return render(request, 'profiles.html', {'profiles': profiles})


def profile(request, username):
    user = get_object_or_404(User, username=username)
    context = {
        "current_user": request.user.username == username
    }
    if hasattr(user.profile, 'individualprofile'):
        context["profile"] = user.profile.individualprofile
    else:
        context["profile"] = user.profile.companyprofile
    return render(request, 'profile.html', context)


def create_profile(request, profile_type):
    if profile_type == 'individual':
        form = IndividualProfileForm(request.POST)
    elif profile_type == 'company':
        form = CompanyProfileForm(request.POST)
    else:
        raise Http404("what you do?")

    if form.is_valid():
        profile = form.save(commit=False)
        profile.user = request.user
        profile.save()
        return redirect('home')
    return render(request, 'create_profile.html', {"form": form})
