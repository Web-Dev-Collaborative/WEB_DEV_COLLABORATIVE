from django import forms
from home.models import Subscribe
from ckeditor.widgets import CKEditorWidget

class SubscribeForm(forms.ModelForm):
  class Meta:
    model = Subscribe
    fields = ('email',)



class SendMailForm(forms.Form):
    content_field =forms.CharField(widget=CKEditorWidget())