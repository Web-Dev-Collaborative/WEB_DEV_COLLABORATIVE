"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

import django.contrib.auth.views as auth_views
import articles.views as article_views
import profiles.views as profile_views

urlpatterns = [
    path('', article_views.Home.as_view(), name="home"),
    path('test/', article_views.test, name="test"),
    path('people/', include('articles.urls')),
    path('teams/', include('articles.team_urls')),
    path('profiles/', include('profiles.urls')),
    path('signup/', profile_views.signup, name="signup"),
    path('login/', auth_views.login, {
        'template_name': 'login.html'
    }, name="login"),
    path('logout/', auth_views.logout, {
        'next_page': '/'
    }, name="logout"),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
