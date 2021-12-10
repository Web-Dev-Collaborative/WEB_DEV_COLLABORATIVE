from django.contrib import admin
from home.models import Subscribe
from django.core.mail import send_mail
from config.settings import EMAIL_HOST_USER
from home.forms import SendMailForm
from django.http import HttpResponseRedirect
from django.shortcuts import render

@admin.register(Subscribe)
class sendEmail(admin.ModelAdmin):
    list_display = ('email','time')
    actions = ['send_email',]
    def send_email(self, request, queryset):
        if "apply" in request.POST:
            form = SendMailForm(request.POST)
            if form.is_valid():
                content = form.cleaned_data["content_field"]
                send_mail(
                    "hey, vinayak here",
                    content,
                    EMAIL_HOST_USER,
                    [i for i in queryset],
                    fail_silently=False,
                )
                self.message_user(request, "message send")
                return HttpResponseRedirect(request.get_full_path())
        else:
            form = SendMailForm()

        return render(
            request,
            "admin/send_admin_email.html",
            {
                "items": queryset.order_by("pk"),
                "form": form,
            },
        )
        send_email.short_description = "send email users"
