Modules in Javascript {#modules-in-javascript .p-name}
=====================


Differences between Node.js and browsers


 
{.section .section .section--body .section--first .section--last name="9e06"}
 

------------------------------------------------------------------------


  
### Modules in Javascript {#770c .graf .graf--h3 .graf--leading .graf--title name="770c"}

#### **Differences between Node.js and browsers** {#82f1 .graf .graf--h4 .graf-after--h3 .graf--subtitle name="82f1"}

There are many differences between Node.js and browser environments, but
many of them are small and inconsequential in practice. For example, in
our *Asynchronous* lesson, we noted how [Node's
setTimeout](https://nodejs.org/api/timers.html#timers_settimeout_callback_delay_args)  has a slightly different return value from [a
browser's
setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) . Let's go over a few notable differences between the
two environments.

**Global vs Window**

In the Node.js runtime, the [global
object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)  is the object where global variables are stored. In
browsers, the [window
object](https://developer.mozilla.org/en-US/docs/Web/API/Window)  is where global variables are stored. The window also
includes properties and methods that deal with drawing things on the
screen like images, links, and buttons. Node doesn't need to draw
anything, and so it does not come with such properties. This means that
you can't reference window in Node.

*Most browsers allow you to reference global but it is really the same
object as window.*

**Document**

Browsers have access to a document object that contains the HTML of a
page that will be rendered to the browser window. There is no document
in Node.

**Location**

Browsers have access to a location that contains information about the
web address being visited in the browser. There is no location in Node,
since it is not on the web.

**Require and module.exports**

Node has a predefined require function that we can use to import
installed modules like readline. We can also import and export across
our own files using require and module.exports. For example, say we had
two different files, animals.js and cat.js, that existed in the same
directory:

If we execute animals.js in Node, the program would print 'Sennacy is a
great pet!'.

Browsers don't have a notion of a file system so we cannot use require
or module.exports in the same way.

### The fs module {#c82a .graf .graf--h3 .graf-after--p name="c82a"}

Node comes with an [fs
module](https://nodejs.org/api/fs.html)  that contains methods that allow us to interact with
our computer's **F**ile **S**ystem through JavaScript. No additional
installations are required; to access this module we can simply
`require`{.markup--code .markup--p-code} it. We recommend that you code
along with this reading. Let\'s begin with a
`change-some-files.js`{.markup--code .markup--p-code} script that
imports the module:

```
 {#adad .graf .graf--pre .graf-after--p name="adad"}
// change-some-files.js
```


```
 {#6d9a .graf .graf--pre .graf-after--pre name="6d9a"}
const fs = require("fs");
```


Similar to what we saw in the `readline`{.markup--code .markup--p-code}
lesson, `require`{.markup--code .markup--p-code} will return to us a
object with many properties that will enable us to do file I/O.

***Did you know?*** *I/O is short for input/output. It's usage is
widespread and all the hip tech companies are using it, like.io.*

The `fs`{.markup--code .markup--p-code} module contains tons of
functionality! Chances are that if there is some operation you need to
perform regarding files, the `fs`{.markup--code .markup--p-code} module
supports it. The module also offers both synchronous and asynchronous
implementations of these methods. We prefer to not block the thread and
so we\'ll opt for the asynchronous flavors of these methods.

### Creating a new file {#4935 .graf .graf--h3 .graf-after--p name="4935"}

To create a file, we can use the `writeFile`  method. According to the documentation, there are a few
ways to use it. The most straight forward way is:

The code a[create-a-nnew-file.js
(github.com)](https://gist.github.com/bgoonz/8898ad673bd2ecee9d93f8ec267cf213) bove will create a new file called
`foo.txt`{.markup--code .markup--p-code} in the same directory as our
`change-some-file.js`{.markup--code .markup--p-code} script. It will
write the string `'Hello world!'`{.markup--code .markup--p-code} into
that newly created file. The third argument specifies the encoding of
the characters. There are different ways to encode characters;
[UTF-8](https://en.wikipedia.org/wiki/UTF-8)  is the most common and you\'ll use this in most
scenarios. The fourth argument to `writeFile`  is a callback that will be invoked when the write
operation is complete. The docs indicate that if there is an error
during the operation (such as an invalid encoding argument), an error
object will be passed into the callback. This type of error handling is
quite common for asynchronous functions. Like we are used to, since
`writeFile`{.markup--code .markup--p-code} is asynchronous, we need to
utilize *callback chaining* if we want to guarantee that commands occur
*after* the write is complete or fails.

*Beware! If the file name specified to* `writeFile`  *already exists, it will completely overwrite the
contents of that file.*

We won't be using the `foo.txt`{.markup--code .markup--p-code} file in
the rest of this reading.

### Reading existing files {#aac1 .graf .graf--h3 .graf-after--p name="aac1"}

To explore how to read a file, we'll use VSCode to manually create a
`poetry.txt`{.markup -code .markup--p-code} file within the same
directory as our `change-some-file.js`{.markup--code .markup--p-code}
script. Be sure to create this if you are following along.

Our `poetry.txt`{.markup--code .markup--p-code} file will contain the
following lines:

```
 {#f380 .graf .graf--pre .graf-after--p name="f380"}
My code fails
```


```
 {#86f7 .graf .graf--pre .graf-after--pre name="86f7"}
I do not know why
```


```
 {#c931 .graf .graf--pre .graf-after--pre name="c931"}
My code works
```


```
 {#af50 .graf .graf--pre .graf-after--pre name="af50"}
I do not know why
```


We can use the `readFile`{.markup--code .markup--p-code} method to read
the contents of this file. The method accepts very similar arguments to
`writeFile`{.markup--code .markup--p-code}, except that the callback may
be passed an error object and string containing the file contents. In
the snippet below, we have replaced our previous
`writeFile`{.markup--code .markup--p-code} code with
`readFile`{.markup--code .markup--p-code}:

> Running the code above would print the following in the terminal:

```
 {#64d5 .graf .graf--pre .graf-after--blockquote name="64d5"}
THE CONTENTS ARE:
```


```
 {#28a7 .graf .graf--pre .graf-after--pre name="28a7"}
My code fails
```


```
 {#7e4e .graf .graf--pre .graf-after--pre name="7e4e"}
I do not know why
```


```
 {#f038 .graf .graf--pre .graf-after--pre name="f038"}
My code works
```


```
 {#3242 .graf .graf--pre .graf-after--pre name="3242"}
I do not know why
```


Success! From here, you can do anything you please with the data read
from the file. For example, since `data`{.markup--code .markup--p-code}
is a string, we could split the string on the newline character
`\n`{.markup--code .markup--p-code} to obtain an array of the file\'s
lines:

```
 {#9da1 .graf .graf--pre .graf-after--figure name="9da1"}
THE CONTENTS ARE:
```


```
 {#0548 .graf .graf--pre .graf-after--pre name="0548"}
[ 'My code fails',
```


```
 {#9220 .graf .graf--pre .graf-after--pre name="9220"}
'I do not know why',
```


```
 {#7098 .graf .graf--pre .graf-after--pre name="7098"}
'My code works',
```


```
 {#9b85 .graf .graf--pre .graf-after--pre name="9b85"}
'I do not know why' ]
```


```
 {#16ca .graf .graf--pre .graf-after--pre name="16ca"}
The third line is My code works
```


### File I/O {#4ead .graf .graf--h3 .graf-after--pre name="4ead"}

*Using the same* `poetry.txt`{.markup--code .markup--p-code} *file from
before:*

```
 {#ccdf .graf .graf--pre .graf-after--p name="ccdf"}
My code fails
```


```
 {#1b83 .graf .graf--pre .graf-after--pre name="1b83"}
I do not know why
```


```
 {#b0ae .graf .graf--pre .graf-after--pre name="b0ae"}
My code works
```


```
 {#6b46 .graf .graf--pre .graf-after--pre name="6b46"}
I do not know why
```


Let's replace occurrences of the phrase 'do not' with the word 'should'.

We can read the contents of the file as a string, manipulate this
string, then write this new string back into the file.

We'll need to utilize callback chaining in order for this to work since
our file I/O is asynchronous:

Executing the script above will edit the `poetry.txt`  file to contain:

```
 {#500f .graf .graf--pre .graf-after--p name="500f"}
My code fails
```


```
 {#ed11 .graf .graf--pre .graf-after--pre name="ed11"}
I should know why
```


```
 {#c062 .graf .graf--pre .graf-after--pre name="c062"}
My code works
```


```
 {#4161 .graf .graf--pre .graf-after--pre name="4161"}
I should know why
```


#### Refactor: {#ef0d .graf .graf--h4 .graf-after--pre name="ef0d"}

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#e5a7 .graf .graf--h4 .graf-after--figure name="e5a7"}

[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz)  

[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 

 



By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 8, 2021](https://medium.com/p/a55333e35978).


