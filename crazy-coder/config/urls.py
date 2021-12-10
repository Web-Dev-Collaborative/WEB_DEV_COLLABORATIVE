"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from home.views import subscribe


from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from ckeditor_uploader import views as ckeditor_views

###for error 404 ##################
from django.conf.urls import handler404, handler500





################admin setting####################
admin.site.site_header = "crazy coder admin"
admin.site.site_title = "crazy coder admin"
# admin.site.site_url = "http://itsvinayak.pythonanywhere.com/"
admin.site.index_title = "Welcome vinayak"
admin.empty_value_display = "**Empty**"

################################################





urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', include("posts.urls")),
    path('subscribe/', subscribe, name="subscribe"),
    path('', include("home.urls")),
    re_path(r'^ckeditor/upload/', login_required(ckeditor_views.upload), name='ckeditor_upload'),
    re_path(r'^ckeditor/browse/', never_cache(login_required(ckeditor_views.browse)), name='ckeditor_browse'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

