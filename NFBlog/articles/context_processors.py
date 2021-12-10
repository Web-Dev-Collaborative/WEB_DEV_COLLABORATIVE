from .models import Team


def teams(request):
    return {"teams": Team.objects.all()}
