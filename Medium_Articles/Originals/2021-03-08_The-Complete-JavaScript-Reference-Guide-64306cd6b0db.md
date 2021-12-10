The Complete JavaScript Reference Guide {#the-complete-javascript-reference-guide .p-name}
=======================================


You will want to bookmark this


 
{.section .section .section--body .section--first name="6a85"}
 

------------------------------------------------------------------------


  
### The Complete JavaScript Reference Guide {#8be9 .graf .graf--h3 .graf--leading .graf--title name="8be9"}

![](https://cdn-images-1.medium.com/max/800/0*In5wB-29T0Ud_zs3.jpg) 

### How to learn effectively {#6610 .graf .graf--h3 .graf-after--figure name="6610"}

**Learning**: The acquisition of skills and the ability to apply them in
the future.

**What makes an Effective learner?**

-   [They are active listeners.]{#7504}
-   [They are engaged with the material.]{#179b}
-   [They are receptive of feedback.]{#3193}
-   [They are open to difficulty.]{#17d8}

**Why do active learning techniques feel difficult?**

-   [It feels difficult because you are constantly receiving feedback,
    and so you are constantly adapting and perfecting the
    material.]{#7848}

**Desirable Difficulty**

-   [The skills we wish to obtain is often a difficult one.]{#67c9}
-   [We want challenging but possible lessons based on current level of
    skill.]{#c939}

**Effective learners space their practice**

-   [Consistent effort \> cramming =\> for **durable knowledge**]{#59a4}




 

------------------------------------------------------------------------


  
### Getting visual feedback in your programs {#98cc .graf .graf--h3 .graf--leading name="98cc"}
 
The first command we'll learn in JavaScript is
`console.log` . This command is used to
*print* something onto the screen. As we write our first lines of code,
we'll be using `console.log`  frequently
as a way to visually see the output of our programs. Let's write our
first program:

```
 {#e289 .graf .graf--pre .graf-after--p name="e289"}
console.log("hello world");
console.log("how are you?");
```


Executing the program above would print out the following:

```
 {#ac39 .graf .graf--pre .graf-after--p name="ac39"}
hello world
how are you?
```


Nothing too ground breaking here, but pay close attention to the exact
way we wrote the program. In particular, notice how we lay out the
periods, parentheses, and quotation marks. We'll also terminate lines
with semicolons (;).

> *Depending on how you structure your code, sometimes you'll be able to
> omit semicolons at the end of lines. For now, you'll want to include
> them just as we do.*

### Syntax {#2a8a .graf .graf--h3 .graf-after--blockquote name="2a8a"}

We refer to the exact arrangement of the symbols, characters, and
keywords as **syntax**. These details matter --- your computer will only
be able to "understand" proper JavaScript syntax. A programming language
is similar to a spoken language. A spoken language like English has
grammar rules that we should follow in order to be understood by fellow
speakers. In the same way, a programming language like JavaScript has
syntax rules that we ought to follow!

As you write your first lines of code in this new language, you may make
many syntax errors. Don't get frustrated! This is normal --- all new
programmers go through this phase. Every time we recognize an error in
our code, we have an opportunity to reinforce your understanding of
correct syntax. Adopt a growth mindset and learn from your mistakes.

Additionally, one of the best things about programming is that we can
get such immediate feedback from our creations. There is no penalty for
making a mistake when programming. Write some code, run the code, read
the errors, fix the errors, rinse and repeat!

### Code comments {#3ed2 .graf .graf--h3 .graf-after--p name="3ed2"}

Occasionally we'll want to leave **comments** or notes in our code.
Commented lines will be ignored by our computer. This means that we can
use comments to write plain english or temporarily avoid execution of
some JavaScript lines. The proper *syntax* for writing a comment is to
begin the line with double forward slashes (`//` ):

```
 {#f4e6 .graf .graf--pre .graf-after--p name="f4e6"}
// let's write another program!!!
console.log("hello world");
```


```
 {#e986 .graf .graf--pre .graf-after--pre name="e986"}
// console.log("how are you?");
```


```
 {#3bc4 .graf .graf--pre .graf-after--pre name="3bc4"}
console.log("goodbye moon");
```


The program above would only print:

```
 {#bf40 .graf .graf--pre .graf-after--p name="bf40"}
hello world
goodbye moon
```


Comments are useful when annotating pieces of code to offer an
explanation of how the code works. We'll want to strive to write
straightforward code that is self-explanatory when possible, but we can
also use comments to add additional clarity. The real art of programming
is to write code so elegantly that it is easy to follow.

**The Number Data Type**

The **number** data type in JS is used to represent any numerical
values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   [**+** (addition)]{#f533}
-   [**-** (subtraction)]{#5b9f}
-   [**asterisk** (multiplication)]{#b98b}
-   [**/** (division)]{#9a15}
-   [**%** (modulo)]{#c752}

JS evaluates more complex expressions using the general math order of
operations aka PEMDAS.

-   [**PEMDAS** : Parentheses, Exponents, Multiplication, Division,
    Modulo, Add tion, Subtraction.]{#b6e3}
-   [*To force a specific order of operation, use the group operator ( )
    around a part of the expression.*]{#9c25}

**Modulo** : Very useful operation to check divisibility of numbers,
check for  ven & odd, whether a number is prime, and much more!
*(Discrete Math concept, circular problems can be solved with modulo)*

-   [Whenever you have a smaller number % a larger number, the answer
    will just be the initial small number. \
     console.log(7 % 10) // =\> 7;]{#cf5b} 
 
**The String Data Type**

The **string** data type is a primitive data type that used to represent
textual data.

-   [can be wrapped by either **single** or **double** quotation marks,
    *best to choose one and stick with it for consistency*.]{#e1b0}
-   [If your string contains quotation marks inside, can layer single or
    double quotation marks to allow it to work.\
     "That's a great string"; (valid)\
     \
     'Shakespeare wrote, "To be or not to be"'; (valid)\
     \
     'That's a bad string'; (invalid)]{#f8ad}
-    Alt. way to add other quotes within strings is to use template
    literals.\
     \`This is a temp'l'ate literal \${function}\` // use \${} to invoke
     unctions within.]{#b2cb}
-   [**.length** : property that can be appended to data to return the
    length.]{#7b a}
-   [empty strings have a length of zero.]{#f633}
-   [**indices** : indexes of data that begin at 0, can call upon index
    by using the bracket notation \[ \].\
     console.log("bootcamp"\[0\]); // =\> "b"\
     console.log("bootcamp"\[10\]); // =\> "undefined"\
     console.log("boots"\[1 \* 2\]); // =\> "o"\
     console.log("boots"\["boot".length-1\]); // =\> "t"]{#0a07}
-    we can pass expressions through the brackets as well since JS
    always evaluates expressions first.]{#6482}
-   [The index of the last character of a string is always one less than
    it's length.]{#e2f5}
-   [**indexOf()** : method used to find the first index of a given
    character with n a string.\
     console.log("bagel".indexOf("b")); // =\> 0\
     console.log("bagel".indexOf("z")); // =\> -1]{#2271}
-    if the character inside the indexOf() search does not exist in the
    string, the output will be -1.]{#8d68}
-   [the indexOf() search will return the first instanced index of the
    the char in the string.]{#d15e}
-   [**concatenate** : word to describe joining strings together into a
    single string.]{ a275}

**The Boolean Data Type**

The **Boolean** data type is the simplest data type since there are only
two values: **true** and **false**.

-   [**Logical Operators** (B*oolean Operators*) are used to establish
    logic in our code.]{#60da}
-   [**!** (not) : reverses a Boolean value.\
     console.log !true); // =\> false\
     console.log(!!false); // =\> false]{#139b}
-    **Logical Order of Operations** : JS will evaluate !, then &&, then
    \|\|.]{#e412}  
-   [**Short-Circuit Evaluation** : Because JS evalutes from left to
    right, expressions can "short circuit". For example if we have true
    on the left of an \|\| logical comparison, it will stop evaluating
    and yield true instead of wasting resources on processing the rest
    of the statement.\
     console.log(true \|\| !false) // =\> stops after it sees "true
     |\|"]{#99ad} 

**Comparison Operators**

All comparison operators will result in a boolean output.

**The relative comparators**

-   [**\>** (greater than)]{#6fee}
-   [**\<** (less than)]{#0437}
-   [**\>=** (greater than or equal to)]{#17ff}
-   [**\<=** (less than or equal to)]{#b2b4}
-   [**===** (equal to)]{#0c13}
-   [**!==** (not equal to)]{#b73a}

Fun Fact: "a" \< "b" is considered valid JS Code because string
comparisons are compared lexicographically (meaning dictionary order),
so "a" is less than "b" because it appears earlier!

If there is ever a standstill comparison of two string lexicographically
(i.e. app vs apple) the comparison will deem the shorter string lesser.

**Difference between == and ===**

#### === {#b620 .graf .graf--h4 .graf-after--p name="b620"}

Strict Equality, will only return true if the two comparisons are
entirely the same.

#### == {#38a2 .graf .graf--h4 .graf-after--p name="38a2"}

Loose Equality, will return true even if the values are of a different
type, due to coercion. (Avoid using this)

**Variables**

Variables are used to store information to be referenced and manipulated
in a program.

-   [We initialize a variable by using the **let** keyword and a **=**
    single equals sign (assignment operator). \
     let bootcamp = "App Academy";\ 
     console.log(bootcamp); // "App Academy"]{#c73d}
-    JS variable names can contain any alphanumeric characters,
    underscores, or dollar signs (cannot being with a number).]{#7849}
-   [If you do not declare a value for a variable, undefined is
    automatically set. \
     let bootcamp;\ 
     console.log(bootcamp); // undefined]{#ad76}
-    We can change the value of a previously declared variable (let, not
    const) by re-assigning it another value.]{#2188}
-   [**let** is the updated version of **var**; there are some
    differences in terms of hoisting and global/block scope]{#47ca}

**Assignment Shorthand**

let num = 0;\
 num += 10; // same as num = num + 10\
 num -= 2; // same as num = num --- 2\
 num /= 4; // same as num = num / 4\
 num \*= 7; // same as num = num \* 7
 
-   [In general, any nonsensical arithmetic will result in **NaN** ;
    usually operations that include undefined.]{#9c05} 

**Functions**

A function is a procedure of code that will run when called. Functions
are used so that we do not have to rewrite code to do the same thing
over and over. (Think of them as 'subprograms')

-   [**Function Declaration** : Process when we first initially write
    our function.]{#366f} 
-   [Includes three things:]{#676f}
-   [Name of the function.]{#80c2}
-   [A list of *parameters* ()]{#f3a4}
-   [The code to execute {}]{#2b0e}
-   [**Function Calls** : We can call upon our function whenever and
    wherever\* we want. (\*wherever is only after the initial
    declaration)]{#6879}
-   [JS evaluates code top down, left to right.]{#8374}
-   [When we execute a declared function later on in our program we
    refer to this as **invoking** our function.]{#2687}
-   [Every function in JS returns undefined unless otherwise
    specified.]{#0c3a}
-   [When we hit a **return** statement in a function we immediately
    exit the function and return to where we called the
    function.]{#4207}
-   [When naming functions in JS always use camelCase and name it
    something appropriate.]{#e39f}

Greate code reads like English and almost explains itself. Think:
Elegant, readable, and maintainable!

**Parameters and Arguments**

-   [**Parameters** : Comma seperated variables specified as part of a
    function's decl ration.]{#e94e}
-   [**Arguments** : Values passed to the function when it is
    invoked.]{#674 }
-   [*If the number of arguments passed during a function invocation is
    different than the number of paramters listed, it will still
    work.*]{#004c}
-   [However, is there are not enough arguments provided for parameters
    our function will likely yield **Nan**.]{#7da5}

### Including Comments {#766c .graf .graf--h3 .graf-after--li name="766c"}

Comments are important because they help other people understand what is
going on in your code or remind you if you forgot something yourself.
Keep in mind that they have to be marked properly so the browser won't
try to execute them.

In JavaScript you have two different options:

-   [Single-line comments --- To include a comment that is limited to a
    single line, precede it with `//`{.markup--code
    .markup--li-code}]{#356d}
-   [Multi-line comments --- In case you want to write longer comments
    between several lines, wrap it in `/*`{.markup--code
    .markup--li-code} and `*/`{.markup--code .markup--li-code} to avoid
    it from being executed]{#ee3a}

### Variables in JavaScript {#0fae .graf .graf--h3 .graf-after--li name="0fae"}

Variables are stand-in values that you can use to perform operations.
You should be familiar with them from math class.

### var, const, let {#c890 .graf .graf--h3 .graf-after--p name="c890"}
 
You have three different possibilities for declaring a variable in
JavaScript, each with their own specialties:

-   [`var`{.markup--code .markup--li-code} --- The most common variable.
    It can be reassigned but only accessed within a function. Variables
    defined with `var`{.markup--code .markup--li-code} move to the top
    when the code is executed.]{#4b29}
-   [`const`{.markup--code .markup--li-code} --- Can not be reassigned
    and not accessible before they appear within the code.]{#d234}
-   [`let`{.markup--code .markup--li-code} --- Similar to
    `const`{.markup--code .markup--li-code}, the `let`{.markup--code
    .markup--li-code} variable can be reassigned but not
    re-declared.]{#0e3b}

### Data Types {#523d .graf .graf--h3 .graf-after--li name="523d"}

Variables can contain different types of values and data types. You use
`=`  to assign them:

-   [Numbers --- `var age = 23`{.markup--code .markup--li-code}]{#b276}
-   [Variables --- `var x`{.markup--code .markup--li-code}]{#5571}
-   [Text (strings) --- `var a = "init"`{.markup--code
    .markup--li-code}]{#e26c}
-   [Operations --- `var b = 1 + 2 + 3`{.markup--code
    .markup--li-code}]{#1312}
-   [True or false statements --- `var c = true`{.markup--code
    .markup--li-code}]{#9880}
-   [Constant numbers --- `const PI = 3.14`{.markup--code
    .markup--li-code}]{#335a}
-   [Objects --- `var name = {firstName:"John",                   lastName:"Doe"}`{.markup--code
    .markup--li-code}]{#7221}

There are more possibilities. Note that variables are case sensitive.
That means `lastname`  and
`lastName`  will be handled as two
different variables.

### Objects {#9088 .graf .graf--h3 .graf-after--p name="9088"}

Objects are certain kinds of variables. They are variables that can have
their own values and methods. The latter are actions that you can
perform on objects.

var person = {

firstName:"John",

lastName:"Doe",

age:20,

nationality:"German"

};

### The Next Level: Arrays {#d6ff .graf .graf--h3 .graf-after--p name="d6ff"}
 
Next up in our JavaScript cheat sheet are arrays. Arrays are part of
many different programming languages. They are a way of organizing
variables and properties into groups. Here's how to create one in
JavaScript:

var fruit = \["Banana", "Apple", "Pear"\];

Now you have an array called `fruit` 
which contains three items that you can use for future operations.

### Array Methods {#106f .graf .graf--h3 .graf-after--p name="106f"}

Once you have created arrays, there are a few things you can do with
them:

-   [`concat()`{.markup--code .markup--li-code} --- Join several arrays
    into one]{#4e4b}
-   [`indexOf()`{.markup--code .markup--li-code} --- Returns the first
    position at which a given element appears in an array]{#5c02}
-   [`join()`{.markup--code .markup--li-code} --- Combine elements of an
    array into a single string and return the string]{#45cd}
-   [`lastIndexOf()`{.markup--code .markup--li-code} --- Gives the last
    position at which a given element appears in an array]{#3a4e}
-   [`pop()`{.markup--code .markup--li-code} --- Removes the last
    element of an array]{#8fbb}
-   [`push()`{.markup--code .markup--li-code} --- Add a new element at
    the end]{#28e4}
-   [`reverse()`{.markup--code .markup--li-code} --- Sort elements in a
    descending order]{#0be2}
-   [`shift()`{.markup--code .markup--li-code} --- Remove the first
    element of an array]{#775e}
-   [`slice()`{.markup--code .markup--li-code} --- Pulls a copy of a
    portion of an array into a new array]{#1063}
-   [`sort()`{.markup--code .markup--li-code} --- Sorts elements
    alphabetically]{#53fd}
-   [`splice()`{.markup--code .markup--li-code} --- Adds elements in a
    specified way and position]{#f551}
-   [`toString()`{.markup--code .markup--li-code} --- Converts elements
    to strings]{#c46b}
-   [`unshift()`{.markup--code .markup--li-code} ---Adds a new element
    to the beginning]{#ef66}
-   [`valueOf()`{.markup--code .markup--li-code} --- Returns the
    primitive value of the specified object]{#4598}

### Operators {#3d59 .graf .graf--h3 .graf-after--li name="3d59"}

If you have variables, you can use them to perform different kinds of
operations. To do so, you need operators.

### Basic Operators {#bc32 .graf .graf--h3 .graf-after--p name="bc32"}

-   [`+`{.markup--code .markup--li-code} --- Addition]{#5d34}
-   [`-`{.markup--code .markup--li-code} --- Subtraction]{#5fd9}
-   [`*`{.markup--code .markup--li-code} --- Multiplication]{#3b13}
-   [`/`{.markup--code .markup--li-code} --- Division]{#521a}
-   [`(...)`{.markup--code .markup--li-code} --- Grouping operator,
    operations within brackets are executed earlier than those
    outside]{#cf0f}
-   [`%`{.markup--code .markup--li-code} --- Modulus (remainder
    )]{#bb2a}
-   [`++`{.markup--code .markup--li-code} --- Increment numbers]{#e837}
-   [`--`{.markup--code .markup--li-code} --- Decrement numbers]{#71ea}

### Comparison Operators {#5c56 .graf .graf--h3 .graf-after--li name="5c56"}

-   [`==`{.markup--code .markup--li-code} --- Equal to]{#a2b0}
-   [`===`{.markup--code .markup--li-code} --- Equal value and equal
    type]{#5105}
-   [`!=`{.markup--code .markup--li-code} --- Not equal]{#c79c}
-   [`!==`{.markup--code .markup--li-code} --- Not equal value or not
    equal type]{#1f7f}
-   [`>`{.markup--code .markup--li-code} --- Greater than]{#78c3}
-   [`<`{.markup--code .markup--li-code} --- Less than]{#d40b}
-   [`>=`{.markup--code .markup--li-code} --- Greater than or equal
    to]{#081b}
-   [`<=`{.markup--code .markup--li-code} --- Less than or equal
    to]{#d065}
-   [`?`{.markup--code .markup--li-code} --- Ternary operator]{#174d}

### Logical Operators {#3394 .graf .graf--h3 .graf-after--li name="3394"}

-   [`&&`{.markup--code .markup--li-code} --- Logical and]{#cb7b}
-   [`||`{.markup--code .markup--li-code} --- Logical or]{#b1ee}
-   [`!`{.markup--code .markup--li-code} --- Logical not]{#96d4}

### Bitwise Operators {#8145 .graf .graf--h3 .graf-after--li name="8145"}

-   [`&`{.markup--code .markup--li-code} --- AND statement]{#8cf7}
-   [`|`{.markup--code .markup--li-code} --- OR statement]{#02d5}
-   [`~`{.markup--code .markup--li-code} --- NOT]{#e576}
-   [`^`{.markup--code .markup--li-code} --- XOR]{#9c66}
-   [`<<`{.markup--code .markup--li-code} --- Left shift]{#b343}
-   [`>>`{.markup--code .markup--li-code} --- Right shift]{#52b1}
-   [`>>>`{.markup--code .markup--li-code} --- Zero fill right
    shift]{#1b5c}

### Functions {#3ed3 .graf .graf--h3 .graf-after--li name="3ed3"}

JavaScript functions are blocks of code that perform a certain task. A
basic function looks like this:

function name(parameter1, parameter2, parameter3) {

// what the function does

}

As you can see, it consists of the `function`  keyword plus a name. The function's parameters are in
the brackets and you have curly brackets around what the function
performs. You can create your own, but to make your life easier -- there
are also a number of default functions.

### Outputting Data {#c58d .graf .graf--h3 .graf-after--p name="c58d"}

A common application for functions is the output of data. For the
output, you have the following options:

-   [`alert()`{.markup--code .markup--li-code} --- Output data in an
    alert box in the browser window]{#a7a7}
-   [`confirm()`{.markup--code .markup--li-code} --- Opens up a yes/no
    dialog and returns true/false depending on user click]{#0c44}
-   [`console.log()`{.markup--code .markup--li-code} --- Writes
    information to the browser console, good for debugging
    purposes]{#9690}
-   [`document.write()`{.markup--code .markup--li-code} --- Write
    directly to the HTML document]{#0d4d}
-   [`prompt()`{.markup--code .markup--li-code} --- Creates a dialogue
    for user input]{#16aa}

### Global Functions {#6b28 .graf .graf--h3 .graf-after--li name="6b28"}

Global functions are functions built into every browser capable of
running JavaScript.

-   [`decodeURI()`{.markup--code .markup--li-code} --- Decodes a
    [Uniform Resource Identifier
    (URI)](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier){.markup--anchor
    .markup--li-anchor} created by `encodeURI`{.markup--code
    .markup--li-code} or similar]{#f4f1}
-   [`decodeURIComponent()`{.markup--code .markup--li-code} --- Decodes
    a URI component]{#c203}
-   [`encodeURI()`{.markup--code .markup--li-code} --- Encodes a URI
    into UTF-8]{#176a}
-   [`encodeURIComponent()`{.markup--code .markup--li-code} --- Same but
    for URI components]{#6720}
-   [`eval()`{.markup--code .markup--li-code} --- Evaluates JavaScript
    code represented as a string]{#e97b}
-   [`isFinite()`{.markup--code .markup--li-code} --- Determines whether
    a passed value is a finite number]{#390b}
-   [`isNaN()`{.markup--code .markup--li-code} --- Determines whether a
    value is NaN or not]{#5d46}
-   [`Number()`{.markup--code .markup--li-code} ---- Returns a number
    converted from its argument]{#f668}
-   [`parseFloat()`{.markup--code .markup--li-code} --- Parses an
    argument and returns a floating-point number]{#a5ff}
-   [`parseInt()`{.markup--code .markup--li-code} --- Parses its
    argument and returns an integer]{#a666}

### JavaScript Loops {#a649 .graf .graf--h3 .graf-after--li name="a649"}

Loops are part of most programming languages. They allow you to execute
blocks of code desired number of times with different values:

for (before loop; condition **for** loop; execute after loop) {

// what to do during the loop

}

You have several parameters to create loops:

-   [`for`{.markup--code .markup--li-code} --- The most common way to
    create a loop in JavaScript]{#ff62}
-   [`while`{.markup--code .markup--li-code} --- Sets up conditions
    under which a loop executes]{#7ad1}
-   [`do while`{.markup--code .markup--li-code} --- Similar to the
    `while`{.markup--code .markup--li-code} loop but it executes at
    least once and performs a check at the end to see if the condition
    is met to execute again]{#c2f4}
-   [`break`{.markup--code .markup--li-code} ---Used to stop and exit
    the cycle at certain conditions]{#7157}
-   [`continue`{.markup--code .markup--li-code} --- Skip parts of the
    cycle if certain conditions are met]{#f5c0}

### If --- Else Statements {#ba4b .graf .graf--h3 .graf-after--li name="ba4b"}

These types of statements are easy to understand. Using them, you can
set conditions for when your code is executed. If certain conditions
apply, something is done, if not --- something else is executed.

if (condition) {

// what to do if condition is met

} **else** {

// what to do if condition is not met

}

A similar concept to `if else`  is the
`switch`  statement. However, using the
switch you select one of several code blocks to execute.

### Strings {#f11b .graf .graf--h3 .graf-after--p name="f11b"}

Strings are what JavaScript calls to text that does not perform a
function but can appear on the screen.

var person = "John Doe";

In this case, `John Doe`  is the string.

### Escape Characters {#1169 .graf .graf--h3 .graf-after--p name="1169"}

In JavaScript, strings are marked with single or double-quotes. If you
want to use quotation marks in a string, you need to use special
characters:

-   [`\'`{.markup--code .markup--li-code} --- Single quote]{#b4b1}
-   [`\"`{.markup--code .markup--li-code} --- Double quote]{#3b22}

Aside from that you also have additional escape characters:

-   [`\\`{.markup--code .markup--li-code} --- Backslash]{#b412}
-   [`\b`{.markup--code .markup--li-code} --- Backspace]{#1592}
-   [`\f`{.markup--code .markup--li-code} --- Form feed]{#3a72}
-   [`\n`{.markup--code .markup--li-code} --- New line]{#145a}
-   [`\r`{.markup--code .markup--li-code} --- Carriage return]{#1416}
-   [`\t`{.markup--code .markup--li-code} --- Horizontal
    tabulator]{#95d4}
-   [`\v`{.markup--code .markup--li-code} --- Vertical tabulator]{#d962}

### String Methods {#8f75 .graf .graf--h3 .graf-after--li name="8f75"}

There are many different ways to work with strings:

-   [`charAt()`{.markup--code .markup--li-code} --- Returns a character
    at a specified position inside a string]{#2021}
-   [`charCodeAt()`{.markup--code .markup--li-code} --- Gives you the
    Unicode of a character at that position]{#d3e5}
-   [`concat()`{.markup--code .markup--li-code} --- Concatenates (joins)
    two or more strings into one]{#fdd1}
-   [`fromCharCode()`{.markup--code .markup--li-code} --- Returns a
    string created from the specified sequence of UTF-16 code
    units]{#009c}
-   [`indexOf()`{.markup--code .markup--li-code} --- Provides the
    position of the first occurrence of a specified text within a
    string]{#7ed3}
-   [`lastIndexOf()`{.markup--code .markup--li-code} --- Same as
    `indexOf()`{.markup--code .markup--li-code} but with the last
    occurrence, searching backward]{#2937}
-   [`match()`{.markup--code .markup--li-code} --- Retrieves the matches
    of a string against a search pattern]{#142d}
-   [`replace()`{.markup--code .markup--li-code} --- Find and replace
    specified text in a string]{#6c18}
-   [`search()`{.markup--code .markup--li-code} --- Executes a search
    for a matching text and returns its position]{#e279}
-   [`slice()`{.markup--code .markup--li-code} --- Extracts a section of
    a string and returns it as a new string]{#6bcd}
-   [`split()`{.markup--code .markup--li-code} --- Splits a string
    object into an array of strings at a specified position]{#e4ee}
-   [`substr()`{.markup--code .markup--li-code} --- Similar to
    `slice()`{.markup--code .markup--li-code} but extracts a substring
    depending on a specified number of characters]{#3a27}
-   [`substring()`{.markup--code .markup--li-code} --- Also similar to
    `slice()`{.markup--code .markup--li-code} but can't accept negative
    indices]{#3d14}
-   [`toLowerCase()`{.markup--code .markup--li-code} --- Convert strings
    to lower case]{#fa33}
-   [`toUpperCase()`{.markup--code .markup--li-code} --- Convert strings
    to upper case]{#3485}
-   [`valueOf()`{.markup--code .markup--li-code} --- Returns the
    primitive value (that has no properties or methods) of a string
    object]{#4f96}

### Regular Expression Syntax {#cde1 .graf .graf--h3 .graf-after--li name="cde1"}

Regular expressions are search patterns used to match character
combinations in strings. The search pattern can be used for text search
and text to replace operations.

### Pattern Modifiers {#1a51 .graf .graf--h3 .graf-after--p name="1a51"}

-   [`e`{.markup--code .markup--li-code} --- Evaluate
    replacement]{#bb29}
-   [`i`{.markup--code .markup--li-code} --- Perform case-insensitive
    matching]{#b6b8}
-   [`g`{.markup--code .markup--li-code} --- Perform global
    matching]{#4f50}
-   [`m`{.markup--code .markup--li-code} --- Perform multiple line
    matching]{#4add}
-   [`s`{.markup--code .markup--li-code} --- Treat strings as a single
    line]{#a073}
-   [`x`{.markup--code .markup--li-code} --- Allow comments and
    whitespace in the pattern]{#482b}
-   [`U`{.markup--code .markup--li-code} --- Ungreedy pattern]{#f6ad}

### Brackets {#f430 .graf .graf--h3 .graf-after--li name="f430"}

-   [`[abc]`{.markup--code .markup--li-code} --- Find any of the
    characters between the brackets]{#aae1}
-   [`[^abc]`{.markup--code .markup--li-code} --- Find any character
    which is not in the brackets]{#e048}
-   [`[0-9]`{.markup--code .markup--li-code} --- Used to find any digit
    from 0 to 9]{#f9b5}
-   [`[A-z]`{.markup--code .markup--li-code} --- Find any character from
    uppercase A to lowercase z]{#ac71}
-   [`(a|b|c)`{.markup--code .markup--li-code} --- Find any of the
    alternatives separated with `|`{.markup--code
    .markup--li-code}]{#6fce}

### Metacharacters {#ef6e .graf .graf--h3 .graf-after--li name="ef6e"}

-   [`.`{.markup--code .markup--li-code} --- Find a single character,
    except newline or line terminator]{#dcd6}
-   [`\w`{.markup--code .markup--li-code} --- Word character]{#e944}
-   [`\W`{.markup--code .markup--li-code} --- Non-word character]{#c4bf}
-   [`\d`{.markup--code .markup--li-code} --- A digit]{#7b81}
-   [`\D`{.markup--code .markup--li-code} --- A non-digit
    character]{#a533}
-   [`\s`{.markup--code .markup--li-code} --- Whitespace
    character]{#1fcc}
-   [`\S`{.markup--code .markup--li-code} --- Non-whitespace
    character]{#374c}
-   [`\b`{.markup--code .markup--li-code} --- Find a match at the
    beginning/end of a word]{#72d0}
-   [`\B`{.markup--code .markup--li-code} --- A match not at the
    beginning/end of a word]{#2d38}
-   [`\0`{.markup--code .markup--li-code} --- NUL character]{#859b}
-   [`\n`{.markup--code .markup--li-code} --- A new line
    character]{#df4d}
-   [`\f`{.markup--code .markup--li-code} --- Form feed
    character]{#5acd}
-   [`\r`{.markup--code .markup--li-code} --- Carriage return
    character]{#833f}
-   [`\t`{.markup--code .markup--li-code} --- Tab character]{#4f31}
-   [`\v`{.markup--code .markup--li-code} --- Vertical tab
    character]{#e618}
-   [`\xxx`{.markup--code .markup--li-code} --- The character specified
    by an octal number xxx]{#dcfc}
-   [`\xdd`{.markup--code .markup--li-code} --- Character specified by a
    hexadecimal number dd]{#cf5e}
-   [`\uxxxx`{.markup--code .markup--li-code} --- The Unicode character
    specified by a hexadecimal number XXXX]{#978f}

### Quantifiers {#ab62 .graf .graf--h3 .graf-after--li name="ab62"}

-   [`n+`{.markup--code .markup--li-code} --- Matches any string that
    contains at least one n]{#e4cf}
-   [`n*`{.markup--code .markup--li-code} --- Any string that contains
    zero or more occurrences of n]{#be07}
-   [`n?`{.markup--code .markup--li-code} --- A string that contains
    zero or one occurrence of n]{#4a93}
-   [`n{X}`{.markup--code .markup--li-code} --- String that contains a
    sequence of X n's]{#91f0}
-   [`n{X,Y}`{.markup--code .markup--li-code} --- Strings that contain a
    sequence of X to Y n's]{#097b}
-   [`n{X,}`{.markup--code .markup--li-code} --- Matches any string that
    contains a sequence of at least X n's]{#e9f2}
-   [`n$`{.markup--code .markup--li-code} --- Any string with n at the
    end of it]{#15b3}
-   [`^n`{.markup--code .markup--li-code} --- String with n at the
    beginning of it]{#5fc9}
-   [`?=n`{.markup--code .markup--li-code} --- Any string that is
    followed by a specific string n]{#2b42}
-   [`?!n`{.markup--code .markup--li-code} --- String that is not
    followed by a specific string ni]{#6ffa}

### Numbers and Math {#20fa .graf .graf--h3 .graf-after--li name="20fa"}

In JavaScript,  ou can also work with numbers, constants and perform
mathematical functions.

### Number Properties {#2440 .graf .graf--h3 .graf-after--p name="2440"}

-   [`MAX_VALUE`{.markup--code .markup--li-code} --- The maximum numeric
    value representable in JavaScript]{#3554}
-   [`MIN_VALUE`{.markup--code .markup--li-code} --- Smallest positive
    numeric value representable in JavaScript]{#c55d}
-   [`NaN`{.markup--code .markup--li-code} --- The "Not-a-Number"
    value]{#49e0}
-   [`NEGATIVE_INFINITY`{.markup--code .markup--li-code} --- The
    negative Infinity value]{#3024}
-   [`POSITIVE_INFINITY`{.markup--code .markup--li-code} --- Positive
    Infinity value]{#0bf4}

### Number Methods {#7d65 .graf .graf--h3 .graf-after--li name="7d65"}

-   [`toExponential()`{.markup--code .markup--li-code} --- Returns the
    string with a rounded number written as exponential notation]{#9478}
-   [`toFixed()`{.markup--code .markup--li-code} --- Returns the string
    of a number with a specified number of decimals]{#2ad0}
-   [`toPrecision()`{.markup--code .markup--li-code} --- String of a
    number written with a specified length]{#d464}
-   [`toString()`{.markup--code .markup--li-code} --- Returns a number
    as a string]{#2244}
-   [`valueOf()`{.markup--code .markup--li-code} --- Returns a number as
    a number]{#bc1e}

### Math Properties {#08ba .graf .graf--h3 .graf-after--li name="08ba"}

-   [`E`{.markup--code .markup--li-code} --- Euler's number]{#9f68}
-   [`LN2`{.markup--code .markup--li-code} --- The natural logarithm of
    2]{#a4df}
-   [`LN10`{.markup--code .markup--li-code} --- Natural logarithm of
    10]{#0f06}
-   [`LOG2E`{.markup--code .markup--li-code} --- Base 2 logarithm of
    E]{#1a92}
-   [`LOG10E`{.markup--code .markup--li-code} --- Base 10 logarithm of
    E]{#42e7}
-   [`PI`{.markup--code .markup--li-code} --- The number PI]{#1fbe}
-   [`SQRT1_2`{.markup--code .markup--li-code} --- Square root of
    1/2]{#2a56}
-   [`SQRT2`{.markup--code .markup--li-code} --- The square root of
    2]{#aab4}

### Math Methods {#75f9 .graf .graf--h3 .graf-after--li name="75f9"}

-   [`abs(x)`{.markup--code .markup--li-code} --- Returns the absolute
    (positive) value of x]{#8836}
-   [`acos(x)`{.markup--code .markup--li-code} --- The arccosine of x,
    in radians]{#ddb9}
-   [`asin(x)`{.markup--code .markup--li-code} --- Arcsine of x, in
    radians]{#a0c3}
-   [`atan(x)`{.markup--code .markup--li-code} --- The arctangent of x
    as a numeric value]{#c2ca}
-   [`atan2(y,x)`{.markup--code .markup--li-code} --- Arctangent of the
    quotient of its arguments]{#8b93}
-   [`ceil(x)`{.markup--code .markup--li-code} --- Value of x rounded up
    to its nearest integer]{#b103}
-   [`cos(x)`{.markup--code .markup--li-code} --- The cosine of x (x is
    in radians)]{#c68a}
-   [`exp(x)`{.markup--code .markup--li-code} --- Value of Ex]{#d480}
-   [`floor(x)`{.markup--code .markup--li-code} --- The value of x
    rounded down to its nearest integer]{#2954}
-   [`log(x)`{.markup--code .markup--li-code} --- The natural logarithm
    (base E) of x]{#ff4d}
-   [`max(x,y,z,...,n)`{.markup--code .markup--li-code} --- Returns the
    number with the highest value]{#b6a9}
-   [`min(x,y,z,...,n)`{.markup--code .markup--li-code} --- Same for the
    number with the lowest value]{#dfb0}
-   [`pow(x,y)`{.markup--code .markup--li-code} --- X to the power of
    y]{#a6f1}
-   [`random()`{.markup--code .markup--li-code} --- Returns a random
    number between 0 and 1]{#8851}
-   [`round(x)`{.markup--code .markup--li-code} --- The value of x
    rounded to its nearest integer]{#d32e}
-   [`sin(x)`{.markup--code .markup--li-code} --- The sine of x (x is in
    radians)]{#fe9a}
-   [`sqrt(x)`{.markup--code .markup--li-code} --- Square root of
    x]{#c244}
-   [`tan(x)`{.markup--code .markup--li-code} --- The tangent of an
    angle]{#b5ef}

### Dealing with Dates in JavaScript {#81f5 .graf .graf--h3 .graf-after--li name="81f5"}

You can also work with and modify dates and time with JavaScript. This
is the next chapter in the JavaScript cheat sheet.

### Setting Dates {#9b09 .graf .graf--h3 .graf-after--p name="9b09"}

-   [`Date()`{.markup--code .markup--li-code} --- Creates a new date
    object with the current date and time]{#b187}
-   [`Date(2017, 5, 21, 3, 23, 10, 0)`{.markup--code
    .markup--li-code} --- Create a custom date object. The numbers
    represent a year, month, day, hour, minutes, seconds, milliseconds.
    You can omit anything you want except for a year and month.]{#42f8}
-   [`Date("2017-06-23")`{.markup--code .markup--li-code} --- Date
    declaration as a string]{#4e80}

### Pulling Date and Time Values {#b746 .graf .graf--h3 .graf-after--li name="b746"}

-   [`getDate()`{.markup- code .markup--li-code} --- Get the day of the
    month as a number (1-31)]{#465e}
-   [`getDay()`{.markup--code .markup--li-code} --- The weekday as a
    number (0-6)]{#1b08}
-   [`getFullYear()`{.markup--code .markup--li-code} --- Year as a
    four-digit number (yyyy)]{#6d9e}
-   [`getHours()`{.markup--code .markup--li-code} --- Get the hour
    (0-23)]{#a216}
-   [`getMilliseconds()`{.markup--code .markup--li-code} --- The
    millisecond (0-999)]{#388a}
-   [`getMinutes()`{.markup--code .markup--li-code} --- Get the minute
    (0-59)]{#a97f}
-   [`getMonth()`{.markup--code .markup--li-code} --- Month as a number
    (0-11)]{#2427}
-   [`getSeconds()`{.markup--code .markup--li-code} --- Get the second
    (0-59)]{#b964}
-   [`getTime()`{.markup--code .markup--li-code} --- Get the
    milliseconds since January 1, 1970]{#505d}
-   [`getUTCDate()`{.markup--code .markup--li-code} --- The day (date)
    of the month in the specified date according to universal time (also
    available for day, month, full year, hours, minutes etc.)]{#7c14}
-   [`parse`{.markup--code .markup--li-code} --- Parses a string
    representation of a date and returns the number of milliseconds
    since January 1, 1970]{#d6b6}

### Set Part of a Date {#ec7c .graf .graf--h3 .graf-after--li name="ec7c"}

-   [`setDate()`{ markup--code .markup--li-code} --- Set the day as a
    number (1-31)]{#9a97}
-   [`setFullYear()`{.markup--code .markup--li-code} --- Sets the year
    (optionally month and day)]{#d4f0}
-   [`setHours()`{.markup--code .markup--li-code} --- Set the hour
    (0-23)]{#1a45}
-   [`setMilliseconds()`{.markup--code .markup--li-code} --- Set
    milliseconds (0-999)]{#8020}
-   [`setMinutes()`{.markup--code .markup--li-code} --- Sets the minutes
    (0-59)]{#7feb}
-   [`setMonth()`{.markup--code .markup--li-code} --- Set the month
    (0-11)]{#d7ca}
-   [`setSeconds()`{.markup--code .markup--li-code} --- Sets the seconds
    (0-59)]{#795d}
-   [`setTime()`{.markup--code .markup--li-code} --- Set the time
    (milliseconds since January 1, 1970)]{#1d7f}
-   [`setUTCDate()`{.markup--code .markup--li-code} --- Sets the day of
    the month for a specified date according to universal time (also
    available for day, month, full year, hours, minutes etc.)]{#78e1}

### DOM Mode {#ad01 .graf .graf--h3 .graf-after--li name="ad01"}

The DOM is the [Document Object
Model](https://en.wikipedia.org/wiki/Document_Object_Model)  of a page. It is the code of the structure of a
webpage. JavaScript comes with a lot of different ways to create and
manipulate HTML elements (called nodes).

### Node Properties {#3ace .graf .graf--h3 .graf-after--p name="3ace"}

-   [`attributes`{.markup--code .markup--li-code} --- Returns a live
    collection of all attributes registered to an element]{#cfb7}
-   [`baseURI`{.markup--code .markup--li-code} --- Provides the absolute
    base URL of an HTML element]{#6138}
-   [`childNodes`{.markup--code .markup--li-code} --- Gives a collection
    of an element's child nodes]{#34da}
-   [`firstChild`{.markup--code .markup--li-code} --- Returns the first
    child node of an element]{#58ec}
-   [`lastChild`{.markup--code .markup--li-code} --- The last child node
    of an element]{#2f34}
-   [`nextSibling`{.markup--code .markup--li-code} --- Gives you the
    next node at the same node tree level]{#fdea}
-   [`nodeName`{.markup--code .markup--li-code} ---Returns the name of a
    node]{#1ca4}
-   [`nodeType`{.markup--code .markup--li-code} --- Returns the type of
    a node]{#d4ee}
-   [`nodeValue`{.markup--code .markup--li-code} --- Sets or returns the
    value of a node]{#cd22}
-   [`ownerDocument`{.markup--code .markup--li-code} --- The top-level
    document object for this node]{#a9a3}
-   [`parentNode`{.markup--code .markup--li-code} --- Returns the parent
    node of an element]{#51b4}
-   [`previousSibling`{.markup--code .markup--li-code} --- Returns the
    node immediately preceding the current one]{#31ef}
-   [`textContent`{.markup--code .markup--li-code} --- Sets or returns
    the textual content of a node and its descendants]{#ec40}

### Node Methods {#6265 .graf .graf--h3 .graf-after--li name="6265"}

-   [`appendChild()`{.markup--code .markup--li-code} --- Adds a new
    child node to an element as the last child node]{#7f05}
-   [`cloneNode()`{.markup--code .markup--li-code} --- Clones an HTML
    element]{#3b3a}
-   [`compareDocumentPosition()`{.markup--code
    .markup--li-code} --- Compares the document position of two
    elements]{#661c}
-   [`getFeature()`{.markup--code .markup--li-code} --- Returns an
    object which implements the APIs of a specified feature]{#86d2}
-   [`hasAttributes()`{.markup--code .markup--li-code} --- Returns true
    if an element has any attributes, otherwise false]{#059c}
-   [`hasChildNodes()`{.markup--code .markup--li-code} --- Returns true
    if an element has any child nodes, otherwise false]{#5d0d}
-   [`insertBefore()`{.markup--code .markup--li-code} --- Inserts a new
    child node before a specified, existing child node]{#4c86}
-   [`isDefaultNamespace()`{.markup--code .markup--li-code} --- Returns
    true if a specified namespaceURI is the default, otherwise
    false]{#4b38}
-   [`isEqualNode()`{.markup--code .markup--li-code} --- Checks if two
    elements are equal]{#8c4e}
-   [`isSameNode()`{.markup--code .markup--li-code} --- Checks if two
    elements are the same node]{#2f6a}
-   [`isSupported()`{.markup--code .markup--li-code} --- Returns true if
    a specified feature is supported on the element]{#944e}
-   [`lookupNamespaceURI()`{.markup--code .markup--li-code} --- Returns
    the namespace URI associated with a given node]{#b7ef}
-   [`lookupPrefix()`{.markup--code .markup--li-code} --- Returns a
    DOMString containing the prefix for a given namespace URI if
    present]{#5f59}
-   [`normalize()`{.markup--code .markup--li-code} --- Joins adjacent
    text nodes and removes empty text nodes in an element]{#6670}
-   [`removeChild()`{.markup--code .markup--li-code} --- Removes a child
    node from an element]{#c80a}
-   [`replaceChild()`{.markup--code .markup--li-code} --- Replaces a
    child node in an element]{#8108}

### Element Methods {#4b24 .graf .graf--h3 .graf-after--li name="4b24"}

-   [`getAttribute()`{.markup--code .markup--li-code} --- Returns the
    specified attribute value of an element node]{#9530}
-   [`getAttributeNS()`{.markup--code .markup--li-code} --- Returns
    string value of the attribute with the specified namespace and
    name]{#0dd1}
-   [`getAttributeNode()`{.markup--code .markup--li-code} --- Gets the
    specified attribute node]{#8a0d}
-   [`getAttributeNodeNS()`{.markup--code .markup--li-code} --- Returns
    the attribute node for the attribute with the given namespace and
    name]{#fc41}
-   [`getElementsByTagName()`{.markup--code
    .markup--li-code} --- Provides a collection of all child elements
    with the specified tag name]{#2a3e}
-   [`getElementsByTagNameNS()`{.markup--code
    .markup--li-code} --- Returns a live HTMLCollection of elements with
    a certain tag name belonging to the given namespace]{#11a4}
-   [`hasAttribute()`{.markup--code .markup--li-code} --- Returns true
    if an element has any attributes, otherwise false]{#e2ae}
-   [`hasAttributeNS()`{.markup--code .markup--li-code} --- Provides a
    true/false value indicating whether the current element in a given
    namespace has the specified attribute]{#17dd}
-   [`removeAttribute()`{.markup--code .markup--li-code} --- Removes a
    specified attribute from an element]{#f28c}
-   [`removeAttributeNS()`{.markup--code .markup--li-code} --- Removes
    the specified attribute from an element within a certain
    namespace]{#8cd0}
-   [`removeAttributeNode()`{.markup--code .markup--li-code} --- Takes
    away a specified attribute node and returns the removed node]{#e6c3}
-   [`setAttribute()`{.markup--code .markup--li-code} --- Sets or
    changes the specified attribute to a specified value]{#a7b9}
-   [`setAttributeNS()`{.markup--code .markup--li-code} --- Adds a new
    attribute or changes the value of an attribute with the given
    namespace and name]{#bf42}
-   [`setAttributeNode()`{.markup--code .markup--li-code} --- Sets or
    changes the specified attribute node]{#2322}
-   [`setAttributeNodeNS()`{.markup--code .markup--li-code} --- Adds a
    new namespaced attribute node to an element]{#0540}

### Working with the User Browser {#a1d1 .graf .graf--h3 .graf-after--li name="a1d1"}

Besides HTML elements, Ja aScript is also able to take into account the
user browser and incorporate its properties into the code.

### Window Properties {#7362 .graf .graf--h3 .graf-after--p name="7362"}

-   [`closed`{.markup--code .markup--li-code} --- Checks whether a
    window has been closed or not and returns true or false]{#1b1f}
-   [`defaultStatus`{.markup--code .markup--li-code} --- Sets or returns
    the default text in the status bar of a window]{#805f}
-   [`document`{.markup--code .markup--li-code} --- Returns the document
    object for the window]{#458e}
-   [`frames`{.markup--code .markup--li-code} --- Returns all
    `<iframe>`{.markup--code .markup--li-code} elements in the current
    window]{#93ee}
-   [`history`{.markup--code .markup--li-code} --- Provides the History
    object for the window]{#c42a}
-   [`innerHeight`{.markup--code .markup--li-code} --- The inner height
    of a window's content area]{#3a5d}
-   [`innerWidth`{.markup--code .markup--li-code} --- The inner width of
    the content area]{#c609}
-   [`length`{.markup--code .markup--li-code} --- Find out the number of
    `<iframe>`{.markup--code .markup--li-code} elements in the
    window]{#5167}
-   [`location`{.markup--code .markup--li-code} --- Returns the location
    object for the window]{#4f05}
-   [`name`{.markup--code .markup--li-code} --- Sets or returns the name
    of a window]{#4125}
-   [`navigator`{.markup--code .markup--li-code} --- Returns the
    Navigator object for the window]{#3d7f}
-   [`opener`{.markup--code .markup--li-code} --- Returns a reference to
    the window that created the window]{#c601}
-   [`outerHeight`{.markup--code .markup--li-code} --- The outer height
    of a window, including toolbars/scrollbars]{#734e}
-   [`outerWidth`{.markup--code .markup--li-code} --- The outer width of
    a window, including toolbars/scrollbars]{#9b0a}
-   [`pageXOffset`{.markup--code .markup--li-code} --- Number of pixels
    the current document has been scrolled horizontally]{#3140}
-   [`pageYOffset`{.markup--code .markup--li-code} --- Number of pixels
    the document has been scrolled vertically]{#0bcc}
-   [`parent`{.markup--code .markup--li-code} --- The parent window of
    the current window]{#a2af}
-   [`screen`{.markup--code .markup--li-code} --- Returns the Screen
    object for the window]{#3634}
-   [`screenLeft`{.markup--code .markup--li-code} --- The horizontal
    coordinate of the window (relative to the screen)]{#9566}
-   [`screenTop`{.markup--code .markup--li-code} --- The vertical
    coordinate of the window]{#1245}
-   [`screenX`{.markup--code .markup--li-code} --- Same as
    `screenLeft`{.markup--code .markup--li-code} but needed for some
    browsers]{#5656}
-   [`screenY`{.markup--code .markup--li-code} --- Same as
    `screenTop`{.markup--code .markup--li-code} but needed for some
    browsers]{#21e7}
-   [`self`{.markup--code .markup--li-code} --- Returns the current
    window]{#d000}
-   [`status`{.markup--code .markup--li-code} --- Sets or returns the
    text in the status bar of a window]{#99af}
-   [`top`{.markup--code .markup--li-code} --- Returns the topmost
    browser window]{#0a0f}

### Window Methods {#496d .graf .graf--h3 .graf-after--li name="496d"}

-   [`alert()`{.markup--code .markup--li-code} --- Displays an alert box
    with a message and an OK button]{#5715}
-   [`blur()`{.markup--code .markup--li-code} --- Removes focus from the
    current window]{#4afc}
-   [`clearInterval()`{.markup--code .markup--li-code} --- Clears a
    timer set with `setInterval()`{.markup--code
    .markup--li-code}]{#ef9a}
-   [`clearTimeout()`{.markup--code .markup--li-code} --- Clears a timer
    set with `setTimeout()`{.markup--code .markup--li-code}]{#fa72}
-   [`close()`{.markup--code .markup--li-code} --- Closes the current
    window]{#7bce}
-   [`confirm()`{.markup--code .markup--li-code} --- Displays a dialogue
    box with a message and an *OK* and *Cancel* button]{#ccbf}
-   [`focus()`{.markup--code .markup--li-code} --- Sets focus to the
    current window]{#e6f2}
-   [`moveBy()`{.markup--code .markup--li-code} --- Moves a window
    relative to its current position]{#5eb7}
-   [`moveTo()`{.markup--code .markup--li-code} --- Moves a window to a
    specified position]{#16b6}
-   [`open()`{.markup--code .markup--li-code} --- Opens a new browser
    window]{#32d8}
-   [`print()`{.markup--code .markup--li-code} --- Prints the content of
    the current window]{#4198}
-   [`prompt()`{.markup--code .markup--li-code} --- Displays a dialogue
    box that prompts the visitor for input]{#3bec}
-   [`resizeBy()`{.markup--code .markup--li-code} --- Resizes the window
    by the specified number of pixels]{#e16a}
-   [`resizeTo()`{.markup--code .markup--li-code} --- Resizes the window
    to a specified width and height]{#31c8}
-   [`scrollBy()`{.markup--code .markup--li-code} --- Scrolls the
    document by a specified number of pixels]{#6c44}
-   [`scrollTo()`{.markup--code .markup--li-code} --- Scrolls the
    document to specified coordinates]{#959f}
-   [`setInterval()`{.markup--code .markup--li-code} --- Calls a
    function or evaluates an expression at specified intervals]{#704a}
-   [`setTimeout()`{.markup--code .markup--li-code} --- Calls a function
    or evaluates an expression after a specified interval]{#87c3}
-   [`stop()`{.markup--code .markup--li-code} --- Stops the window from
    loading]{#1cde}

### Screen Properties {#8cf2 .graf .graf--h3 .graf-after--li name="8cf2"}

-   [`availHeight`{.markup--code .markup--li-code} --- Returns the
    height of the screen (excluding the Windows Taskbar)]{#7e50}
-   [`availWidth`{.markup--code .markup--li-code} --- Returns the width
    of the screen (excluding the Windows Taskbar)]{#d7ea}
-   [`colorDepth`{.markup--code .markup--li-code} --- Returns the bit
    depth of the color palette for displaying images]{#4feb}
-   [`height`{.markup--code .markup--li-code} --- The total height of
    the screen]{#f2f7}
-   [`pixelDepth`{.markup--code .markup--li-code} --- The color
    resolution of the screen in bits per pixel]{#8e22}
-   [`width`{.markup--code .markup--li-code} --- The total width of the
    screen]{#bc5a}

### JavaScript Events {#4828 .graf .graf--h3 .graf-after--li name="4828"}

Events are things that can happen to HTML elements and are performed by
the user. The programming language can listen for these events and
trigger actions in the code. No JavaScript cheat sheet would be complete
without them.

### Mouse {#9d10 .graf .graf--h3 .graf-after--p name="9d10"}

-   [`onclick`{.markup--code .markup--li-code} --- The event occurs when
    the user clicks on an element]{#9546}
-   [`oncontextmenu`{.markup--code .markup--li-code} --- User
    right-clicks on an element to open a context menu]{#9b50}
-   [`ondblclick`{.markup--code .markup--li-code} --- The user
    double-clicks on an element]{#147a}
-   [`onmousedown`{.markup--code .markup--li-code} --- User presses a
    mouse button over an element]{#3720}
-   [`onmouseenter`{.markup--code .markup--li-code} --- The pointer
    moves onto an element]{#a40a}
-   [`onmouseleave`{.markup--code .markup--li-code} --- Pointer moves
    out of an element]{#345e}
-   [`onmousemove`{.markup--code .markup--li-code} --- The pointer is
    moving while it is over an element]{#79b1}
-   [`onmouseover`{.markup--code .markup--li-code} --- When the pointer
    is moved onto an element or one of its children]{#fa70}
-   [`onmouseout`{.markup--code .markup--li-code} --- User moves the
    mouse pointer out of an element or one of its children]{#94f8}
-   [`onmouseup`{.markup--code .markup--li-code} --- The user releases a
    mouse button while over an element]{#486e}

### Keyboard {#0fc7 .graf .graf--h3 .graf-after--li name="0fc7"}

-   [`onkeydown`{.markup--code .markup--li-code} --- When the user is
    pressing a key down]{#6a8f}
-   [`onkeypress`{.markup--code .markup--li-code} --- The moment the
    user starts pressing a key]{#0647}
-   [`onkeyup`{.markup--code .markup--li-code} --- The user releases a
    key]{#ff0f}

### Frame {#5462 .graf .graf--h3 .graf-after--li name="5462"}

-   [`onabort`{.markup--code .markup--li-code} --- The loading of a
    media is aborted]{#9d29}
-   [`onbeforeunload`{.markup--code .markup--li-code} --- Event occurs
    before the document is about to be unloaded]{#baa4}
-   [`onerror`{.markup--code .markup--li-code} --- An error occurs while
    loading an external file]{#740e}
-   [`onhashchange`{.markup--code .markup--li-code} --- There have been
    changes to the anchor part of a URL]{#be95}
-   [`onload`{.markup--code .markup--li-code} --- When an object has
    loaded]{#d0fd}
-   [`onpagehide`{.markup--code .markup--li-code} --- The user navigates
    away from a webpage]{#65e5}
-   [`onpageshow`{.markup--code .markup--li-code} --- When the user
    navigates to a webpage]{#aae6}
-   [`onresize`{.markup--code .markup--li-code} --- The document view is
    resized]{#e3dc}
-   [`onscroll`{.markup--code .markup--li-code} --- An element's
    scrollbar is being scrolled]{#96c8}
-   [`onunload`{.markup--code .markup--li-code} --- Event occurs when a
    page has unloaded]{#f2fa}

### Form {#2a31 .graf .graf--h3 .graf-after--li name="2a31"}

-   [`onblur`{.markup--code .markup--li-code} --- When an element loses
    focus]{#731a}
-   [`onchange`{.markup--code .markup--li-code} --- The content of a
    form element changes (for `<input>`{.markup--code .markup--li-code},
    `<select>`{.markup--code .markup--li-code} and
    `<textarea>`{.markup--code .markup--li-code})]{#facf}
-   [`onfocus`{.markup--code .markup--li-code} --- An element gets
    focus]{#7a0a}
-   [`onfocusin`{.markup--code .markup--li-code} --- When an element is
    about to get focus]{#5188}
-   [`onfocusout`{.markup--code .markup--li-code} --- The element is
    about to lose focus]{#594a}
-   [`oninput`{.markup--code .markup--li-code} --- User input on an
    element]{#700e}
-   [`oninvalid`{.markup--code .markup--li-code} --- An element is
    invalid]{#dd0f}
-   [`onreset`{.markup--code .markup--li-code} --- A form is
    reset]{#6cad}
-   [`onsearch`{.markup--code .markup--li-code} --- The user writes
    something in a search field (for `<input="search">`{.markup--code
    .markup--li-code})]{#f4f2}
-   [`onselect`{.markup--code .markup--li-code} --- The user selects
    some text (for `<input>`{.markup--code .markup--li-code} and
    `<textarea>`{.markup--code .markup--li-code})]{#32a9}
-   [`onsubmit`{.markup--code .markup--li-code} --- A form is
    submitted]{#3e1d}

### Drag {#d109 .graf .graf--h3 .graf-after--li name="d109"}

-   [`ondrag`{.markup--code .markup--li-code} --- An element is
    dragged]{#912c}
-   [`ondragend`{.markup--code .markup--li-code} --- The user has
    finished dragging the element]{#6897}
-   [`ondragenter`{.markup--code .markup--li-code} --- The dragged
    element enters a drop target]{#8225}
-   [`ondragleave`{.markup--code .markup--li-code} --- A dragged element
    leaves the drop target]{#cf37}
-   [`ondragover`{.markup--code .markup--li-code} --- The dragged
    element is on top of the drop target]{#5bc3}
-   [`ondragstart`{.markup--code .markup--li-code} --- User starts to
    drag an element]{#2b0c}
-   [`ondrop`{.markup--code .markup--li-code} --- Dragged element is
    dropped on the drop target]{#8e24}

### Clipboard {#78c5 .graf .graf--h3 .graf-after--li name="78c5"}

-   [`oncopy`{.markup--code .markup--li-code} --- User copies the
    content of an element]{#c299}
-   [`oncut`{.markup--code .markup--li-code} --- The user cuts an
    element's content]{#267c}
-   [`onpaste`{.markup--code .markup--li-code} --- A user pastes the
    content in an element]{#e33c}

### Media {#2d40 .graf .graf--h3 .graf-after--li name="2d40"}

-   [`onabort`{.markup--code .markup--li-code} --- Media loading is
    aborted]{#e0ab}
-   [`oncanplay`{.markup--code .markup--li-code} --- The browser can
    start playing media (e.g. a file has buffered enough)]{#0758}
-   [`oncanplaythrough`{.markup--code .markup--li-code} --- The browser
    can play through media without stopping]{#0bc2}
-   [`ondurationchange`{.markup--code .markup--li-code} --- The duration
    of the media changes]{#4c27}
-   [`onended`{.markup--code .markup--li-code} --- The media has reached
    its end]{#aa9a}
-   [`onerror`{.markup--code .markup--li-code} --- Happens when an error
    occurs while loading an external file]{#25b8}
-   [`onloadeddata`{.markup--code .markup--li-code} --- Media data is
    loaded]{#cdf4}
-   [`onloadedmetadata`{.markup--code .markup--li-code} --- Metadata
    (like dimensions and duration) are loaded]{#edce}
-   [`onloadstart`{.markup--code .markup--li-code} --- The browser
    starts looking for specified media]{#7928}
-   [`onpause`{.markup--code .markup--li-code} --- Media is paused
    either by the user or automatically]{#159c}
-   [`onplay`{.markup--code .markup--li-code} --- The media has been
    started or is no longer paused]{#057f}
-   [`onplaying`{.markup--code .markup--li-code} --- Media is playing
    after having been paused or stopped for buffering]{#ce2a}
-   [`onprogress`{.markup--code .markup--li-code} --- The browser is in
    the process of downloading the media]{#2655}
-   [`onratechange`{.markup--code .markup--li-code} --- The playing
    speed of the media changes]{#a11c}
-   [`onseeked`{.markup--code .markup--li-code} --- User is finished
    moving/skipping to a new position in the media]{#f8bb}
-   [`onseeking`{.markup--code .markup--li-code} --- The user starts
    moving/skipping]{#9895}
-   [`onstalled`{.markup--code .markup--li-code} --- The browser is
    trying to load the media but it is not available]{#c636}
-   [`onsuspend`{.markup--code .markup--li-code} --- The browser is
    intentionally not loading media]{#6480}
-   [`ontimeupdate`{.markup--code .markup--li-code} --- The playing
    position has changed (e.g. because of fast forward)]{#f94b}
-   [`onvolumechange`{.markup--code .markup--li-code} --- Media volume
    has changed (including mute)]{#e96b}
-   [`onwaiting`{.markup--code .markup--li-code} --- Media paused but
    expected to resume (for example, buffering)]{#9fe8}

### Animation {#24b7 .graf .graf--h3 .graf-after--li name="24b7"}

-   [`animationend`{.markup--code .markup--li-code} --- A CSS animation
    is complete]{#4497}
-   [`animationiteration`{.markup--code .markup--li-code} --- CSS
    animation is repeated]{#fc16}
-   [`animationstart`{.markup--code .markup--li-code} --- CSS animation
    has started]{#0f40}

### Other {#31f2 .graf .graf--h3 .graf-after--li name="31f2"}

-   [`transitionend`{.markup--code .markup--li-code} --- Fired when a
    CSS transition has completed]{#614b}
-   [`onmessage`{.markup--code .markup--li-code} --- A message is
    received through the event source]{#5a40}
-   [`onoffline`{.markup--code .markup--li-code} --- The browser starts
    to work offline]{#0dad}
-   [`ononline`{.markup--code .markup--li-code} --- The browser starts
    to work online]{#058e}
-   [`onpopstate`{.markup--code .markup--li-code} --- When the window's
    history changes]{#090a}
-   [`onshow`{.markup--code .markup--li-code} --- A
    `<menu>`{.markup--code .markup--li-code} element is shown as a
    context menu]{#d940}
-   [`onstorage`{.markup--code .markup--li-code} --- A Web Storage area
    is updated]{#3062}
-   [`ontoggle`{.markup--code .markup--li-code} --- The user opens or
    closes the `<details>`{.markup--code .markup--li-code}
    element]{#2681}
-   [`onwheel`{.markup--code .markup--li-code} --- Mouse wheel rolls up
    or down over an element]{#6a40}
-   [`ontouchcancel`{.markup--code .markup--li-code} --- Screen-touch is
    interrupted]{#7178}
-   [`ontouchend`{.markup--code .markup--li-code} --- User's finger is
    removed from a touch-screen]{#bec5}
-   [`ontouchmove`{.markup--code .markup--li-code} --- A finger is
    dragged across the screen]{#3b60}
-   [`ontouchstart`{.markup--code .markup--li-code} --- A finger is
    placed on the touch-screen]{#3c0e}

### Errors {#8c94 .graf .graf--h3 .graf-after--li name="8c94"}

When working with JavaScript, different errors can occur. There are
several ways of handling them:

-   [`try`{.markup--code .markup--li-code} --- Lets you define a block
    of code to test for errors]{#54c9}
-   [`catch`{.markup--code .markup--li-code} --- Set up a block of code
    to execute in case of an error]{#cb14}
-   [`throw`{.markup--code .markup--li-code} --- Create custom error
    messages instead of the standard JavaScript errors]{#6a5b}
-   [`finally`{.markup--code .markup--li-code} --- Lets you execute
    code, after try and catch, regardless of the result]{#6aea}

### Error Name Values {#b821 .graf .graf--h3 .graf-after--li name="b821"}

JavaScript als  has a built-in error object. It has two properties:

-   [`name`{.markup--code .markup--li-code} --- Sets or returns the
    error name]{#ca3b}
-   [`message`{.markup--code .markup--li-code} --- Sets or returns an
    error message in a string from]{#7047}

The error property can return six different values as its name:

-   [`EvalError`{.markup--code .markup--li-code} --- An error has
    occurred in the `eval()`{.markup--code .markup--li-code}
    function]{#b389}
-   [`RangeError`{.markup--code .markup--li-code} --- A number is "out
    of range"]{#570c}
-   [`ReferenceError`{.markup--code .markup--li-code} --- An illegal
    reference has occurred]{#2352}
-   [`SyntaxError`{.markup--code .markup--li-code} --- A syntax error
    has occurred]{#5019}
-   [`TypeError`{.markup--code .markup--li-code} --- A type error has
    occurred]{#0527}
-   [`URIError`{.markup--code .markup--li-code} --- An
    `encodeURI()`{.markup--code .markup--li-code} error has
    occurred]{#02a3}

### Explicit Conversions {#c34b .graf .graf--h3 .graf-after--figure name="c34b"}

The simplest way to perform an explicit type conversion is to use the
`Boolean(), Number()` , and
`String()`  functions.

Any value other than `null ` or
`undefined               ` has
a` toString()`  method.

`n.toString(2);` 

binary

`n.toString(8);` 

octal

`n.toString(16);` 

hex

`let n                 = 123456.789;` 

`n.toFixed(0)` 

"123457"

`n.toFixed(5)` 

"123456.78900"

`n.toExponential(3)` 

"1.235e+5"

`n.toPrecision(7)` 

"123456.8"

`n.toPrecision(10)` 

"123456.7890"

`parseInt("3 blind mice")` 

3

`parseFloat(" 3.14 meters")` 

3.14

`parseInt("-12.34")` 

-12

`parseInt("0xFF")` 

255

### Types, Values, and Variables {#6d5b .graf .graf--h3 .graf-after--p name="6d5b"}

### Links {#6a7c .graf .graf--h3 .graf-after--h3 name="6a7c"}

**Resource**

**URL**

MDN

<https://developer.mozilla.org/en-US/docs/Web/JavaScript>

Run Snippets

<https://developers.google.com/web/tools/chrome-devtools/javascript/snippets>

### Explicit Conversions {#598d .graf .graf--h3 .graf-after--p name="598d"}

The simplest way to perform an explicit type conversion is to use the
`Boolean(), Number()` , and
`String()`  functions.

Any value other than `null ` or
`undefined               ` has
a` toString()`  method.

`n.toString(2);` 

binary

`n.toString(8);` 

octal

`n.toString(16);` 

hex

`let n                 = 123456.789;` 

`n.toFixed(0)` 

"123457"

`n.toFixed(5)` 

"123456.78900"

`n.toExponential(3)` 

"1.235e+5"

`n.toPrecision(7)` 

"123456.8"

`n.toPrecision(10)` 

"123456.7890"

`parseInt("3 blind mice")` 

3

`parseFloat(" 3.14 meters")` 

3.14

`parseInt("-12.34")` 

-12

`parseInt("0xFF")` 

255

`parseInt("0xff")` 

255

`parseInt("-0XFF")` 

-255

`parseInt("0.1")` 

0

`parseInt(".1")` 

NaN: integers can't start with "."

`parseFloat("$72.47")` 

NaN: numbers can't start with "\$"

Supply Radix

`parseInt("11", 2)` 

3

`parseInt("ff", 16)` 

255

`parseInt("077", 8)` 

63

### Conversion Idioms {#34e6 .graf .graf--h3 .graf-after--p name="34e6"}

`x +                 ""` 

`String(x)` 

`+x` 

`Number(x)` 

`x-0` 

`Number(x)` 

`!!x` 

`Boolean(x)` 

### Destructuring Assignment {#ec2e .graf .graf--h3 .graf-after--p name="ec2e"}

`let                 [x,y] = [1,2];` 

let x=1, y=2

`[x,y]                 = [x + 1,y + 1];` 

x = x + 1, y = y + 1

`[x,y]                 = [y,x];` 

Swap the value of the two variables

Destructuring assignment makes it easy to work with functions that
return arrays of values:

`let                 [r,theta] = toPolar(1.0, 1.0);` 

```
 {#8a5a .graf .graf--pre .graf-after--p name="8a5a"}
function toPolar(x, y) {
```


```
 {#9b20 .graf .graf--pre .graf-after--pre name="9b20"}
return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
```


```
 {#88c5 .graf .graf--pre .graf-after--pre name="88c5"}
}
```


Variable destructuring in loops:

`let o                 = { x: 1, y: 2 };` 

```
 {#9ad6 .graf .graf--pre .graf-after--p name="9ad6"}
for(const [name, value] of Object.entries(o)) {
```


```
 {#8df8 .graf .graf--pre .graf-after--pre name="8df8"}
console.log(name, value); // Prints "x 1" and "y 2"
```


```
 {#6096 .graf .graf--pre .graf-after--pre name="6096"}
}
```


**Note**: The `Object.entries()`  method
returns an array of a given object\'s own enumerable string-keyed
property `[key,                 value]` 
pairs, in the same order as that provided by a `for...in`  loop. (The only important difference is that a
`for...in`  loop enumerates properties in
the prototype chain as well).

The list of variables on the left can include extra commas to skip
certain values on the right

`[,x,,y] = [1,2,3,4];` 

x == 2; y == 4

**Note**: the last comma does not stand for a value.

To collect all unused or remaining values into a single variable when
destructuring an array, use three dots `(...) ` before the last variable name on the left-hand side

`let                 [x, ...y] = [1,2,3,4];` 

y == \[2,3,4\]

`let                 [first, ...rest] = "Hello";` 
 
first == "H"; rest ==\["e","l","l","o"\]

Destructuring assignment can also be performed when the righthand side
is an object value.
 
`let                 transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};` 

`let                 {r, g, b} = transparent;` 

r == 0.0; g == 0.0; b == 0.0

`const                 {sin, cos, tan} = Math;` 

sin=Math.sin, cos=Math.cos, tan=Math.tan

### Expressions and Operators {#26d4 .graf .graf--h3 .graf-after--p name="26d4"}

In JavaScript, the values `null ` and
`undefined               ` are the only
two values that do not have properties. In a regular property access
expression using . or \[\], you get a `TypeError`  if the expression on the left evaluates to
`null ` or `undefined` . You can use `?.` 
and `?.[]`  syntax to guard against errors
of this type.

You can also invoke a function using `?.()`  instead of `()` .

With the `new ?.()`  invocation syntax, if
the expression to the left of the `?.` 
evaluates to `null`  or
`undefined`{.mar up--code .markup--p-code}, then the entire invocation
expression evaluates to `undefined ` and
no exception is thrown.
 
Wri e the function invocation using `?.(),`  knowing that invocation will only happen if there is
actually a value to be invoked

```
 {#c4b1 .graf .graf--pre .graf-af er--p name="c4b1"}
function square(x, log) {
```

 
```
 {#6911 .graf .graf--pre .graf after--pre name="6911"}
log?.(x); // Call the function if there is one
```


```
 {#389e .graf .graf--pre .graf-after--pre name="389e"}
return x * x;
```
 

```
 {#a5af .graf .graf--pre .graf-after--pre name="a5af"}
}
```


Note that expression `x++`  is not always
the same as `x = x + 1` .The
`++`  operator never performs string
concatenation: it always converts its operand to a number and increments
it. If x is the string \"1\", `++x`  is
the number 2, but` x + 1`  is the string
\"11\".

JavaScript objects are compared by reference, not by value. An object is
equal to itself, but not to any other object. If two distinct objects
have the same number of properties, with the same names and values, they
are still not equal. Similarly, two arrays that have the same elements
in the same order are not equal to each other.

`NaN               ` value is never equal
to any other value, including itself! To check whether a value
`x`  is `NaN` , use `x !== ` , or the
global `isNaN()`  function.

If both values refer to the same object, array, or function, they are
equal. If they refer to different objects, they are not equal, even if
both objects have identical properties.

### Evaluating Expressions {#81e5 .graf .graf--h3 .graf-after--p name="81e5"}

JavaScript has the ability to interpret strings of JavaScript source
code, evaluating them to produce a value.

`eval("3+2")` 

Because of security issues, some web servers use the HTTP
"Content-Security-Policy  he der to
disable`                 eval()`  for an
entire website.

### First-Defined (??) {#7bc9 .graf .graf--h3 .graf-after--p name="7bc9"}

The first-defined operator `??`  evaluates
to its first defined operand: if its left operand is not
`null`  and not `undefined` , it returns that value.

`a ??                 b`  is equivalent to
`(a !== null && a !==                 undefined) ? a : b` 

`??`  is a useful alternative to
`||.`  The problem with this idiomatic use
is that zero, the empty string, and false are all `falsy ` values that may be perfectly valid in some
circumstances. In this code example, if `maxWidth ` is zero, that value will be ignored. But if we change
the `||`  operator to `??` , we end up with an expression where zero is a valid
value.

`let                 max = maxWidth || preferences.maxWidth || 500;` 
 
`let                 max = maxWidth ?? preferences.maxWidth ?? 500;` 

### delete Operator {#ab44 .graf .graf--h3 .graf-after--p name="ab44"}

De eting an array element leaves a "hole" in the array and does not
cha ge the array'  length. The resulting array i  sp rse.

### void Operator {#e555 .graf .graf--h3 .graf-after--p name="e555"}

Using the `void`  operator makes sense
only if the operand has side effects.

`let                 counter = 0;` 

`const                 increment = () => void count r++;` 

`increment()` 

undefined

`counter` 
  
1

### Statements {#545b .graf .graf--h3 .graf-after--p name="545b"}

Expressions are evaluated to produce a value, but statements are
executed to make something happen.

Expressions with side effects, such as assignments and function
invocations, can stand alone as statements, and when used this way are
known as expression statements.

A similar category of statements are the declaration statements that
declare new variables and define new functions.

If a function does not have any side effects, there is no sense in
calling it, unless it is part of a larger expression or an assignment
statement.

### for/of {#ea84 .graf .graf--h3 .graf-after--p name="ea84"}

The `for/of`  loop works with iterable
objects. Arrays, strings, sets, and maps are iterable.

Array

```
 {#bc42 .graf .graf--pre .graf-after--p name="bc42"}
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
```


```
 {#5c5a .graf .graf--pre .graf-after--pre name="5c5a"}
for(let element of data) {
```


```
 {#71ec .graf .graf--pre .graf-after--pre name="71ec"}
sum += element;
```


```
 {#fb51 .graf .graf--pre .graf-after--pre name="fb51"}
}
```


```
 {#d455 .graf .graf--pre .graf-after--pre name="d455"}
let text = "Na na na na na na na na";
```


```
 {#aa34 .graf .graf--pre .graf-after--pre name="aa34"}
let wordSet = new Set(text.split(" "));
```


```
 {#5520 .graf .graf--pre .graf-after--pre name="5520"}
let unique = [];
```


```
 {#97af .graf .graf--pre .graf-after--pre name="97af"}
for(let word of wordSet) {
```


```
 {#c4b9 .graf .graf--pre .graf-after--pre name="c4b9"}
unique.push(word);
```


```
 {#90ea .graf .graf--pre .graf-after--pre name="90ea"}
}
```


String

```
 {#938d .graf .graf--pre .graf-after--p name="938d"}
let frequency = {};
```


```
 {#b09b .graf .graf--pre .graf-after--pre name="b09b"}
for(let letter of "mississippi") {
```


```
 {#7d90 .graf .graf--pre .graf-after--pre name="7d90"}
if (frequency[letter]) {
```


```
 {#3583 .graf .graf--pre .graf-after--pre name="3583"}
frequency[letter]++;
```


```
 {#b4ff .graf .graf--pre .graf-after--pre name="b4ff"}
}
```


```
 {#eca3 .graf .graf--pre .graf-after--pre name="eca3"}
else {
```


```
 {#e54d .graf .graf--pre .graf-after--pre name="e54d"}
frequency[letter] = 1;
```


```
 {#2d47 .graf .graf--pre .graf-after--pre name="2d47"}
}
```


```
 {#d00e .graf .graf--pre .graf-after--pre name="d00e"}
}
```


Map

```
 {#4100 .graf .graf--pre .graf-after--p name="4100"}
let m = new Map([[1, "one"]]);
```


```
 {#eeec .graf .graf--pre .graf-after--pre name="eeec"}
for(let [key, value] of m) {
```


```
 {#2ad7 .graf .graf--pre .graf-after--pre name="2ad7"}
key // => 1
```


```
 {#3940 .graf .graf--pre .graf-after--pre name="3940"}
value // => "one"
```


```
 {#83c0 .graf .graf--pre .graf-after--pre name="83c0"}
}
```


Objects are not (by default) iterable. Attempting to use
`for/of`  on a regular object throws a
`TypeError`  at runtime.

If you want to iterate through the properties of an object, you can use
the `for/in`  loop.

Note: `for/of`  can be used on objects
with `Object.entries`  property, but it
will not pick properties from object's prototype.

### for/in {#13ef .graf .graf--h3 .graf-after--p name="13ef"}

`for/in`  loop works with any object after
the `in` .

```
 {#caeb .graf .graf--pre .graf-after--p name="caeb"}
for(let p in o) {
```


```
 {#b2f3 .graf .graf--pre .graf-after--pre name="b2f3"}
console.log(o[p]);
```


```
 {#e478 .graf .graf--pre .graf-after--pre name="e478"}
}
```


Note: this will enumerate array indexes, not values.

```
 {#a3fb .graf .graf--pre .graf-after--p name="a3fb"}
for(let i in a) console.log(i);
```


The `for/in`  loop does not actually
enumerate all properties of an object. It does not enumerate properties
whose names are symbols. And of the properties whose names are strings,
it only loops over the `enumerable` properties.

### with {#aa46 .graf .graf--h3 .graf-after--p name="aa46"}

The with statement runs a block of code as if the properties of a
specified object were variables in scope for that code.

The `with ` statement is forbidden in
strict mode and should be considered deprecated in non-strict mode:
avoid using it whenever possible.

```
 {#d465 .graf .graf--pre .graf-after--p name="d465"}
document.forms[0].address.value
```


```
 {#7acf .graf .graf--pre .graf-after--pre name="7acf"}
with(document.forms[0]) {
```


```
 {#f01c .graf .graf--pre .graf-after--pre name="f01c"}
name.value = "";
```


```
 {#4b21 .graf .graf--pre .graf-after--pre name="4b21"}
address.value = "";
```


```
 {#c628 .graf .graf--pre .graf-after--pre name="c628"}
email.value = "";
```


```
 {#dd29 .graf .graf--pre .graf-after--pre name="dd29"}
}
```


### debugger {#4303 .graf .graf--h3 .graf-after--pre name="4303"}

If a debugger program is available and is running, then an
implementation may (but is not required to) perform some kind of
debugging action.

In practice, this statement acts like a breakpoint: execution of
JavaScript code stops, and you can use the debugger to print variables'
values, examine the call stack, and so on.

Note that it is not enough to have a debugger available: the debugger
statement won't start the debugger for you. If you're using a web
browser and have the developer tools console open, however, this
statement will cause a breakpoint.

### use strict {#5c8c .graf .graf--h3 .graf-after--p name="5c8c"}

Strict mode is a restricted subset of the language that fixes important
language deficiencies and provides stronger error checking and increased
security.

The differences between strict mode and non-strict mode are the
following:

· The `with ` statement is not allowed in
strict mode.

· In strict mode, all variables must be declared: a
`ReferenceError ` is thrown if you assign
a value to an identifier that is not a declared variable, function,
function parameter, catch clause parameter, or property of the global
object.

· In non-strict mode, this implicitly declares a global variable by
adding a new property to the global object.

· In strict mode, functions invoked as functions (rather than as
methods) have a `this ` value of
undefined. (In non-strict mode, functions invoked as functions are
always passed the global object as their `this ` value.)

· A function is invoked with `call() ` or
`apply()`  , the
`this               ` value is exactly the
value passed as the first argument to `call()`  or `apply()` . (In
non-strict mode, `null ` and
`undefined               ` values are
replaced with the global object and non-object values are converted to
objects.)

· In strict mode, assignments to non-writable properties and attempts to
create new properties on non-extensible objects throw a
`TypeError` . (In non-strict mode, these
attempts fail silently.)

· In strict mode, code passed to `eval() ` cannot declare variables or define functions in the
caller's scope as it can in non-strict mode. Instead, variable and
function definitions live in a new scope created for the
`eval()` . This scope is discarded when
the `eval()`  returns.

· In strict mode, the Arguments object in a function holds a static copy
of the values passed to the function. In non-strict mode, the Arguments
object has "magical" behavior in which elements of the array and named
function parameters both refer to the same value.

· In strict mode, a `SyntaxError ` is
thrown if the `delete `{.markup--code .m rkup--p-code}operator is
followed by an unqualified identifier such as a variable, function, or
function parameter. (In non-strict mode, such a `delete ` expression does nothing and evaluates to false.)

· In strict mode, an attempt to delete a non-configurable property
throws a `TypeError` . (In non-strict
mode, the attempt fails and the delete expression evaluates to false.)

· In strict mode, it is a syntax error for an object literal to define
two or more properties by the same name. (In non-strict mode, no error
occurs.)

### Objects {#00da .graf .graf--h3 .graf-after--p name="00da"}

In addition to its name and value, each property has three property
attributes:

· The `writable ` attribute specifies
whether the value of the property can be set.

· The `enumerable ` attribute specifies
whether the property name is returned by a `for/in`  loop.

· The `configurable ` attribute specifies
whether the property can be deleted and whether its attributes can be
altered.

### Prototypes {#56ee .graf .graf--h3 .graf-after--p name="56ee"}

All objects created by object literals have the same prototype object,
`Object.prototype.` 

Objects created using the `new ` keyword
and a constructor invocation use the value of the prototype property of
the constructor function as their prototype.

Object created by `new Object()`  inherits
from `Object.prototype` , just as the
object created by `{}`  does. Similarly,
the object created by `new Array()`  uses
`Array.prototype`  as its prototype, and
the object created by` new Date()`  uses
`Date.prototype`  as its prototype.

Almost all objects have a prototype, but only a relatively small number
of objects have a `prototype               ` property. It is these objects with prototype properties
that define the prototypes for all the other objects.

Most built-in constructors (and most user-defined constructors) have a
prototype that inherits from `Object.prototype` .

`Date.prototype`  inherits properties from
`Object.prototype` , so a Date object
created by `new Date()`  inherits
properties from both `Date.prototype`  and
`Object.prototype` . This linked series of
prototype objects is known as a prototype chain.

### Creating Objects {#3fdb .graf .graf--h3 .graf-after--p name="3fdb"}

Objects can be created with object literals, with the
`new`  keyword, and with the
`Object.create()`  function.

Literal

`let                 empty = {};` 

`let                 point = { x: 0, y: 0 };` 

```
 {#e559 .graf .graf--pre .graf-after--p name="e559"}
let book = {
```


```
 {#8d0f .graf .graf--pre .graf-after--pre name="8d0f"}
"main title": "JavaScript",
```


```
 {#1b6d .graf .graf--pre .graf-after--pre name="1b6d"}
"sub-title": "The Definitive Guide",
```


```
 {#4686 .graf .graf--pre .graf-after--pre name="4686"}
for: "all audiences",
```


```
 {#1855 .graf .graf--pre .graf-after--pre name="1855"}
author: {
```


```
 {#6416 .graf .graf--pre .graf-after--pre name="6416"}
firstname: "David", .
```


```
 {#8991 .graf .graf--pre .graf-after--pre name="8991"}
surname: "Flanagan"
```


```
 {#78c2 .graf .graf--pre .graf-after--pre name="78c2"}
}
```


```
 {#f3b0 .graf .graf--pre .graf-after--pre name="f3b0"}
};
```


`new` 

`let o                 = new Object(); ` \
 `let a = new Array();               ` \
 `let d = new Date(); ` \
 `let r = new Map();` 

`Object.create` 

`let o3                 = Object.create(Object.prototype);` 

Use `Object.create`  to guard against
accidental modifications:

```
 {#b070 .graf .graf--pre .graf-after--p name="b070"}
let o = { x: "don't change this value" };
```


```
 {#cb49 .graf .graf--pre .graf-after--pre name="cb49"}
library.function(Object.create(o));
```


Note: the library function can modify the passed in object, but not the
original `o`  object

### Access Object Properties with an array (\[\]) notation {#d17d .graf .graf--h3 .graf-after--p name="d17d"}

```
 {#2019 .graf .graf--pre .graf-after--h3 name="2019"}
let addr = "";
```


```
 {#34a0 .graf .graf--pre .graf-after--pre name="34a0"}
for(let i = 0; i < 4; i++) {
```


 `` {#9414 .graf .graf--pre .graf-after--pre name="9414"}
 ddr += customer[`address${i}`] + "\n";
 ``

```
 {#9425 .graf .graf--pre .graf-after--pre name="9425"}
}
```


### Inheritance {#3e66 .graf .graf--h3 .graf-after--pre name="3e66"}

`let o                 = {};` 

`o.x =                 1;` 

`let p                 = Object.create(o);` 

`p.y =                 2;` 

`let q                 = Object.create(p);` 

`q.z =                 3;` 

Property `x`  and `y`  available on object `q` 
 
`q.x +                 q.y` 

### How to query for property which may be undefined {#9f04 .graf .graf--h3 .graf-after--p name="9f04"}

`surname = book && book.author &&                 book.author.surname;` 

`let                 surname = book?.author?.surname;` 

### Deleting properties {#8294 .graf .graf--h3 .graf-after--p name="8294"}

The `delete`  operator only deletes own
properties, not inherited ones. (To delete an inherited property, you
must delete it from the prototype object in which it is defined. Doing
this affects every object that inherits from that prototype.)

`delete`  does not remove properties that
have a `configurable ` attribute of false.

Certain properties of built-in objects are non-configurable, as are
properties of the global object created by variable declaration and
function declaration.

`delete                 Object.prototype` 

false: property is non-configurable

`var x                 = 1;` 

`delete                 globalThis.x` 

false: can't delete `this ` property

`function f() {}` 

`delete                 globalThis.f` 

false

`globalThis.x = 1;` 

`delete                 globalThis.x` 

true

### Testing properties {#5870 .graf .graf--h3 .graf-after--p name="5870"}

To check whether an object has a property with a given name. You can do
this with the `in`  operator, with the
`hasOwnProperty()`  and
`propertyIsEnumerable()`  methods, or
simply by querying the property

( `!=                 undefined` ).

### in & query {#91ed .graf .graf--h3 .graf-after--p name="91ed"}

`let o                 = { x: 1 };` 

`"x" in o` 

true

`o.x !== undefined` 

`"y" in o` 

false

`o.y !== undefined` 

`"toString" in o` 

true: o inherits a `toString ` property

`o.toString !== undefined` 

Advantage of using in: `in`  can
distinguish between properties that do not exist and properties that
exist but have been set to `undefined` .

### hasOwnProperty {#b67e .graf .graf--h3 .graf-after--p name="b67e"}

`let o                 = { x: 1 };` 

`o.hasOwnProperty("x")` 

true

`o.hasOwnProperty("y")` 

f lse

`o.hasOw Property("toString")` 

false: toString is an inherited property

The `propertyIsEnumerable()`  returns true
only if the named property is an own property and its
`enumerable`  attribute is true.

`let o                 = { x: 1 };` 

`o.propertyIsEnumerable("x")` 

true

`o.p opertyIsEnumerable("toString")` 

false: not an own property

`Object.prototype.propertyIsEnumerable("toString")` 

false: not  numerable

### Enumerating properties {#d2b9 .graf .graf--h3 .graf-after--p name="d2b9"}

To guard against enumerating inherited properties with
`for/in` , you can add an explicit check
inside the loop body:

```
 {#9aea .graf .graf--pre .graf-after--p name="9aea"}
for(let p in o) {
```


```
 {#f247 .graf .graf--pre .graf-after--pre name="f247"}
if (!o.hasOwnProperty(p)) continue;
```


```
 {#f32c .graf .graf--pre .graf-after--pre name="f32c"}
}
```


```
 {#0d71 .graf .graf--pre .graf-after--pre name="0d71"}
for(let p in o) {
```


```
 {#0d0d .graf .graf--pre .graf-after--pre name="0d0d"}
if (typeof o[p] === "function") continue;
```


```
 {#2d51 .graf .graf--pre .graf-after--pre name="2d51"}
}
```


Functions you can use to get an array of property names

· `Object.keys()`  returns an array of the
names of the enumerable own properties of an object. It does not include
non-enumerable properties, inherited properties, or properties whose
name is a Symbol.

· `Object.getOwnPropertyNames()`  works
like `Object.keys() ` but returns an array
of the names of nonenumerable own properties as well.

· `Object.getOwnPropertySymbols()` 
returns own properties whose names are Symbols, whether or not they are
enumerable.

· `Reflect.ownKeys()`  returns all own
property names, both enumerable and non-enumerable, and both string and
Symbol.

### Extending Objects {#02e5 .graf .graf--h3 .graf-after--p name="02e5"}

To copy the properties of one object to another object

```
 {#1cef .graf .graf--pre .graf-after--p name="1cef"}
let target = {x: 1}, source = {y: 2, z: 3};
```


```
 {#bfde .graf .graf--pre .graf-after--pre name="bfde"}
for(let key of Object.keys(source)) {
```


```
 {#c285 .graf .graf--pre .graf-after--pre name="c285"}
target[key] = source[key];
```


```
 {#56ce .graf .graf--pre .graf-after--pre name="56ce"}
}
```


One reason to assign properties from one object into another is when you
have an object that defines default values for many properties and you
want to copy those default properties into another object if a property
by that name does not already exist in that object. Using
`Object.assign()`  naively will not do
what you want:

```
 {#8409 .graf .graf--pre .graf-after--p name="8409"}
Object.assign(o, defaults);
```


overwrites everything in o with defaults

Instead, use one of the following:,

`o =                 Object.assign({}, defaults, o);` 

`o =                 {...defaults, ...o};` 

### Serializing Objects {#8b23 .graf .graf--h3 .graf-after--p name="8b23"}

The functions `JSON.stringify()` 
and` JSON.parse()`  serialize and restore
JavaScript objects.

`let o                 = {x: 1, y: {z: [false, null, ""]}};` 

`let s                 = JSON.stringify(o);` 

s == '{"x":1,"y":{"z":\[false,null,""\]}}'

`let p                 = JSON.parse(s);` 

p == {x: 1, y: {z: \[false,null, ""\]}}

### Object methods {#89c1 .graf .graf--h3 .graf-after--p name="89c1"}

`toString(), valueOf(), loLocaleString(), toJSON()` 

`let s                 = { x: 1, y: 1 }.toString();` 

s == "\[object Object\]"

### Extended Object Literal Syntax {#a7ab .graf .graf--h3 .graf-after--p name="a7ab"}

### Shorthand Properties {#3b07 .graf .graf--h3 .graf-after--h3 name="3b07"}

```
 {#b264 .graf .graf--pre .graf-after--h3 name="b264"}
let x = 1, y = 2;
```


```
 {#4ba9 .graf .graf--pre .graf-after--pre name="4ba9"}
let o = {
```


```
 {#f14c .graf .graf--pre .graf-after--pre name="f14c"}
x: x,
```
 

```
 {#e422 .graf .graf--pre .graf-after--pre name="e422"}
y: y
```


```
 {#cf99 .graf .graf--pre .graf-after--pre name="cf99"}
};
```


←\>

`let x                 = 1, y = 2;` \
 `let o = { x, y };` 

### Computer Property Names {#ef1d .graf .graf--h3 .graf-after--p name="ef1d"}

`const                 PROPERTY_NAME = "p1";` \
 `function                 computePropertyName() { return "p" + 2; }` 

```
 {#4a83 .graf .graf--pre .graf-after--p name="4a83"}
let o = {};
```


```
 {#e326 .graf .graf--pre .graf-after--pre name="e326"}
o[PROPERTY_NAME] = 1;
```


```
 {#9bb9 .graf .graf--pre .graf-after--pre name="9bb9"}
o[computePropertyName()] = 2;
```

 
←\>

```
 {#1aad .graf .graf--pre .graf-after--p name="1aad"}
let p = {
```


```
 {#2287 .graf .graf--pre .graf-after--pre name="2287"}
[PROPERTY_NAME]: 1,
```


```
 {#55ea .graf .graf--pre .graf-after--pre name="55ea"}
[computePropertyName()]: 2
```


```
 {#ef09 .graf .graf--pre .graf-after--pre name="ef09"}
};
```


### Symbols as Property Names {#41fa .graf .graf--h3 .graf-after--pre name="41fa"}

```
 {#cdc0 .graf .graf--pre .graf-after--h3 name="cdc0"}
const extension = Symbol("my extension symbol");
```


```
 {#5d27 .graf .graf--pre .graf-after--pre name="5d27"}
let o = {
 ``

```
 {#4425 .graf .gra --pre .graf-after--pre name="4425"}
[extension]: {}
```


 `` {#7309 .graf .graf--pre .graf-after--pre name="7309"}
};
```


```
 {#e65e .graf .graf--pre .graf-after--pre name="e65e"}
o[extension].x = 0;
```


Two Symbols created with the same string argument are still different
from one another.

The point of Symbols is not security, but to define a safe extension
mechanism for JavaScript objects. If you get an object from third-party
code that you do not control and need to add some of your own properties
to that object but want to be sure that your properties will not
conflict with any properties that may already exist on the object, you
can safely use Symbols as your property names.

### Spread Operator {#9b7d .graf .graf--h3 .graf-after--p name="9b7d"}

You can copy the properties of an existing object into a new object
using the "spread operator" ... inside an object literal:

`let                 position = { x: 0, y: 0 };` \
 `let dimensions = {                 width: 100, height: 75 };` \
 `let rect =                 { ...position, ...dimensions };` \
 `rect.x + rect.y +                 rect.width + rect.height` 

### Shorthand Methods {#e1c1 .graf .graf--h3 .graf-after--p name="e1c1"}

```
 {#5445 .graf .graf--pre .graf-after--h3 name="5445"}
let square = {
```

 
```
 {#b894 .graf .graf--pre .graf-after--pre name="b894"}
area: function() {
```


```
 {#7b4c .graf .graf--pre .graf-after--pre name="7b4c"}
return this.side * this.side; },
```


```
 {#02ab .graf .graf--pre .graf-after--pre name="02ab"}
side: 10
```


```
 {#cf0c .graf .graf--pre .graf-after--pre name="cf0c"}
};
```


←\>

```
 {#a96e .graf .graf--pre .graf-after--p name="a96e"}
let square = {
```


```
 {#9e5c .graf .graf--pre .graf-after--pre name="9e5c"}
area() {
```


```
 {#36e3 .graf .graf--pre .graf-after--pre name="36e3"}
return this.side * this.side; },
```


```
 {#ad0d .graf .graf--pre .graf-after--pre name="ad0d"}
side: 10
```


```
 {#e763 .graf .graf--pre .graf-after--pre name="e763"}
};
```


 hen you write a method using this shorthand syntax, the property name
can take any of the forms that are legal in an object literal: in
 ddition to a regular JavaScri t identifier like the name area above,
you can also use string literals and computed property names, which can
 nclude Symbol property names:

```
 {#87f8 .graf .graf--pre .graf-after--p name="87f8"}
const METHOD_NAME = "m";
```


```
 {#7d07 .graf .graf--pre .graf-after--pre name="7d07"}
const symbol = Symbol();
```


```
 {#5c35 .graf .graf--pre .graf-after--pre name="5c35"}
let weirdMethods = {
```


```
 {#27c2 .graf .graf--pre .graf-after--pre name="27c2"}
"method With Spaces"(x) { return x + 1; },
```


```
 {#32f4 .graf .graf--pre .graf-after--pre name="32f4"}
[METHOD_NAME](x) { return x + 2; },
```


```
 {#47a0 .graf .graf--pre .graf-after--pre name="47a0"}
[symbol](x) { return x + 3; }
```


```
 {#69dc .graf .graf--pre .graf-after--pre name="69dc"}
};
```


`weirdMethods["method With Spaces"](1)` 

2

`weirdMethods[METHOD_NAME](1)` 

3

`weirdMethods[symbol](1)` 

4

### Property Getters and Setters {#abb2 .graf .graf--h3 .graf-after--p name="abb2"}

```
 {#84b8 .graf .graf--pre .graf-after--h3 name="84b8"}
let o = {
```


```
 {#f1a0 .graf .graf--pre .graf-after--pre name="f1a0"}
dataProp: value,
```


```
 {#b2aa .graf .graf--pre .graf-after--pre name="b2aa"}
get accessorProp() { return this.dataProp; },
```


```
 {#5b2a .graf .graf--pre .graf-after--pre name="5b2a"}
set accessorProp(value) { this.dataProp = value; }
```


```
 {#b482 .graf .graf--pre .graf-after--pre name="b482"}
};
```


### Arrays {#59f1 .graf .graf--h3 .graf-after--pre name="59f1"}

### Creating Arrays {#f605 .graf .graf--h3 .graf-after--h3 name="f605"}

· Array literals

· The ... spread operator on an iterable object

· The `Array()`  constructor

· The `Array.of()`  and
`Array.from()`  factory methods

### Array literals {#a681 .graf .graf--h3 .graf-after--p name="a681"}

`let                 empty = [];` 

`let                 primes = [2, 3, 5, 7, 11];` 

`let                 misc = [ 1.1, true, "a", ];` 

`let b                 = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];` 

If an array literal contains multiple commas in a row, with no value
between, the array is sparse

`let                 count = [1,,3];` 

`let                 undefs = [,,];` 
 
Array literal syntax allows an optional trailing comma, so
`[,,]`  has a length of 2, not 3.

### The Spread Operator {#d37d .graf .graf--h3 .graf-after--p name="d37d"}

`let a                 = [1, 2, 3];` 

`let b                 = [0, ...a, 4];` 

\[0, 1, 2, 3, 4\]

create a copy of an array --- modifying the copy does not change the
original

`let                 original = [1,2,3];` \
 `let copy =                 [...original];` 

`let                 digits = [..."0123456789ABCDEF"];` 

\["0","1\","2\","3\","4\","5\","6\","7\","8\","9\","A","B","C","D","E","F"\]

`let                 letters = [..."hello world"];` 

\["h","e","l","l""o","","w","o""r","l","d"\]

`[...new Set(letters)]` 

\["h" "e","l","o","","w","r","d"\]

### Array.of() {#92ad .graf .graf--h3 .graf-after--p name="92ad"}

When the `Array()`  constructor function
is invoked with one numeric argument, it uses that argument as an array
length. But when invoked with more than one numeric argument, it treats
those arguments as elements for the array to be created. This means that
the `Array()`  constructor cannot be used
to create an array with a single numeric element.

`Array.of()` 

\[\]

`Array.of(10)` 

\[10\]

`Array.of(1,2,3)` 

\[1, 2, 3\]

### Array.from() {#1150 .graf .graf--h3 .graf-after--p name="1150"}

It is also a simple way to make a copy of an array:

`let                 copy = Array.from(original);` 

`Array.from()`  is also important because
it defines a w y to make a true-array copy of an array-like object.
Array-like objects are non-array objects that have a numeric length
property and have values stored with properties whose names happen to be
integers.
 
`let                 truearray = Array.from(arraylike);` 

`Array.from()`  also accepts an optional
second argument. If you pass a function as the second argument, then as
the new array is being built, each element from the source object will
be passed to the function you specify, and the return value of the
function will be stored in the array instead of the original value.

 ## Reading and Writing Array Elements {#a7fa .graf .graf--h3 .graf-after--p name="a7fa"}

What is special about arrays is that when you use property names that
are non-negative integers , the array automatically maintains the value
of the `length`  property for you.

JavaScript converts the numeric array index you specify to a
string --- the index 1 becomes the string "1", then uses that string as
a property name.

It is helpful to clearly distinguish an array index from an object
property name. All indexes are property names, but only property names
that are integers between 0 and 231 are indexes. All arrays are objects,
and you can create properties of any name on them. If you use properties
that are array indexes, however, arrays have the special behavior of
updating their `length`  property as
needed.

Note that you can index an array using numbers that are negative or that
are not integers. When you do this, the number is converted to a string,
and that string is used as the property name. Since the name is not a
non-negative integer, it is treated as a regular object property, not an
array index.

`a[-1.23] = true;` 

This creates a property named "-1.23"

`a["1000"] = 0;` 

This the 1001st element of the array

`a[1.000] = 1;` 

Array index 1. Same as a\[1\] = 1;

The fact that array indexes are simply a special type of object property
name means that JavaScript arrays have no notion of an "out of bounds"
error. When you try to query a nonexistent property of any object, you
don't get an error; you simply get `undefined` .

### Sparse Arrays {#6963 .graf .graf--h3 .graf-after--p name="6963"}

Sparse arrays can be created with the `Array()`  constructor or simply by assigning to an array index
larger than the current array length.

`a[1000] = 0;` 

Assignment adds one element but sets length to 1001.

you can also make an array sparse with the `delete`  operator.

Note that when you omit a value in an array literal (using repeated
commas as in `[1,,3]` ), the resulting
array is sparse, and the omitted elements simply do not exist

### Array Length {#fb2e .graf .graf--h3 .graf-after--p name="fb2e"}

if you set the length property to a nonnegative integer
`n`  smaller than its current value, any
array elements whose index is greater than or equal to n are deleted
from the array.

`a =                 [1,2 3,4,5];` 

`a.length = 3;` 

a is now \[1,2,3\].

`a.length = 0;` 

Delete all elements. a is \[\].

`a.length = 5;` 

Length is 5, but no elements, like `new Array(5)` 

You can also set the length property of an array to a value larger than
its current value. Doing this does not actually add any new elements to
the array; it simply creates a sparse area at the end of the array.

### Adding and Deleting Array Elements {#f3e6 .graf .graf--h3 .graf-after--p name="f3e6"}

`let a                 = [];` 

`a[0] =                 "zero";` 

`a[1] =                 "one";` 

add elements to it.

You can also use the `push()`  method to
add one or more values to the end of an array.

You can use the` unshift()`  method to
insert a value at the beginning of an array, shifting the existing array
elements to higher indexes.

The `pop()`  method is the opposite of
`push()` : it removes the last element of
the array and returns it, reducing the length of an array by 1.

Similarly, the `shift()`  method removes
and returns the first element of the array, reducing the length by 1 and
shifting all elements down to an index one lower than their current
index.

You can delete array elements with the delete operator

`let a                 = [1,2,3];` 

`delete                 a[2];` 

a now has no element at index 2

`2 in                 a` 

false

`a.length` 

3: delete does not affect array length

### Iterating Arrays {#0cd6 .graf .graf--h3 .graf-after--p name="0cd6"}

The easiest way to loop through each of the elements of an array (or any
iterable object) is with the `for/of` loop

```
 {#2f1a .graf .graf--pre .graf-after--p name="2f1a"}
let letters = [..."Hello world"];
```


```
 {#9677 .graf .graf--pre .graf-after--pre name="9677"}
let string = "";
```


```
 {#12e2 .graf .graf--pre .graf-after--pre name="12e2"}
for(let letter of letters) {
```


```
 {#ecb4 .graf .graf--pre .graf-after--pre name="ecb4"}
string += letter;
```


```
 {#b43d .graf .graf--pre .graf-after--pre name="b43d"}
} 
```


It has no special behavior for sparse arrays and simply returns
`undefined`  for any array elements that
do not exist.

If you want to use a `for/of`  loop for an
array and need to know the index of each array element, use the
`entries()`  method of the array

```
 {#ab80 .graf .graf--pre .graf-after--p name="ab80"}
let letters = [..."Hello world"];
```


```
 {#1f78 .graf .graf--pre .graf-after--pre name="1f78"}
let everyother = "";
```


```
 {#ba27 .graf .graf--pre .graf-after--pre name="ba27"}
for(let [index, letter] of letters.entries()) {
```


```
 {#2a4b .graf .graf--pre .graf-after--pre name="2a4b"}
if (index % 2 === 0) everyother += letter;
```


```
 {#0ffd .graf .graf--pre .graf-after--pre name="0ffd"}
}
```


Another good way to iterate arrays is with `forEach()` . This is not a new form of the for loop, but an array
method that offers a functional approach to array iteration.

```
 {#c7c9 .graf .graf--pre .graf-after--p name="c7c9"}
let letters = [..."Hello world"];
```


```
 {#b35b .graf .graf--pre .graf-after--pre name="b35b"}
let uppercase = "";
```


```
 {#97aa .graf .graf--pre .graf-after--pre name="97aa"}
letters.forEach(letter => {
```


```
 {#3721 .graf .graf--pre .graf-after--pre name="3721"}
uppercase += letter.toUpperCase();
```


```
 {#2330 .graf .graf--pre .graf-after--pre name="2330"}
});
```


You can also loop through the elements of an array with a
`for`  loop.

```
 {#bb93 .graf .graf--pre .graf-after--p name="bb93"}
for(let i = 0, len = letters.length; i < len; i++) {
```


```
 {#8c79 .graf .graf--pre .graf-after--pre name="8c79"}
// loop body
```


```
 {#2a08 .graf .graf--pre .graf-after--pre name="2a08"}
}
```


### Multidimensional Arrays {#c562 .graf .graf--h3 .graf-after--pre name="c562"}

### Create a multidimensional array {#c281 .graf .graf--h3 .graf-after--h3 name="c281"}

`let                 table = new Array(10);` 

```
 {#63e1 .graf .graf--pre .graf-after--p name="63e1"}
for(let i = 0; i < table.length; i++) {
```


```
 {#1841 .graf .graf--pre .graf-after--pre name="1841"}
table[i] = new Array(10);
```


```
 {#ee4b .graf .graf--pre .graf-after--pre name="ee4b"}
}
```


```
 {#9100 .graf .graf--pre .graf-after--pre name="9100"}
for(let row = 0; row < table.length; row++) {
```


```
 {#8ae4 .graf .graf--pre .graf-after--pre name="8ae4"}
for(let col = 0; col < table[row].length; col++) {
```


```
 {#556a .graf .graf--pre .graf-after--pre name="556a"}
table[row][col] = row * col;
```


```
 {#5969 .graf .graf--pre .graf-after--pre name="5969"}
}
```


```
 {#5496 .graf .graf--pre .graf-after--pre name="5496"}
}
```


### Array Methods {#27f5 .graf .graf--h3 .graf-after--pre name="27f5"}

### Array Iterator Methods {#d2e7 .graf .graf--h3 .graf-after--h3 name="d2e7"}

First, all of these methods accept a function as their first argument
and invoke that function once for each element (or some elements) of the
array. If the array is sparse, the function you pass is not invoked for
nonexistent elements. In most cases, the function you supply is invoked
with three arguments: the value of the array element, the index of the
array element, and the array itself.

FOREACH()

`let                 data = [1,2,3,4,5], sum = 0;` 

```
 {#512a .graf .graf--pre .graf-after--p name="512a"}
data.forEach(value => { sum += value; });
```


```
 {#cc5f .graf .graf--pre .graf-after--pre name="cc5f"}
data.forEach(function(v, i, a) {
```


```
 {#e231 .graf .graf--pre .graf-after--pre name="e231"}
a[i] = v + 1;
```


```
 {#581a .graf .graf--pre .graf-after--pre name="581a"}
});
```


15

\[2,3,4,5,6\]

MAP()

`let a                 = [1, 2, 3];` \
 `a.map(x => x*x)` 

\[1, 4, 9\]

FILTER()

`let a                 = [5, 4, 3, 2, 1];` \
 `a.filter(x => x < 3)               ` \
 `a.filter((x,i) => i % 2 === 0)` 

\[2, 1\];

\[5, 3, 1\];

FIND()

FINDINDEX()

`let a                 = [1,2,3,4,5];` 

`a.findIndex(x => x === 3)` 

`a.find(x => x % 5 === 0)` 

`a.find(x => x % 7 === 0)` 

2

5

undefined 

EVERY()

SOME()

`let a                 = [1,2,3,4,5];` 

`a.every(x => x < 10)` 

`a.some(x => x % 2 === 0)` 

`a.some(isNaN)` 

true

true

false

REDUCE()

ReduceRight()

l`et a                 = [1,2,3,4,5];` 

`a.reduce((x,y) => x+y, 0)` 

`a.reduce((x,y) => x*y, 1)` 

`a.reduce((x,y) => (x > y) ? x : y)` 

15

120

5
 
Note that `map()`  returns a new array: it
does not modify the array it is invoked on. If that array is sparse,
your function will not be called for the missing elements, but the
returned array will be sparse in the same way as the original array: it
will have the same length and the same missing elements.

To close the gaps in a sparse array, you can do this:
 
 let                 dense = sparse.filter(() => true);` 

And to close gaps and remove undefined and null elements, you can use
filter, like this:

`a =                 a.filter(x => x !== undefined && x !== null);` 

Unlike `filter()` ,
however,`                 find()`  and
`findIndex()`  stop iterating the first
time the predicate finds an element. When that happens,
`find()`  returns the matching element,
and `findIndex()`  returns the index of
the matching element. If no matching element is
found,` find()`  returns
`undefined` 
and`                 findIndex()` returns
-1.

When you invoke `reduce()`  with no
initial value, it uses the first element of the array as the initial
value.

`reduceRight()`  works just like
`reduce()` , except that it processes the
array from highest index to lowest (right-to-left), rather than from
lowest to highest. You might want to do this if the reduction operation
has right-to-left associativity

### Flattening arrays with `flat()` and `flatMap()` {#3775 .graf .graf--h3 .graf-after--p name="3775"}

`[1,                 [2, 3]].flat()` 

\[1, 2, 3\]

`[1,                 [2, [3]]].flat()` 

\[1, 2, \[3\]\]

`let a                 = [1, [2, [3, [4]]]];` 

`a.flat(1)` 

`a.flat(2)` 

`a.flat(3)` 

`a.flat(4)` 

\[1, 2, \[3, \[4\]\]\]

\[1, 2, 3, \[4\]\]
  
\[1, 2, 3, 4\]

\[1, 2, 3, 4\]

`let                 phrases = ["hello world", "the definitive guide"];` \
 `let words = phrases.flatMap(phrase => phrase.split("                 "));` 

\["hello", "world", "the", "definitive", "guide"\];

Calling `a.flatMap(f)`  is the same as
(but more efficient than) `a.map(f).flat()` :

### Adding arrays with concat() {#849a .graf .graf--h3 .graf-after--p name="849a"}

`let a                 = [1,2,3];` 

`a.concat(4, 5)` 

\[1,2,3,4,5\]

`a.concat([4,5],[6,7])` 
  
\[1,2,3,4,5,6,7\]

### Stacks and Queues with push(), pop(), shift(), and unshift() {#0e46 .graf .graf--h3 .graf-after--p name="0e46"}

The `push()` 
and`                 pop()`  methods allow
you to work with arrays as if they were stacks. The
`push()`  method appends one or more new
elements to the end of an array and returns the new length of the array.

The `unshift()`  and
`shift()`  methods behave much like
`push()` 
and`                 pop()` , except that
they insert and remove elements from the beginning of an array rather
than from the end.

You can implement a queue data structure by using `push()`  to add elements at the end of an array and
`shift()`  to remove them from the start
of the array. Note differences in `unshift ` with single and multiple values.

`let a                 = [];` 

`a.unshift(1)` 

\[1\]

`a.unshift(2)` 

\[2, 1\]

`a =                 [];` 

`a.unshift(1,2)` 

\[1, 2\]

### Subarrays with `slice(), splice(), fill()`, and `copyWithin()` {#7212 .graf .graf--h3 .graf-after--p name="7212"}

SLICE()

`let a                 = [1,2,3,4,5];` 

`a.slice(0,3);` 

`a.slice(3);` 

`a.slice(1,-1);` 

`a.slice(-3,-2);` 

\[1,2,3\]

\[4,5\]

 [2,3,4\]

\[3\]

SPLICE

`let a                 = [1,2,3,4,5,6,7,8];` 

`a.splice(4)` 
 
`a.splice(1,2)` 

`a.splice(1,1)` 

`let a                 = [1,2,3,4,5];` 

`a.splice(2,0,"a","b")` 

`a.splice(2,2,[1,2],3)` 

\[5,6,7,8\]; `a`  is now \[1,2,3,4\]

\[2,3\]; a is now \[1,4\]

\[4\]; a is now \[1\]

\[\]; a is now \[1,2,"a","b",3,4,5\]

\["a","b"\]; a is now \[1,2,\[1,2\],3,3,4,5\]

FILL()

`let a                 = new Array(5);` 

`a.fill(0)` 

`a.fill(9, 1)` 

`a.fill(8, 2, -1)` 

\[0,0,0,0,0\]

\[0,9,9,9,9\]

\[0,9,8,8,9\]

COPYWITHIN()

`let a                 = [1,2,3,4,5];` 

`a.copyWithin(1)` 

`a.copyWithin(2, 3, 5)` 

`a.copyWithin(0, -2)` 

\[1,1,2,3,4\]

\[1,1,3,4,4\]

\[4,4,3,4,4\]

`splice()`  is a general-purpose method
for inserting or removing elements from an
array.` splice()`  can delete elements
from an array, insert new elements into an array, or perform both
operations at the same time.

The first argument to `splice()` 
specifies the array position at which the insertion and/or deletion is
to begin. The second argument specifies the number of elements that
should be deleted from (spliced out of) the array.

Unlike `concat(), splice()`  inserts
arrays themselves, not the elements of those arrays.

`copyWithin()`  copies a slice of an array
to a new position within the array. It modifies the array in place and
returns the modified array, but it will not change the length of the
array.

### Array Searching and Sorting Methods {#30a0 .graf .graf--h3 .graf-after--p name="30a0"}

INDEXOF()\
 LASTINDEXOF()

`let a                 = [0,1,2,1,0];` 

`a.indexOf(1)` 

`a.lastIndexOf(1)` 

`a.indexOf(3)` 

1

3

-1

SORT()

`let a                 = [33, 4, 1111, 222];` 

`a.sort();` 

`a.sort((a,b) => a - b);` 

Case-insensitive sort

```
 {#b2f1 .graf .graf--pre .graf-after--p name="b2f1"}
let a = ["ant", "Bug", "cat", "Dog"];
```


```
 {#acc1 .graf .graf--pre .graf-after--pre name="acc1"}
a.sort(); // a == ["Bug","Dog","ant","cat"];
```


```
 {#013a .graf .graf--pre .graf-after--pre name="013a"}
a.sort(function(s,t) {
```


```
 {#7fa7 .graf .graf--pre .graf-after--pre name="7fa7"}
let a = s.toLowerCase();
```


```
 {#6b2a .graf .graf--pre .graf-after--pre name="6b2a"}
let b = t.toLowerCase();
```


```
 {#87ca .graf .graf--pre .graf-after--pre name="87ca"}
if (a < b) return -1;
```


```
 {#7203 .graf .graf--pre .graf-after--pre name="7203"}
if (a > b) return 1;
```


```
 {#553c .graf .graf--pre .graf-after--pre name="553c"}
return 0;
```


```
 {#14b6 .graf .graf--pre .graf-after--pre name="14b6"}
});
```


`[1111, 222, 33, 4];` 

`[4,                 33, 222, 1111]` 

REVERSE()

`let a                 = [1,2,3];` \
 `a.reverse();` 

\[3,2,1\]

`indexOf()`  and
`lastIndexOf()`{.markup--code . arkup--p-code} compare their argument to
the array elements using the equivalent of the === operator. If your
array contains objects instead of primitive values, these methods check
 o see if two references both refer to exactly the same object. If you
want to actually look at the content of an object, try using the
`find()`  method with your own custom
predicate function instead.

`indexOf()`  and
`lastIndexOf()`  take an optional second
argument that specifies the array index at which to begin the search.
Negative values are allowed for the second argument and are treated as
an offset from the end of the array.

`indexOf()`  will not detect the NaN value
in an array, but `includes()`  will

When `sort()`  is called with no
arguments, it sorts the array elements in alphabetical order. To sort an
array into some order other than alphabetical, you must pass a
comparison function as an argument to `sort()` .

### Array to String Conversions {#a286 .graf .graf--h3 .graf-after--p name="a286"}

The `join()`  method converts all the
elements of an array to strings and concatenates them, returning the
resulting string.

`let a                 = [1, 2, 3];` 

`a.join()` 

`a.join(" ")` 

`a.join("")` 

"1,2,3"

"1 2 3"

"123"

`let b                 = new Array(10);` 

`b.join("-")` 

" --- --- --- --- -"

Arrays, like all JavaScript objects, have a `toString()`  method. For an array, this method works just like the
`join()`  method with no arguments:

`[1,2,3].toString()` 

"1,2,3"

`["a", "b", "c"].toString()` 

"a,b,c"

`[1,                 [2,"c"]].toString()` 

"1,2,c"

### Static Array Functions {#ab9f .graf .graf--h3 .graf-after--p name="ab9f"}

`Array.isArray([])` 

true

`Array.isArray({})` 

false

 ## Array-Like Objects {#d878 .graf .graf--h3 .graf-after--p name="d878"}

It is often perfectly reasonable to treat any object with a numeric
`length`  property and corresponding
non-negative integer properties as a kind of array.

```
 {#82e9 .graf .graf--pre .graf-after--p name="82e9"}
let a = {};
```


```
 {#c469 .graf .graf--pre .graf-after--pre name="c469"}
let i = 0;
```


```
 {#9627 .graf .graf--pre .graf-after--pre name="9627"}
while(i < 10) {
```


```
 {#ef67 .graf .graf--pre .graf-after--pre name="ef67"}
a[i] = i * i;
```


```
 {#aace .graf .graf--pre .graf-after--pre name="aace"}
i++;
```


```
 {#9092 .graf .graf--pre .graf-after--pre name="9092"}
}
```


```
 {#f6b2 .graf .graf--pre .graf-after--pre name="f6b2"}
a.length = i;
```


```
 {#f459 .graf .graf--pre .graf-after--pre name="f459"}
// Now iterate through it as if it were a real array
```


```
 {#8f99 .graf .graf--pre .graf-after--pre name="8f99"}
let total = 0;
```


```
 {#401e .graf .graf--pre .graf-after--pre name="401e"}
for(let j = 0; j < a.length; j++) {
```


```
 {#f89d .graf .graf--pre .graf-after--pre name="f89d"}
total += a[j];
```


```
 {#e51a .graf .graf--pre .graf-after--pre name="e51a"}
}
```


Since array-like objects do not inherit from
`Array.prototype` , you cannot invoke
array methods on them directly. You can invoke them indirectly using the
`Function.call`  method.

`let a                 = {"0": "a", "1": "b", "2": "c", length:                 3};` 

// An array-like object

`Array.prototype.join.call(a, "+")` 

"a+b+c"

`Array.prototype.join.call("JavaScript", "                 ")` 

"J a v a S c r i p t"

`Array.prototype.map.call(a, x => x.toUpperCase())` 

\["A","B","C"\]

`Array.from(a)` 

\["a","b","c"\]

### Strings as Arrays {#faeb .graf .graf--h3 .graf-after--p name="faeb"}

`let s                 = "test";` 

`s.charAt(0)` 

t

`s[1]` 

e

### Functions {#6d70 .graf .graf--h3 .graf-after--p name="6d70"}

In addition to the arguments, each invocation has another value --- the
invocation context --- that is the value of the `this`  keyword.

### Function Declarations {#17de .graf .graf--h3 .graf-after--p name="17de"}

```
 {#fdb1 .graf .graf--pre .graf-after--h3 name="fdb1"}
function printprops(o) {
```


```
 {#8a4a .graf .graf--pre .graf-after--pre name="8a4a"}
for(let p in o) {
```


```
 {#7eba .graf .graf--pre .graf-after--pre name="7eba"}
console.log(`${p}: ${o[p]}\n`);
```


```
 {#411d .graf .graf--pre .graf-after--pre name="411d"}
}
```


```
 {#ad3f .graf .graf--pre .graf-after--pre name="ad3f"}
}
```


Function declaration statements are "hoisted" to the top of the
enclosing script, function, or block so that functions defined in this
way may be invoked from code that appears before the definition.

### Function Expressions {#e8fc .graf .graf--h3 .graf-after--p name="e8fc"}

`const                 square = function(x) { return x*x; };` 

```
 {#ce46 .graf .graf--pre .graf-after--p name="ce46"}
const f = function fact(x) {
```


```
 {#2266 .graf .graf--pre .graf-after--pre name="2266"}
if (x <= 1) return 1;
```


```
 {#3492 .graf .graf--pre .graf-after--pre name="3492"}
return x * fact(x-1);
```


```
 {#7165 .graf .graf--pre .graf-after--pre name="7165"}
}
```


Function expressions can include names, which is useful for recursion

`[3,2,1].sort(function(a,b) { return a - b; });` 

Function expressions can also be used as arguments to other functions

`let                 tensquared = (function(x) {return x*x;}(10));` 

Function expressions are sometimes defined and immediately invoked

### Arrow Functions {#611c .graf .graf--h3 .graf-after--p name="611c"}

`const                 sum = (x, y) => { return x + y; };` 

`const                 sum = (x, y) => x + y;` 

no need for `return` 

`const                 polynomial = x => x*x + 2*x + 3;` 

omit parens wi h single parameter

`const                 constantFunc = () => 42;` 

usage for no params

If the body of your arrow function is a single return statement but the
expression to be returned is an object literal, then you have to put the
object literal inside parentheses to avoid syntactic ambiguity between
the curly braces of a function body and the curly braces of an object
literal

`const                 f = x => { return { value: x }; };` 

good

`const                 g = x => ({ value: x });` 

good

`const                 h = x => { value: x };` 

returns nothing

`const                 i = x => { v: x, w: x };` 

syntax error

Arrow functions differ from functions defined in other ways in one
critical way: they inherit the value of the `this`  keyword from the environment in which they are defined
rather than defining their own invocation context as functions defined
in other ways do.

### Nested Functions {#0578 .graf .graf--h3 .graf-after--p name="0578"}

```
 {#e755 .graf .graf--pre .graf-after--h3 name="e755"}
function hypotenuse(a, b) {
```


```
 {#e33d .graf .graf--pre .graf-after--pre name="e33d"}
function square(x) { return x*x; }
```


```
 {#2e42 .graf .graf--pre .graf-after--pre name="2e42"}
return Math.sqrt(square(a) + square(b));
```


```
 {#fc71 .graf .graf--pre .graf-after--pre name="fc71"}
}
```


### Invoking Functions {#6b7d .graf .graf--h3 .graf-after--pre name="6b7d"}

For function invocation in non-strict mode, the invocation context (the
`this`  value) is the global object. In
strict mode, however, the invocation context is
`undefined` .

`const                 strict = (function() { return !this; }())` 

Determine if we're in strict mode

### Constructor Invocation {#c639 .graf .graf--h3 .graf-after--p name="c639"}

A constructor invocation creates a new, empty object that inherits from
the object specified by the `prototype` property of the constructor.

### Indirect invocation {#e004 .graf .graf--h3 .graf-after--p name="e004"}

JavaScript functions are objects, and like all JavaScript objects, they
have methods. Two of these methods, `call()`  and `apply()` , invoke
the function indirectly. Both methods allow you to explicitly specify
the `this ` value for the invocation,
which means you can invoke any function as a method of any object, even
if it is not actually a method of that object.

### Function Arguments and Parameters {#f019 .graf .graf--h3 .graf-after--p name="f019"}

### Optional Parameters and Defaults {#f888 .graf .graf--h3 .graf-after--h3 name="f888"}

When a function is invoked with fewer arguments than declared
parameters, the additional parameters are set to their default value,
which is normally `undefined` .

```
 {#fb8b .graf .graf--pre .graf-after--p name="fb8b"}
function getPropertyNames(o, a) {
```


```
 {#6b4b .graf .graf--pre .graf-after--pre name="6b4b"}
a = a || [];
```


```
 {#c56e .graf .graf--pre .graf-after--pre name="c56e"}
for(let property in o) a.push(property);
```


```
 {#8022 .graf .graf--pre .graf-after--pre name="8022"}
return a;
```


```
 {#bbb8 .graf .graf--pre .graf-after--pre name="bbb8"}
}
```


```
 {#dc19 .graf .graf--pre .graf-after--pre name="dc19"}
function getPropertyNames(o, a = []) {
```


```
 {#70a1 .graf .graf--pre .graf-after--pre name="70a1"}
for(let property in o) a.push(property);
```


```
 {#c3bc .graf .graf--pre .graf-after--pre name="c3bc"}
return a;
```


```
 {#b00d .graf .graf--pre .graf-after--pre name="b00d"}
}
```


One interesting case is that, for functions with multiple parameters,
you can use the value of a previous parameter to define the default
value of the parameters that follow it

```
 {#d5cf .graf .graf--pre .graf-after--p name="d5cf"}
const rectangle = (width, height = width*2) => ({width, height});
```


### Rest Parameters and Variable-Length Argument Lists {#20ec .graf .graf--h3 .graf-after--pre name="20ec"}

Rest parameters enable us to write functions that can be invoked with
arbitrarily more arguments than parameters.

```
 {#719c .graf .graf--pre .graf-after--p name="719c"}
function max(first=-Infinity, ...rest) {
```


```
 {#2615 .graf .graf--pre .graf-after--pre name="2615"}
let maxValue = first;
```


```
 {#c670 .graf .graf--pre .graf-after--pre name="c670"}
for(let n of rest) {
```


```
 {#bd6b .graf .graf--pre .graf-after--pre name="bd6b"}
if (n > maxValue) {
```


```
 {#f8b6 .graf .graf--pre .graf-after--pre name="f8b6"}
maxValue = n;
```


```
 {#fade .graf .graf--pre .graf-after--pre name="fade"}
} 
```


```
 {#aacf .graf .graf--pre .graf-after--pre name="aacf"}
}
```


```
 {#14ec .graf .graf--pre .graf-after--pre name="14ec"}
return maxValue;
```


```
 {#9071 .graf .graf--pre .graf-after--pre name="9071"}
}
```


```
 {#1b92 .graf .graf--pre .graf-after--pre name="1b92"}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6)
```


1000

within the body of a function, the value of a rest parameter will always
be an array. The array may be empty, but a rest parameter will never be
`undefined`{.markup--code . arkup--p-code}.

This type of function is called variadic functions, variable arity
functions, or vararg functions.

### The Arguments Object {#ef1b .graf .graf--h3 .graf-after--p name="ef1b"}

Within the body of any function, the identifier
`arguments`  refers to the Arguments
object for that invocation.

```
 {#4635 .graf .graf--pre .graf-after--p name="4635"}
function max(x) {
```


```
 {#5982 .graf .graf--pre .graf-after--pre name="5982"}
let maxValue = -Infinity;
```


```
 {#6eae .graf .graf--pre .graf-after--pre name="6eae"}
for(let i = 0; i < arguments.length; i++) {
```


```
 {#15ed .graf .graf--pre .graf-after--pre name="15ed"}
if (arguments[i] > maxValue)
```


```
 {#1fb7 .graf .graf--pre .graf-after--pre name="1fb7"}
maxValue = arguments[i];
```


```
 {#d28d .graf .graf--pre .graf-after--pre name="d28d"}
}
```


```
 {#3a1e .graf .graf--pre .graf-after--pre name="3a1e"}
return maxValue;
```


```
 {#2d1a .graf .graf--pre .graf-after--pre name="2d1a"}
}
```


```
 {#6fdd .graf .graf--pre .graf-after--pre name="6fdd"}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6)
```


1000

you should avoid using it in any new code you write.
 
### The Spread Operator for Function Calls {#7707 .graf .graf--h3 .graf-after--p name="7707"}

```
 {#7d92 .graf .graf--pre .graf-after--h3 name="7d92"}
let numbers = [5, 2, 10, -1, 9, 100, 1];
```


```
 {#0b1b .graf .graf--pre .graf-after--pre name="0b1b"}
Math.min(...numbers)
```


-1

```
 {#6d28 .graf .graf--pre .graf-after--p name="6d28"}
function timed(f) {
```


```
 {#bd69 .graf .graf--pre .graf-after--pre name="bd69"}
return function(...args) {
```


```
 {#2a11 .graf .graf--pre .graf-after--pre name="2a11"}
console.log(`Entering function ${f.name}`);
```


```
 {#4809 .graf .graf--pre .graf-after--pre name="4809"}
let startTime = Date.now();
```


```
 {#59d4 .graf .graf--pre .graf-after--pre name="59d4"}
try {
```


```
 {#132f .graf .graf--pre .graf-after--pre name="132f"}
return f(...args);
```


```
 {#3f68 .graf .graf--pre .graf-after--pre name="3f68"}
}
```


```
 {#010e .graf .graf--pre .graf-after--pre name="010e"}
finally {
```


```
 {#5f97 .graf .graf--pre .graf-after--pre name="5f97"}
console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
```


```
 {#794f .graf .graf--pre .graf-after--pre name="794f"}
}
```


```
 {#7b9b .graf .graf--pre .graf-after--pre name="7b9b"}
};
```


```
 {#b0ab .graf .graf--pre .graf-after--pre name="b0ab"}
}
```


```
 {#9444 .graf .graf--pre .graf-after--pre name="9444"}
// Compute the sum of the numbers between 1 and n by brute force
```


```
 {#8c8f .graf .graf--pre .graf-after--pre name="8c8f"}
function benchmark(n) {
```


```
 {#094d .graf .graf--pre .graf-after--pre name="094d"}
let sum = 0;
```


```
 {#f0b1 .graf .graf--pre .graf-after--pre name="f0b1"}
for(let i = 1; i <= n; i++) sum += i;
```


```
 {#7444 .graf .graf--pre .graf-after--pre name="7444"}
return sum;
```


```
 {#d9c7 .graf .graf--pre .graf-after--pre name="d9c7"}
}
```


```
 {#8223 .graf .graf--pre .graf-after--pre name="8223"}
// Now invoke the timed version of that test function
```


```
 {#7fe3 .graf .graf--pre .graf-after--pre name="7fe3"}
timed(benchmark)(1000000)
```


### Destructuring Function Arguments into Parameters {#023a .graf .graf--h3 .graf-after--pre name="023a"}

```
 {#eb03 .graf .graf--pre .graf-after--h3 name="eb03"}
function vectorAdd(v1, v2) {
```


```
 {#02f2 .graf .graf--pre .graf-after--pre name="02f2"}
return [v1[0] + v2[0], v1[1] + v2[1] ;
```


```
 {#7010 .graf .graf--pre .graf-after--pre name="7010"}
}
```


```
 {#d3c9 .graf .graf--pre .graf-after--pre name="d3c9"}
vectorAdd([1,2], [3,4])
```


←\>

```
 {#89ec .graf .graf--pre .graf-after--p name="89ec"}
function vectorAdd([x1,y1], [x2,y2]) {
```


```
 {#b67d .graf .graf--pre .graf-after--pre name="b67d"}
return [x1 + x2, y1 + y2];
```


```
 {#8721 .graf .graf--pre .graf-after--pre name="8721"}
}
```


```
 {#7092 .graf .graf--pre .graf-after--pre name="7092"}
vectorAdd([1,2], [3,4])
```


```
 {#83e9 .graf .graf--pre .graf-after--pre name="83e9"}
function vectorMultiply({x, y}, scalar) {
```


```
 {#2cc6 .graf .graf--pre .graf-after--pre name="2cc6"}
return { x: x*scalar, y: y*scalar };
```


```
 {#ad45 .graf .graf--pre .graf-after--pre name="ad45"}
}
```


```
 {#0c15 .graf .graf--pre .graf-after--pre name="0c15"}
vectorMultiply({x: 1, y: 2}, 2)
```


←\>

```
 {#ff0e .graf .graf--pre .graf-after--p name="ff0e"}
function vectorMultiply({x,y}, scalar) {
```


```
 {#4730 .graf .graf--pre .graf-after--pre name="4730"}
return { x: x*scalar, y: y*scalar};
```


```
 {#8c2e .graf .graf--pre .graf-after--pre name="8c2e"}
}
```


```
 {#818a .graf .graf--pre .graf-after--pre name="818a"}
vectorMultiply({x: 1, y: 2}, 2)
```


### Argument Types {#4fe8 .graf .graf--h3 .graf-after--pre name="4fe8"}

Adding code to check the types of arguments

```
 {#ae7b .graf .graf--pre .graf-after--p name="ae7b"}
function sum(a) {
```


```
 {#8794 .graf .graf--pre .graf-after--pre name="8794"}
let total = 0;
```


```
 {#b39c .graf .graf--pre .graf-after--pre name="b39c"}
for(let element of a) {
```


```
 {#784c .graf .graf--pre .graf-after--pre name="784c"}
if (typeof element !== "number") {
```


```
 {#7338 .graf .graf--pre .graf-after--pre name="7338"}
throw new TypeError("sum(): elements must be numbers");
```


```
 {#74cf .graf .graf--pre .graf-after--pre name="74cf"}
}
```


```
 {#d113 .graf .graf--pre .graf-after--pre name="d113"}
total += element;
```


```
 {#fe94 .graf .graf--pre .graf-after--pre name="fe94"}
}
```


```
 {#ee47 .graf .graf--pre .graf-after--pre name="ee47"}
return total;
```


```
 {#548a .graf .graf--pre .graf-after--pre name="548a"}
}
```


`sum([1,2,3])` 

6

`sum(1,                 2, 3);` 

`TypeError` : 1 is not iterable

`sum([1,2,"3"]);` 

`TypeError` : element 2 is not a number

### Functions as Values {#e7a8 .graf .graf--h3 .graf-after--p name="e7a8"}

```
 {#5c5e .graf .graf--pre .graf-after--h3 name="5c5e"}
function square(x) { return x * x; }
```


`let                 s = square;` 

`square(4)` 

16

`s(4)` 

16

Functions can also be assigned to object properties rather than
variables.

`let o                 = {square: function(x) { return x*x; }};` 

`let y                 = o.square(16);` 

256

Functions don't even require names at all, as when they're assigned to
array elements:

`let a                 = [x => x*x, 20];` 

`a[0](a[1])` 

400

`a[0]`  accesses first element of the
array, which is \"`x => x*x` \",
`(a[1])`  passes parameter, which is 20.

### Examples of using functions as data {#bc40 .graf .graf--h3 .graf-after--p name="bc40"}

```
 {#0a53 .graf .graf--pre .graf-after--h3 name="0a53"}
function add(x,y) { return x + y; }
```


```
 {#d116 .graf .graf--pre .graf-after--pre name="d116"}
function subtract(x,y) { return x - y; }
```


```
 {#1ba9 .graf .graf--pre .graf-after--pre name="1ba9"}
function multiply(x,y) { return x * y; }
```


```
 {#6999 .graf .graf--pre .graf-after--pre name="6999"}
function divide(x,y) { return x / y; }
```


```
 {#6ab9 .graf .graf--pre .graf-after--pre name="6ab9"}
function operate(operator, operand1, operand2) {
```


```
 {#e569 .graf .graf--pre .graf-after--pre name="e569"}
return operator(operand1, operand2);
```


```
 {#ce81 .graf .graf--pre .graf-after--pre name="ce81"}
}
```


`let                 i = operate(add, operate(add, 2, 3), operate(multiply, 4,5));` 

`(2+3)                 + (4*5):` 

or:

```
 {#0033 .graf .graf--pre .graf-after--p name="0033"}
const operators = {
```


```
 {#004b .graf .graf--pre .graf-after--pre name="004b"}
add: (x,y) => x+y,
```


```
 {#ba3e .graf .graf--pre .graf-after--pre name="ba3e"}
subtract: (x,y) => x-y,
```


```
 {#06e7 .graf .graf--pre .graf-after--pre name="06e7"}
multiply: (x,y) => x*y,
```


```
 {#37c1 .graf .graf--pre .graf-after--pre name="37c1"}
divide: (x,y) => x/y,
```


```
 {#a5dd .graf .graf--pre .graf-after--pre name="a5dd"}
pow: Math.pow
```


```
 {#a56e .graf .graf--pre .graf-after--pre name="a56e"}
}; 
```


```
 {#583a .graf .graf--pre .graf-after--pre name="583a"}
function operate2(operation, operand1, operand2) {
```


```
 {#8932 .graf .graf--pre .graf-after--pre name="8932"}
if (typeof operators[operation] === "function") {
```


```
 {#9579 .graf .graf--pre .graf-after--pre name="9579"}
return operators[operation](operand1, operand2);
```


```
 {#ee91 .graf .graf--pre .graf-after--pre name="ee91"}
}
```


```
 {#791a .graf .graf--pre .graf-after--pre name="791a"}
else throw "unknown operator";
```


```
 {#4794 .graf .graf--pre .graf-after--pre name="4794"}
}
```


`operate2("add", "hello",                 operate2("add", " ", "world"))` 

// "hello world"

`operate2("pow", 10, 2)` 

100

### Defining Your Own Function Properties {#17a5 .graf .graf--h3 .graf-after--p name="17a5"}

When a function needs a "static" variable whose value persists across
invocations, it is often convenient to use a property of the function
itself. 

For example, suppose you want to write a function that returns a unique
integer whenever it is invoked. The function must never return the same
value twice. In order to manage this, the function needs to keep track
of the values it has already returned, and this information must persist
across function invocations.

```
 {#9d9d .graf .graf--pre .graf-after--p name="9d9d"}
uniqueInteger.counter = 0;
```


```
 {#dc1c .graf .graf--pre .graf-after--pre name="dc1c"}
function uniqueInteger() {
```


```
 {#340c .graf .graf--pre .graf-after--pre name="340c"}
return uniqueInteger.counter++;
```


```
 {#cfa2 .graf .graf--pre .graf-after--pre name="cfa2"}
}
```


```
 {#f2df .graf .graf--pre .graf-after--pre name="f2df"}
uniqueInteger()
```


0

```
 {#1387 .graf .graf--pre .graf-after--p name="1387"}
uniqueInteger()
```


1

Compute factorials and cache results as properties of the function
itself.

```
 {#994d .graf .graf--pre .graf-after--p name="994d"}
function factorial(n) {
```


```
 {#b1da .graf .graf--pre .graf-after--pre name="b1da"}
if (Number.isInteger(n) && n > 0) {
```


```
 {#869f .graf .graf--pre .graf-after--pre name="869f"}
if (!(n in factorial)) {
```


```
 {#1b05 .graf .graf--pre .graf-after--pre name="1b05"}
factorial[n] = n * factorial(n-1);
```


```
 {#e4b3 .graf .graf--pre .graf-after--pre name="e4b3"}
}
```


```
 {#8141 .graf .graf--pre .graf-after--pre name="8141"}
return factorial[n];
```


```
 {#37b9 .graf .graf--pre .graf-after--pre name="37b9"}
}
```


```
 {#7327 .graf .graf--pre .graf-after--pre name="7327"}
else {
```


```
 {#357e .graf .graf--pre .graf-after--pre name="357e"}
return NaN;
```


```
 {#aaef .graf .graf--pre .graf-after--pre name="aaef"}
}
```


```
 {#587d .graf .graf--pre .graf-after--pre name="587d"}
}
```


```
 {#3f3c .graf .graf--pre .graf-after--pre name="3f3c"}
factorial[1] = 1;
```


Initialize the cache to hold this base case.

```
 {#2a66 .graf .graf--pre .graf-after--p name="2a66"}
factorial(6)
```


720

```
 {#8d6b .graf .graf--pre .graf-after--p name="8d6b"}
factorial[5]
```


120; the call above caches this value

### Functions as Namespaces {#e1e5 .graf .graf--h3 .graf-after--p name="e1e5"}

Variables declared within a function are not visible outside of the
function. For this reason, it is sometimes useful to define a function
simply to act as a temporary namespace in which you can define variables
without cluttering the global namespace.

Variables that would have been global become local to the function.
Following code defines only a single global variable: the function name
`chunkNamespace` .

```
 {#5021 .graf .graf--pre .graf-after--p name="5021"}
function chunkNamespace() {
```


```
 {#767a .graf .graf--pre .graf-after--pre name="767a"}
// Chunk of code goes here
```


```
 {#02f5 .graf .graf--pre .graf-after--pre name="02f5"}
// Any variables defined in the chunk are local to this function
```


```
 {#32b3 .graf .graf--pre .graf-after--pre name="32b3"}
// instead of cluttering up the global namespace.
```


```
 {#f471 .graf .graf--pre .graf-after--pre name="f471"}
}
```


```
 {#7f49 .graf .graf--pre .graf-after--pre name="7f49"}
chunkNamespace();
```


If defining even a single property is too much, you can define and
invoke an anonymous function in a single expression --- IIEF
(immediately invoked function expression)

```
 {#a0e3 .graf .graf--pre .graf-after--p name="a0e3"}
(function() {
```


```
 {#f874 .graf .graf--pre .graf-after--pre name="f874"}
// chunkNamespace() function rewritten as an unnamed expression.
```


```
 {#0914 .graf .graf--pre .graf-after--pre name="0914"}
// Chunk of code goes here
```


```
 {#5eee .graf .graf--pre .graf-after--pre name="5eee"}
}());
```


### Closures {#cb21 .graf .graf--h3 .graf-after--pre name="cb21"}

JavaScript uses lexical scoping. This means that functions are executed
using the variable scope that was in effect when they were defined, not
the variable scope that is in effect when they are invoked.

In order to implement lexical scoping, the internal state of a
JavaScript function object must include not only the code of the
function but also a reference to the scope in which the function
definition appears.

This combination of a function object and a scope (a set of variable
bindings) in which the function's variables are resolved is called a
closure.

Closures become interesting when they are invoked from a different scope
than the one they were defined in. This happens most commonly when a
nested function object is returned from the function within which it was
defined.

```
 {#4c4c .graf .graf--pre .graf-after--p name="4c4c"}
let scope = "global scope";
```


```
 {#b2f2 .graf .graf--pre .graf-after--pre name="b2f2"}
function checkscope() {
```


```
 {#9926 .graf .graf--pre .graf-after--pre name="9926"}
let scope = "local scope";
```


```
 {#dd4c .graf .graf--pre .graf-after--pre name="dd4c"}
function f() { return scope; }
```


```
 {#eb31 .graf .graf--pre .graf-after--pre name="eb31"}
return f();
```


```
 {#3435 .graf .graf--pre .graf-after--pre name="3435"}
}
```


`checkscope()` 

"local scope"

```
 {#32a8 .graf .graf--pre .graf-after--p name="32a8"}
let scope = "global scope";
```


```
 {#beb9 .graf .graf--pre .graf-after--pre name="beb9"}
function checkscope() {
```


```
 {#1126 .graf .graf--pre .graf-after--pre name="1126"}
let scope = "local scope";
```


```
 {#211b .graf .graf--pre .graf-after--pre name="211b"}
function f() { return scope; }
```


```
 {#aa30 .graf .graf--pre .graf-after--pre name="aa30"}
return f;
```


```
 {#d1d6 .graf .graf--pre .graf-after--pre name="d1d6"}
}
```


`let                 s = checkscope()();` 

"local scope"

Closures capture the local variables of a single function invocation and
can use those variables as private state.

```
 {#0187 .graf .graf--pre .graf-after--p name="0187"}
let uniqueInteger = (function() {
```


```
 {#f52a .graf .graf--pre .graf-after--pre name="f52a"}
let counter = 0;
```


```
 {#f358 .graf .graf--pre .graf-after--pre name="f358"}
return function() { return counter++; };
```


```
 {#4054 .graf .graf--pre .graf-after--pre name="4054"}
}());
```


`uniqueInteger()` 

0

`uniqueInteger()` 

1

it is the return value of the function that is being assigned to
`uniqueInteger` .

Private variables like counter need not be exclusive to a single
closure: it is perfectly possible for two or more nested functions to be
defined within the same outer function and share the same scope.

```
 {#6d71 .graf .graf--pre .graf-after--p name="6d71"}
function counter() {
```


```
 {#6de6 .graf .graf--pre .graf-after--pre name="6de6"}
let n = 0;
```


```
 {#3ab3 .graf .graf--pre .graf-after--pre name="3ab3"}
return {
```


```
 {#310b .graf .graf--pre .graf-after--pre name="310b"}
count: function() { return n++; },
```


```
 {#c626 .graf .graf--pre .graf-after--pre name="c626"}
reset: function() { n = 0; }
```


```
 {#7889 .graf .graf--pre .graf-after--pre name="7889"}
};
```


```
 {#51f7 .graf .graf--pre .graf-after--pre name="51f7"}
}
```


`let                 c = counter(), d = counter();` 

`c.count()` 

0

`d.count()` 

0

`c.reset();` 

`c.count()` 

0

`d.count()` 

1

You can combine this closure technique with property getters and setters

```
 {#ec57 .graf .graf--pre .graf-after--p name="ec57"}
function counter(n) {
```


```
 {#5acb .graf .graf--pre .graf-after--pre name="5acb"}
return {
```


```
 {#647d .graf .graf--pre .graf-after--pre name="647d"}
get count() { return n++; },
```


```
 {#edaa .graf .graf--pre .graf-after--pre name="edaa"}
set count(m) {
```


```
 {#8ecf .graf .graf--pre .graf-after--pre name="8ecf"}
if (m > n) n = m;
```


```
 {#d81a .graf .graf--pre .graf-after--pre name="d81a"}
else throw Error("count can only be set to a larger value")
```


```
 {#6a79 .graf .graf--pre .graf-after--pre name="6a79"}
}
```


```
 {#d84e .graf .graf--pre .graf-after--pre name="d84e"}
};
```


```
 {#e5bb .graf .graf--pre .graf-after--pre name="e5bb"}
}
```


`let                 c = counter(1000);` 

`c.count` 

1000

`c.count` 

1001

`c.count = 2000;` 

`c.count` 

2000

`c.count = 2000;` 

Error: count can only be set to a larger value

Define a private variable and two nested functions to get and set the
value of that variable.

```
 {#bdcf .graf .graf--pre .graf-after--p name="bdcf"}
function addPrivateProperty(o, name, predicate) {
```


```
 {#dc71 .graf .graf--pre .graf-after--pre name="dc71"}
let value;
```


```
 {#1862 .graf .graf--pre .graf-after--pre name="1862"}
o[`get${name}`] = function() { return value; };
```


```
 {#05ad .graf .graf--pre .graf-after--pre name="05ad"}
o[`set${name}`] = function(v) {
```


```
 {#fae2 .graf .graf--pre .graf-after--pre name="fae2"}
if (predicate && !predicate(v)) {
```


```
 {#6be9 .graf .graf--pre .graf-after--pre name="6be9"}
throw new TypeError(`set${name}: invalid value ${v}`);
```


```
 {#2263 .graf .graf--pre .graf-after--pre name="2263"}
}
```


```
 {#c36b .graf .graf--pre .graf-after--pre name="c36b"}
else {
```


```
 {#a0e1 .graf .graf--pre .graf-after--pre name="a0e1"}
value = v;
```


```
 {#138d .graf .graf--pre .graf-after--pre name="138d"}
}
```


```
 {#4380 .graf .graf--pre .graf-after--pre name="4380"}
};
```


```
 {#de92 .graf .graf--pre .graf-after--pre name="de92"}
}
```


`let                 o = {};` 

`addPrivateProperty(o, "Name", x => typeof x ===                 "string");` 

`o.setName("Frank");` 

`o.getName()` 

"Frank"

`o.setName(0);` 

TypeError: try to set a value ofthe wrong type

### Function Properties, Methods, and Constructor {#edca .graf .graf--h3 .graf-after--p name="edca"}

Since functions are objects, they can have properties and methods, just
like any other object.

### The length Property {#6325 .graf .graf--h3 .graf-after--p name="6325"}

The read-only length property of a function specifies the arity of the
function --- the number of parameters it declares in its parameter list,
which is usually the number of arguments that the function expects.

### The name Property {#857f .graf .graf--h3 .graf-after--p name="857f"}

This property is primarily useful when writing debugging or error
messages.

### The prototype Property {#0700 .graf .graf--h3 .graf-after--p name="0700"}

When a function is used as a constructor, the newly created object
inherits properties from the prototype object.

### The call() and apply() Methods {#9b18 .graf .graf--h3 .graf-after--p name="9b18"}

`call()`  and `apply()`  allow you to indirectly invoke a function as if it were
a method of some other object. The first argument to both
`call()`  and `apply()`  is the object on which the function is to be invoked;
this argument is the invocation context and becomes the value of the
`this`  keyword within the body of the
function.

To invoke the function` f()`  as a method
of the object o (passing no arguments),

`f.call(o);` 

`f.apply(o);` 

To pass two numbers to the function `f()` 
and invoke it as if it were a method of the object o,

```
 {#98a0 .graf .graf--pre .graf-after--p name="98a0"}
f.call(o, 1, 2);
```


The `apply()`  method is like the
`call()`  method, except that the
arguments to be passed to the function are specified as an array:

```
 {#1f85 .graf .graf--pre .graf-after--p name="1f85"}
f.apply(o, [1,2]);
```


The `trace() ` function defined uses the
`apply() ` method instead of a spread
operator, and by doing that, it is able to invoke the wrapped method
with the same arguments and the same this value as the wrapper method

```
 {#eda5 .graf .graf--pre .graf-after--p name="eda5"}
function trace(o, m) {
```


```
 {#bcb5 .graf .graf--pre .graf-after--pre name="bcb5"}
let original = o[m];
```


```
 {#9c68 .graf .graf--pre .graf-after--pre name="9c68"}
o[m] = function(...args) {
```


```
 {#1084 .graf .graf--pre .graf-after--pre name="1084"}
console.log(new Date(), "Entering:", m);
```


```
 {#e477 .graf .graf--pre .graf-after--pre name="e477"}
let result = original.apply(this, args);
```


```
 {#9520 .graf .graf--pre .graf-after--pre name="9520"}
console.log(new Date(), "Exiting:", m);
```


```
 {#9a0f .graf .graf--pre .graf-after--pre name="9a0f"}
return result;
```


```
 {#09bf .graf .graf--pre .graf-after--pre name="09bf"}
};
```


```
 {#aa99 .graf .graf--pre .graf-after--pre name="aa99"}
}
```


### The bind() Method {#3972 .graf .graf--h3 .graf-after--pre name="3972"}

The primary purpose of `bind()`  is to
bind a function to an object.

`function f(y) { return this.x + y; }` 

`let o                 = { x: 1 };` 

`let g                 = f.bind(o);` 

`g(2)` 

3

`let p                 = { x: 10, g };` 
 
`p.g(2)` 

3 // g is still bound to o, not p.

The most common use case for calling `bind()`  is to make non-arrow functions behave like arrow
functions. 

Partial application is a common technique in functional programming and
is sometimes called `currying` .

`let                 sum = (x,y) => x + y;` 

`let                 succ = sum.bind(null, 1);` 

`succ(2)` 
 
3

### The toString() Method {#0ed5 .graf .graf--h3 .graf-after--p name="0ed5"}

Most (but not all) implementations of this `toString()`  method return the complete source code for the function

### The Function() Constructor {#67ad .graf .graf--h3 .graf-after--p name="67ad"}

The Function() constructor is best thought of as a globally scoped
version of `eval()`  that defines new
variables and functions in its own private scope. You will probably
never need to use this constructor in your code.

### Higher-Order Functions {#8b87 .graf .graf--h3 .graf-after--p name="8b87"}

A higher-order function is a function that operates on functions, taking
one or more functions as arguments and returning a new function.

```
 {#ff0b .graf .graf--pre .graf-after--p name="ff0b"}
function not(f) {
```


```
 {#6420 .graf .graf--pre .graf-after--pre name="6420"}
return function(...args) {
```


```
 {#24af .graf .graf--pre .graf-after--pre name="24af"}
let result = f.apply(this, args);
```


```
 {#b47a .graf .graf--pre .graf-after--pre name="b47a"}
return !result;
```


```
 {#4233 .graf .graf--pre .graf-after--pre name="4233"}
};
```


```
 {#017f .graf .graf--pre .graf-after--pre name="017f"}
}
```


`const even = x => x % 2 === 0;` 

A function to determine if a number is even

`const                 odd = not(even);` 

`[1,1,3,5,5].every(odd)` 

true

Returns a new function that maps one array to another

```
 {#eefe .graf .graf--pre .graf-after--p name="eefe"}
const map = function(a, ...args) { return a.map(...args); };
```


```
 {#c063 .graf .graf--pre .graf-after--pre name="c063"}
function mapper(f) {
```


```
 {#5d5a .graf .graf--pre .graf-after--pre name="5d5a"}
return a => map(a, f);
```


```
 {#6a18 .graf .graf--pre .graf-after--pre name="6a18"}
}
```


```
 {#e97f .graf .graf--pre .graf-after--pre name="e97f"}
const increment = x => x + 1;
```

 
```
 {#eecd .graf .graf--pre .graf-after--pre name="eecd"}
const incrementAll = mapper(increment);
```


```
 {#49c3 .graf .graf--pre .graf-after--pre name="49c3"}
incrementAll([1,2,3]
```


\[2,3,4\]

Example that takes two functions, f and g, and returns a new function
that computes f(g()):

```
 {#e880 .graf .graf--pre .graf-after--p name="e880"}
function compose(f, g) {
```


```
 {#5852 .graf .graf--pre .graf-after--pre name="5852"}
return function(...args) {
```


```
 {#a54c .graf .graf--pre .graf-after--pre name="a54c"}
return f.call(this, g.apply(this, args));
```


```
 {#797f .graf .graf--pre .graf-after--pre name="797f"}
};
```


```
 {#435c .graf .graf--pre .graf-after--pre name="435c"}
}
```


`const sum = (x,y) => x+y;` 

`const                 square = x => x*x;` 

`compose(square, sum)(2,3)` 

25

### Memoization {#8753 .graf .graf--h3 .graf-after--p name="8753"}

We defined a factorial function that cached its previously computed
results. In functional programming, this kind of caching is called
memoization.

### Classes {#5465 .graf .graf--h3 .graf-after--p name="5465"}

JavaScript's classes and prototype-based inheritance mechanism are
substantially different from the classes and class-based inheritance
mechanism of Java.

### Classes and Prototypes {#ffac .graf .graf--h3 .graf-after--p name="ffac"}

If we define a prototype object and then use
`Object.create()`  to create objects that
inherit from it, we have defined a JavaScript class.

Factory function that returns a new range object:

```
 {#e36f .graf .graf--pre .graf-after--p name="e36f"}
function range(from, to) {
```


```
 {#3f71 .graf .graf--pre .graf-after--pre name="3f71"}
let r = Object.create(range.methods);
```


```
 {#af0b .graf .graf--pre .graf-after--pre name="af0b"}
r.from = from;
```


```
 {#ef8b .graf .graf--pre .graf-after--pre name="ef8b"}
r.to = to;
```


```
 {#e226 .graf .graf--pre .graf-after--pre name="e226"}
return r;
```


```
 {#7124 .graf .graf--pre .graf-after--pre name="7124"}
}
```


```
 {#3184 .graf .graf--pre .graf-after--pre name="3184"}
range.methods = {
```


```
 {#fd54 .graf .graf--pre .graf-after--pre name="fd54"}
includes(x) { return this.from <= x && x <= this.to; },
```


```
 {#0b22 .graf .graf--pre .graf-after--pre name="0b22"}
*[Symbol.iterator]() {
```


```
 {#60a7 .graf .graf--pre .graf-after--pre name="60a7"}
for(let x = Math.ceil(this.from); x <= this.to; x++)
```


```
 {#2d96 .graf .graf--pre .graf-after--pre name="2d96"}
yield x;
```


```
 {#ca66 .graf .graf--pre .graf-after--pre name="ca66"}
},
```


```
 {#8179 .graf .graf--pre .graf-after--pre name="8179"}
toString() { return "(" + this.from + "..." + this.to +")"; }
```


```
 {#8fbf .graf .graf--pre .graf-after--pre name="8fbf"}
};
```


`let                 r = range(1,3);` 

`r.includes(2)` 

true

`r.toString()` 

"(1...3)"

`[...r]` 

\[1, 2, 3\]

### Classes and Constructors {#551b .graf .graf--h3 .graf-after--p name="551b"}

A constructor is a function designed for the initialization of newly
created objects.

The critical feature of constructor invocations is that the
`prototype`  property of the constructor
is used as the prototype of the new object.

While almost all objects have a prototype, only a few objects have a
`prototype`  property. It is function
objects that have a `prototype`  property.

This means that all objects created with the same constructor function
inherit from the same object and are therefore members of the same
class.

A Range class using a constructor

```
 {#6edc .graf .graf--pre .graf-after--p name="6edc"}
function Range(from, to) {
```


```
 {#944c .graf .graf--pre .graf-after--pre name="944c"}
this.from = from;
```


```
 {#cedb .graf .graf--pre .graf-after--pre name="cedb"}
this.to = to;
```


```
 {#6457 .graf .graf--pre .graf-after--pre name="6457"}
}
```


```
 {#e684 .graf .graf--pre .graf-after--pre name="e684"}
Range.prototype = {
```


```
 {#c127 .graf .graf--pre .graf-after--pre name="c127"}
includes: function(x) { return this.from <= x && x <= this.to; },
```


```
 {#1de4 .graf .graf--pre .graf-after--pre name="1de4"}
[Symbol.iterator]: function*() {
```


```
 {#1525 .graf .graf--pre .graf-after--pre name="1525"}
for(let x = Math.ceil(this.from); x <= this.to; x++)
```


```
 {#207d .graf .graf--pre .graf-after--pre name="207d"}
yield x;
```


```
 {#3df1 .graf .graf--pre .graf-after--pre name="3df1"}
},
```


```
 {#ae90 .graf .graf--pre .graf-after--pre name="ae90"}
toString: function() { return "(" + this.from + "..." + this.to + ")"; }
```


```
 {#3bb3 .graf .graf--pre .graf-after--pre name="3bb3"}
};
```


`let                 r = new Range(1,3);` 

`r.includes(2)` 

true

`r.toString()` 

"(1...3)"

`[...r]` 

\[1, 2, 3\]

Because the `Range() ` constructor is
invoked with `new` , it does not have to
call `Object.create()`  or take any action
to create a new object.

In the first example, the prototype was `range.methods` . This was a convenient and descriptive name, but
arbitrary. In the second example, the prototype is
`Range.prototype` , and this name is
mandatory.

An invocation of the `Range()` 
constructor automatically uses `Range.prototype`  as the prototype of the `new Range`  object.

### Constructors, Class Identity, and instanceof {#8d34 .graf .graf--h3 .graf-after--p name="8d34"}

Two objects are instances of the same class if and only if they inherit
from the same prototype object.

The `instanceof`  operator is not checking
whether `r`  was actually initialized by
the Range constructor. Instead, it is checking whether `r`  inherits from `Range.prototype` .

```
 {#0c22 .graf .graf--pre .graf-after--p name="0c22"}
function Strange() {}
```


```
 {#a1ab .graf .graf--pre .graf-after--pre name="a1ab"}
Strange.prototype = Range.prototype;
```


```
 {#7233 .graf .graf--pre .graf-after--pre name="7233"}
new Strange() instanceof Range
```


true

If you want to test the prototype chain of an object for a specific
prototype and do not want to use the constructor function as an
intermediary, you can use the `isPrototypeOf()`  method

```
 {#cc78 .graf .graf--pre .graf-after--p name="cc78"}
range.methods.isPrototypeOf(r);
```


### The constructor Property {#2e9d .graf .graf--h3 .graf-after--pre name="2e9d"}

Every regular JavaScript function automatically has a
`prototype`  property. The value of this
property is an object that has a single, non-enumerable
`constructor`  property.

The value of the `constructor`  property
is the function object

```
 {#e41b .graf .graf--pre .graf-after--p name="e41b"}
let F = function() {};
```


```
 {#e5c1 .graf .graf--pre .graf-after--pre name="e5c1"}
let p = F.prototype;
```


```
 {#9761 .graf .graf--pre .graf-after--pre name="9761"}
let c = p.constructor;
```


```
 {#e3b7 .graf .graf--pre .graf-after--pre name="e3b7"}
c === F
```


true

`let o                 = new F();` 

`o.constructor === F` 

true

Instances of the Range class, as defined, do not have a constructor
property. We can remedy this problem by explicitly adding a constructor
to the prototype:

```
 {#8783 .graf .graf--pre .graf-after--p name="8783"}
Range.prototype = {
```


```
 {#149e .graf .graf--pre .graf-after--pre name="149e"}
constructor: Range
```


```
 {#726d .graf .graf--pre .graf-after--pre name="726d"}
};
```


Another common technique that you are likely to see in older JavaScript
code is to use the predefined prototype object with its constructor
property and add methods to it one at a time with code like this:

```
 {#2909 .graf .graf--pre .graf-after--p name="2909"}
Range.prototype.includes = function(x) {
```


```
 {#6ebc .graf .graf--pre .graf-after--pre name="6ebc"}
return this.from <= x && x <= this.to;
```


```
 {#0360 .graf .graf--pre .graf-after--pre name="0360"}
};
```


```
 {#c37c .graf .graf--pre .graf-after--pre name="c37c"}
Range.prototype.toString = function() {
```


```
 {#f9ad .graf .graf--pre .graf-after--pre name="f9ad"}
return "(" + this.from + "..." + this.to + ")";
```


```
 {#a299 .graf .graf--pre .graf-after--pre name="a299"}
};
```


### Classes with the class Keyword {#f257 .graf .graf--h3 .graf-after--pre name="f257"}

```
 {#4f7f .graf .graf--pre .graf-after--h3 name="4f7f"}
class Range {
```


```
 {#9fda .graf .graf--pre .graf-after--pre name="9fda"}
constructor(from, to) {
```


```
 {#3071 .graf .graf--pre .graf-after--pre name="3071"}
this.from = from;
```


```
 {#e4e0 .graf .graf--pre .graf-after--pre name="e4e0"}
this.to = to;
```


```
 {#d275 .graf .graf--pre .graf-after--pre name="d275"}
}
```


```
 {#deb3 .graf .graf--pre .graf-after--pre name="deb3"}
includes(x) { return this.from <= x && x <= this.to; }
```


```
 {#462a .graf .graf--pre .graf-after--pre name="462a"}
*[Symbol.iterator]() {
```


```
 {#8c44 .graf .graf--pre .graf-after--pre name="8c44"}
for(let x = Math.ceil(this.from); x <= this.to; x++)
```


```
 {#2342 .graf .graf--pre .graf-after--pre name="2342"}
yield x;
```


```
 {#9423 .graf .graf--pre .graf-after--pre name="9423"}
}
```


```
 {#352f .graf .graf--pre .graf-after--pre name="352f"}
toString() { return `(${this.from}...${this.to})`; }
```


```
 {#14cd .graf .graf--pre .graf-after--pre name="14cd"}
}
```


`let                 r = new Range(1,3);` 

`r.includes(2)` 

true

`r.toString()` 

(1...3)

`[...r]` 

\[1, 2, 3\]

Although class bodies are superficially similar to object literals, they
are not the same thing. In particular, they do not support the
definition of properties with name/value pairs.

If your class does not need to do any initialization, you can omit the
constructor keyword and its body, and an empty constructor function will
be implicitly created for you.

If you want to define a class that subclasses --- or inherits
from --- another class, you can use the `extends`  keyword with the class keyword:

```
 {#59ba .graf .graf--pre .graf-after--p name="59ba"}
class Span extends Range {
```


```
 {#1866 .graf .graf--pre .graf-after--pre name="1866"}
constructor(start, length) {
```


```
 {#0838 .graf .graf--pre .graf-after--pre name="0838"}
if (length >= 0) {
```


```
 {#1db9 .graf .graf--pre .graf-after--pre name="1db9"}
super(start, start + length);
```


```
 {#08f6 .graf .graf--pre .graf-after--pre name="08f6"}
}
```


```
 {#3827 .graf .graf--pre .graf-after--pre name="3827"}
else {
```


```
 {#9be6 .graf .graf--pre .graf-after--pre name="9be6"}
super(start + length, start);
```


```
 {#b9bb .graf .graf--pre .graf-after--pre name="b9bb"}
}
```


```
 {#095c .graf .graf--pre .graf-after--pre name="095c"}
}
```


```
 {#22dc .graf .graf--pre .graf-after--pre name="22dc"}
}
```


class declarations have both statement and expression forms

`let                 Squar  = class { constructor(x) { this.area = x * x; } };` 

`new                 Square(3).area` 

9

### Static methods {#f650 .graf .graf--h3 .graf-after--p name="f650"}

You can define a `static`  method within a
class body by prefixing the method declaration with the
`static`  keyword. Static methods are
defined as properties of the constructor function rather than properties
of the prototype object.

```
 {#1bca .graf .graf--pre .graf-after--p name="1bca"}
static parse(s) {
```


```
 {#5ebf .graf .graf--pre .graf-after--pre name="5ebf"}
let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
```


```
 {#1f34 .graf .graf--pre .graf-after--pre name="1f34"}
if (!matches) {
```


```
 {#d01b .graf .graf--pre .graf-after--pre name="d01b"}
throw new TypeError(`Cannot parse Range from "${s}".`)
```


```
 {#ea67 .graf .graf--pre .graf-after--pre name="ea67"}
}
```


```
 {#5311 .graf .graf--pre .graf-after--pre name="5311"}
return new Range(parseInt(matches[1]),
```


```
 {#1421 .graf .graf--pre .graf-after--pre name="1421"}
parseInt(matches[2]));
```


```
 {#25e2 .graf .graf--pre .graf-after--pre name="25e2"}
}
```


The method defined by this code is `Range.parse()` , not `Range.prototype.parse()` , and you must invoke it through the constructor, not
through an instance:

```
 {#ac4b .graf .graf--pre .graf-after--p name="ac4b"}
let r = Range.parse('(1...10)');
```


### Getters, Setters, and other Method Forms {#8dc7 .graf .graf--h3 .graf-after--pre name="8dc7"}

Within a class body, you can define getter and setter methods just as
you can in object literals. The only difference is that in class bodies,
you don't put a comma after the getter or setter.

### Public, Private, and Static Fields {#96ec .graf .graf--h3 .graf-after--p name="96ec"}

The ES6 standard only allows the creation of methods (including getters,
setters, and generators) and static methods; it does not include syntax
for defining fields.

If you want to define a field on a class instance, you must do that in
the constructor function or in one of the methods. And if you want to
define a static field for a class, you must do that outside the class
body, after the class has been defined.

Standardization is underway, however, for extended class syntax that
allows the definition of instance and static fields, in both public and
private forms.

```
 {#de75 .graf .graf--pre .graf-after--p name="de75"}
class Buffer {
```


```
 {#4892 .graf .graf--pre .graf-after--pre name="4892"}
constructor() {
```


```
 {#58fa .graf .graf--pre .graf-after--pre name="58fa"}
this.size = 0;
```


```
 {#356f .graf .graf--pre .graf-after--pre name="356f"}
this.capacity = 4096;
```


```
 {#0602 .graf .graf--pre .graf-after--pre name="0602"}
this.buffer = new Uint8Array(this.capacity);
```


```
 {#e835 .graf .graf--pre .graf-after--pre name="e835"}
}
```


```
 {#8897 .graf .graf--pre .graf-after--pre name="8897"}
}
```


←\>

```
 {#aa41 .graf .graf--pre .graf-after--p name="aa41"}
class Buffer {
```


```
 {#8e5e .graf .graf--pre .graf-after--pre name="8e5e"}
size = 0;
```


```
 {#3f47 .graf .graf--pre .graf-after--pre name="3f47"}
capacity = 4096;
```


```
 {#fa84 .graf .graf--pre .graf-after--pre name="fa84"}
buffer = new Uint8Array(this.capacity);
```


```
 {#2442 .graf .graf--pre .graf-after--pre name="2442"}
}
```


The same proposal that seeks to standardize these instance fields also
defines private (with the \# prefix) instance fields.

```
 {#2722 .graf .graf--pre .graf-after--p name="2722"}
class Buffer {
```


```
 {#a3de .graf .graf--pre .graf-after--pre name="a3de"}
#size = 0;
```


```
 {#1b3b .graf .graf--pre .graf-after--pre name="1b3b"}
get size() { return this.#size; }
```


```
 {#98d3 .graf .graf--pre .graf-after--pre name="98d3"}
}
```


A related proposal seeks to standardize the use of the
`static`  keyword for fields.

```
 {#29c7 .graf .graf--pre .graf-after--p name="29c7"}
static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;
```


```
 {#69bb .graf .graf--pre .graf-after--pre name="69bb"}
static parse(s) {
```


```
 {#5408 .graf .graf--pre .graf-after--pre name="5408"}
let matches = s.match(Range.integerRangePattern);
```


```
 {#64a7 .graf .graf--pre .graf-after--pre name="64a7"}
if (!matches) {
```


```
 {#dfa8 .graf .graf--pre .graf-after--pre name="dfa8"}
throw new TypeError(`Cannot parse Range from "${s}".`)
```


```
 {#b503 .graf .graf--pre .graf-after--pre name="b503"}
}
```


```
 {#e5c3 .graf .graf--pre .graf-after--pre name="e5c3"}
return new Range(parseInt(matches[1]), matches[2]);
```


```
 {#5b03 .graf .graf--pre .graf-afte --pre name="5b03"}
}
```


### Adding Methods to Existing Classes {#1c22 .graf .graf--h3 .graf-after--pre name="1c22"}

We can augment JavaScript class s simply by adding new methods to their
prototype objects.

```
 {#8410 .graf .graf--pre .graf-after--p name="8410"}
if (!String.prototype.startsWith) {
```


```
 {#a3fc .graf .graf--pre .graf-after--pre name="a3fc"}
String.prototype.startsWith = function(s) {
```


```
 {#58cc .graf .graf--pre .graf-after--pre name="58cc"}
return this.indexOf(s) === 0;
```


```
 {#b75e .graf .graf--pre .graf-after--pre name="b75e"}
};
```


```
 {#7f00 .graf .graf--pre .graf-after--pre name="7f00"}
}
```


```
 {#7ad5 .graf .graf--pre .graf-after--pre name="7ad5"}
Number.prototype.times = function(f, context) {
```


```
 {#7f4f .graf .graf--pre .graf-after--pre name="7f4f"}
let n = this.valueOf();
```


```
 {#9da4 .graf .graf--pre .graf-after--pre name="9da4"}
for(let i = 0; i < n; i++) f.call(context, i);
```


```
 {#4058 .graf .graf--pre .graf-after--pre name="4058"}
};
```


### Subclasses {#3bd2 .graf .graf--h3 .graf-after--pre name="3bd2"}

### Subclasses and Prototypes {#126c .graf .graf--h3 .graf-after--h3 name="126c"}

Span subclass of the Range class. This subclass will work just like a
Range, but instead of initializing it with a start and an end, we'll
instead specify a start and a distance, or span.

```
 {#2785 .graf .graf--pre .graf-after--p name="2785"}
function Span(start, span) {
```


```
 {#3e54 .graf .graf--pre .graf-after--pre name="3e54"}
if (span >= 0) {
```


```
 {#0203 .graf .graf--pre .graf-after--pre name="0203"}
this.from = start;
```


```
 {#d677 .graf .graf--pre .graf-after--pre name="d677"}
this.to = start + span;
```


```
 {#379c .graf .graf--pre .graf-after--pre name="379c"}
}
```


```
 {#80c7 .graf .graf--pre .graf-after--pre name="80c7"}
else {
```


```
 {#7c42 .graf .graf--pre .graf-after--pre name="7c42"}
this.to = start;
```


```
 {#8bb7 .graf .graf--pre .graf-after--pre name="8bb7"}
this.from = start + span;
```


```
 {#118d .graf .graf--pre .graf-after--pre name="118d"}
}
```


```
 {#9471 .graf .graf--pre .graf-after--pre name="9471"}
}
```


Ensure that the `Span`  prototype inherits
from the `Range` 

```
 {#4012 .graf .graf--pre .graf-after--p name="4012"}
Span.prototype = Object.create(Range.prototype);
```


We don't want to inherit `Range.prototype.constructor` , so we define our own constructor property:

```
 {#ed9d .graf .graf--pre .graf-after--p name="ed9d"}
Span.prototype.constructor = Span;
```


`Span`  overrides the
`toString()`  method

`Span.prototype.toString = function() {` \
 `` return `(${this.from}... +${this.to - this.from})`; `` \
 `};` 

A robust subclassing mechanism needs to allow classes to invoke the
methods and constructor of their superclass, but prior to ES6,
JavaScript did not have a simple way to do these things.

### Subclasses with extends and super {#a62b .graf .graf--h3 .graf-after--p name="a62b"}

```
 {#b694 .graf .graf--pre .graf-after--h3 name="b694"}
class EZArray extends Array {
```


```
 {#01ef .graf .graf--pre .graf-after--pre name="01ef"}
get first() { return this[0]; }
```
 

```
 {#5342 .graf .graf--pre .graf-after--pre name="5342"}
get last() { return this[this.length-1]; }
```


```
 {#d1cd .graf .graf--pre .graf-after--pre name="d1cd"}
}
```


`let                 a = new EZArray();` 

`a                 instanceof EZArray` 

true

`a                 instanceof Array` 

true

`a.push(1,2,3,4);` 

`a.pop()` 

4

`a.first` 

1

`a.last` 

3

`Array.isArray(a)` 

true

`EZArray.isArray(a)` 

true

`Array.prototype.isPrototypeOf(EZArray.prototype` 

true

`Array.isPrototypeOf(EZArray)` 

true

Example demonstrates the use of the `super`  keyword to invoke the constructor and methods of the
superclass

```
 {#2c1f .graf .graf--pre .graf-after--p name="2c1f"}
class TypedMap extends Map {
```


```
 {#7c20 .graf .graf--pre .graf-after--pre name="7c20"}
constructor(keyType, valueType, entries) {
```


```
 {#9b1c .graf .graf--pre .graf-after--pre name="9b1c"}
if (entries) {
```


```
 {#edeb .graf .graf--pre .graf-after--pre name="edeb"}
for(let [k, v] of entries) {
```


```
 {#5e06 .graf .graf--pre .graf-after--pre name="5e06"}
if (typeof k !== keyType || typeof v !== valueType) {
```


```
 {#381e .graf .graf--pre .graf-after--pre name="381e"}
throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
```


```
 {#6dd1 .graf .graf--pre .graf-after--pre name="6dd1"}
}
```


```
 {#ead4 .graf .graf--pre .graf-after--pre name="ead4"}
}
```


```
 {#aa04 .graf .graf--pre .graf-after--pre name="aa04"}
}
```


```
 {#b4ed .graf .graf--pre .graf-after--pre name="b4ed"}
super(entries);
```


```
 {#a711 .graf .graf--pre .graf-after--pre name="a711"}
this.keyType = keyType;
```


```
 {#66d3 .graf .graf--pre .graf-after--pre name="66d3"}
this.valueType = valueType;
```


```
 {#63f8 .graf .graf--pre .graf-after--pre name="63f8"}
}
```


```
 {#1eeb .graf .graf--pre .graf-after--pre name="1eeb"}
set(key, value) {
 ``

 `` {#ccd9 .graf .graf--pre .graf-after--pre name="ccd9"}
if (this.keyType && typeof key !== this.keyType) {
```


```
 {#9f4c .graf .graf--pre .graf-after--pre name="9f4c"}
throw new TypeError(`${key} is not of type${this.keyType}`);
```
 

```
 {#bc0a .graf .graf--pre .graf-after--pre name="bc0a"}
}
```


```
 {#cfc9 .graf .graf--pre .graf-after--pre name="cfc9"}
if (this.valueType && typeof value !== this.valueType)
```


```
 {#5a49 .graf .graf--pre .graf-after--pre name="5a49"}
{
```


```
 {#3470 .graf .graf--pre .graf-after--pre name="3470"}
throw new TypeError(`${value} is not of type ${this.valueType}`);
```


```
 {#0282 .graf .graf--pre .graf-after--pre name="0282"}
}
```


```
 {#09f6 .graf .graf--pre .graf-after--pre name="09f6"}
return super.set(key, value);
```


```
 {#3cb9 .graf .graf--pre .graf-after--pre name="3cb9"}
}
```


```
 {#425f .graf .graf--pre .graf-after--pre name="425f"}
}
```


You may not use the `this`  keyword in
your constructor until after you have invoked the superclass constructor
with `super()` . This enforces a rule that
superclasses get to initialize themselves before subclasses do.

Once private fields are supported, we could change these properties to
`#keyType`  and `#valueType`  so that they could not be altered from the outside.

### Class Hierarchies and Abstract Classes {#86ad .graf .graf--h3 .graf-after--p name="86ad"}

Define abstract classes --- classes that do not include a complete
implementation --- to serve as a common superclass for a group of
related subclasses.

### Modules {#c7c6 .graf .graf--h3 .graf-after--p name="c7c6"}

### Automating Closure-Based Modularity {#c9d8 .graf .graf--h3 .graf-after--h3 name="c9d8"}

Imagine a tool that takes a set of files, wraps the content of each of
those files within an immediately invoked function expression, keeps
track of the return value of each function, and concatenates everything
into one big file.

```
 {#26e3 .graf .graf--pre .graf-after--p name="26e3"}
const modules = {};
```


```
 {#473b .graf .graf--pre .graf-after--pre name="473b"}
function require(moduleName) { return modules[moduleName]; }
```


```
 {#fd9b .graf .graf--pre .graf-after--pre name="fd9b"}
modules["sets.js"] = (function() {
```


```
 {#b431 .graf .graf--pre .graf-after--pre name="b431"}
const exports = {};
```


```
 {#19ff .graf .graf--pre .graf-after--pre name="19ff"}
exports.BitSet = class BitSet { ... };
```


```
 {#3ee4 .graf .graf--pre .graf-after--pre name="3ee4"}
return exports;
```


```
 {#56b9 .graf .graf--pre .graf-after--pre name="56b9"}
}());
```


```
 {#a1f1 .graf .graf--pre .graf-after--pre name="a1f1"}
modules["stats.js"] = (function() {
```


```
 {#b096 .graf .graf--pre .graf-after--pre name="b096"}
const exports = {};
```


```
 {#d853 .graf .graf--pre .graf-after--pre name="d853"}
const sum = (x, y) => x + y;
```


```
 {#9f14 .graf .graf--pre .graf-after--pre name="9f14"}
const square = x = > x * x;
```


```
 {#79cc .graf .graf--pre .graf-after--pre name="79cc"}
exports.mean = function(data) { ... };
```


```
 {#2508 .graf .graf--pre .graf-after--pre name="2508"}
exports.stddev = function(data) { ... };
```


```
 {#d9e9 .graf .graf--pre .graf-after--pre name="d9e9"}
return exports;
```


```
 {#bfad .graf .graf--pre .graf-after--pre name="bfad"}
}());
```


writing code like the following to make use of those modules

```
 {#e913 .graf .graf--pre .graf-after--p name="e913"}
const stats = require("stats.js");
```


```
 {#b790 .graf .graf--pre .graf-after--pre name="b790"}
const BitSet = require("sets.js").BitSet;
```


```
 {#6350 .graf .graf--pre .graf-after--pre name="6350"}
// Now write code using those modules
```


```
 {#9023 .graf .graf--pre .graf-after--pre name="9023"}
let s = new BitSet(100);
```


```
 {#51e0 .graf .graf--pre .graf-after--pre name="51e0"}
s.insert(10);
```


```
 {#493a .graf .graf--pre .graf-after--pre name="493a"}
s.insert(20);
```


```
 {#4e11 .graf .graf--pre .graf-after--pre name="4e11"}
s.insert(30);
```


```
 {#5724 .graf .graf--pre .graf-after--pre name="5724"}
let average = stats.mean([...s]);
```


### Modules in ES6 {#8bd8 .graf .graf--h3 .graf-after--pre name="8bd8"}

ES6 adds import and export keywords to JavaScript and finally supports
real modularity as a core language feature.

ES6 modularity is conceptually the same as Node modularity: each file is
its own module, and constants, variables, functions, and classes defined
within a file are private to that module unless they are explicitly
exported.

### ES6 Exports {#a557 .graf .graf--h3 .graf-after--p name="a557"}

To export a constant, variable, function, or class from an ES6 module,
simply add the keyword export before the declaration

```
 {#7c22 .graf .graf--pre .graf-after--p name="7c22"}
export const PI = Math.PI;
```
 

```
 {#c377 .graf .graf--pre .graf-after--pre name="c377"}
export function degreesToRadians(d) { return d * PI / 180; }
```


```
 {#e84c .graf .graf--pre .graf-after--pre name="e84c"}
export class Circle {
```


```
 {#a59b .graf .graf--pre .graf-after--pre name="a59b"}
constructor(r) { this.r = r; }
```


```
 {#d202 .graf .graf--pre .graf-after--pre name="d202"}
area() { return PI * this.r * this.r; }
```


```
 {#a506 .graf .graf--pre .graf-after--pre name="a506"}
}
```


or:

```
 {#fab1 .graf .graf--pre .graf-after--p name="fab1"}
export { Circle, degreesToRadians, PI };
```


It is common to write modules that export only one value (typically a
function or class), and in this case, we usually use export
`default`  instead of
`export` 

```
 {#bb1c .graf .graf--pre .graf-after--p name="bb1c"}
export default class BitSet {
```


```
 {#f5fa .graf .graf--pre .graf-after--pre name="f5fa"}
// implementation omitted
```


```
 {#8007 .graf .graf--pre .graf-after--pre name="8007"}
}
```


### ES6 Imports {#9efc .graf .graf--h3 .graf-after--pre name="9efc"}

```
 {#158c .graf .graf--pre .graf-after--h3 name="158c"}
import BitSet from './bitset.js';
```


```
 {#d070 .graf .graf--pre .graf-after--pre name="d070"}
import { mean, stddev } from "./stats.js";
```


When importing from a module that defines many exports, however, you can
easily import everything with an import statement like this:

```
 {#5392 .graf .graf--pre .graf-after--p name="5392"}
import * as stats from "./stats.js";
```


With the wildcard import shown in the previous example, the importing
module would use the imported `mean()` 
and`                 stddev()`  functions
through the stats object, invoking them as `stats.mean()`  and `stats.stddev()` .

Note: not finished.

### The JavaScript Standard Library {#63ce .graf .graf--h3 .graf-after--p name="63ce"}

### The Set Class {#76e1 .graf .graf--h3 .graf-after--h3 name="76e1"}

Sets are not ordered or indexed, and they do not allow duplicates.

```
 {#fbe3 .graf .graf--pre .graf-after--p name="fbe3"}
let s = new Set();
```


```
 {#9cac .graf .graf--pre .graf-after--pre name="9cac"}
let t = new Set([1, s]);
```


```
 {#08b9 .graf .graf--pre .graf-after--pre name="08b9"}
let t = new Set(s);
```


```
 {#53b0 .graf .graf--pre .graf-after--pre name="53b0"}
let unique = new Set("Mississippi");
```


The argument to the `Set()`  constructor
need not be an array: any iterable object (including other Set objects)
is allowed.

The `add()`  method takes a single
argument; if you pass an array, it adds the array itself to the set, not
the individual array elements. `add()` 
always returns the set it is invoked on, however, so if you want to add
multiple values to a set, you can used chained method calls like.

it is very important to understand that set membership is based on
strict equality checks, like the === operator performs.

The most important thing we do with sets is not to add and remove
elements from them, but to check to see whether a specified value is a
member of the set:

`let                 oneDigitPrimes = new Set([2,3,5,7]);` 
 
`oneDigitPrimes.has(2)` 

The Set class is iterable, which means that you can use a
`for/of`  loop to enumerate all of the
elements of a set:

```
 {#5f8f .graf .graf--pre .graf-after--p name="5f8f"}
let sum = 0;
```


```
 {#542d .graf .graf--pre .graf-after--pre name="542d"}
for(let p of oneDigitPrimes) {
```


```
 {#6d30 .graf .graf--pre .graf-after--pre name="6d30"}
sum += p; // and add them up
```


```
 {#a488 .graf .graf--pre .graf-after--pre name="a488"}
}
```


Because Set objects are iterable, you can convert them to arrays and
argument lists with the ... spread operator

`[...oneDigitPrimes]` 

JavaScript Set class always remembers the order that elements were
inserted in, and it always uses this order when you iterate a set: the
first element inserted will be the first one iterated (assuming you
haven't deleted it first), and the most recently inserted element will
be the last one iterated.

Set class also implements a `forEach()` 
method

```
 {#d596 .graf .graf--pre .graf-after--p name="d596"}
let product = 1;
```


```
 {#fa52 .graf .graf--pre .graf-after--pre name="fa52"}
oneDigitPrimes.forEach(n => { product *= n; });
```


### The Map Class {#15eb .graf .graf--h3 .graf-after--pre name="15eb"}

```
 {#dbb1 .graf .graf--pre .graf-after--h3 name="dbb1"}
let m = new Map();
```


```
 {#68b4 .graf .graf--pre .graf-after--pre name="68b4"}
let n = new Map([["one", 1],["two", 2]]);
```


```
 {#89d9 .graf .graf--pre .graf-after--pre name="89d9"}
let copy = new Map(n);
```


```
 {#5e16 .graf .graf--pre .graf-after--pre name="5e16"}
let o = { x: 1, y: 2};
```


```
 {#4407 .graf .graf--pre .graf-after--pre name="4407"}
let p = new Map(Object.entries(o));
```


map is a set of keys, each of which has an associated value. This is not
quite the same as a set of key/value pairs.

use `has()`  to check whether a map
includes the specified key; use `delete()`  to remove a key (and its associated value) from the
map; use `clear()`  to remove all
key/value pairs from the map; and use the size property to find out how
many keys a map contains.

`set()`  method of Map can be chained.

Any JavaScript value can be used as a key or a value in a Map. This
includes` null, undefined` , and
`NaN` , as well as reference types like
objects and arrays.

Map compares keys by identity, not by equality.

`let m                 = new Map();` 

`m.set({}, 1);`{.markup--co e .markup--p-code}

`m.set({},  );` 

Map a different empty object to the number 2.

`m.get({})` 

undefined:

`m.set(m, undefined);` 

`m.has(m)` 

true

`m.get(m)` 

undefined

Iterate over map:

`let m                 = new Map([["x", 1], ["y", 2]]);` 

`[...m]` 

\[\["x", 1\], \["y", 2\]\]

`for(let [key, value] of m) {...}` 

Map class iterates in insertion order

If you want to iterate just the keys or just the associated values of a
map, use the `keys()`  and
`values()`  methods: these return iterable
objects that iterate keys and values, in insertion order. (The\
 `entries()`  method returns an iterable
object that iterates key/value pairs, but this is exactly the same as
iterating the map directly.)

```
 {#efa9 .graf .graf--pre .graf-after--p name="efa9"}
[...m.keys()]
```


```
 {#13ce .graf .graf--pre .graf-after--pre name="13ce"}
[...m.values()]
```


```
 {#0bff .graf .graf--pre .graf-after--pre name="0bff"}
[...m.entries()]
```


Map objects can also be iterated using the `forEach()` 

```
 {#87d8 .graf .graf--pre .graf-after--p name="87d8"}
m.forEach((value, key) => {...}
```


Note that the value parameter comes before the key parameter.

### WeakMap and WeakSet {#2c2d .graf .graf--h3 .graf-after--p name="2c2d"}

The `WeakMap ` class is a variant (but not
an actual subclass) of the Map class that does not prevent its key
values from being garbage collected.
 
`WeakMap ` keys must be objects or arrays;
primitive values are not subject to garbage collection and cannot be
used as keys.

WeakMap implements only the` get(), set(), has(),`  and `delete()`  methods.
In particular, `WeakMap`  is not iterable
and does not define `keys(), values(),` 
or `forEach()` . If WeakMap was iterable,
then its keys would be reachable and it wouldn't be weak.

Similarly, WeakMap does not implement the size property because the
`size`  of a WeakMap could change at any
time as objects are garbage collected

### Typed Arrays and Binary Data {#5bba .graf .graf--h3 .graf-after--p name="5bba"}

They differ from regular arrays in some very important ways

· The elements of a typed array are all numbers. Unlike regular
JavaScript numbers, however, typed arrays allow you to specify the type
(signed and unsigned integers and IEEE-754 floating point) and size (8
bits to 64 bits) of the numbers to be stored in the array.

· You must specify the length of a typed array when you create it, and
that length can never change.

· The elements of a typed array are always initialized to 0 when the
array is created.

```
 {#2158 .graf .graf--pre .graf-after--p name="2158"}
Int8Array()
```


```
 {#ccf7 .graf .graf--pre .graf-after--pre name="ccf7"}
Uint8Array()
```


```
 {#7578 .graf .graf--pre .graf-after--pre name="7578"}
Uint8ClampedArray()
```


```
 {#54a1 .graf .graf--pre .graf-after--pre name="54a1"}
Int16Array()
```


```
 {#19a7 .graf .graf--pre .graf-after--pre name="19a7"}
Uint32Array()
```


```
 {#a148 .graf .graf--pre .graf-after--pre name="a148"}
Uint16Array()
```


```
 {#0f2a .graf .graf--pre .graf-after--pre name="0f2a"}
Int32Array()
```


```
 {#3f1e .graf .graf--pre .graf-after--pre name="3f1e"}
BigInt64Array()
```


```
 {#9e81 .graf .graf--pre .graf-after--pre name="9e81"}
BigUint64Array()
```


```
 {#e61b .graf .graf--pre .graf-after--pre name="e61b"}
Float32Array()
```


```
 {#b7ee .graf .graf--pre .graf-after--pre name="b7ee"}
let bytes = new Uint8Array(1024);
```


```
 {#e54e .graf .graf--pre .graf-after--pre name="e54e"}
let matrix = new Float64Array(9);
```


```
 {#06d6 .graf .graf--pre .graf-after--pre name="06d6"}
let sudoku = new Int8Array(81);
```


Initialize with values

```
 {#fd7b .graf .graf--pre .graf-after--p name="fd7b"}
let white = Uint8ClampedArray.of(255, 255, 255, 0);
```


```
 {#bef1 .graf .graf--pre .graf-after--pre name="bef1"}
let ints = Uint32Array.from(white);
```


one more way to create typed arrays that involves the
`ArrayBuffer`  type

```
 {#1e1b .graf .graf--pre .graf-after--p name="1e1b"}
let buffer = new ArrayBuffer(1024*1024);
```


```
 {#430b .graf .graf--pre .graf-after--pre name="430b"}
buffer.byteLength
 ``

1024\*1024

Typed arrays are not true arrays, but they re-implement most array
methods, so you can use them pretty much just like you'd use regular
arrays:

`let                 ints = new Int16Array(10);` 

10 short integers

`ints.fill(3).map(x=>x*x).join("")` 

"9999999999"

Remember that typed arrays have fixed lengths, so the length property is
read-only, and methods that change the length of the array (such
as` push(), pop(), unshift(), shift(),` 
and `splice()` ) are not implemented for
typed arrays. Methods that alter the contents of an array without
changing the length (such as `sort(), reverse()` , and `fill()` ) are
implemented.

### Determine Endianess and DataView {#3b0a .graf .graf--h3 .graf-after--p name="3b0a"}
 
```
 {#4ee9 .graf .graf--pre .graf-after--h3 name="4ee9"}
let littleEndian = new Int8Array(new Int32Array([1]).buffer)
```


```
 {#dd08 .graf .graf--pre .graf-after--pre name="dd08"}
[0] === 1;
```


You can use the `DataView`  class, which
defines methods for reading and writing values from an
`ArrayBuffer`  with explicitly specified
byte ordering. Refer to book for more examples.

### Pattern Matching with Regular Expressions {#2f05 .graf .graf--h3 .graf-after--p name="2f05"}

RegExp objects may be created with the `RegExp()`  constructor, of course, but they are more often created
using a special literal syntax.

```
 {#badc .graf .graf--pre .graf-after--p name="badc"}
let pattern = /s$/;
```
 

←\>

```
 {#a838 .graf .graf--pre .graf-after--p name="a838"}
let pattern = new RegExp("s$");
```


Regular expressions can also have one or more flag characters that
affect how they work

```
 {#8b27 .graf .graf--pre .graf-after--p name="8b27"}
let pattern = /s$/i;
```


i = case insensitive

Punctuation characters have special meanings in regular expressions:
`^ $ . * + ? = ! : | \ / ( ) [ ] { }.               ` Other punctuation characters, such as quotation marks
and @, do not have special meaning and simply match themselves literally
in a regular expression.

If you use the `RegExp()`  constructor,
keep in mind that any backslashes in your regular expression need to be
doubled, since strings also use backslashes as an escape character.

**Character**

**Matches**

`[...]` 

Any one character between the brackets.

`[^...]` 

Any one character not between the brackets

`.` 

Any character except newline or another Unicode line terminator. Or, if
the `RegExp`  uses the s flag, then a
period matches any character, including line terminators.

`\w` 

Any ASCII word character. Equivalent to \[a-zA-Z0--9\_\].

`\W` 

Equivalent to \[\^a-zA-Z0--9\_\]

`\s` 

Any Unicode whitespace character.

`\S` 

Any character that is not Unicode whitespace.

`\d` 

Equivalent to \[0--9\].

`\D` 

Equivalent to \[<sup>0</sup>-9\].

`[\b]` 

A literal backspace (special case).

`[\s\d]` 

Any one whitespace character or digit

REPETITIONS

**Character**

**Meaning**

`{n,m}` 

Match the previous item at least n times but no more than m times

`{n,}` 

Match the previous item n or more times.

`{n}` 

Match exactly n occurrences of the previous item.

`?` 

Equivalent to {0,1}.

`+` 

Equivalent to {1,}

\*

Equivalent to {0,}.

**Example**

**Description**

```
 {#e7e0 .graf .graf--pre .graf-after--p name="e7e0"}
let r = /\d{2,4}/;
```
 

Match between two and four digits

```
 {#2355 .graf .graf--pre .graf-after--p name="2355"}
r = /\w{3}\d?/;
```


Match exactly three word characters and an optional digit

```
 {#95fc .graf .graf--pre .graf-after--p name="95fc"}
r = /\s+java\s+/;
```


Match "java" with one or more spaces before and after

```
 {#7e48 .graf .graf--pre .graf-after--p name="7e48"}
r = /[^(]*/;
```


Match zero or more characters that are not open parens

If you want to match repetitions of more complicated expressions, you'll
need to define a group with parentheses

Be careful when using the \* and ? repetition characters. Since these
characters may match zero instances of whatever precedes them, they are
allowed to match nothing.

### NON-GREEDY REPETITION {#7a98 .graf .graf--h3 .graf-after--p name="7a98"}

It is also possible to specify that repetition should be done in a
non-greedy way. Simply follow the repetition character or characters
with a question mark: `??, +?, *?` , or
even {1,5}?.

**String**

**Pattern**

**Match**
    
```
 {#4ac3 .graf .graf--pre .graf-after--p name="4ac3"}
"aaa"
```


```
 {#0f7e .graf .graf--pre .graf-after--pre name="0f7e"}
/a+/
```


```
 {#7139 .graf .graf--pre .graf-after--pre name="7139"}
"aaa"
```


```
 {#2077 .graf .graf--pre .graf-after--pre name="2077"}
"aaa"
```


```
 {#3fea .graf .graf--pre .graf-after--pre name="3fea"}
/a+?/
```


```
 {#9515 .graf .graf--pre .graf-after--pre name="9515"}
"a"
```


Note that using non-greedy repetition may not always produce the results
you expect. This is because regular expression pattern matching is done
by findingthe first position in the string at which a match is possible.
Since a match is possible starting at the first character of the string,
shorter matches starting at subsequent characters are never even
considered.

### ALTERNATION, GROUPING, AND REFERENCES {#a281 .graf .graf--h3 .graf-after--p name="a281"}

**Char**

**Pattern**

**Pattern**

`|` 

`/ab|cd|ef/` 

"ab" or the string "cd" or the string "ef".

`/\d{3}|[a-z]{4}/` 

either three digits or four lowercase letters.

`/a|ab/` 

matches only the first letter "a"

`()` 

`/java(script)?/` 

matches "java" followed by the optional "script"

`/(ab|cd)+|ef/` 

matches "java" followed by the optional "script"

If the left alternative matches, the right alternative is ignored, even
if it would have produced a "better" match

Another purpose of parentheses in regular expressions is to define
subpatterns within the complete pattern. When a regular expression is
successfully matched against a target string, it is possible to extract
the portions of the target string that matched any particular
parenthesized subpattern. For example, suppose you are looking for one
or more lowercase letters followed by one or more digits. You might use
the pattern `/[a-z]+\d+/` . But suppose
you only really care about the digits at the end of each match. If you
put that part of the pattern in parentheses (/\[a-z\]+(\\d+)/), you can
extract the digits from any matches you find,

A related use of parenthesized subexpressions is to allow you to refer
back to a subexpression later in the same regular expression. This is
done by following a \\ character by a digit or digits. The digits refer
to the position of the parenthesized subexpression within the regular
expression. For example, \\1 refers back to the first subexpression, and
\\3 refers to the third.

**Match**

**Pattern**

zero or more characters within single or double quotes. However, it does
not\
 require the opening and closing quotes to match

```
 {#98fa .graf .graf--pre .graf-after--p name="98fa"}
/['"][^'"]*['"]/
```


To require the quotes to match,use a reference

```
 {#65c1 .graf .graf--pre .graf-after--p name="65c1"}
/(['"])[^'"]*\1/
```


**Character**

**Meaning**

\|

match either the subexpression to the left or the subexpression to the
right.

(...)

Grouping: group items into a single unit that can be used with \*, +, ?,
\|, and so on. Also remember the characters that match this group for
use with later references

(?:...)

group items into a single unit,  ut do not remember the characters that
match this group.

Note`                 (?:...)`  syntax:

In pattern` "/([Jj]ava(?:[Ss]cript)?)\sis\s(fun\w*)/` \" `\2`  refers to the
text matched by `(fun\w*)`  since
`(?:[Ss]cript)?)`  in not remembered.
 
### SPECIFYING MATCH POSITION {#f2c8 .graf .graf--h3 .graf-after--p name="f2c8"}

*regular expression anchors* because they anchor the pattern to a
specific position in the search string. The most commonly used anchor
elements are \^, which ties the pattern to the beginning of the string,
and \$, which anchors the pattern to the end of the string.

**Example**

**Pattern**

match the word "JavaScript" on a line by itself

`/^JavaScript$/` 

To search for "Java" as a word by itself you can try the pattern
`/\sJava\s/` , which requires a space
before and after the word. But there are two problems with this
solution. First, it does not match \"Java\" at the beginning or the end
of a string, but only if it appears with space on either side. Second,
when this pattern does find a match, the matched string it returns has
leading and trailing spaces, which is not quite what's needed. So
instead of matching actual space characters with \\s, match (or anchor
to) word boundaries with \\b. The resulting expression is
`/\bJava\b/` .

The element `\B`  anchors the match to a
location that is not a word boundary. Thus, the pattern
`/\B[Ss]cript/`  matches \"JavaScript\"
and \"postscript\", but not \"script\" or \"Scripting\".

You can also use arbitrary regular expressions as anchor conditions.

If you include an expression within `(?= and )`  characters, it is a lookahead assertion, and it
specifies that the enclosed characters must match, without actually
matching them.

**Example**

**Pattern**

**Matches**

to match the name of a common programming language, but only if it is
followed by a colon

`/[Jj]ava([Ss]cript)?(?=\:)/` 

matches the word "JavaScript" in "JavaScript: The DefinitiveGuide"

does not match "Java" in "Java in a Nutshell"

If you instead introduce an assertion with `(?!` , it is a negative lookahead assertion.

### FLAGS {#e3c7 .graf .graf--h3 .graf-after--p name="e3c7"}

Flags are specified after the second / character of a regular expression
literal or as a string passed as the second argument to the RegExp()
constructor.

**Flag**

**Meaning**

g

"global" --- that is,that we intend to use it to find all matches within
a string rather than just finding the first
[match.it](http://match.it/)  does
alter the behavior of the String `match()`  method and the `RegExp exec()`  method in important ways.

i

case-insensitive

m

"multiline" mode

s

useful when working with text that includes newlines.Normally, a "." in
a regular expression matches any character except a line terminator.
When the s flag is used, however, "." will match any character,
including line terminators.

u

Unicode.

Setting the u flag on a RegExp also allows you to use the new
`\u{...}`  escape sequence for Unicode
character and also enables the \\p{\...} notation for Unicode character
classes.

y

"sticky". should match at the beginning of a string or at the first
 haracter following the previous match

### String Methods for Pattern Matching {#4bac .graf .graf--h3 .graf-after--p name="4bac"}

### SEARCH() {#3180 .graf .graf--h3 .graf-after--h3 name="3180"}

Strings support four methods that use regular expressions.

`"JavaScript".search(/script/ui)` 

4

`"Python".search(/script/ui)` 

-1

`search()`  does not support global
searches; it ignores the `g`  flag of its
regular expression argument.

REPLACE()

`text.replace(/javascript/gi, "JavaScript");` 
 
No matter how it is capitalized, replace it with the correct
capitalization

parenthesized subexpressions of a regular expression are numbered from
left to right and that the regular expression remembers the text that
each subexpression matches.

to replace quotation marks in a string with other characters:

`let                 quote = /"([^"]*)"/g;` 

`'He said "stop"'.replace(quote,                 '«$1»')` 

'He said «stop»'

If your RegExp uses  amed capture groups, then you can refer to the
matching text by name rather than by number:

`let                 quote = /"(?<quotedText>[^"]*)"/g;` 

`'He said "stop"'.replace(quote,                 '«$<quotedText>»')` 

'He said «stop»'

Instead of passing a replacement string as the second argument to
replace(), you can also pass a function that will be invoked to compute
the replacement value.

Example to convert decimal integers in a string to hexadecimal:

`let s                 = "15 times 15 is 225";` 

`s.replace(/\d+/gu, n => parseInt(n).toString(16))` 

"f times f is e1"

### MATCH() {#36ae .graf .graf--h3 .graf-after--p name="36ae"}

`"7 plus 8 equals 15".match(/\d+/g)` 

\["7", "8", "15"\]

If the regular expression does not have the `g`  flag set, `match()`  does
not do a global search; it simply searches for the first match. In this
nonglobal case, `match()`  still returns
an array, but the array elements are completely different.

Thus, if `match()`  returns an array a,
a\[0\] contains the complete match, a\[1\] contains the substring that
matched the first parenthesized expression, and so on.

```
 {#5d4b .graf .graf--pre .graf-after--p name="5d4b"}
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
```


```
 {#f6de .graf .graf--pre .graf-after--pre name="f6de"}
let text = "Visit my blog at http://www.example.com/~david";
```


```
 {#00e8 .graf .graf--pre .graf-after--pre name="00e8"}
let match = text.match(url);
```


```
 {#8c6b .graf .graf--pre .graf-after--pre name="8c6b"}
let fullurl, protocol, host, path;
```


```
 {#1d38 .graf .graf--pre .graf-after--pre name="1d38"}
if (match !== null) {
```


```
 {#f8eb .graf .graf--pre .graf-after--pre name="f8eb"}
fullurl = match[0];
```


["http://www.example.com/\~david](http://www.example.com/~david) \"

```
 {#baf6 .graf .graf--pre .graf-after--p name="baf6"}
protocol = match[1];
```


"http"

```
 {#bbb7 .graf .graf--pre .graf-after--p name="bbb7"}
host = match[2];
```


["www.example.com](http://www.example.com/) \"

```
 {#ce0f .graf .graf--pre .graf-after--p name="ce0f"}
path = match[3];
```


"\~david"

In this non-global case, the array returned by match() also has some
object properties in addition to the numbered array elements.

input property refers to the string on which match() was called

The index property is the position within that string at which the match
starts.

if the regular expression contains named capture groups, then the
returned array also has a groups property whose value is an object.

`let                 url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;` 

`let                 text = "Visit my blog at http://www.example.com/~david";` 

`let                 match = text.match(url);` 

`match[0]` 

["http://www.example.com/\~david](http://www.example.com/~david) \"

`match.input`{.markup--code .m rkup--p-code}

text

`match.index` 

17

`match.groups.protocol` 

"http"

`match.groups.host` 

["www.example.com](http://www.example.com/) \"

`match.groups.path` 

"\~david"

There are also important but less dramatic differences in behavior when
the y flag is set. Refer to book for examples.

### MATCHALL() {#5022 .graf .graf--h3 .graf-after--p name="5022"}

Instead of returning an array of matching substrings like
`match()`  does, however, it returns an
iterator that yields the kind of match objects that match() returns when
used with a non-global RegExp.

### SPLIT() {#839b .graf .graf--h3 .graf-after--p name="839b"}

`"123,456,789".split(",")` 

\["123", "456","789\"\]

`"1, 2, 3,\n4, 5".split(/\s*,\s*/)` 

\["1", "2", "3", "4","5\"\]

Surprisingly, if you call `split()`  with
a RegExp delimiter and the regular expression includes capturing groups,
then the text that matches the capturing groups will be included in the
returned array.

`const                 htmlTag = /<([^>]+)>/;` 

`"Testing<br/>1,2,3".split(htmlTag)` 

\["Testing", "br/","1,2,3\"\]

### The RegExp Class {#61fa .graf .graf--h3 .graf-after--p name="61fa"}

The `RegExp()`  constructor is useful when
a regular expression is being dynamically created and thus cannot be
represented with the regular expression literal syntax.

```
 {#ad41 .graf .graf--pre .graf-after--p name="ad41"}
let zipcode = new RegExp("\\d{5}", "g");
```


`let                 exactMatch = /JavaScript/;` \
 `let caseInsensitive =                 new RegExp(exactMatch, "i");` 

### TEST() {#06d8 .graf .graf--h3 .graf-after--p name="06d8"}

Returns true or false by calling `exec()` .

### EXEC() {#4722 .graf .graf--h3 .graf-after--p name="4722"}

```
 {#dc88 .graf .graf--pre .graf-after--h3 name="dc88"}
let pattern = /Java/g;
```


```
 {#4c3d .graf .graf--pre .graf-after--pre name="4c3d"}
let text = "JavaScript > Java";
```


```
 {#1b8b .graf .graf--pre .graf-after--pre name="1b8b"}
let match;
```


```
 {#2989 .graf .graf--pre .graf-after--pre name="2989"}
while((match = pattern.exec(text)) !== null) {
```


```
 {#b4b6 .graf .graf--pre .graf-after--pre name="b4b6"}
console.log(`Matched ${match[0]} at ${match.index}`);
```


```
 {#ec45 .graf .graf--pre .graf-after--pre name="ec45"}
console.log(`Next search begins at ${pattern.lastIndex}`);
```


```
 {#06c6 .graf .graf--pre .graf-after--pre name="06c6"}
}
```


### THE LASTINDEX PROPERTY AND REGEXP REUSE {#e8ba .graf .graf--h3 .graf-after--pre name="e8ba"}

The use of the `lastIndex`  property with
the g and y flags is a particularly awkward part of this API. When you
use these flags, you need to be particularly careful when calling the
`match(), exec()` , or
`test()`  methods because the behavior of
these methods depends on `lastIndex` , and
the value of `lastIndex`  depends on what
you have previously done with the RegExp object.

To find the index of all \<p\> tags within a string of HTML text:

```
 {#499e .graf .graf--pre .graf-after--p name="499e"}
let match, positions = [];
```


```
 {#2953 .graf .graf--pre .graf-after--pre name="2953"}
while((match = /<p>/g.exec(html)) !== null) {
```


```
 {#30cb .graf .graf--pre .graf-after--pre name="30cb"}
positions.push(match.index);
```


```
 {#6bc6 .graf .graf--pre .graf-after--pre name="6bc6"}
}
```


If the html string contains at least one \<p\> tag, then it will loop
forever. For each iteration of the loop, we're creating a new RegExp
object with `lastIndex`  set to 0, so
`exec()`  always begins at the start of
the string, and if there is a match, it will keep matching over and
over. The solution, of course, is to define the RegExp once, and save it
to a variable so that we're using the same RegExp object for each
iteration of the loop.

On the other hand, sometimes reusing a RegExp object is the wrong thing
to do. Suppose, for example, that we want to loop through all of the
words in a dictionary to find words that contain pairs of double
letters.

```
 {#4d45 .graf .graf--pre .graf-after--p name="4d45"}
let dictionary = [ "apple", "book", "coffee" ];
```


```
 {#fd51 .graf .graf--pre .graf-after--pre name="fd51"}
let doubleLetterWords = [];
```


```
 {#3709 .graf .graf--pre .graf-after--pre name="3709"}
let doubleLetter = /(\w)\1/g;
```


```
 {#a3b5 .graf .graf--pre .graf-after--pre name="a3b5"}
for(let word of dictionary) {
```


```
 {#3dd3 .graf .graf--pre .graf-after--pre name="3dd3"}
if (doubleLetter.test(word)) {
```


```
 {#b6a5 .graf .graf--pre .graf-after--pre name="b6a5"}
doubleLetterWords.push(word);
```


```
 {#bd33 .graf .graf--pre .graf-after--pre name="bd33"}
}
```


```
 {#007c .graf .graf--pre .graf-after--pre name="007c"}
}
```


`doubleLetterWords` 

\["apple", "coffee"\]: "book" is missing!

Because we set the g flag on the RegExp, the `lastIndex`  property is changed after successful matches, and the
`test()`  method (which is based on
`exec()` ) starts searching for a match at
the position specified by `lastIndex` .
After matching the \"pp\" in \"apple\", `lastIndex`  is 3, and so we start searching the word \"book\" at
position 3 and do not see the \"oo\" that it contains.

### Dates and Times {#ccfb .graf .graf--h3 .graf-after--p name="ccfb"}

```
 {#2f75 .graf .graf--pre .graf-after--h3 name="2f75"}
let now = new Date();
```


The current time

```
 {#79ef .graf .graf--pre .graf-after--p name="79ef"}
let epoch = new Date(0);
```


Midnight, January 1st, 1970, GMT

```
 {#6d18 .graf .graf--pre .graf-after--p name="6d18"}
let century = new Date(2100,
```


```
 {#0c34 .graf .graf--pre .graf-after--pre name="0c34"}
0,
```
 

```
 {#8046 .graf .graf--pre .graf-after--pre name="8046"}
1,
```


```
 {#50ba .graf .graf--pre .graf-after--pre name="50ba"}
2, 3, 4, 5);
```


Year 2100

 anuary

1st

02:03:04.005, local

```
 {#7fe0 .graf .graf--pre .graf-after--p name="7fe0"}
let century = new Date(Date.UTC(2100, 0, 1));
```


Midnight in GMT, January 1, 2100

If you print a date (with console.log(century), for example), it will,
by default, be printed in your local time zone. If you want to display a
date in UTC, you should explicitly convert it to a string with
`toUTCString()` 
or`                 toISOString()` .

if you pass a string to the Date() constructor, it will attempt to parse
that string as a date and time specification

`let                 century = new Date("2100-01-01T00:00:00Z");` 

Once you have a Date object, various get and set methods allow you to
query and modify the year, month, day-of-month, hour, minute, second,
and millisecond fields of the Date. Each of these methods hastwo forms:
one that gets or sets using local time and one that gets or sets using
UTC time.

Note that the methods for querying the day-of-month are
`getDate()`  and
`getUTCDate()` . The more natural-sounding
functions `getDay()`  and
`getUTCDay()`  return the day-of-week (0
for Sunday through 6 for Saturday). The day-of-week is read-only, so
there is not a corresponding `setDay()` 
method.

### Timestamps {#4903 .graf .graf--h3 .graf-after--p name="4903"}

JavaScript represents dates internally as integers that specify the
number of milliseconds since (or before) midnight on January 1, 1970,
UTC time.

For any Date object, the `getTime()` 
method returns this internal value, and the `setTime()`  method sets it.

```
 {#b06b .graf .graf--pre .graf-after--p name="b06b"}
d.setTime(d.getTime() + 30000);
```


add 30 secs

The static Date.now() method returns the current time as a timestamp and
is helpful when you want to measure how long your code takes to run

```
 {#58fe .graf .graf--pre .graf-after--p name="58fe"}
let startTime = Date.now();
```


```
 {#5d6a .graf .graf--pre .graf-after--pre name="5d6a"}
reticulateSplines(); // Do some time-consuming operation
```


```
 {#a4e7 .graf .graf--pre .graf-after--pre name="a4e7"}
let endTime = Date.now();
```


```
 {#c537 .graf .graf--pre .graf-after--pre name="c537"}
console.log(`Spline reticulation took ${endTime -startTime}ms.`);
```


adds three months and two weeks to the current date:

`let d                 = new Date();` \
 `d.setMonth(d.getMonth() + 3,                 d.getDate() + 14);` 

### Formatting and Parsing Date Strings {#ea96 .graf .graf--h3 .graf-after--p name="ea96"}

```
 {#853e .graf .graf--pre .graf-after--h3 name="853e"}
let d = new Date(2020, 0, 1, 17, 10, 30);
```


```
 {#b193 .graf .graf--pre .graf-after--pre name="b193"}
d.toString()
```


"Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"

```
 {#9ee6 .graf .graf--pre .graf-after--p name="9ee6"}
d.toUTCString()
```


"Thu, 02 Jan 2020 01:10:30 GMT"

```
 {#9745 .graf .graf--pre .graf-after--p name="9745"}
d.toLocaleDateString()
```


"1/1/2020": 'en-US' locale

```
 {#664a .graf .graf--pre .graf-after--p name="664a"}
d.toLocaleTimeString()
```


"5:10:30 PM": 'en-US' locale

```
 {#7bf8 .graf .graf--pre .graf-after--p name="7bf8"}
d.toISOString()
```


"2020--01--02T01:10:30.000Z"

there is also a static Date.parse() method that takes a string as its
argument, attempts to parse it as a date and time, and returns a
timestamp representing that date. `Date.parse()`  is able to parse the same strings that the
`Date()`  constructor can and is
guaranteed to be able to parse the output
of` toISOString(),                 toUTCString()` , and` toString()` .

### Error Classes {#7684 .graf .graf--h3 .graf-after--p name="7684"}

One good reason to use an Error object is that, when you create an
Error, it captures the state of the JavaScript stack, and if the
exception is uncaught, the stack trace will be displayed with the error
message, which will help you debug the issue.
 
Error objects have two properties: `message`  and `name` , and
a`                 toString()`  method.
Node and all modern browsers also define a `stack`  property on Error objects.

Subclasses are
`EvalError, RangeError, ReferenceError, SyntaxError,                 TypeError,`  and `URIError` .

You should feel free to define your own Error subclasses that best
encapsulate the error conditions of your own program.

```
 {#3535 .graf .graf--pre .graf-after--p name="3535"}
class HTTPError extends Error {
```


```
 {#bc9c .graf .graf--pre .graf-after--pre name="bc9c"}
constructor(status, statusText, url) {
```


```
 {#23e9 .graf .graf--pre .graf-after--pre name="23e9"}
super(`${status} ${statusText}: ${url}`);
```


```
 {#fd2d .graf .graf--pre .graf-after--pre name="fd2d"}
this.status = status;
```


```
 {#a3e8 .graf .graf--pre .graf-after--pre name="a3e8"}
this.statusText = statusText;
```


```
 {#ff6c .graf .graf--pre .graf-after--pre name="ff6c"}
this.url = url;
```


```
 {#67d0 .graf .graf--pre .graf-after--pre name="67d0"}
}
```


```
 {#993f .graf .graf--pre .graf-after--pre name="993f"}
get name() { return "HTTPError"; }
```


```
 {#0b08 .graf .graf--pre .graf-after--pre name="0b08"}
}
```


```
 {#938a .graf .graf--pre .graf-after--pre name="938a"}
let error = new HTTPError(404, "Not Found", "http://example.com/");
```


```
 {#c1c0 .graf .graf--pre .graf-after--pre name="c1c0"}
error.status
```


404

```
 {#2e8d .graf .graf--pre .graf-after--p name="2e8d"}
error.message
```


"404 Not Found:<http://example.com/>\"

```
 {#9eb3 .graf .graf--pre .graf-after--p name="9eb3"}
error.name
```


HTTPError

### JSON Serialization and Parsing {#6fd6 .graf .graf--h3 .graf-after--p name="6fd6"}

JavaScript supports JSON serialization and deserialization with the two
functions `JSON.stringify()`  and
`JSON.parse().` 

```
 {#a6fc .graf .graf--pre .graf-after--p name="a6fc"}
let o = {s: "", n: 0, a: [true, false, null]};
```


```
 {#81a5 .graf .graf--pre .graf-after--pre name="81a5"}
let s = JSON.stringify(o);
```


s == '{"s":"","n":0,"a":\[true,false,null\]}'

```
 {#40d7 .graf .graf--pre .graf-after--p name="40d7"}
let copy = JSON.parse(s);
```


copy == {s: "", n: 0, a:\[true, false, null\]}

Inefficient way of creating a deep copy of an object

```
 {#bdc8 .graf .graf--pre .graf-after--p name="bdc8"}
function deepcopy(o) {
```


```
 {#8e3f .graf .graf--pre .graf-after--pre name="8e3f"}
return JSON.parse(JSON.stringify(o));
```


```
 {#cf40 .graf .graf--pre .graf-after--pre name="cf40"}
}
```


Typically, you pass only a single argument to
`JSON.stringify()`  and
`JSON.parse()` . Both functions accept an
optional second argument that allows us to extend the JSON format.
 
`JSON.stringify()`  also takes an optional
third argument. If you would like your JSONformatted string to be
human-readable (if it is being  sed as a configuration file, for
example), then you should pass null as the second argument and pass a
number or string as the third argument. If the third argument is a
number, then it will use that number of spaces for each indentation
level. If the third argument is a string of whitespace (such as
\'\\t\'), it will use that string for each level of indent.

### JSON Customizations {#dbc9 .graf .graf--h3 .graf-after--p name="dbc9"}

If `JSON.stringify()`  is asked to
serialize a value that is not natively supported by the JSON format, it
looks to see if that value has a `toJSON()`  method, and if so, it calls that method and then
stringifies the return value in place of the original value. Date
objects implement `toJSON()` : it returns
the same string that `toISOString()` 
method does.

If you need to re-create Date objects (or modify the parsed object inany
other way), you can pass a "reviver" function as the second argument to
`JSON.parse()` .

```
 {#15f8 .graf .graf--pre .graf-after--p name="15f8"}
let data = JSON.parse(text, function(key, value) {
```


```
 {#2588 .graf .graf--pre .graf-after--pre name="2588"}
if (key[0] === "_") return undefined;
```


```
 {#ea7e .graf .graf--pre .graf-after--pre name="ea7e"}
if (typeof value === "string" && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) {
```


```
 {#986c .graf .graf--pre .graf-after--pre name="986c"}
return new Date(value);
```


```
 {#ac7a .graf .graf--pre .graf-after--pre name="ac7a"}
}
```


```
 {#c568 .graf .graf--pre .graf-after--pre name="c568"}
return value;
```


```
 {#a050 .graf .graf--pre .graf-after--pre name="a050"}
});
```


### The Console API {#619a .graf .graf--h3 .graf-after--pre name="619a"}

Console functions that print their arguments like console.log() have a
little-known feature: if the first argument is a string that includes
`%s, %i, %d, %f, %o, %O, or %c` , then
this first argument is treated as format string, and the values of
subsequent arguments are substituted into the string in place of the
two-character % sequences.

### URL API {#c9a6 .graf .graf--h3 .graf-after--p name="c9a6"}

```
 {#afc4 .graf .graf--pre .graf-after--h3 name="afc4"}
let url = new URL("https://example.com:8000/path/name?q=term#fragment");
```


```
 {#29a5 .graf .graf--pre .graf-after--pre name="29a5"}
url.href
```


["https://example.com:8000/path/name](https://example.com:8000/path/name) ?q=term\#fragment\"

```
 {#3c4e .graf .graf--pre .graf-after--p name="3c4e"}
url.origin
```


["https://example.com:8000](https://example.com:8000/) \"

```
 {#b726 .graf .graf--pre .graf-after--p name="b726"}
url.protocol
```


"https:"

```
 {#6f74 .graf .graf--pre .graf-after--p name="6f74"}
url.host
```


["example.com](http://example.com/) :8000"

```
 {#30fa .graf .graf--pre .graf-after--p name="30fa"}
url.hostname
```


["example.com](http://example.com/) "

```
 {#8e76 .graf .graf--pre .graf-after--p name="8e76"}
url.port
```


"8000"

```
 {#d8de .graf .graf--pre .graf-after--p name="d8de"}
url.pathname
```


"/path/name"

```
 {#9045 .graf .graf--pre .graf-after--p name="9045"}
url.search
```


"?q=term"

```
 {#0fe6 .graf .graf--pre .graf-after--p name="0fe6"}
url.hash
```


"\#fragment"

```
 {#9eb2 .graf .graf--pre .graf-after--p name="9eb2"}
let url = new URL("https://example.com");
```
 

```
 {#fdde .graf .graf--pre .graf-after--pre name="fdde"}
url.pathname = "api/search";
```


Add a path to an API endpoint

```
 {#6932 .graf .graf--pre .graf-after--p name="6932"}
url.search = "q=test";
```


Add a query parameter

```
 {#6628 .graf .graf--pre .graf-after--p name="6628"}
url.toString()
```


["https://example.com/api/search?q=test](https://example.com/api/search?q=test) \"

One of the important features of the URL class is that it correctly adds
punctuation and escapes special characters in URLs when that is needed

```
 {#99e4 .graf .graf--pre .graf-after--p name="99e4"}
let url = new URL("https://example.com");
```


```
 {#4c61 .graf .graf--pre .graf-after--pre name="4c61"}
url.pathname = "path with spaces";
```


```
 {#0046 .graf .graf--pre .graf-after--pre name="0046"}
url.pathname
```


"/path%20with%20spaces"

```
 {#d493 .graf .graf--pre .graf-after--p name="d493"}
url.search = "q=foo#bar";
```


```
 {#16f9 .graf .graf--pre .graf-after--pre name="16f9"}
url.search
```


"?q=foo%23bar"

```
 {#9ce6 .graf .graf--pre .graf-after--p name="9ce6"}
url.href
```


["https://example.com/path%20with%20spaces?q=foo%23bar](https://example.com/path%20with%20spaces?q=foo%23bar) \"

Often, however, HTTP requests encode the values of multiple form fields
or multiple API parameters into the query portion of a URL. In this
format, the query portion of the URL is a question mark followed by one
or more name/value pairs, which are separated from one another by
ampersands.

If you want to encode these kinds of name/value pairs into the query
portion of a URL, then the searchParams property will be more useful
than the search property.

`let                 url = new URL("https://example.com/search");` 

`url.search` 

""

`url.searchParams.append("q", "term");` 

`url.search` 

"?q=term"

`url.searchParams.set("q", "x");` 

`url.search` 

"?q=x"

`url.searchParams.append("opts", "1");` 

`url.search` 

"?q=x&opts=1"

The value of the searchParams property is a URLSearchParams object.

`let                 url = new URL("http://example.com");` 

`let                 params = new URLSearchParams();` 

`params.append("q", "term");` 

`params.append("opts", "exact");` 

`params.toString()` 

"q=term&opts=exact"

`url.search = params;` 

`url.href` 

["http://example.com/](http://example.com/) ?q=term&opts=exact\"

### Timers {#3033 .graf .graf--h3 .graf-after--p name="3033"}

`setTimeout()` 
and`                 setInterval()` ---that allow programs to ask the browser to invoke a
function after a specified amount of time has elapsed or to invoke the
function repeatedly at a specified interval.

```
 {#d6a0 .graf .graf--pre .graf-after--p name="d6a0"}
setTimeout(() => { console.log("Ready..."); }, 1000);
```


```
 {#ffb8 .graf .graf--pre .graf-after--pre name="ffb8"}
setTimeout(() => { console.log("set..."); }, 2000);
```


```
 {#f190 .graf .graf--pre .graf-after--pre name="f190"}
setTimeout(() => { console.log("go!"); }, 3000);
```


If you want to invoke a function repeatedly, use
`setInterval()` 

Both `setTimeout()`  and
`setInterval()`  return a value. If you
save this value in a variable, you can then use it later to cancel the
execution of the function by passing it to
`clearTimeout()`  or
`clearInterval()` .

```
 {#1b25 .graf .graf--pre .graf-after--p name="1b25"}
let clock = setInterval(() => {
```


```
 {#64c9 .graf .graf--pre .graf-after--pre name="64c9"}
console.clear();
```


```
 {#bb86 .graf .graf--pre .graf-after--pre name="bb86"}
console.log(new Date().toLocaleTimeString());
```


```
 {#435e .graf .graf--pre .graf-after--pre name="435e"}
}, 1000);
```


```
 {#6308 .graf .graf--pre .graf-after--pre name="6308"}
setTimeout(() => { clearInterval(clock); }, 10000);
```


After 10 seconds: stop the repeating code above

### Iterators and Generators {#5d42 .graf .graf--h3 .graf-after--p name="5d42"}

The iterator method of an iterable object does not have a conventional
name but uses the Symbol, Symbol.iterator as its name. So a simple
for/of loop over an iterable object iterable could also be written the
hard way, like this:

```
 {#32fa .graf .graf--pre .graf-after--p name="32fa"}
let iterable = [99];
```


```
 {#11f7 .graf .graf--pre .graf-after--pre name="11f7"}
let iterator = iterable[Symbol.iterator]();
```


```
 {#a7d7 .graf .graf--pre .graf-after--pre name="a7d7"}
for(let result = iterator.next(); !result.done; result =iterator.next()) {
```


```
 {#a507 .graf .graf--pre .graf-after--pre name="a507"}
console.log(result.value) // result.value == 99
```


```
 {#f614 .graf .graf--pre .graf-after--pre name="f614"}
}
```


When you want to iterate though a "partially used" iterator:

`let                 list = [1,2,3,4,5];` \
 `let iter =                 list[Symbol.iterator]();` 

`let                 head = iter.next().value;` 

head == 1

`let                 tail = [...iter];` 

tail == \[2,3,4,5\]

### Implementing Iterable Objects {#770c .graf .graf--h3 .graf-after--p name="770c"}

we will implement the Range class one more time, making it iterable
without relying on a generator.

In order to make a class iterable, you must implement a method whose
name is the Symbol `Symbol.iterator` 

```
 {#bba2 .graf .graf--pre .graf-after--p name="bba2"}
class Range {
```


```
 {#0022 .graf .graf--pre .graf-after--pre name="0022"}
constructor (from, to) {
```


```
 {#0214 .graf .graf--pre .graf-after--pre name="0214"}
this.from = from;
```


```
 {#536f .graf .graf--pre .graf-after--pre name="536f"}
this.to = to;
```


```
 {#b099 .graf .graf--pre .graf-after--pre name="b099"}
}
```


```
 {#880b .graf .graf--pre .graf-after--pre name="880b"}
has(x) { return typeof x === "number" && this.from <= x && x <= this.to; }
```


```
 {#054d .graf .graf--pre .graf-after--pre name="054d"}
toString() { return `{ x | ${this.from} ≤ x ≤ ${this.to}}`; }
```


```
 {#10af .graf .graf--pre .graf-after--pre name="10af"}
[Symbol.iterator]() {
```


```
 {#95a2 .graf .graf--pre .graf-after--pre name="95a2"}
let next = Math.ceil(this.from);
```


```
 {#aeef .graf .graf--pre .graf-after--pre name="aeef"}
let last = this.to;
```


```
 {#a7b8 .graf .graf--pre .graf-after--pre name="a7b8"}
return {
```


```
 {#fb76 .graf .graf--pre .graf-after--pre name="fb76"}
next() {
```


```
 {#5cac .graf .graf--pre .graf-after--pre name="5cac"}
return (next <= last) ? { value: next++ } : { done: true };
```


```
 {#201e .graf .graf--pre .graf-after--pre name="201e"}
},
```


```
 {#0542 .graf .graf--pre .graf-after--pre name="0542"}
[Symbol.iterator]() { return this; }
```


```
 {#85ba .graf .graf--pre .graf-after--pre name="85ba"}
};
```


```
 {#6c04 .graf .graf--pre .graf-after--pre name="6c04"}
}
```


```
 {#a3bd .graf .graf--pre .graf-after--pre name="a3bd"}
}
```


```
 {#f18d .graf .graf--pre .graf-after--pre name="f18d"}
for(let x of new Range(1,10)) console.log(x);
```


Logs numbers 1 to 10

```
 {#aa05 .graf .graf--pre .graf-after--p name="aa05"}
[...new Range(-2,2)]
```


\[-2, -1, 0,1, 2\]

In addition to making your classes iterable, it can be quite useful to
define functions that return iterable values.

Return an iterable object that iterates the result of applying
`f()`  to each value from the source
iterable

```
 {#46c2 .graf .graf--pre .graf-after--p name="46c2"}
function map(iterable, f) {
```


```
 {#34b7 .graf .graf--pre .graf-after--pre name="34b7"}
let iterator = iterable[Symbol.iterator]();
```


```
 {#92ed .graf .graf--pre .graf-after--pre name="92ed"}
return {
```


```
 {#a674 .graf .graf--pre .graf-after--pre name="a674"}
[Symbol.iterator]() { return this; },
```


```
 {#e5b6 .graf .graf--pre .graf-after--pre name="e5b6"}
next() {
```


```
 {#2838 .graf .graf--pre .graf-after--pre name="2838"}
let v = iterator.next();
```


```
 {#b0d9 .graf .graf--pre .graf-after--pre name="b0d9"}
if (v.done) {
```


```
 {#6bce .graf .graf--pre .graf-after--pre name="6bce"}
return v;
```


```
 {#54ce .graf .graf--pre .graf-after--pre name="54ce"}
}
```


```
 {#4616 .graf .graf--pre .graf-after--pre name="4616"}
else {
```


```
 {#acf1 .graf .graf--pre .graf-after--pre name="acf1"}
return { value: f(v.value) };
```


```
 {#0484 .graf .graf--pre .graf-after--pre name="0484"}
}
```


```
 {#5b41 .graf .graf--pre .graf-after--pre name="5b41"}
}
```


```
 {#db6e .graf .graf--pre .graf-after--pre name="db6e"}
};
```


```
 {#4719 .graf .graf--pre .graf-after--pre name="4719"}
}
```


`[...map(new Range(1,4), x => x*x)]` 

\[1, 4, 9, 16\]
 
Return an iterable object that filters the specified iterable, iterating
only those elements for which the predicate returns true

```
 {#4ada .graf .graf--pre .graf-after--p name="4ada"}
function filter(iterable, predicate) {
```


```
 {#4403 .graf .graf--pre .graf-after--pre name="4403"}
let iterator = iterable[Symbol.iterator]();
```


```
 {#336c .graf .graf--p e .graf-after--pre name="336c"}
return {
```


```
 {#4ed5 .graf .graf--pre .graf-after--pre name="4ed5"}
[Symbol.iterator]() { return this; },
```


```
 {#144b .graf .graf--pre .graf-after--pre name="144b"}
next() {
```


```
 {#072d .graf .graf--pre .graf-after--pre name="072d"}
for(;;) {
```


```
 {#e4d4 .graf .graf--pre .graf-after--pre name="e4d4"}
let v = iterator.next();
```


```
 {#a42f .graf .graf--pre .graf-after--pre name="a42f"}
if (v.done || predicate(v.value)) {
```


```
 {#727d .graf .graf--pre .graf-after--pre name="727d"}
return v;
```


```
 {#153c .graf .graf--pre .graf-after--pre name="153c"}
}
```


```
 {#a526 .graf .graf--pre .graf-after--pre name="a526"}
}
```


```
 {#7ef3 .graf .graf--pre .graf-after--pre name="7ef3"}
}
```


```
 {#33fb .graf .graf--pre .graf-after--pre name="33fb"}
};
```


```
 {#047f .graf .graf--pre .graf-after--pre name="047f"}
}
```


`[...filter(new Range(1,10), x => x % 2 === 0)]` 

\[2,4,6,8,10\]

### Generators {#d56d .graf .graf--h3 .graf-after--p name="d56d"}

Particularly useful when the values to be iterated are not the elements
of a data structure, but the result of a computation.

To create a generator, you must first define a generator
function --- defined with the keyword `function*`  rather than `function` 

When you invoke a generator function, it does not actually execute the
function body, but instead returns a generator object. This generator
object is an iterator.

Calling its `next()`  method causes the
body of the generator function to run from the start (or whatever its
current position is) until it reaches a `yield`  statement.

The value of the `yield`  statement
becomes the value returned by the `next()`  call on the iterator.

```
 {#e523 .graf .graf--pre .graf-after--p name="e523"}
function* oneDigitPrimes() {
```


```
 {#f531 .graf .graf--pre .graf-after--pre name="f531"}
yield 2;
```


```
 {#03af .graf .graf--pre .graf-after--pre name="03af"}
yield 3;
```


```
 {#3368 .graf .graf--pre .graf-after--pre name="3368"}
yield 5;
```


```
 {#4dfc .graf .graf--pre .graf-after--pre name="4dfc"}
yield 7;
```


```
 {#cf72 .graf .graf--pre .graf-after--pre name="cf72"}
}
```


```
 {#b4f9 .graf .graf--pre .graf-after--pre name="b4f9"}
let primes = oneDigitPrimes();
```


we get a generator

```
 {#2efe .graf .graf--pre .graf-after--p name="2efe"}
primes.next().value
```


2

```
 {#3395 .graf .graf--pre .graf-after--p name="3395"}
primes.next().value
```


3

```
 {#9f7f .graf .graf--pre .graf-after--p name="9f7f"}
primes.next().value
```


5

```
 {#d3af .graf .graf--pre .graf-after--p name="d3af"}
primes.next().value
```


7

```
 {#576c .graf .graf--pre .graf-after--p name="576c"}
primes.next().done
```


true

Generators have a `Symbol.iterator` 
method to make them iterable

`primes[Symbol.iterator]()` 

`[...oneDigitPrimes()]` 

\[2,3,5,7\]

```
 {#4936 .graf .graf--pre .graf-after--p name="4936"}
let sum = 0;
```


```
 {#a71c .graf .graf--pre .graf-after--pre name="a71c"}
for(let prime of oneDigitPrimes()) sum += prime;
```


```
 {#813d .graf .graf--pre .graf-after--pre name="813d"}
sum
```


17

Like regular functions, however, we can also define generators in
expression form.

```
 {#9de0 .graf .graf--pre .graf-after--p name="9de0"}
const seq = function*(from,to) {
```


```
 {#8e38 .graf .graf--pre .graf-after--pre name="8e38"}
for(let i = from; i <= to; i++) yield i;
```


```
 {#3875 .graf .graf--pre .graf-after--pre name="3875"}
};
```


```
 {#dbef .graf .graf--pre .graf-after--pre name="dbef"}
[...seq(3,5)]
```


\[3, 4, 5\]

In classes and object literals, we can use shorthand notation to omit
the function keyword entirely when we define methods.

```
 {#6df5 .graf .graf--pre .graf-after--p name="6df5"}
let o = {
```


```
 {#c2f0 .graf .graf--pre .graf-after--pre name="c2f0"}
x: 1, y: 2, z: 3,
```


```
 {#6d4c .graf .graf--pre .graf-after--pre name="6d4c"}
*g() {
```


```
 {#19f7 .graf .graf--pre .graf-after--pre name="19f7"}
for(let key of Object.keys(this)) {
```


```
 {#4a13 .graf .graf--pre .graf-after--pre name="4a13"}
yield key;
```


```
 {#d886 .graf .graf--pre .graf-after--pre name="d886"}
}
```


```
 {#9229 .graf .graf--pre .graf-after--pre name="9229"}
}
```


```
 {#2800 .graf .graf--pre .graf-after--pre name="2800"}
};
```


`[...o.g()]` 

\["x", "y", "z", "g"\]

Generators often make it particularly easy to define iterable classes.

```
 {#fda4 .graf .graf--pre .graf-after--p name="fda4"}
*[Symbol.iterator]() {
```


```
 {#dda8 .graf .graf--pre .graf-after--pre name="dda8"}
for(let x = Math.ceil(this.from); x <= this.to; x++)
```


```
 {#5355 .graf .graf--pre .graf-after--pre name="5355"}
yield x;
```


```
 {#e816 .graf .graf--pre .graf-after--pre name="e816"}
}
```


### Generator Examples {#7abd .graf .graf--h3 .graf-after--pre name="7abd"}

Generators are more interesting if they actually generate the values
they yield by doing some kind of computation.

generator function that yields Fibonacci numbers

```
 {#373b .graf .graf--pre .graf-after--p name="373b"}
function* fibonacciSequence() {
```


```
 {#7819 .graf .graf--pre .graf-after--pre name="7819"}
let x = 0, y = 1;
```


```
 {#df25 .graf .graf--pre .graf-after--pre name="df25"}
for(;;) {
```


```
 {#824a .graf .graf--pre .graf-after--pre name="824a"}
yield y;
```


```
 {#8994 .graf .graf--pre .graf-after--pre name="8994"}
[x, y] = [y, x+y];
```


```
 {#f409 .graf .graf--pre .graf-after--pre name="f409"}
}
```


```
 {#b1b4 .graf .graf--pre .graf-after--pre name="b1b4"}
}
```


If this generator is used with the ... spread operator, it will loop
until memory is exhausted and the program crashes.

Use it in a `for/of`  loop, however

```
 {#7eb7 .graf .graf--pre .graf-after--p name="7eb7"}
function fibonacci(n) {
```


```
 {#220f .graf .graf--pre .graf-after--pre name="220f"}
for(let f of fibonacciSequence()) {
```


```
 {#0ec6 .graf .graf--pre .graf-after--pre name="0ec6"}
if (n-- <= 0) return f;
```


```
 {#50ab .graf .graf--pre .graf-after--pre name="50ab"}
}
```


```
 {#4d97 .graf .graf--pre .graf-after--pre name="4d97"}
}
```


```
 {#6b10 .graf .graf--pre .graf-after--pre name="6b10"}
fibonacci(20)
```


10946

This kind of infinite generator becomes more useful with a
`take()`  generator like this

```
 {#569c .graf .graf--pre .graf-after--p name="569c"}
function* take(n, iterable) {
```


```
 {#ae34 .graf .graf--pre .graf-after--pre name="ae34"}
let it = iterable[Symbol.iterator]();
```


```
 {#6495 .graf .graf--pre .graf-after--pre name="6495"}
while(n-- > 0) {
```


```
 {#3677 .graf .graf--pre .graf-after--pre name="3677"}
let next = it.next();
```


```
 {#4b4a .graf .graf--pre .graf-after--pre name="4b4a"}
if (next.done) return;
```


```
 {#b512 .graf .graf--pre .graf-after--pre name="b512"}
else yield next.value;
```


```
 {#97ed .graf .graf--pre .graf-after--pre name="97ed"}
}
```


```
 {#5762 .graf .graf--pre .graf-after--pre name="5762"}
}
```


```
 {#87bf .graf .graf--pre .graf-after--pre name="87bf"}
[...take(5, fibonacciSequence())]
```


\[1, 1, 2, 3, 5\]

### Asynchronous Javascript {#703d .graf .graf--h3 .graf-after--p name="703d"}

`Promises` , new in ES6, are objects that
represent the not-yet-available result of an asynchronous operation.

The keywords `async`  and
`await`  were introduced in ES2017 and
provide new syntax that simplifies asynchronous programming by allowing
you to structure your Promise based code as if it was synchronous.

Asynchronous iterators and the` for/await`  loop were introduced in ES2018 and allow you to work
with streams of asynchronous events using simple loops that appear
synchronous.

### Asynchronous Programming with Callbacks {#53ed .graf .graf--h3 .graf-after--p name="53ed"}

### Timers {#3f8c .graf .graf--h3 .graf-after--h3 name="3f8c"}

`setTimeout(checkForUpdates, 60000);` 

```
 {#a7a6 .graf .graf--pre .graf-after--p name="a7a6"}
let updateIntervalId = setInterval(checkForUpdates, 60000);
```


```
 {#73a8 .graf .graf--pre .graf-after--pre name="73a8"}
function stopCheckingForUpdates() {
```


```
 {#1f94 .graf .graf--pre .graf-after--pre name="1f94"}
clearInterval(updateIntervalId);
```


```
 {#5ca0 .graf .graf--pre .graf-after--pre name="5ca0"}
}
```


### Events {#4bd3 .graf .graf--h3 .graf-after--pre name="4bd3"}

Event-driven JavaScript programs register callback functions for
specified types of events in specified contexts, and the web browser
invokes those functions whenever the specified events occur.

These callback functions are called event handlers or event listeners,
and they are registered with `addEventListener()` 

Ask the web browser to return an object representing the HTML \<button\>
element that matches this CSS selector:

`let                 okay = document.querySelector('#confirmUpdateDialogbutton.okay');` 

Now register a callback function to be invoked when the user clicks on
that button

`okay.addEventListener('click', applyUpdate);` 

### Network Events {#5cb8 .graf .graf--h3 .graf-after--p name="5cb8"}

JavaScript running in the browser can fetch data from a web server with
code like this:

```
 {#e07c .graf .graf--pre .graf-after--p name="e07c"}
function getCurrentVersionNumber(versionCallback) {
```


```
 {#bf59 .graf .graf--pre .graf-after--pre name="bf59"}
let request = new XMLHttpRequest();
```


```
 {#3cb3 .graf .graf--pre .graf-after--pre name="3cb3"}
request.open("GET", "http://www.example.com/api/version");
```


```
 {#c9c2 .graf .graf--pre .graf-after--pre name="c9c2"}
request.send();
```


```
 {#66a6 .graf .graf--pre .graf-after--pre name="66a6"}
request.onload = function() {
```


```
 {#0ff9 .graf .graf--pre .graf-after--pre name="0ff9"}
if (request.status === 200) {
```


```
 {#5643 .graf .graf--pre .graf-after--pre name="5643"}
let currentVersion = parseFloat(request.responseText);
```


```
 {#19c1 .graf .graf--pre .graf-after--pre name="19c1"}
versionCallback(null, currentVersion);
```


```
 {#016f .graf .graf--pre .graf-after--pre name="016f"}
}
```


```
 {#b57a .graf .graf--pre .graf-after--pre name="b57a"}
else {
```


```
 {#27fe .graf .graf--pre .graf-after--pre name="27fe"}
versionCallback(response.statusText, null);
```


```
 {#80db .graf .graf--pre .graf-after--pre name="80db"}
}
```
 

```
 {#0562 .graf .graf--pre .graf-after--pre name="0562"}
};
```


```
 {#ba9f .graf .graf--pre .graf-after--pre name="ba9f"}
request.onerror = request.ontimeout = function(e) {
```


```
 {#964d .graf .graf--pre .graf-after--pre name="964d"}
versionCallback(e.type, null);
```


```
 {#b7dc .graf .graf--pre .graf-after--pre name="b7dc"}
};
```


```
 {#8c7b .graf .graf--pre .graf-after--pre name="8c7b"}
}
```


### Promises {#efbc .graf .graf--h3 .graf-after--pre name="efbc"}

Promises, a core language feature designed to simplify asynchronous
programming.

A Promise is an object that represents the result of an asynchronous
computation. That result may or may not be ready yet, and the Promise
API is intentionally vague about this: there is no way to synchronously
get the value of a Promise; you can only ask the Promise to call a
callback function when the value is ready.

One real problem with callback-based asynchronous programming is that it
is common to end up with callbacks inside callbacks inside callbacks,
with lines of code so highly indented that it is difficult to read.

Promises allow this kind of nested callback to be re-expressed as a more
linear Promise chain that tends to be easier to read and easier to
reason about.

Another problem with callbacks is that they can make handling errors
difficult. If an asynchronous function (or an asynchronously invoked
callback) throws an exception, there is no way for that exception to
propagate back to the initiator of the asynchronous operation. This is a
fundamental fact about asynchronous programming: it breaks exception
handling. Promises help here by standardizing a way to handle errors and
providing a way for errors to propagate correctly through a chain of
promises.

Note that Promises represent the future results of single asynchronous
computations. They cannot be used to represent repeated asynchronous
computations, however.

We can't use Promises to replace `setInterval()`  because that function invokes a callback function
repeatedly, which is something that Promises are just not designed to
do.

### Using Promises {#55ce .graf .graf--h3 .graf-after--p name="55ce"}

How we would use this Promise returning utility function

```
 {#7efc .graf .graf--pre .graf-after--p name="7efc"}
getJSON(url).then(jsonData => {
```


```
 {#1c14 .graf .graf--pre .graf-after--pre name="1c14"}
// callback function that will be asynchronously invoked with the parsed JSON value when it becomes available.
```


```
 {#ac13 .graf .graf--pre .graf-after--pre name="ac13"}
});
```


The Promise object defines a then() instance method. Instead of passing
our callback function directly to `getJSON()` , we instead pass it to the then() method. When the HTTP
response arrives, the body of that response is parsed as JSON, and the
resulting parsed value is passed to the function that we passed to
`then()` .

If you call the `then()`  method of a
Promise object multiple times, each of the functions you specify will be
called when the promised computation is complete.

Unlike many event listeners, though, a Promise represents a single
computation, and each function registered with then() will be invoked
only once.

```
 {#8e63 .graf .graf--pre .graf-after--p name="8e63"}
function displayUserProfile(profile) { ...}
```


```
 {#c325 .graf .graf--pre .graf-after--pre name="c325"}
getJSON("/api/user/profile").then(displayUserProfile);
```


### HANDLING ERRORS WITH PROMISES {#92c3 .graf .graf--h3 .graf-after--pre name="92c3"}

Asynchronous operations, particularly those that involve networking, can
typically fail in a number of ways, and robust code has to be written to
handle the errors that will inevitably occur.

`getJSON("/api/user/profile").then(displayUserProfile,                 handleProfileError);` 

if `getJSON()`  runs normally, it passes
its result to `displayUserProfile()` . If
there is an error (the user is not logged in, the server is down, the
user's internet connection dropped, the request timed out, etc.), then
`getJSON()`  passes an Error object to
`handleProfileError()` .

In practice, it is rare to see two functions passed to then(). There is
a better and more idiomatic way of handling errors when working with
Promises.

To understand it, first consider what happens if
`getJSON()`  completes normally but an
error occurs in `displayUserProfile()` .
That callback function is invoked asynchronously when
`getJSON()`  returns, so it is also
asynchronous and cannot meaningfully throw an exception (because there
is no code on the call stack to handle it).

```
 {#26fd .graf .graf--pre .graf-after--p name="26fd"}
getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);
```


With this code, a normal result from` getJSON()`  is still passed to `displayUserProfile()` , but any error in `getJSON()`  or in `displayUserProfile()`  (including any exceptions thrown by
`displayUserProfile` ) get passed to
`handleProfileError()` .

### Chaining Promises {#d268 .graf .graf--h3 .graf-after--p name="d268"}

One of the most important benefits of Promises is that they provide a
natural way to express a sequence of asynchronous operations as a linear
chain of `then()`  method invocations,
without having to nest each operation within the callback of the
previous one.

```
 {#193e .graf .graf--pre .graf-after--p name="193e"}
fetch(documentURL)
```


```
 {#2a33 .graf .graf--pre .graf-after--pre name="2a33"}
.then(response => response.json())
```


```
 {#2c3b .graf .graf--pre .graf-after--pre name="2c3b"}
.then(document => {return render(document); })
```


```
 {#25c8 .graf .graf--pre .graf-after--pre name="25c8"}
.then(rendered => {cacheInDatabase(rendered); })
```


```
 {#6318 .graf .graf--pre .graf-after--pre name="6318"}
.catch(error => handle(error));
```


has largely been replaced by the newer, Promise-based Fetch API. In its
simplest form, this new HTTP API is just the function fetch(). That
promise is fulfilled when the HTTP response begins to arrive and the
HTTP status and headers are available.

```
 {#80bc .graf .graf--pre .graf-after--p name="80bc"}
fetch("/api/user/profile")
```


```
 {#524d .graf .graf--pre .graf-after--pre name="524d"}
.then(response => {
```


```
 {#dc31 .graf .graf--pre .graf-after--pre name="dc31"}
if (response.ok &&  response.headers.get("Content-Type") === "application/json") {
```


```
 {#33c5 .graf .graf--pre .graf-after--pre name="33c5"}
// What can we do here? We don't actually have the response body yet.
```


```
 {#f623 .graf .graf--pre .graf-after--pre name="f623"}
}
```


```
 {#fb98 .graf .graf--pre .graf-after--pre name="fb98"}
});
```


But although the initial Promise is fulfilled, the body of the response
may not yet have arrived. So these `text()`  and`                 json()`  methods for accessing the body of the response
themselves return Promises.

```
 {#dbe3 .graf .graf--pre .graf-after--p name="dbe3"}
fetch("/api/user/profile")
```


```
 {#3be2 .graf .graf--pre .graf-after--pre name="3be2"}
.then(response => {
```


```
 {#0091 .graf .graf--pre .graf-after--pre name="0091"}
return response.json();
```


```
 {#d801 .graf .graf--pre .graf-after--pre name="d801"}
})
```


```
 {#f72a .graf .graf--pre .graf-after--pre name="f72a"}
.then(profile => {
```


```
 {#dfab .graf .graf--pre .graf-after--pre name="dfab"}
displayUserProfile(profile);
```


```
 {#498c .graf .graf--pre .graf-after--pre name="498c"}
});
```


There is a second `then()`  in the chain,
which means that the first invocation of the `then()`  method must itself return a Promise. That is not how
Promises work, however.

When we write a chain of `.then()` 
invocations, we are not registering multiple callbacks on a single
Promise object. Instead, each invocation of the `then()`  method returns a new Promise object. That new Promise
object is not fulfilled until the function passed to
`then()`  is complete.

```
 {#0299 .graf .graf--pre .graf-after--p name="0299"}
fetch(theURL)       // task 1; returns promise 1
```


```
 {#6d49 .graf .graf--pre .graf-after--pre name="6d49"}
.then(callback1)  // task 2; returns promise 2
```


```
 {#11fc .graf .graf--pre .graf-after--pre name="11fc"}
.then(callback2); // task 3; returns promise 3
```


### Resolving Promises {#fb18 .graf .graf--h3 .graf-after--pre name="fb18"}

There is actually a fourth Promise object involved as which brings up
the point of what it means for a Promise to be "resolved."

fetch() returns a Promise object which, when fulfilled, passes a
Response object to the callback function we register. This Response
object has `.text(), .json(),`  and other
methods to request the body of the HTTP response in various forms. But
since the body may not yet have arrived, these methods must return
Promise objects.

"task 2" calls the `.json()`  method and
returns its value. This is the fourth Promise object, and it is the
return value of the `callback1()` 
function.

Let's consider:

```
 {#2a7f .graf .graf--pre .graf-after--p name="2a7f"}
function c1(response) {
```


```
 {#f5f0 .graf .graf--pre .graf-after--pre name="f5f0"}
let p4 = response.json();
```


```
 {#658b .graf .graf--pre .graf-after--pre name="658b"}
return p4;
```


```
 {#e1c0 .graf .graf--pre .graf-after--pre name="e1c0"}
}
```


```
 {#3f76 .graf .graf--pre .graf-after--pre name="3f76"}
// callback 1
```

 
```
 {#113b .graf .graf--pre .graf-after--pre name="113b"}
// returns promise 4
```


```
 {#7950 .graf .graf--pre .graf-after--pre name="7950"}
function c2(profile) {
```


```
 {#8f6c .graf .graf--pre .graf-after--pre name="8f6c"}
displayUserProfile(profile);
```


```
 {#d756 .graf .graf--pre .graf-after--pre name="d756"}
}
```


```
 {#9ed6 .graf .graf--pre .graf-after--pre name="9ed6"}
// callback 2
```


```
 {#2f3d .graf .graf--pre .graf-after--pre name="2f3d"}
let p1 = fetch("/api/user/profile");
```


```
 {#62e5 .graf .graf--pre .graf-after--pre name="62e5"}
promise 1, task 1
```


```
 {#0338 .graf .graf--pre .graf-after--pre name="0338"}
let p2 = p1.then(c1);
```


```
 {#633e .graf .graf--pre .graf-after--pre name="633e"}
promise 2, task 2
```


```
 {#470b .graf .graf--pre .graf-after--pre name="470b"}
let p3 = p2.then(c2);
```


```
 {#308c .graf .graf--pre .graf-after--pre name="308c"}
promise 3, task 3
```


In order for Promise chains to work usefully, the output of task 2 must
become the input to task 3. The input to task 3 is the body of the URL
that was fetched, parsed as a JSON object. But the return value of
callback c1 is not a JSON object, but Promise p4 for that JSON object.

When p1 is fulfilled, c1 is invoked, and task 2 begins. And when p2 is
fulfilled, c2 is invoked, and task 3 begins.

And when p2 is fulfilled, c2 is invoked, and task 3 begins. But just
because task 2 begins when c1 is invoked,it does not mean that task 2
must end when c1 returns.

Promises are about managing asynchronous tasks, and if task 2 is
asynchronous, then that task will not be complete by the time the
callback returns.

When you pass a callback c to the `then()`  method, `then()`  returns
a Promise p and arranges to asynchronously invoke c at some later time.
The callback performs some computation and returns a value v. When the
callback returns, p is resolved with the value v. When a Promise is
resolved with a value that is not itself a Promise, it is immediately
fulfilled with that value.

So if c returns a non-Promise, that return value becomes the value of p,
p is fulfilled and we are done. But if the return value v is itself a
Promise, then p is resolved but not yet fulfilled.

At this stage, p cannot settle until the Promise v settles. If v is
fulfilled, then p will be fulfilled to the same value. If v is rejected,
then p will be rejected for the same reason. This is what the "resolved"
state of a Promise means

the Promise has become associated with, or "locked onto," another
Promise. We don't know yet whether p will be fulfilled or rejected, but
our callback c no longer has any control over that. p is "resolved" in
the sense that its fate now depends entirely on what happens to Promise
v.

Let's bring this back to our URL-fetching example. When c1 returns p4,
p2 is resolved. But being resolved is not the same as being fulfilled,
so task 3 does not begin yet. When the full body of the HTTP response
becomes available, then the .`json()` 
method can parse it and use that parsed value to fulfill p4. When p4 is
fulfilled, p2 is automatically fulfilled as well, with the same parsed
JSON value. At this point, the parsed JSON object is passed to c2, and
task 3 begins.

### More on Promises and Errors {#e698 .graf .graf--h3 .graf-after--p name="e698"}

With synchronous code, if you leave out error-handling code, you'll at
least get an exception and a stack trace that you can use to figure out
what is going wrong. With asynchronous code, unhandled exceptions will
often go unreported, and errors can occur silently, making them much
harder to debug. The good news is that the `.catch()`  method makes it easy to handle errors when working with
Promises.

THE CATCH AND FINALLY METHODS

The `.catch()`  method of a Promise is
simply a shorthand way to call `.then()` 
with null as the first argument and an error-handling callback as the
second argument.

Normal exceptions don't work with asynchronous code.
The `.catch()`  method of Promises is an
alternative that does work for asynchronous code.

```
 {#1ac5 .graf .graf--pre .graf-after--p name="1ac5"}
fetch("/api/user/profile")
```


```
 {#c4bc .graf .graf--pre .graf-after--pre name="c4bc"}
.then(response => {
```


```
 {#8b1b .graf .graf--pre .graf-after--pre name="8b1b"}
if (!response.ok) {
```


```
 {#2651 .graf .graf--pre .graf-after--pre name="2651"}
return null;
```


```
 {#04ac .graf .graf--pre .graf-after--pre name="04ac"}
}
```


```
 {#1e2b .graf .graf--pre .graf-after--pre name="1e2b"}
let type = response.headers.get("content-type");
```


```
 {#d1fa .graf .graf-- re .graf-after--pre name="d1fa"}
if (type !== "application/json") {
```


```
 {#5ad5 .graf .graf--pre .graf-after--pre name="5ad5"}
throw new TypeError(`Expected JSON, got ${type}`);
```


```
 {#7abe .graf .graf--pre .graf-after--pre name="7abe"}
}
```


```
 {#2720 .graf .graf--pre .graf-after--pre name="2720"}
return response.json();
```


```
 {#12ee .graf .graf--pre .graf-after--pre name="12ee"}
})
```


```
 {#fcd4 .graf .graf--pre .graf-after--pre name="fcd4"}
.then(profile => {
```


```
 {#8faf .graf .graf--pre .graf-after--pre name="8faf"}
if (profile) {
```
  

```
 {#c0f1 .graf .graf--pre .graf-after--pre name="c0f1"}
displayUserProfile(profile);
```

 
```
 {#5202 .graf .graf--pre .graf-after--pre name="5202"}
}
```


```
 {#f880 .graf .graf--pre .graf-after--pre name="f880"}
else {
```


```
 {#00ad .graf .graf--pre .graf-after--pre name="00ad"}
displayLoggedOutProfilePage();
```


```
 {#3a96 .graf .graf--pre .graf-after--pre name="3a96"}
}
```


```
 {#5742 .graf .graf--pre .graf-after--pre name="5742"}
})
```


```
 {#fc19 .graf .graf--pre .graf-after--pre name="fc19"}
.catch(e => {
```


```
 {#aaee .graf .graf--pre .graf-after--pre name="aaee"}
if (e instanceof NetworkError) {
```


```
 {#f01e .graf .graf--pre .graf-after--pre name="f01e"}
displayErrorMessage("Check your internet connection.");
```


```
 {#5954 .graf .graf--pre .graf-after--pre name="5954"}
}
```


```
 {#6444 .graf .graf--pre .graf-after--pre name="6444"}
else if (e instanceof TypeError) {
```


```
 {#0f27 .graf .graf--pre .graf-after--pre name="0f27"}
displayErrorMessage("Something is wrong with our server!");
```


```
 {#abfc .graf .graf--pre .graf-after--pre name="abfc"}
}
```


```
 {#496f .graf .graf--pre .graf-after--pre name="496f"}
else {
```


```
 {#cd9a .graf .graf--pre .graf-after--pre name="cd9a"}
console.error(e);
```


```
 {#f2e2 .graf .graf--pre .graf-after--pre name="f2e2"}
}
```


```
 {#0443 .graf .graf--pre .graf-after--pre name="0443"}
});
```


p1 is the Promise returned by the `fetch()`  call

p2 is the Promise returned by the first `.then()`  call

c1 is the callback that we pass to that .`then()`  call

p3 is the Promise returned by the second `.then()`  call

c2 is the callback we pass to that call

c3 is the callback that we pass to the `.catch()`  call

The first thing that could fail is the fetch() request itself. Let's say
p1 was rejected with a NetworkError object.

We didn't pass an error-handling callback function as the second
argument to the `.then()`  call, so p2
rejects as well with the same NetworkError object.

Without a handler, though, p2 is rejected, and then p3 is rejected for
the same reason.

At this point, the c3 error-handling callback is called, and the
NetworkError-specific code within it runs.

There are a couple of things worth noting about this code. First, notice
that the error object thrown with a regular, synchronous throw statement
ends up being handled asynchronously with a `.catch()`  method invocation in a Promise chain. This should make
it clear why this shorthand method is preferred over passing a second
argument to .`then()` , and also why it is
so idiomatic to end Promise chains with a `.catch()`  call.

it is also perfectly valid to use `.catch()`  elsewhere in a Promise chain. If one of the stages in
your Promise chain can fail with an error, and if the error is some kind
of recoverable error that should not stop the rest of the chain from
running, then you can insert a `.catch()` 
call in the chain, resulting in code that might look like this:

```
 {#f770 .graf .graf--pre .graf-after--p name="f770"}
startAsyncOperation()
```


```
 {#db14 .graf .graf--pre .graf-after--pre name="db14"}
.then(doStageTwo)
```


```
 {#0050 .graf .graf--pre .graf-after--pre name="0050"}
.catch(recoverFromStageTwoError)
```
 

```
 {#62b6 .graf .graf--pre .graf-after--pre name="62b6"}
.then(doStageThree)
```


```
 {#9f53 .graf .graf-- re .graf-after--pre name="9f53"}
.then(doStageFour)
```


```
 {#7ff4 .graf .graf--pre .graf-after--pre name="7ff4"}
.catch(logStageThreeAndFourErrors);
```
 

If the callback returns normally, then the `.catch()`  callback will be skipped, and the return value of the
previous callback will become the input to the
next .`then()`  callback.

Onc  an error has been passed to a `.catch()`  callback, it stops propagating down the Promise chain.
A `.catch()`{.markup--code .ma kup--p-code} callback can throw a new
error, but if it returns normally, than that return value is used to
resolve and/or fulfill the associated Promise, and\
 the error stops propagating.

Som times, in complex network environments, errors can occur more or
less at random, and it can be appropriate to handle those errors by
simply retrying the asynchronous request.

```
 {#9275 .graf .graf--pre .graf-after--p name="9275"}
queryDatabase()
```


```
 {#9a54 .graf .graf--pre .graf-after--pre name="9a54"}
.catch(e => wait(500).then(queryDatabase))
```


```
 {#07c8 .graf .graf--pre .graf-after--pre name="07c8"}
.then(displayTable)
```


```
 {#4c10 .graf .graf--pre .graf-after--pre name="4c10"}
.catch(displayDatabaseError);
```


### Promises in Parallel {#1082 .graf .graf--h3 .graf-after--pre name="1082"}

Sometimes,we want to execute a number of asynchronous operations in
parallel. The function `Promise.all()` 
can do this. `Promise.all()`  takes an
array of Promise objects as its input and returns a Promise.

The returned Promise will be rejected if any of the input Promises are
rejected. Otherwise, it will be fulfilled with an array of the
fulfillment values of each of the input Promises.

```
 {#53a3 .graf .graf--pre .graf-after--p name="53a3"}
const urls = [ /* zero or more URLs here */ ];
```


```
 {#fa65 .graf .graf--pre .graf-after--pre name="fa65"}
promises = urls.map(url => fetch(url).then(r => r.text()));
```


```
 {#fe09 .graf .graf--pre .graf-after--pre name="fe09"}
Promise.all(promises)
```


```
 {#54ed .graf .graf--pre .graf-after--pre name="54ed"}
.then(bodies => { /* do something with the array of strings */ })
```


```
 {#c346 .graf .graf--pre .graf-after--pre name="c346"}
.catch(e => console.error(e));
```


The Promise returned by `Promise.all()` 
rejects when any of the input Promises is rejected. This happens
immediately upon the first rejection and can happen while other input
Promises are still pending. In ES2020,
`Promise.allSettled()`  takes an array of
input\
 Promises and returns a Promise, just like Promise.all() does. But
`Promise.allSettled()`  never rejects the
returned Promise, and it does not fulfill that Promise until all of the
input Promises have settled. The Promise resolves to an array of
objects, with one object for each input Promise. Each of these returned
objects has a status property set to \"fulfilled\" or \"rejected.\" If
the status is \"fulfilled\", then the object will also have a value
property that gives the fulfillment value. And if the status is
\"rejected\", then the object will also have a reason property that
gives the error or rejection value of the corresponding Promise.

```
 {#4379 .graf .graf--pre .graf-after--p name="4379"}
Promise.allSettled([Promise.resolve(1), Promise.reject(2),3]).then(results => {
```


```
 {#0e84 .graf .graf--pre .graf-after--pre name="0e84"}
results[0] // => { status: "fulfilled", value: 1 }
```


```
 {#d129 .graf .graf--pre .graf-after--pre name="d129"}
results[1] // => { status: "rejected", reason: 2 }
```


```
 {#b705 .graf .graf--pre .graf-after--pre name="b705"}
results[2] // => { status: "fulfilled", value: 3 }
```


```
 {#54f9 .graf .graf--pre .graf-after--pre name="54f9"}
});
```


Occasionally, you may want to run a number of Promises at once but may
only care about the value of the first one to fulfill. In that case, you
can use `Promise.race()`  instead of
`Promise.all()` . It returns a Promise
that is fulfilled or rejected when the first of the Promises in the
input array is fulfilled or rejected.

### Making Promises {#ff11 .graf .graf--h3 .graf-after--p name="ff11"}

### Promises in Sequence {#d013 .graf .graf--h3 .graf-after--h3 name="d013"}

### async and await {#a552 .graf .graf--h3 .graf-after--h3 name="a552"}

These new keywords dramatically simplify the use of Promises and allow
us to write Promise-based, asynchronous code that looks like synchronous
code that blocks while waiting for network responses or other
asynchronous events.

Asynchronous code can't return a value or throw an exception the way
that regular synchronous code can. And this is why Promises are designed
the way the are. The value of a fulfilled Promise is like the return
value of a synchronous function. And the value of a rejected Promise is
like a value thrown by a synchronous function.

`async`  and `await`  take efficient, Promise-based code and hide the
Promises so that your asynchronous code can be as easy to read and as
easy to reason about as inefficient, blocking, synchronous code.

Given a Promise object p, the expression await p waits until p settles.
If p fulfills, then the value of await p is the fulfillment value of p.
On the other hand, if p is rejected, then the await p expression throws
the rejection value of p.

```
 {#938c .graf .graf--pre .graf-after--p name="938c"}
let response = await fetch("/api/user/profile");
```


```
 {#4b52 .graf .graf--pre .graf-after--pre name="4b52"}
let profile = await response.json(); 
```


It is critical to understand right away that the `await`  keyword does not cause your program to block and
literally do nothing until the specified Promise settles. The code
remains asynchronous, and the `await` 
simply disguises this fact. This means t at any code that uses await is
itself asynchronous.

### async Functions {#f2e6 .graf .graf--h3 .graf-after--p name="f2e6"}

Because any code that uses await is as nchronous, there is one critical
rule: you can only use the await keyword within functions that have been
declared with the `async`  keyword.

```
 {#2971 .graf .graf--pre .graf-after--p name="2971"}
async function getHighScore() {
```

 
```
 {#af49 .graf .graf--pre .graf-after--pre name="af49"}
let response = await fetch("/api/user/profile");
```


```
 {#af68 .graf .graf--pre .graf-after--pre name="af68"}
let profile = await response.json();
```


```
 {#b2b9 .graf .graf--pre .graf-after--pre name="b2b9"}
return profile.highScore;
```
 

```
 {#5b46 .graf .graf--pre .graf-after--pre name="5b46"}
} 
```
 

Declaring a function `async`  means that
the return value of the function  ill be a Promise even if no
Promise-related code appears in the body of the function.

The `getHighScore()`  function is declared
`async`{.markup--code .markup- p-code}, so it returns a Promise. And
because it returns a Promise, we can use the `await`  keyword with it:

```
 {#c6de .graf .graf--pre .graf-after--p name="c6de"}
displayHighScore(await getHighScore());
```


### Awaiting Multiple Promises {#e92f .graf .graf--h3 .graf-after--pre name="e92f"}

Suppose that we've written our `getJSON()`  function using async:

```
 {#f3a7 .graf .graf--pre .graf-after--p name="f3a7"}
async function getJSON(url) {
```


```
 {#88e3 .graf .graf--pre .graf-after--pre name="88e3"}
let response = await fetch(url);
```


```
 {#fff0 .graf .graf--pre .graf-after--pre name="fff0"}
let body = await response.json();
```


```
 {#1a83 .graf .graf--pre .graf-after--pre name="1a83"}
return body;
```


```
 {#90c9 .graf .graf--pre .graf-after--p e name="90c9"}
}
```

 
And now suppose that we want to fetch two JSON values with this function
 
```
 {#3426 .graf .graf--pre .graf-after--p name="3426"}
l t value1 = await getJSON(url1);
```


 `` {#8fa7 .graf .graf--pre .graf-after--pre name="8fa7"}
let value2 = await getJSON(url2);
```


The problem with this code is that it is unnecessarily sequential: the
fetch of the second URL will not begin until the first fetch is
complete. If the second URL does not depend on the value obtained from
the firstURL, then we should probably try to fetch the two values at the
same time.

```
 {#681e .graf .graf--pre .graf-after--p name="681e"}
let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);
```


### The for/await Loop {#5799 .graf .graf--h3 .graf-after--pre name="5799"}

Suppose you have an array of URLs:

```
 {#1671 .graf .graf--pre .graf-after--p name="1671"}
const urls = [url1, url2, url3];
```


You can call fe ch() on each URL to get an array of Promises:

```
 {#4fe7 .graf .graf--pre .graf-after--p name="4fe7"}
const promises = urls.map(url => fetch(url));
```


We could now use` Promise.all()`  to wait
for all the Promises in the array to be fulfilled. But suppose we want
the results of the first fetch as soon as they become available and
don't want to wait for all the URLs to be fetched.

```
 {#20ad .graf .graf--pre .graf-after--p name="20ad"}
for(const promise of promises) {
```


```
 {#9c0e .graf .graf--pre .graf-after--pre name="9c0e"}
response = await promise;
```


```
 {#3998 .graf .graf--pre .graf-after--pre name="3998"}
handle(response);
```


```
 {#cd84 .graf .graf--pre .graf-after--pre name="cd84"}
}
```


←\>

```
 {#9160 .graf .graf--pre .graf-after--p name="9160"}
for await (const response of promises) {
```


```
 {#432e .graf .graf--pre .graf-after--pre name="432e"}
handle(response);
```


 `` {#bc51 .graf .graf--pre .graf-after--pre name="bc51"}
}
```


both examples will only work if they are within functions declared
async; a `for/await`  loop is no different
than a regular await expression in that way

#### If you found this guide helpful feel free to checkout my GitHub/gist's where I host similar content: {#4372 .graf .graf--h4 .graf-after--p name="4372"}

[**bgoonz's** gists ·
GitHub](https://gist.github.com/bgoonz) 

[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or checkout my personal resource site:

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 






By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 8, 2021](https://medium.com/p/64306cd6b0db).

 
   