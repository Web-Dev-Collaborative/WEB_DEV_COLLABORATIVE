from django import forms

from .models import IndividualProfile, CompanyProfile


class IndividualProfileForm(forms.ModelForm):
    class Meta:
        model = IndividualProfile
        fields = ['civil_id', 'gender', 'website']


class CompanyProfileForm(forms.ModelForm):
    class Meta:
        model = CompanyProfile
        fields = ['location_url', 'website']
