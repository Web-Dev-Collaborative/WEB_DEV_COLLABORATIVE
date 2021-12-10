# Python Study Guide for a JavaScript Programmer 

A guide to commands in Python from what you know in JavaScript



---

### Python Study Guide for a JavaScript Programmer {#03e2 .graf .graf--h3 .graf--leading .graf--title name="03e2"}

![](https://cdn-images-1.medium.com/max/800/1*3V9VOfPk_hrFdbEAd3j-QQ.png)

### Applications of Tutorial & Cheat Sheet Respectivley (At Bottom Of Tutorial): {#5a5b .graf .graf--h3 .graf-after--figure name="5a5b"}

### Basics {#b0f3 .graf .graf--h3 .graf-after--h3 name="b0f3"}

- [**PEP8** : Python Enhancement Proposals, style-guide for
  Python.]{#f893}
- [`print`{.markup--code .markup--li-code} is the equivalent of
  `console.log`{.markup--code .markup--li-code}.]{#c0bf}

> 'print() == console.log()'

### `#` is used to make comments in your code. {#117c .graf .graf--h3 .graf-after--blockquote name="117c"}

```

def foo():
    """
    The foo function does many amazing things that you
    should not question. Just accept that it exists and
    use it with caution.
    """
    secretThing()
```

> _Python has a built in help function that let's you see a description
> of the source code without having to navigate to it... "-SickNasty ...
> Autor Unknown"_

---

### Numbers {#e708 .graf .graf--h3 .graf--leading name="e708"}

- [Python has three types of numbers:]{#4060}

1.  [**Integer**]{#8aef}
2.  [**Positive and Negative Counting Numbers.**]{#723f}

No Decimal Point

> Created by a literal non-decimal point number ... **or** ... with the
> `int()`{.markup--code .markup--blockquote-code} constructor.

```py
 {#7bd4 .graf .graf--pre .graf-after--blockquote name="7bd4"}
print(3) # => 3
print(int(19)) # => 19
print(int()) # => 0
```

**3. Complex Numbers**

> Consist of a real part and imaginary part.

#### Boolean is a subtype of integer in Python.🤷‍♂️ {#89c4 .graf .graf--h4 .graf-after--blockquote name="89c4"}

> If you came from a background in JavaScript and learned to accept the
> premise(s) of the following meme...

![](https://cdn-images-1.medium.com/max/800/0*eC4EvZcv6hhH88jX.png)

> Than I am sure you will find the means to suspend your disbelief.

```py
 {#ba74 .graf .graf--pre .graf-after--blockquote name="ba74"}
print(2.24) # => 2.24
print(2.) # => 2.0
print(float()) # => 0.0
print(27e-5) # => 0.00027
```

### KEEP IN MIND: {#2c13 .graf .graf--h3 .graf-after--pre name="2c13"}

> **The** `i`{.markup--code .markup--blockquote-code} **is switched to
> a** `j`{.markup--code .markup--blockquote-code} **in programming.**

[T]{.graf-dropCap}\*his is because the letter i is common place as the de
facto index for any and all enumerable entities so it just makes sense
not to compete for name-\***_space_** _when there's another 25 letters
that don't get used for every loop under the sun. My most medium
apologies to Leonhard Euler._

```py
 {#3750 .graf .graf--pre .graf-after--p name="3750"}
print(7j) # => 7j
print(5.1+7.7j)) # => 5.1+7.7j
print(complex(3, 5)) # => 3+5j
print(complex(17)) # => 17+0j
print(complex()) # => 0j
```

- [**Type Casting** : The process of converting one number to
  another.]{#2579}

```py
 {#7273 .graf .graf--pre .graf-after--li name="7273"}
# Using Float
print(17)               # => 17
print(float(17))        # => 17.0
```

```py
 {#7779 .graf .graf--pre .graf-after--pre name="7779"}
# Using Int
print(17.0)             # => 17.0
print(int(17.0))        # => 17
```

```py
 {#67f3 .graf .graf--pre .graf-after--pre name="67f3"}
# Using Str
print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

**The arithmetic operators are the same between JS and Python, with two
additions:**

- [*"\*\*" : Double asterisk for exponent.*]{#8cf4}
- [*"//" : Integer Division.*]{#03b4}
- [**There are no spaces between math operations in Python.**]{#2ce5}
- [**Integer Division gives the other part of the number from Module;
  it is a way to do round down numbers replacing**
  `Math.floor()`{.markup--code .markup--li-code} **in JS.**]{#1686}
- [**There are no** `++`{.markup--code .markup--li-code} **and**
  `--`{.markup--code .markup--li-code} **in Python, the only shorthand
  operators are:**]{#a6a3}

![](https://cdn-images-1.medium.com/max/600/0*Ez_1PZ93N4FfvkRr.png)

---

### Strings {#f25c .graf .graf--h3 .graf--leading name="f25c"}

es.]

- [You can escape strings like so
  `'Jodi asked, "What\'s up, Sam?"'`]{#225e}
- [Multiline strings use triple quotes.]{#9f74}

```

print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')
```

**Use the** `len()`{.markup--code .markup--p-code} **function to get the
length of a string.**

```py
 {#425a .graf .graf--pre .graf-after--p name="425a"}
print(len("Spaghetti")) # => 9
```

### **Python uses** `zero-based indexing` {#3f9c .graf .graf--h3 .graf-after--pre name="3f9c"}

#### Python allows negative indexing (thank god!) {#55b9 .graf .graf--h4 .graf-after--h3 name="55b9"}

```py
 {#7d56 .graf .graf--pre .graf-after--h4 name="7d56"}
print("Spaghetti"[-1]) # => i
```

```py
 {#f11f .graf .graf--pre .graf-after--pre name="f11f"}
print("Spaghetti"[-4]) # => e
```

- [Python let's you use ranges]{#7567}

You can think of this as roughly equivalent to the slice method called
on a JavaScript object or string... _(mind you that in JS ... strings
are wrapped in an object (under the hood)... upon which the string
methods are actually called. As a immutable privative type_ **\*by
textbook definition\*\***, a string literal could not hope to invoke most
of it's methods without violating the state it was bound to on
initialization if it were not for this bit of syntactic sugar.)\*

```py
 {#f1fb .graf .graf--pre .graf-after--p name="f1fb"}
print("Spaghetti"[1:4]) # => pag
print("Spaghetti"[4:-1]) # => hett
print("Spaghetti"[4:4]) # => (empty string)
```

- [The end range is exclusive just like `slice` in JS.]{#1366}

```py
 
# Shortcut to get from the beginning of a string to a certain index.
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett
```

```py

# Shortcut to get from a certain index to the end of a string.
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti
```py

- [The `index`{.markup--code .markup--li-code} string function is the
  equiv. of `indexOf()`{.markup--code .markup--li-code} in JS]{#c786}

```py
 {#2a43 .graf .graf--pre .graf-after--li name="2a43"}
print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6
```

- [The `count`{.markup--code .markup--li-code} function finds out how
  many times a substring appears in a string... pretty nifty for a
  hard coded feature of the language.]{#fbb6}

```py

print("Spaghetti".count("h"))    # => 1
print("Spaghetti".count("t"))    # => 2
print("Spaghetti".count("s"))    # => 0
print('''We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard, because that goal will
serve to organize and measure the best of our energies and skills, because that
challenge is one that we are willing to accept, one we are unwilling to
postpone, and one which we intend to win, and the others, too.
'''.count('the '))                # => 4
```

- [**You can use** `+`{.markup--code .markup--li-code} **to
  concatenate strings, just like in JS.**]{#7816}
- [**You can also use "\*" to repeat strings or multiply
  strings.**]{#ed0a}
- [**Use the** `format()`{.markup--code .markup--li-code} **function
  to use placeholders in a string to input values later on.**]{#f95c}

```
 {#dd9a .graf .graf--pre .graf-after--li name="dd9a"}
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

- [*Shorthand way to use format function is:\
  *`print(f'Your name is {first_name} {last_name}')`]{#445b}

#### Some useful string methods. {#8ff4 .graf .graf--h4 .graf-after--li name="8ff4"}

- [**Note that in JS** `join`{.markup--code .markup--li-code} **is
  used on an Array, in Python it is used on String.**]{#118c}

![](https://cdn-images-1.medium.com/max/800/0*eE3E5H0AoqkhqK1z.png)

- [There are also many handy testing methods.]{#e95e}

![](https://cdn-images-1.medium.com/max/800/0*Q0CMqFd4PozLDFPB.png)

="477c"}

---

### Variables and Expressions {#920e .graf .graf--h3 .graf--leading name="920e"}

- [**Duck-Typing** : Programming Style which avoids checking an
  do.]{#a255}
- [Duck Typing is the fundamental approach of Python.]{#6e70}
- [Assignment of a value automatically declares a variable.]{#5666}

```py
 {#302d .graf .graf--pre .graf-after--li name="302d"}
a = 7
b = 'Marbles'
print(a)         # => 7
print(b)         # => Marbles
```

- [***You can chain variable assignments to give multiple var names
  the same value.***]{#f6cf}

#### Use with caution as this is highly unreadable {#ab40 .graf .graf--h4 .graf-after--li name="ab40"}

```
 {#e46a .graf .graf--pre .graf-after--h4 name="e46a"}
count = max = min = 0
print(count)           # => 0
print(max)             # => 0
print(min)             # => 0
```

#### The value and type of a variable can be re-assigned at any time. {#c91a .graf .graf--h4 .graf-after--pre name="c91a"}

```py
 {#9b2f .graf .graf--pre .graf-after--h4 name="9b2f"}
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

- [`NaN`{.markup--code .markup--li-code} *does not exist in Python,
  but you can \'create\' it like so:\
  *`print(float("nan"))`{.markup--code .markup--li-code}]{#4605}
- [*Python replaces* `null`{.markup--code .markup--li-code} *with*
  `none`{.markup--code .markup--li-code}*.*]{#d150}
- [`none`{.markup--code .markup--li-code} ***is an object*** *and can
  be directly assigned to a variable.*]{#6fa7}

> Using none is a convenient way to check to see why an action may not
> be operating correctly in your program.



---

### Boolean Data Type {#6f4e .graf .graf--h3 .graf--leading name="6f4e"}

- [One of the biggest benefits of Python is that it reads more like
  English than JS does.]{#b843}

![](https://cdn-images-1.medium.com/max/800/0*HQpndNhm1Z_xSoHb.png)

```py
# Logical AND
print(True and True)    # => True
print(True and False)   # => False
print(False and False)  # => False
```

```py

# Logical OR
print(True or True)     # => True
print(True or False)    # => True
print(False or False)   # => False
```

```py
 
# Logical NOT
print(not True)             # => False
print(not False and True)   # => True
print(not True or False)    # => False
```

- [By default, Python considers an object to be true UNLESS it is one
  of the following:]{#18cc}
- [Constant `None`{.markup--code .markup--li-code} or
  `False`{.markup--code .markup--li-code}]{#6e0a}
- [Zero of any numeric type.]{#9552}
- [Empty Sequence or Collection.]{#e7ce}
- [`True`{.markup--code .markup--li-code} and `False` must be capitalized]{#11d6}



---

### Comparison Operators 

- [Python uses all the same equality operators as JS.]{#a4fa}
- [In Python, equality operators are processed from left to
  right.]
  order:]

1.  [**NOT**]
2.  [**AND**]
3.  [**OR**]

> Just like in JS, you can use `parentheses`{.markup--code
> .markup--blockquote-code} to change the inherent order of operations.

> **Short Circuit** : Stopping a program when a `true`{.markup--code
> .markup--blockquote-code} or `false`{.markup--code
> .markup--blockquote-code} has been reached.

![](https://cdn-images-1.medium.com/max/800/0*qHzGRLTOMTf30miT.png)



---

### Identity vs Equality {#4ed8 .graf .graf--h3 .graf--leading name="4ed8"}

```py

print (2 == '2')    # => False
print (2 is '2')    # => False
```

```py

print ("2" == '2')    # => True
print ("2" is '2')    # => True
```

```py

# There is a distinction between the number types.
print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

- [In the Python community it is better to use `is` and `is not`over
  `==' or `!=`]{#c5a5}
  `==` or `!=`]{#c5a5}



---

### If Statements 

```py

if name == 'Monica':
    print('Hi, Monica.')
```

```py
name="7e04"}
if name == 'Monica':
print('Hi, Monica.')
else:
print('Hello, stranger.')

```


```py


if name == 'Monica':
print('Hi, Monica.')
elif age < 12:
print('You are not Monica, kiddo.')
elif age > 2000:
print('Unlike you, Monica is not an undead, immortal vampire.')
elif age > 100:
print('You are not Monica, grannie.')

```


> Remember the order of `elif`
> statements matter.







------------------------------------------------------------------------



### While Statements 

```py


spam = 0
while spam < 5:
print('Hello, world.')
spam = spam + 1

```


-   [`Break` statement also exists in
    Python.]

```py


spam = 0
while True:
print('Hello, world.')
spam = spam + 1
if spam >= 5:
break

```


-   [As are `continue`{.markup--code .markup--li-code}
    statements]{#7a99}

```py

{#5a23 .graf .graf--pre .graf-after--li .graf--trailing name="5a23"}
spam = 0
while True:
print('Hello, world.')
spam = spam + 1
if spam < 5:
continue
break

```








------------------------------------------------------------------------



### Try/Except Statements

-   [Python equivalent to `try/catch`{.markup--code
    .markup--li-code}]{#72ec}

```py

{#ed26 .graf .graf--pre .graf-after--li name="ed26"}
a = 321
try:
print(len(a))

    print('Silently handle error here')

```


```py

 # Optionally include a correction to the issue
a = str(a)
print(len(a)

```


```py


a = '321'
try:
print(len(a))
except:
print('Silently handle error here')

```


```py

 # Optionally include a correction to the issue
a = str(a)
print(len(a))

```


-   [You can name an error to give the output more specificity.]{#dcd1}

```py


a = 100
b = 0
try:
c = a / b
except ZeroDivisionError:
c = None
print(c)

```


-   [You can also use the `pass`{.markup--code .markup--li-code}
    commmand to by pass a certain error.]{#4027}

```py


a = 100
b = 0
try:
print(a / b)
except ZeroDivisionError:
pass

```


-   [The `pass`{.markup--code .markup--li-code} method won\'t allow you
    to bypass every single error so you can chain an exception series
    like so:]{#030b}

```

```p
a = 100

# b = "5"

try:
print(a / b)
except ZeroDivisionError:
pass
except (TypeError, NameError):
print("ERROR!")

```


-   [You can use an `else`{.markup--code .markup--li-code} statement to
    end a chain of `except`{.markup--code .markup--li-code}
    statements.]{#bf45}

```py



# tuple of file names

files = ('one.txt', 'two.txt', 'three.txt')

                                                   # simple loop
```py
for filename in files:
try: # open the file in read mode
f = open(filename, 'r')
except OSError: # handle the case where file does not exist or permission is denied
print('cannot open file', filename)
else: # do stuff with the file object (f)
print(filename, 'opened successfully')
print('found', len(f.readlines()), 'lines')
f.close()

`` . py

-   [`finally`{.markup--code .markup--li-code} is used at the end to
    clean up all actions under any circumstance.]{#0e91}
```py
def divide(x, y):
try:
result = x / y
except ZeroDivisionError:
print("Cannot divide by zero")
else:
print("Result is", result)
finally:
print("Finally...")

```


-   [Using duck typing to check to see if some value is able to use a
    certain method.]{#84ee}

```py



# Try a number - nothing will print out
```py
a = 321
if hasattr(a, '**len**'):
print(len(a))

```


```py


# Try a string - the length will print out (4 in this case)
```py
b = "5555"
if hasattr(b, '**len**'):
print(len(b))

```







------------------------------------------------------------------------



### Pass {#e485 .graf .graf--h3 .graf--leading name="e485"}

-   [Pass Keyword is required to write the JS equivalent of :]{#2b80}

```p


if (true) {
}

```


```



```


```

if True:
pass

```


```


while True:
pass

```





 ="fd82"}


------------------------------------------------------------------------



### Functions {#2623 .graf .graf--h3 .graf--leading name="2623"}

-   [**Function definition includes:**]{#7091}
-   [**The** `def`{.markup--code .markup--li-code} **keyword**]{#1f11}
-   [**The name of the function**]{#ec14}
-   [**A list of parameters enclosed in parentheses.**]{#7733}
-   [**A colon at the end of the line.**]{#1516}
-   [**One tab indentation for the code to run.**]{#b2dd}
-   [**You can use default parameters just like in JS**]{#bcef}

```

{#10df .graf .graf--pre .graf-after--li name="10df"}

    print(saying, name)

```


```

{#1e17 .graf .graf--pre .graf-after--pre name="1e17"}
greeting("Monica")

# Hello Monica

```


```

{#3702 .graf .graf--pre .graf-after--pre name="3702"}
greeting("Barry", "Hey")

# Hey Barry

```


#### **Keep in mind, default parameters must always come after regular parameters.** {#f3f1 .graf .graf--h4 .graf-after--pre name="f3f1"}

```

{#9657 .graf .graf--pre .graf-after--h4 name="9657"}

# THIS IS BAD CODE AND WILL NOT RUN

def increment(delta=1, value):
return delta + value

```


-   [*You can specify arguments by name without destructuring in
    Python.*]{#c1aa}

```

{#e495 .graf .graf--pre .graf-after--li name="e495"}
def greeting(name, saying="Hello"):
print(saying, name)

```


```

{#e924 .graf .graf--pre .graf-after--pre name="e924"}

# name has no default value, so just provide the value

# saying has a default value, so use a keyword argument

greeting("Monica", saying="Hi")

```


-   [The `lambda`{.markup--code .markup--li-code} keyword is used to
    create anonymous functions and are supposed to be
    `one-liners`{.markup--code .markup--li-code}.]{#54ac}

`toUpper = lambda s: s.upper()`{.markup--code .markup--p-code}




 ="db19"}


------------------------------------------------------------------------



### Notes {#4564 .graf .graf--h3 .graf--leading name="4564"}

#### Formatted Strings {#b43f .graf .graf--h4 .graf-after--h3 name="b43f"}

> Remember that in Python join() is called on a string with an
> array/list passed in as the argument.\
> Python has a very powerful formatting engine.\
> format() is also applied directly to strings.

```

{#c199 .graf .graf--pre .graf-after--blockquote name="c199"}
shopping_list = ['bread','milk','eggs']
print(','.join(shopping_list))

### Comma Thousands Separator {#5fda .graf .graf--h3 .graf-after--pre name="5fda"}

```
 {#5939 .graf .graf--pre .graf-after--h3 name="5939"}
print('{:,}'.format(1234567890))
'1,234,567,890'
```

### Date and Time {#d948 .graf .graf--h3 .graf-after--pre name="d948"}

```
 {#94fd .graf .graf--pre .graf-after--h3 name="94fd"}
d = datetime.datetime(2020, 7, 4, 12, 15, 58)
print('{:%Y-%m-%d %H:%M:%S}'.format(d))
'2020–07–04 12:15:58'
```

### Percentage {#37d5 .graf .graf--h3 .graf-after--pre name="37d5"}

```
 {#4b6c .graf .graf--pre .graf-after--h3 name="4b6c"}
points = 190
total = 220
print('Correct answers: {:.2%}'.format(points/total))
Correct answers: 86.36%
```

### Data Tables {#92ea .graf .graf--h3 .graf-after--pre name="92ea"}

```
 {#198e .graf .graf--pre .graf-after--h3 name="198e"}
width=8
print(' decimal hex binary')
print('-'*27)
for num in range(1,16):
for base in 'dXb':
print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
print()
Getting Input from the Command Line
Python runs synchronously, all programs and processes will stop when listening for a user input.
The input function shows a prompt to a user and waits for them to type 'ENTER'.
Scripts vs Programs
Programming Script : A set of code that runs in a linear fashion.
The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI's.
```

**Python can be used to display html, css, and JS.**\
_It is common to use Python as an API (Application Programming
Interface)_

#### Structured Data {#71b4 .graf .graf--h4 .graf-after--p name="71b4"}

#### Sequence : The most basic data structure in Python where the index determines the order. {#d9a2 .graf .graf--h4 .graf-after--h4 name="d9a2"}

> List\
> Tuple\
> Range\
> Collections : Unordered data structures, hashable values.

="d4ae"}

---

#### Dictionaries Sets {#56c2 .graf .graf--h4 .graf--leading name="56c2"}

#### Iterable : Generic name for a sequence or collection; any object that can be iterated through. {#b683 .graf .graf--h4 .graf-after--h4 name="b683"}

#### Can be mutable or immutable. Built In Data Types {#8011 .graf .graf--h4 .graf-after--h4 .graf--trailing name="8011"}

="dbde"}

---

### Lists are the python equivalent of arrays. {#71e2 .graf .graf--h3 .graf--leading name="71e2"}

```
 {#7f66 .graf .graf--pre .graf-after--h3 name="7f66"}
empty_list = []
departments = ['HR','Development','Sales','Finance','IT','Customer Support']
```

### You can instantiate {#97e6 .graf .graf--h3 .graf-after--pre name="97e6"}

```
 {#5302 .graf .graf--pre .graf-after--h3 name="5302"}
specials = list()
```

#### Test if a value is in a list. {#e60f .graf .graf--h4 .graf-after--pre name="e60f"}

```
 {#37ea .graf .graf--pre .graf-after--h4 name="37ea"}
print(1 in [1, 2, 3]) #> True
print(4 in [1, 2, 3]) #> False
# Tuples : Very similar to lists, but they are immutable
```

#### Instantiated with parentheses {#6c7d .graf .graf--h4 .graf-after--pre name="6c7d"}

```
 {#9549 .graf .graf--pre .graf-after--h4 name="9549"}
time_blocks = ('AM','PM')
```

#### Sometimes instantiated without {#60f5 .graf .graf--h4 .graf-after--pre name="60f5"}

```
 {#f1f1 .graf .graf--pre .graf-after--h4 name="f1f1"}
colors = 'red','blue','green'
numbers = 1, 2, 3
```

#### Tuple() built in can be used to convert other data into a tuple {#5ffb .graf .graf--h4 .graf-after--pre name="5ffb"}

```
 {#9cb9 .graf .graf--pre .graf-after--h4 name="9cb9"}
tuple('abc') # returns ('a', 'b', 'c')
tuple([1,2,3]) # returns (1, 2, 3)
# Think of tuples as constant variables.
```

#### Ranges : A list of numbers which can't be changed; often used with for loops. {#9fca .graf .graf--h4 .graf-after--pre name="9fca"}

**Declared using one to three parameters**.

> Start : opt. default 0, first \# in sequence.\
> Stop : required next number past the last number in the sequence.\
> Step : opt. default 1, difference between each number in the sequence.

```
 {#19f5 .graf .graf--pre .graf-after--blockquote name="19f5"}
range(5) # [0, 1, 2, 3, 4]
range(1,5) # [1, 2, 3, 4]
range(0, 25, 5) # [0, 5, 10, 15, 20]
range(0) # [ ]
for let (i = 0; i < 5; i++)
for let (i = 1; i < 5; i++)
for let (i = 0; i < 25; i+=5)
for let(i = 0; i = 0; i++)
# Keep in mind that stop is not included in the range.
```

#### Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary. {#926c .graf .graf--h4 .graf-after--pre name="926c"}

#### Mutable. {#364d .graf .graf--h4 .graf-after--h4 name="364d"}

```
 {#43ed .graf .graf--pre .graf-after--h4 name="43ed"}
a = {'one':1, 'two':2, 'three':3}
b = dict(one=1, two=2, three=3)
c = dict([('two', 2), ('one', 1), ('three', 3)])
# a, b, and c are all equal
```

**_Declared with curly braces of the built in dict()_**

> _Benefit of dictionaries in Python is that it doesn't matter how it is
> defined, if the keys and values are the same the dictionaries are
> considered equal._

**Use the in operator to see if a key exists in a dictionary.**

[S]{.graf-dropCap}**ets : Unordered collection of distinct objects;
objects that need to be hashable.**

> _Always be unique, duplicate items are auto dropped from the set._

#### Common Uses: {#e4df .graf .graf--h4 .graf-after--blockquote name="e4df"}

> Removing Duplicates\
> Membership Testing\
> Mathematical Operators: Intersection, Union, Difference, Symmetric
> Difference.

**Standard Set is mutable, Python has a immutable version called
frozenset.\
Sets created by putting comma seperated values inside braces:**

```
 {#d97e .graf .graf--pre .graf-after--p name="d97e"}
school_bag = {'book','paper','pencil','pencil','book','book','book','eraser'}
print(school_bag)
```

#### Also can use set constructor to automatically put it into a set. {#08b8 .graf .graf--h4 .graf-after--pre name="08b8"}

```
 {#6ad6 .graf .graf--pre .graf-after--h4 name="6ad6"}
letters = set('abracadabra')
print(letters)
#Built-In Functions
#Functions using iterables
```

**filter(function, iterable) : creates new iterable of the same type
which includes each item for which the function returns true.**

**map(function, iterable) : creates new iterable of the same type which
includes the result of calling the function on every item of the
iterable.**

**sorted(iterable, key=None, reverse=False) : creates a new sorted list
from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate(iterable, start=0) : starts with a sequence and converts it
to a series of tuples**

```
 {#64d4 .graf .graf--pre .graf-after--p name="64d4"}
quarters = ['First', 'Second', 'Third', 'Fourth']
print(enumerate(quarters))
print(enumerate(quarters, start=1))
```

#### (0, 'First'), (1, 'Second'), (2, 'Third'), (3, 'Fourth') {#127e .graf .graf--h4 .graf-after--pre name="127e"}

#### (1, 'First'), (2, 'Second'), (3, 'Third'), (4, 'Fourth') {#3da0 .graf .graf--h4 .graf-after--h4 name="3da0"}

> zip(\*iterables) : creates a zip object filled with tuples that
> combine 1 to 1 the items in each provided iterable.\
> Functions that analyze iterable

**len(iterable) : returns the count of the number of items.**

**max(\*args, key=None) : returns the largest of two or more
arguments.**

**max(iterable, key=None) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be
compared.\
min works the same way as max_

**sum(iterable) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one
string, so do not use sum for that._

**any(iterable) : returns True if any items in the iterable are true.**

**all(iterable) : returns True is all items in the iterable are true.**

### Working with dictionaries {#92ad .graf .graf--h3 .graf-after--p name="92ad"}

**dir(dictionary) : returns the list of keys in the dictionary.\
Working with sets**

**Union : The pipe \| operator or union(\*sets) function can be used to
produce a new set which is a combination of all elements in the provided
set.**

```
 {#bf18 .graf .graf--pre .graf-after--p name="bf18"}
a = {1, 2, 3}
b = {2, 4, 6}
print(a | b) # => {1, 2, 3, 4, 6}
```

#### Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets. {#e5aa .graf .graf--h4 .graf-after--pre name="e5aa"}

```
 {#7571 .graf .graf--pre .graf-after--h4 name="7571"}
a = {1, 2, 3}
b = {2, 4, 6}
print(a & b) # => {2}
Difference : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.
```

**Symmetric Difference : The \^ operator can be used to produce a new
set of only the elements that appear in exactly one set and not in
both.**

```
 {#7e3b .graf .graf--pre .graf-after--p .graf--trailing name="7e3b"}
a = {1, 2, 3}
b = {2, 4, 6}
print(a — b) # => {1, 3}
print(b — a) # => {4, 6}
print(a ^ b) # => {1, 3, 4, 6}
```

="1f43"}

---

### **For Statements In python, there is only one for loop.** {#ed03 .graf .graf--h3 .graf--leading name="ed03"}

Always Includes:

> 1\. The for keyword\
> 2. A variable name\
> 3. The 'in' keyword\
> 4. An iterable of some kid\
> 5. A colon\
> 6. On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

ame="9439"}
print('My name is')
for i in range(5):
print('Carlita Cinco (' + str(i) + ')')

```


```

{#946d .graf .graf--pre .graf-after--pre name="946d"}
total = 0
for num in range(101):
total += num
print(total)
Looping over a list in Python
for c in ['a', 'b', 'c']:
print(c)

```


```

{#9ae7 .graf .graf--pre .graf-after--pre name="9ae7"}
lst = [0, 1, 2, 3]
for i in lst:
print(i)

```


***Common technique is to use the len() on a pre-defined list with a for
loop to iterate over the indices of the list.***

```

{#e5df .graf .graf--pre .graf-after--p name="e5df"}
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for i in range(len(supplies)):
print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

```


**You can loop and destructure at the same time.**

```

{#ce98 .graf .graf--pre .graf-after--p name="ce98"}
l = 1, 2], [3, 4], [5, 6
for a, b in l:
print(a, ', ', b)

```


> Prints 1, 2

> Prints 3, 4

> Prints 5, 6

**You can use values() and keys() to loop over dictionaries.**

```

{#5888 .graf .graf--pre .graf-after--p name="5888"}
spam = {'color': 'red', 'age': 42}
for v in spam.values():
print(v)

```


*Prints red*

*Prints 42*

```

{#b021 .graf .graf--pre .graf-after--p name="b021"}
for k in spam.keys():
print(k)

```


*Prints color*

*Prints age*

**For loops can also iterate over both keys and values.**

**Getting tuples**

```

{#d2cf .graf .graf--pre .graf-after--p name="d2cf"}
for i in spam.items():
print(i)

```


*Prints ('color', 'red')*

*Prints ('age', 42)*

*Destructuring to values*

```

{#e21f .graf .graf--pre .graf-after--p name="e21f"}
for k, v in spam.items():
print('Key: ' + k + ' Value: ' + str(v))

```


*Prints Key: age Value: 42*

*Prints Key: color Value: red*

**Looping over string**

```

{#e44e .graf .graf--pre .graf-after--p name="e44e"}
for c in "abcdefg":
print(c)

```


**When you order arguments within a function or function call, the args
need to occur in a particular order:**

*formal positional args.*

\*args

*keyword args with default values*

\*\*kwargs

```

{#3042 .graf .graf--pre .graf-after--p name="3042"}
def example(arg_1, arg_2, \*args, \*\*kwargs):
pass

```


```

{#137b .graf .graf--pre .graf-after--pre .graf--trailing name="137b"}
def example2(arg_1, arg_2, \*args, kw_1="shark", kw_2="blowfish", \*\*kwargs):
pass

```





 ="7787"}


------------------------------------------------------------------------



### **Importing in Python** {#4451 .graf .graf--h3 .graf--leading name="4451"}

**Modules are similar to packages in Node.js**\
Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**




 "}


------------------------------------------------------------------------



### **Terms** {#7c4f .graf .graf--h3 .graf--leading name="7c4f"}

> module : Python code in a separate file.\
> package : Path to a directory that contains modules.\
> [**init.py**](http://init.py){.markup--anchor
> .markup--blockquote-anchor} : Default file for a package.\
> submodule : Another file in a module's folder.\
> function : Function in a module.

**A module can be any file but it is usually created by placing a
special file init.py into a folder. pic**

*Try to avoid importing with wildcards in Python.*

*Use multiple lines for clarity when importing.*

```

{#5b37 .graf .graf--pre .graf-after--p .graf--trailing name="5b37"}

HTTPDefaultErrorHandler as ErrorHandler,
HTTPRedirectHandler as RedirectHandler,
Request,
pathname2url,
url2pathname,
urlopen,
)

```







------------------------------------------------------------------------



### Watching Out for Python 2 {#7040 .graf .graf--h3 .graf--leading name="7040"}

**Python 3 removed \<\> and only uses !=**

**format() was introduced with P3**

**All strings in P3 are unicode and encoded.\
md5 was removed.**

**ConfigParser was renamed to configparser\
sets were killed in favor of set() class.**

#### **print was a statement in P2, but is a function in P3.** {#6db9 .graf .graf--h4 .graf-after--p name="6db9"}

### Topics revisited (in python syntax) {#9427 .graf .graf--h3 .graf-after--h4 name="9427"}

### Cheat Sheet: {#3beb .graf .graf--h3 .graf-after--figure name="3beb"}

 ee to checkout my github/gists where I host similar content: {#e89c .graf .graf--h4 .graf-after--figure name="e89c"}

[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz)

[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz)


Or Checkout my personal Resource Site:

{#4bce .graf .graf--mixtapeEmbed .graf-after--p name="4bce"}
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/)


### Python Cheat Sheet: {#2eba .graf .graf--h3 .graf-after--mixtapeEmbed name="2eba"}





By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 6, 2021](https://medium.com/p/5cfdf3d2bdfb).


```
