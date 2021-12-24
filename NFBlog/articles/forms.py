from django import forms

from .models import Person


class PersonForm(forms.ModelForm):
    class Meta:
        model = Person
        fields = ['name', 'age', 'profile_picture', 'bio', 'is_special', 'teams']
