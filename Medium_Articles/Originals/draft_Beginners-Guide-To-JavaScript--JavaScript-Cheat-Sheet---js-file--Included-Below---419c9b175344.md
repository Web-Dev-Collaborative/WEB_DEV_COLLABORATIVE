Beginners Guide To JavaScript (JavaScript Cheat Sheet (.js file) Included Below ) {#beginners-guide-to-javascript-javascript-cheat-sheet-.js-file-included-below .p-name}
=================================================================================

 
How to learn effectively


  
 {.section .section .section--body .section--first name="9cfd"}
  

------------------------------------------------------------------------


    
### Beginners Guide To JavaScript (JavaScript Cheat Sheet (.js file) Included Below ) {#19a3 .graf .graf--h3 .graf--leading .graf--title name="19a3"}

\

![](https://cdn-images-1.medium.com/max/800/0*In5wB-29T0Ud_zs3.jpg) 

### **How to learn effectively** {#6610 .graf .graf--h3 .graf-after--figure name="6610"}

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
`console.log`{.markup--code .markup--p-code}. This command is used to
*print* something onto the screen. As we write our first lines of code,
we'll be using `console.log`{.markup--code .markup--p-code} frequently
as a way to visually see the output of our programs. Let's write our
first program:

```
 {#e289 .graf .graf--pre .graf-after--p name="e289"}
console.log("hello world");
console.log("how are you?");
```


```
 {#cecd .graf .graf--pre .graf--empty .graf-after--pre name="cecd"}
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

> \

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


```
 {#f600 .graf .graf--pre .graf--empty .graf-after--pre name="f600"}
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

###   {#2774 .graf .graf--h3 .graf--empty .graf-after--p name="2774"}

**The Number Data Type**

The **number** data type in JS is used to represent any numerical
values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   [**+** (addition)]{#f533}
-   [**-** (subtraction)]{#5b9f}
-   [**asterisk** (multiplication)]{#b98b}
-   [**/** (division)]{#9a15}
-   [**%** (modulo)]{#9092}

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
-   [empty strings have a length of zero.]{#0a1f}
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

#### **=== ** {#b620 .graf .graf--h4 .graf-after--p name="b620"}
 
Strict Equality, will only return true if the two comparisons are
entirely the same.

#### **==**  {#38a2 .graf .graf--h4 .graf-after--p name="38a2"}
 
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
    differences in terms of hoisting and global/block scope ]{#47ca}
 
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
-   [The code to execute {}]{#02f5}
-   [**Function Calls** : We can call upon our function whenever and
    wherever\* we want. (\*wherever is only after the initial
    declaration)]{#6879}
-   [JS evaluates code top down, left to right.]{#8374}
-   [When we execute a declared function later on in our program we
    refer to this as **invoking** our function.]{#2687}
-   [Every function in JS returns undefined unless otherwise
    specified.]{#7d5d}
-   [When we hit a **return** statement in a function we immediately
    exit the function and return to where we called the
    function.]{#4207}
-   [When naming functions in JS always use camelCase and name it
    something appropriate.]{#e39f}

Greate code reads like English and almost explains itself. Think:
Elegant, readable, and maintainable!

**Parameters and Arguments**

-   [**Parameters** : Comma seperated variables specified as part of a
    function's decl ration.]{#9b18}
-   [**Arguments** : Values passed to the function when it is
    invoked.]{#674 }
-   [*If the number of arguments passed during a function invocation is
    different than the number of paramters listed, it will still
    work.*]{#004c}
-   [However, is there are not enough arguments provided for parameters
    our function will likely yield **Nan**.]{#7da5}

\

\

\

\

### Explicit Conversions {#c34b .graf .graf--h3 .graf-after--p name="c34b"}

The simplest way to perform an explicit type conversion is to use the
`Boolean(), Number()`{.markup--code .markup--p-code}, and
`String()`{.markup--code .markup--p-code} functions.

Any value other than `null `{.markup--code .markup--p-code}or
`undefined               `{.markup--code .markup--p-code}has
a` toString()`{.markup--code .markup--p-code} method.

`n.toString(2);`{.markup--code .markup--p-code}

binary

`n.toString(8);`{.markup--code .markup--p-code}

octal

`n.toString(16);`{.markup--code .markup--p-code}

hex

`let n                 = 123456.789;`{.markup--code .markup--p-code}

`n.toFixed(0)`{.markup--code .markup--p-code}

\"123457\"

`n.toFixed(5)`{.markup--code .markup--p-code}

\"123456.78900\"

`n.toExponential(3)`{.markup--code .markup--p-code}

\"1.235e+5\"

`n.toPrecision(7)`{.markup--code .markup--p-code}

\"123456.8\"

`n.toPrecision(10)`{.markup--code .markup--p-code}

\"123456.7890\"

`parseInt("3 blind mice")`{.markup--code .markup--p-code}

3

`parseFloat(" 3.14 meters")`{.markup--code .markup--p-code}

3.14

`parseInt("-12.34")`{.markup--code .markup--p-code}

-12

`parseInt("0xFF")`{.markup--code .markup--p-code}

255

\





[View original.](https://medium.com/p/419c9b175344)

