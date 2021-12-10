Writing Files Using Python {#writing-files-using-python .p-name}
==========================


Basics of Writing Files in Python The common methods to operate with
files are open() to open a file,


 
{.section .section .section--body .section--first .section--last name="dbc5"}
 

------------------------------------------------------------------------


  
### Writing Files Using Python {#874f .graf .graf--h3 .graf--leading .graf--title name="874f"}

Basics of Writing Files in Python\
The common methods to operate with files are open() to open a file,

seek() to set the file's current position at the given offset, and

close() to close th

As pointed out in a previous article that deals with reading data from
files, file handling belongs to the essential knowledge of every
professional Python programmer. This feature is a core part of the
Python language, and no extra module needs to be loaded to do it
properly.

### Basics of Writing Files in Python {#1d2b .graf .graf--h3 .graf-after--p name="1d2b"}

The common methods to operate with files are `open()`  to open a file, `seek()`{.markup--code .markup--p-code}
to set the file\'s current position at the given offset, and
`close()`{.markup--code .markup--p-code} to close the file afterwards.
The `open()`{.markup--code .markup--p-code} method returns a file handle
that represents a [file
object](https://docs.python.org/3/glossary.html#term-file-object)  to be used to access the file for reading, writing,
or appending.

Writing to a file requires a few decisions --- the name of the file in
which to store data and the access mode of the file. Available are two
modes, writing to a new file (and overwriting any existing data) and
appending data at the end of a file that already exists. The according
abbreviations are "w", and "a", and have to be specified before opening
a file.

In this article we will explain how to write data to a file line by
line, as a list of lines, and appending data at the end of a file.

### Writing a Single Line to a File {#037c .graf .graf--h3 .graf-after--p name="037c"}
 
This first example is pretty similar to writing to files with the
popular programming languages C and C++, as you'll see in *Listing 1*.
The process is pretty straightforward. First, we open the file using the
`open()`{.markup--code .markup--p-code} method for writing, write a
single line of text to the file using the `write()`  method, and then close the file using the
`close()`{.markup--code .markup--p-code} method. Keep in mind that due
to the way we opened the \"helloworld.txt\" file it will either be
created if it does not exist yet, or it will be completely overwritten.

```
 {#c054 .graf .graf--pre .graf-after--p name="c054"}
filehandle = open('helloworld.txt', 'w')
filehandle.write('Hello, world!\n')
filehandle.close()
```


*Listing 1*

This entire process can be shortened using the `with`  statement. *Listing 2* shows how to write that. As
already said before keep in mind that by opening the \"helloworld.txt\"
file this way will either create if it does not exist yet or completely
overwritten, otherwise.

```
 {#7cea .graf .graf--pre .graf-after--p name="7cea"}
with open('helloworld.txt', 'w') as filehandle:
    filehandle.write('Hello, world!\n')
```


*Listing 2*

### Writing a List of Lines to a File {#7ded .graf .graf--h3 .graf-after--p name="7ded"}

In reality a file does not consist only of a single line, but much more
data. Therefore, the contents of the file are stored in a list that
represents a file buffer. To write the entire file buffer we'll use the
`writelines()`{.markup--code .markup--p-code} method. *Listing 3* gives
you an example of this.

```
 {#5995 .graf .graf--pre .graf-after--p name="5995"}
filehandle = open("helloworld.txt", "w")
filebuffer = ["a first line of text", "a second line of text", "a third line"]
filehandle.writelines(filebuffer)
filehandle.close()
```


*Listing 3*

Running the Python program shown in *Listing 3* and then using the
`cat`{.markup--code .markup--p-code} command we can see that the file
\"helloworld.txt\" has the following content:

```
 {#9ad6 .graf .graf--pre .graf-after--p name="9ad6"}
$ cat helloworld.txt
a first line of text a second line of text a third line
```


*Listing 4*

This happens because **the** `writelines()`  **method does not automatically add any line separators
when writing the data**. *Listing 5* shows how to achieve that, writing
each line of text on a single line by adding the line separator \"\\n\".
Using a generator expression each line is substituted by the line plus
line separator. Again, you can formulate this using the
`with`{.markup--code .markup--p-code} statement.

```
 {#968e .graf .graf--pre .graf-after--p name="968e"}
with open('helloworld.txt', 'w') as filehandle:
    filebuffer = ["a line of text", "another line of text", "a third line"]
    filehandle.writelines("%s\n" % line for line in filebuffer)
```


*Listing 5*

Now, the output file "helloworld.txt" has the desired content as shown
in *Listing 6*:

```
 {#8f69 .graf .graf--pre .graf-after--p name="8f69"}
$ cat helloworld.txt
a first line of text
a second line of text
a third line
```


*Listing 6*

Interestingly, there is a way to use output redirection in Python to
write data to files. *Listing 7* shows how to code that for Python 2.x.

```
 {#5db0 .graf .graf--pre .graf-after--p name="5db0"}
filename = "helloworld.txt"
```


```
 {#4917 .graf .graf--pre .graf-after--pre name="4917"}
filecontent = ["Hello, world", "a second line", "and a third line"]
```


```
 {#a9d1 .graf .graf--pre .graf-after--pre name="a9d1"}
with open(filename, 'w') as filehandle:
    
    for line in filecontent:
        print >>filehandle, line
```


*Listing 7*

For the latest Python releases this does not work in the same way
anymore. To do something like this we must use the `sys`  module. It allows us to access the UNIX standard output
channels via `sys.stdout`{.markup--code .markup--p-code},
`sys.stdin`{.markup--code .markup--p-code}, and
`sys.stderr`{.markup--code .markup--p-code}.

In our case we preserve the original value of the output channel
`sys.stdout`{.markup--code .markup--p-code}, first (line 8 in the code
below), redefine it to the handle of our output file,

next (line 15), print the data as usual (line 18), and finally restore
the original value of the output channel `sys.stdout`  (line 21). *Listing 8* contains the example code.

```
 {#fdbc .graf .graf--pre .graf-after--p name="fdbc"}
import sys
```


```
 {#6ca4 .graf .graf--pre .graf-after--pre name="6ca4"}
filename = "helloworld.txt"
```


```
 {#cca3 .graf .graf--pre .graf-after--pre name="cca3"}
original = sys.stdout
```


```
 {#319f .graf .graf--pre .graf-after--pre name="319f"}
filecontent = ["Hello, world", "a second line", "and a third line"]
```


```
 {#c99f .graf .graf--pre .graf-after--pre name="c99f"}
with open(filename, 'w') as filehandle:
    
    sys.stdout = filehandle
     
    for line in filecontent:
        print(line)
     
    
    sys.stdout = original
```


*Listing 8*

This is not necessarily best practice, but it does give you other
options for writing lines to a file.

### Appending Data to a File {#cb84 .graf .graf--h3 .graf-after--p name="cb84"}

So far, we have stored data in new files or in overwritten data in
existing files. But what if we want to append data to the end of an
existing file? In this case we would need to open the existing file
using a different access mode. We change that to 'a' instead of 'w'.
 
*Listing 9* shows how to handle that. And *Listing 10* does the same
thing, but it uses the `with`{.markup--code .markup--p-code} statement
rather.

```
 {#86b2 .graf .graf--pre .graf-after--p name="86b2"}
filehandle = open('helloworld.txt','a')
filehandle.write('\n' + 'Hello, world!\n')
filehandle.close()
```


*Listing 9*

```
 {#9096 .graf .graf--pre .graf-after--p name="9096"}
with open('helloworld.txt', 'a') as filehandle:
    filehandle.write('\n' + 'Hello, world!\n')
```


*Listing 10*

Using the same helloworld.txt file from before, running this code will
produce the following file contents:

```
 {#e827 .graf .graf--pre .graf-after--p name="e827"}
$ cat helloworld.txt
Hello, world
a second line
and a third line
```


```
 {#16d9 .graf .graf--pre .graf-after--pre name="16d9"}
Hello, world!
```


### Conclusion {#8194 .graf .graf--h3 .graf-after--pre name="8194"}

Writing plain text data to files, or appending data to existing files,
is as easy as reading from files in Python. As soon as a file is closed
after writing or appending data, Python triggers a synchronization call.
As a result, the updated file is immediately written to disk.

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#e63e .graf .graf--h4 .graf-after--p name="e63e"}

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
[March 6, 2021](https://medium.com/p/d46b4851366f).


