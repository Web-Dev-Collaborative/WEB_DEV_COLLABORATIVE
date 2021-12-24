from django.db import models
from django.contrib.auth.models import User

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_civil_id(civil_id):
    if len(str(civil_id)) != 12:
        raise ValidationError(
            _('%(civil_id)s is not twelve digits'),
            params={'civil_id': civil_id}
        )


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    website = models.URLField(blank=True)

    def __str__(self):
        return self.user.username


class IndividualProfile(Profile):

    GENDER_CHOICES = (
        ("M", "male"),
        ("F", "female")
    )

    civil_id = models.PositiveIntegerField(validators=[validate_civil_id])
    gender = models.CharField(blank=True, max_length=1, choices=GENDER_CHOICES)


class CompanyProfile(Profile):
    location_url = models.URLField()
