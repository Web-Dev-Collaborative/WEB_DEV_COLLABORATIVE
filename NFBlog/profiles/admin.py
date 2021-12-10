from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from .models import Profile, CompanyProfile, IndividualProfile


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False


class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)


admin.site.register(Profile)
admin.site.register(CompanyProfile)
admin.site.register(IndividualProfile)
admin.site.unregister(User)
admin.site.register(User, UserAdmin)
