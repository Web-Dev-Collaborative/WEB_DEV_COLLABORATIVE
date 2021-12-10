from django.contrib import admin

from .models import Person, Team


class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'created_at')
    search_fields = ['name', 'age']


admin.site.register(Person, PersonAdmin)
admin.site.register(Team)
