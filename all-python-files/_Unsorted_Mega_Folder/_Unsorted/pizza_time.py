# GETTERS AND SETTERS

"""
Create a class named "Pizza".

On the class, create:

A constructor that takes one value, topping

A getter property named "topping" that returns the value topping

A setter property named "topping" that will only set the value of topping. If the provided is not a string don't change the value.

Test data is below.
"""

# WRITE YOUR CODE HERE


# Test data
my_fav = Pizza('pepperoni')
print(my_fav.topping)  # > "pepperoni"

my_fav.topping = 2
print(my_fav.topping)  # > "pepperoni"

my_fav.topping = 'corn'
print(my_fav.topping)  # > "corn"
