from django import template

register = template.Library()


##############
# Custom Tags
##############
@register.inclusion_tag("person_card.html")
def person_card(person):
    return {"person": person}
