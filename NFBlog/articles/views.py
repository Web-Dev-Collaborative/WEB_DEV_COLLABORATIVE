from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.urls import reverse, reverse_lazy
from django.core.exceptions import PermissionDenied
from django.db.models import Q

from django.views.generic import (ListView,
                                  CreateView,
                                  DetailView,
                                  UpdateView,
                                  DeleteView)

from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        UserPassesTestMixin)

from .models import Person, Team
from .forms import PersonForm

from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def test(request):
    print("POST:\n")
    print(request.POST or "lol")
    print("\nGET:\n")
    print(request.GET)
    return render(request, 'test.html', {"post": request.POST, "get": request.GET})


class Home(ListView):
    context_object_name = 'people'
    template_name = 'home.html'
    queryset = Person.objects.all().filter(is_special=True)


class PeopleView(ListView):
    model = Person
    context_object_name = 'people'

    def get_queryset(self):
        people_list = super().get_queryset()
        query = self.request.GET.get('search')
        if query:
            people_list = people_list.filter(Q(name__icontains=query) | Q(bio__icontains=query)).distinct()
        return people_list


class PersonDetail(DetailView):
    model = Person

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        person = context.get('person')
        context['person_teams'] = person.teams.all()
        context['is_liked'] = self.request.user in person.liked_by.all()
        context['can_edit'] = self.request.user == person.creator
        return context


class AddPerson(LoginRequiredMixin, CreateView):
    model = Person
    form_class = PersonForm

    def form_valid(self, form):
        form.instance.creator = self.request.user
        return super().form_valid(form)


class UpdatePerson(UserPassesTestMixin, UpdateView):
    model = Person
    form_class = PersonForm
    raise_exception = True

    def test_func(self):
        return self.request.user == self.get_object().creator


class DeletePerson(UserPassesTestMixin, DeleteView):
    model = Person
    success_url = reverse_lazy('people')
    raise_exception = True

    def test_func(self):
        return self.request.user == self.get_object().creator


def like(request, person_slug):
    person = get_object_or_404(Person, slug=person_slug)
    if request.user not in person.liked_by.all():
        person.liked_by.add(request.user)
    else:
        person.liked_by.remove(request.user)
    return JsonResponse({'like_count': person.likes})


def team(request, team_slug):
    _team = get_object_or_404(Team, slug=team_slug)

    context = {}
    context["team"] = _team
    context["members"] = _team.members.all()
    return render(request,
                  "team.html",
                  context=context)
