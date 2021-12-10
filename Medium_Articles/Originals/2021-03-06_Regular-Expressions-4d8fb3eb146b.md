Regular Expressions {#regular-expressions .p-name}
===================


description:


 
{.section .section .section--body .section--first name="22c3"}
 

------------------------------------------------------------------------


  
### Regular Expressions {#9619 .graf .graf--h3 .graf--leading .graf--title name="9619"}

![](https://cdn-images-1.medium.com/max/800/0*VdDVM2Nzv6oGC5I0.png) 

![](https://cdn-images-1.medium.com/max/800/1*D83R_a0SSgMR0hI4jP6Asw.png) 

![](https://cdn-images-1.medium.com/max/800/1*vk5n412Bs-dx6UdgyUywdg.png) 

### description: {#03f4 .graf .graf--h3 .graf-after--figure name="03f4"}

*Regular expressions are patterns used to match character combinations
in strings. In JavaScript, regular expressions are also objects. These
patterns are used with the* `exec()`{.markup--code .markup--p-code}
*and* `test()`{.markup--code .markup--p-code} *methods of*
`RegExp`{.markup--code .markup--p-code}*, and with the*
`match()`{.markup--code .markup--p-code}*,* `matchAll()` *,* `replace()`{.markup--code .markup--p-code}*,*
`replaceAll()`{.markup--code .markup--p-code}*,*
`search()`{.markup--code .markup--p-code}*, and* `split()`  *methods of* `String`{.markup--code .markup--p-code}*.
This chapter describes JavaScript regular expressions.*

### Creating a regular expression {#d11f .graf .graf--h3 .graf-after--p name="d11f"}

You construct a regular expression in one of two ways:

1.  [**Using a regular expression literal, which consists of a pattern
    enclosed between slashes, as follows:**]{#8a7f}

`let re =                   /ab+c/;`{.markup--code .markup--p-code}

-   [Regular expression literals provide compilation of the regular
    expression when the script is loaded. If the regular expression
    remains constant, using this can improve performance.]{#f4e2}

**2. Or calling the constructor function of the** `RegExp`  **object, as follows:**

-   [`let re = new RegExp('ab+c');`{.markup--code
    .markup--li-code}]{#2016}

> *Using the constructor function provides runtime compilation of the
> regular expression*. Use the constructor function when you know the
> regular expression pattern will be changing, or you don\'t know the
> pattern and are getting it from another source, such as user input.

### Writing a regular expression pattern {#bfbc .graf .graf--h3 .graf-after--blockquote name="bfbc"}

A regular expression pattern is composed of simple characters, such as
`/abc/`{.markup--code .markup--p-code}, or a combination of simple and
special characters, such as `/ab*c/`{.markup--code .markup--p-code} or
`/Chapter (\d+)\.\d*/`{.markup--code .markup--p-code}.

The last example includes **parentheses, which are used as a memory
device**. *The match made with this part of the pattern is remembered
for later use.*

### Using simple patterns {#7a41 .graf .graf--h3 .graf-after--p name="7a41"}

Simple patterns are constructed of characters for which you want to find
a direct match.

For example, the pattern `/abc/`{.markup--code .markup--p-code} matches
character combinations in strings only when the exact sequence
`"abc"`{.markup--code .markup--p-code} occurs (all characters together
and in that order).

Such a match would succeed in the strings
`"Hi, do you know your abc's?"`{.markup--code .markup--p-code} and
`"The latest airplane designs evolved from                 slabcraft."` 

In both cases the match is with the substring `"abc"` .

There is no match in the string `"Grab crab"`  because while it contains the substring
`"ab c"`{.markup--code .markup--p-code}, it does not contain the exact
substring `"abc"`{.markup--code .markup--p-code}.

### Using special characters {#6ffc .graf .graf--h3 .graf-after--p name="6ffc"}

When the search for a match requires something more than a direct match,
such as finding one or more b\'s, or finding white space, you can
include special characters in the pattern.

For example, to match *a single* `"a"`{.markup--code .markup--p-code}
*followed by zero or more* `"b"`{.markup--code .markup--p-code}*s
followed by* `"c"`{.markup--code .markup--p-code}, you\'d use the
pattern `/ab*c/`{.markup--code .markup--p-code}:

> the `*`{.markup--code .markup--blockquote-code} after
> `"b"`{.markup--code .markup--blockquote-code} means \"0 or more
> occurrences of the preceding item.\" In the string
> `"cbbabbbbcdebc"`{.markup--code .markup--blockquote-code}, this
> pattern will match the substring `"abbbbc"`{.markup--code
> .markup--blockquote-code}.

[**Assertions**](https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Assertions.html) ** : Assertions include boundaries, which indicate the
beginnings and endings of lines and words, and other patterns indicating
in some way that a match is possible (including look-ahead, look-behind,
and conditional expressions).**

[**Character
classes**](https://g thub.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Character_Classes.html) ** : Distinguish different types of characters. For
example, distinguishing between letters and digits.**

[**Groups and
ranges**](https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Groups_and_Ranges.html) ** : Indicate groups and ranges of expression
characters.** 

[**Quantifiers**](https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Quantifiers.html) ** : Indicate numbers of characters or expressions to
match.**
 
[**Unicode property
escapes**](https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions/Unicode_Property_Escapes.html) ** : Distinguish based on unicode character
properties, for exam le, upper- and lower-case letters, math symbols,
and punctuation.**

If you want to look at all the special characters that can be used in
regular expressions in a single table, see the following:
 
![](https://cdn-images-1.medium.com/max/800/1*Wk5zFr1IHJxacq2a2zi5RQ.png) 

### Special characters in regular expressions. {#5edb .graf .graf--h3 .graf-after--figure name="5edb"}

### Escaping {#73d4 .graf .graf--h3 .graf-after--h3 name="73d4"}

If you need to use any of the special characters literally (actually
searching for a `"*"`{.markup--code .markup--p-code}, for instance), you
must escape it by putting a **backslash** in front of it.

For instance, to search for `"a"`{.markup--code .markup--p-code}
followed by `"*"`{.markup--code .markup--p-code} followed by
`"b"`{.markup--code .markup--p-code},

> you\'d use `/a\*b/`{.markup--code .markup--blockquote-code} \-\-- the
> backslash \"escapes\" the `"*"`{.markup--code
> .markup--blockquote-code}, making it literal instead of special.

Similarly, if you\'re writing a regular expression literal and need to
match a slash (\"/\"), you need to escape that (otherwise, it terminates
the pattern)

For instance, to search for the string \"/example/\" followed by one or
more alphabetic characters, you\'d use
`/\/example\/[a-z]+/i`{.markup--code .markup--p-code}

**\--the backslashes before each slash make them literal.**

To match a literal backslash, you need to escape the backslash.

For instance, to match the string \"C:\\\" where \"C\" can be any
letter,

you\'d use `/[A-Z]:\\/`{.markup--code .markup--p-code}

\-\-- the first backslash escapes the one after it, so the expression
searches for a single literal backslash.

If using the `RegExp`{.markup--code .markup--p-code} constructor with a
string literal, **remember that the backslash is an escape in string
literals, so to use it in the regular expression, you need to escape it
at the string literal level**.

`/a\*b/`{.markup--code .markup--p-code} and
`new                 RegExp("a\\*b")`{.markup--code .markup--p-code}
create the same expression,

which searches for \"a\" followed by a literal \"\*\" followed by \"b\".

If escape strings are not already part of your pattern you can add them
using `String.replace`{.markup--code .markup--p-code}:

```
 {#56af .graf .graf--pre .graf-after--p name="56af"}
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
```


**The \"g\" after the regular expression is an option or flag that
performs a global search, looking in the whole string and returning all
matches.**

### Using parentheses {#9de8 .graf .graf--h3 .graf-after--p name="9de8"}

Parentheses around any part of the regular expression pattern causes
that part of the matched substring to be remembered.

Once remembered, the substring can be recalled for other use.

### Using regular expressions in JavaScript {#7481 .graf .graf--h3 .graf-after--p name="7481"}

Regular expressions are used with the `RegExp`  **methods**

`test()`{.markup--code .markup--p-code} **and** `exec()` 

and with the `String`{.markup--code .markup--p-code} **methods**
`match()`{.markup--code .markup--p-code}**,** `replace()` **,** `search()`{.markup--code .markup--p-code}**, and**
`split()`{.markup--code .markup--p-code}**.**




 ="a2ae"}
 

------------------------------------------------------------------------


  
### Method Descriptions {#adee .graf .graf--h3 .graf--leading name="adee"}

#### `exec()`{.markup--code .markup--h4-code} {#d476 .graf .graf--h4 .graf-after--h3 name="d476"}

Executes a search for a match in a string.

It returns an array of information or `null`  on a mismatch.
 #### `test()`{.markup--code .markup--h4-code} {#14b8 .graf .graf--h4 .graf-after--p name="14b8"}

Tests for a match in a string.
 
It returns `true`{.markup--code .markup--p-code} or
`false`{.markup--code .markup--p-code}.

#### `match()`{.markup--code .markup--h4-code} {#cac7 .graf .graf--h4 .graf-after--p name="cac7"}

Returns an array containing all of the matches, including capturing
groups, or `null`{.markup--code .markup--p-code} if no match is found.

#### `matchAll()`{.markup--code .markup--h4-code} {#4816 .graf .graf--h4 .graf-after--p name="4816"}

Returns an iterator containing all of the matches, including capturing
groups.

#### `search()`{.markup--code .markup--h4-code} {#1d4f .graf .graf--h4 .graf-after--p name="1d4f"}

Tests for a match in a string.

It returns the index of the match, or `-1`  if the search fails.

#### `replace()`{.markup--code .markup--h4-code} {#d25d .graf .graf--h4 .graf-after--p name="d25d"}

Executes a search for a match in a string, and replaces the matched
substring with a replacement substring.

#### `replaceAll()`{.markup--code .markup--h4-code} {#fa24 .graf .graf--h4 .graf-after--p name="fa24"}

Executes a search for all matches in a string, and replaces the matched
substrings with a replacement substring.

#### `split()`{.markup--code .markup--h4-code} {#e692 .graf .graf--h4 .graf-after--p name="e692"}

Uses a regular expression or a fixed string to break a string into an
array of substrings.

### Methods that use regular expressions {#80c3 .graf .graf--h3 .graf-after--p name="80c3"}

When you want to know whether a pattern is found in a string, use the
`test()`{.markup--code .markup--p-code} or `search()`  methods;

for more information (but slower execution) use the
`exec()`{.markup--code .markup--p-code} or `match()`  methods.

If you use `exec()`{.markup--code .markup--p-code} or
`match()`{.markup--code .markup--p-code} and if the match succeeds,
these methods return an array and update properties of the associated
regular expression object and also of the predefined regular expression
object, `RegExp`{.markup--code .markup--p-code}.

If the **match fails, the** `exec()`{.markup--code .markup--p-code}
**method returns** `null`{.markup--code .markup--p-code} (which coerces
to `false`{.markup--code .markup--p-code}).

In the following example, the script uses the `exec()`  method to find a match in a string.

```
 {#26c1 .graf .graf--pre .graf-after--p name="26c1"}
let myRe = /d(b+)d/g;
let myArray = myRe.exec('cdbbdbsbz');
```


If you do not need to access the properties of the regular expression,
an alternative way of creating `myArray`{.markup--code .markup--p-code}
is with this script:

```
 {#583a .graf .graf--pre .graf-after--p name="583a"}
let myArray = /d(b+)d/g.exec('cdbbdbsbz'); 
    // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
    // "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while 
    // /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].
```


(See [different
behaviors](https://github.com/bgoonz/Cheat-Sheets/blob/master/Regular_Expressions.md#g-different-behaviors)  for further info about the different behaviors.)

If you want to construct the regular expression from a string, yet
another alternative is this script:

```
 {#58f4 .graf .graf--pre .graf-after--p name="58f4"}
let myRe = new RegExp('d(b+)d', 'g');
let myArray = myRe.exec('cdbbdbsbz');
```


With these scripts, the match succeeds and returns the array and updates
the properties shown in the following table.

Results of regular expression execution.

You can use a regular expression created with an object initializer
without assigning it to a letiable.

If you do, however, every occurrence is a new regular expression.

For this reason, if you use this form without assigning it to a
letiable, you cannot subsequently access the properties of that regular
expression.

For example, assume you have this script:

```
 {#9628 .graf .graf--pre .graf-after--p name="9628"}
let myRe = /d(b+)d/g;
let myArray = myRe.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + myRe.lastIndex);

// "The value of lastIndex is 5"
```


However, if you have this script:

```
 {#b3e2 .graf .graf--pre .graf-after--p name="b3e2"}
let myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

// "The value of lastIndex is 0"
```


The occurrences of `/d(b+)d/g`{.markup--code .markup--p-code} in the two
statements are different regular expression objects and hence have
different values for their `lastIndex`{.markup--code .markup--p-code}
property.

If you need to access the properties of a regular expression created
with an object initializer, you should first assign it to a variable.

### \[Advanced searching with flags\] {#0378 .graf .graf--h3 .graf-after--p name="0378"}

Regular expressions have **six optional flags** that allow for
functionality like global and case insensitive searching.

These flags can be used separately or together in any order, and are
included as part of the regular expression.

Flag Description Corresponding property




  

------------------------------------------------------------------------


  
`g`{.markup--code .markup--p-code} Global search.
`RegExp.prototype.global`{.markup--code .markup--p-code}

`i`{.markup--code .markup--p-code} Case-insensitive search.
`RegExp.prototype.ignoreCase`{.markup--code .markup--p-code}

`m`{.markup--code .markup--p-code} Multi-line search.
`RegExp.prototype.multiline`{.markup--code .markup--p-code}

`s`{.markup--code .markup--p-code} Allows `.`  to match newline characters.
`RegExp.prototype.dotAll`{.markup--code .markup--p-code}

 sequence of unicode code points.
`RegExp.prototype.unicode`{.markup--code .markup--p-code}

`y`{.markup--code .markup--p-code} Perform a \"sticky\" search that
matches starting at the current position in the target string.
 kup--p-code}

#### Regular expression flags {#22ef .graf .graf--h4 .graf-after--p name="22ef"}

*To include a flag with the regular expression, use this syntax:*
 
```
 {#1267 .graf .graf--pre .graf-after--p name="1267"}
let re = /pattern/flags;
```


or

```
 {#43d5 .graf .graf--pre .graf-after--p name="43d5"}
let re = new RegExp('pattern', 'flags');
```


Note that the flags are an integral part of a regular expression. They
cannot be added or removed later.

For example, `re = /\w+\s/g`{.markup--code .markup--p-code} creates a
regular expression that looks for one or more characters followed by a
space, and it looks for this combination throughout the string.

```
 {#2f0b .graf .graf--pre .graf-after--p name="2f0b"}
let re = /\w+\s/g;
let str = 'fee fi fo fum';
let myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```


You could replace the line:

```
 {#29cf .graf .graf--pre .graf-after--p name="29cf"}
let re = /\w+\s/g;
```


with:

```
 {#35d6 .graf .graf--pre .graf-after--p name="35d6"}
let re = new RegExp('\\w+\\s', 'g');
```


and get the same result.

The behavior associated with the `g`{.markup--code .markup--p-code} flag
is different when the `.exec()`{.markup--code .markup--p-code} method is
used.

The roles of \"class\" and \"argument\" get reversed:

In the case of `.match()`{.markup--code .markup--p-code}, the string
class (or data type) owns the method and the regular expression is just
an argument,

while in the case of `.exec()`{.markup--code .markup--p-code}, it is the
regular expression that owns the method, with the string being the
argument.

Contrast this `str.match(re)`{.markup--code .markup--p-code} versus
`re.exec(str)`{.markup--code .markup--p-code}.
 
The `g`{.markup--code .markup--p-code} flag is used with
the `.exec()`{.markup--code .markup--p-code} method to get iterative
progression.

```
 {#cc36 .gr f .graf--pre .graf-after--p name="cc36"}
let xArray; while(xArray = re.exec(str)) console.log(xArray);
// produces: 
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```


The `m`{.markup--code .markup--p-code} flag is used to specify that a
multiline input string should be treated as multiple lines.

If the `m`{.markup--code .markup--p-code} flag is used,
`^` .markup--code .markup--p-code} and `$`  match at the start or end of any line within the input
string instead of the start or end of the entire string.

### Using special characters to verify input {#6f94 .graf .graf--h3 .graf-after--p name="6f94"}

In the following example, the user is expected to enter a phone number.
When the user presses the \"Check\" button, the script checks the
validity of the number. If the number is valid (matches the character
sequence specified by the regular expression), the script shows a
message thanking the user and confirming the number. If the number is
invalid, the script informs the user that the phone number is not valid.

Within non-capturing parentheses `(?:`{.markup--code .markup--p-code} ,
the regular expression looks for three numeric characters
`\d{3}`{.markup--code .markup--p-code} OR `|`  a left parenthesis `\(`{.markup--code .markup--p-code}
followed by three digits` \d{3}`{.markup--code .markup--p-code},
followed by a close parenthesis `\)`{.markup--code .markup--p-code},
(end non-capturing parenthesis `)`{.markup--code .markup--p-code}),
followed by one dash, forward slash, or decimal point and when found,
remember the character `([-\/\.])`{.ma kup--code .markup--p-code},
followed by three digits `\d{3}`{.markup--code .markup--p-code},
followed by the remembered match of a dash, forward slash, or decimal
point `\1`{.markup--code .markup--p-code}, followed by four digits
`\d{4}`{.markup--code .markup--p-code}.

The `Change`{.markup--code .markup--p-code} event activated when the
user presses Enter sets the value of `RegExp.input` .

#### HTML {#0806 .graf .graf--h4 .graf-after--p name="0806"} 

```
 {#2a30 .graf .graf--pre .graf-after--h4 name="2a30"}
<p>
  Enter your phone number (with area code) and then click "Check".
  <br>
  The expected format is like ###-###-####.
</p>
<form action="#">
  <input id="phone">
    <button onclick="testInfo(document.getElementById('phone'));">Check</button>
</form>
```


#### JavaScript {#dbf1 .graf .graf--h4 .graf-after--pre name="dbf1"}

```
 {#a704 .graf .graf--pre .graf-after--h4 name="a704"}
let re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
  let OK = re.exec(phoneInput.value);
  if (!OK) {
    console.error(phoneInput.value + ' isn\'t a phone number with area code!'); 
  } else {
    console.log('Thanks, your phone number is ' + OK[0]);}
}
```


### Cheat Sheet {#6d59 .graf .graf--h3 .graf-after--pre name="6d59"}

![](https://cdn-images-1.medium.com/max/800/1*VmpGy_BYCekOncdyrgSrxw.png) 

#### If you found this guide helpful feel free to checkout my GitHub/gist\'s where I host similar content: {#71ef .graf .graf--h4 .graf-after--figure name="71ef"}

> [**bgoonz's** gists ·
> GitHub](https://gist.github.com/bgoonz){.markup--anchor
> .markup--blockquote-anchor}

{#3585 .graf .graf--mixtapeEmbed .graf-after--blockquote name="3585"}
[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:

 
[**a/A-Student-Resources**\ 
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 






By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 6, 2021](https://medium.com/p/4d8fb3eb146b).


 