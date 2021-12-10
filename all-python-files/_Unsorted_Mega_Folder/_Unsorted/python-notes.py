# # Basics of Python
# # - single, double and triple quotes
# # - shortcut for code comment (Mac: command+/ or Windows: control+/)


# print('Hello, World')
# print("It's raining!")

# # - Use triple quotes when you have strings on multiple lines;
# print('''Welcome to Python
# have a great day''')

# # - Declare a variable
# a = 5
# print(a)

# # - Setting a value to None is useful for declaring variables you
# # don't yet have a value for
# b = None
# print(b)

# # - add, subtract, multiply => notice numeric types of results
# # -  division, powers

# # - Integer
# x = 25
# # - Floating
# y = 17.1
# # - Still a floating time
# z = 17.0
# print(x)
# print(y)

# print(x + y)   # - floating number
# print(x + z)    # - still floating number

# print(x // y)   # - Integer division, Rounds the number down
# print(x % y)   # - Will give you the remainder


# # - 'f' formats the sting, using int turns a floating number into an integer
# print(f'The result is {int(x // y)} remainder {int(x % y)}')
# # - 'prints The result is 1 remainder 7'

# # - '**' is the powers operator
# print(x ** 2)
# print(y ** 2)

# # Simple input and Formatted Printing
# # - Promt for input()
# # - Formatted printing 4 ways

# name = input("What is your name?\n")  # \n = linebreak
# print(name)

# print("Hi, " + name + ".")
# print("Hi, %s." % name)
# print("Hi, {0}.".format(name))
# print(f'Hi, {name}.')

# Duck Typing
# - len() - checks the length of a string (.length for javascript)
# - try ... except - your basic try catch in javascript

# string = "cat"
# print(len(string))  # - prints 3

# stringList = ["cat", "dog", "frog"]
# print(len(stringList))  # - prints 3

# a = 5
# try:
#     print(len(a))
# except:
#     print(f'{a} has no length')

# Arithmetic with Strings

# a = "a"
# b = "b"
# an = "an"

# print(b + an)  # prints 'ban'
# print(b + a*5)  # - prints 'baaaaa"
# print(b + an*2 + a)  # - prints 'banana'

# print("$1" + ",000"*3)  # - prints '$1,000,000,000'

# Assignment Operators in Python
# - Increment (no postfix/prefix)
# - Powers and Integer divison
# - Big numbers
# - Stopping a runaway process (ctrl+c)

# ***** Make sure to comment previous artithmetic to get proper result

# i = 2
# # i = i + 5
# # print(i)  # - prints '7'
# # i += 5
# # print(i)  # - prints '7'
# # i **= 2
# # print(i)  # - prints '4'

# # i //= 10
# # print(i)  # - prints '0'

# i *= 10**200
# print(i)  # - prints a reaaaaally long number lol
# print(float(i))


# Meaning of Truth in Python
# - numeric types equivalent, but not strings
# - conditionals (if, elif, else)
# - truth equivalence

# a = 1
# b = 1.0
# c = "1"

# print(a == b)   # - prints true
# print(a == c)   # - prints false
# print(b == c)   # - prints false


# - change the values in if statement to check the if
# if (a == c):
#     print("match")
# elif (a == b):
#     print("a matches b")
# else:
#     print("not a match")

# - change the value of a to check if its truthy or falsey
# a = []
# if (a):
#     print(f'{a} is true')
# else:
#     print(f'{a} is false')


# Identity vs. Equality
# - is vs. ==
# - working with literals
# - isinstance()

a = 1
b = 1.0
c = "1"

# print(a == b)  # - prints true
# print(a is b)  # - prints false

# print(c == "1")  # - prints true
# print(c is "1")  # - prints true

# print(b == 1)  # - prints true
# print(b is 1)  # - prints false

# print(b == 1 and isinstance(b, int))  # - prints false
# print(a == 1 and isinstance(a, int))  # - prints true

# b = int(b)  # - changes the the float number to an integer
# print(b)  # - prints '1'
# print(b == 1 and isinstance(b, int))  # - prints true

# print(a)  # - prints "1"
# print(float(a))  # - prints "1.0"
# print(str(a))  # - prints "1"

# print(str(a) == c)  # - prints true
# print(str(a) is c)  # - prints false


# Writing functions in Python

# def xor(left, right):
#     return left != right

# - Lambda function (one-line anonymous functions)
# - writting in javascript - xor = (left, right) => left != right
# xor = lambda left, right: left != right


# print(xor(True, True))  # - prints false
# print(xor(True, False))  # - prints true
# print(xor(False, True))  # - prints true
# print(xor(False, False))  # - prints false


# - Run line 195 to 206 to see results
# - setting "exp=1" is setting the default value for "exp"
# - Declare a function with def, name and arguments
# def print_powers_of(base, exp=1):
#     i = 1
#     while i <= exp:
#         print(base**i)
#         i += 1


# print_powers_of(2, 5)
# print_powers_of(3, 5)
# print_powers_of(10, 5)
# print_powers_of(15)

# - Setting the parameters no matter what the order
# print_powers_of(exp=6, base=7)


# Functions returning functions

# def greeting_maker(salutaion):
#     def greeting(name):
#         return f'{salutaion} {name}'
#     return greeting


# hello = greeting_maker("Hello")
# hiya = greeting_maker("Hiya")

# print(hello("Bill"))  # - prints 'Hello Bill'
# print(hello("Raja"))  # - prints 'Hello Raja'
# print(hello("Borat"))  # - prints 'Hello Borat'
# print(hello("Husaan"))  # - prints 'Hello Husaan'
