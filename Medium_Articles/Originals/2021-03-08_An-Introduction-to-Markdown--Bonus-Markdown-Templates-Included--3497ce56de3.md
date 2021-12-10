An Introduction to Markdown (Bonus Markdown Templates Included) {#an-introduction-to-markdown-bonus-markdown-templates-included .p-name}
===============================================================


Basic Syntax Guide


 
{.section .section .section--body .section--first .section--last name="d893"}
 

------------------------------------------------------------------------


  
### An Introduction to Markdown (Bonus Markdown Templates Included) {#abdd .graf .graf--h3 .graf--leading .graf--title name="abdd"}

![](https://cdn-images-1.medium.com/max/800/0*oy6szzmI0FdRUiTd.png) 

{#3f3a .graf .graf--mixtapeEmbed .graf-after--figure name="3f3a"}
[**bgoonz/Markdown-Templates**\
*One Paragraph of project description goes here These instructions will
get you a copy of the project up and running
on...*github.com](https://github.com/bgoonz/Markdown-Templates.git "https://github.com/bgoonz/Markdown-Templates.git") [](https://github.com/bgoonz/Markdown-Templates.git) 


### Basic Syntax Guide {#df36 .graf .graf--h3 .graf-after--mixtapeEmbed name="df36"}

This topic is meant to give you a very basic overview of how Markdown
works, showing only some of the most common operations you use most
frequently. Keep in mind that you can also use the Edit menus to inject
markdown using the toolbar, which serves as a great way to see how
Markdown works. However, Markdown's greatest strength lies in its
simplicity and keyboard friendly approach that lets you focus on writing
your text and staying on the keyboard.

### What is Markdown {#ac30 .graf .graf--h3 .graf-after--p name="ac30"}

Markdown is very easy to learn and get comfortable with due it's
relatively small set of markup 'commands'. It uses already familiar
syntax to represent common formatting operations. Markdown understands
basic line breaks so you can generally just type text.

Markdown also allows for raw HTML inside of a markdown document, so if
you want to embed something more fancy than what Markdowns syntax can do
you can always fall back to HTML. However to keep documents readable
that's generally not recommended.

### Basic Markdown Syntax {#e27d .graf .graf--h3 .graf-after--p name="e27d"}

The following are a few examples of the most common things you are
likely to do with Markdown while building typical documentation.

### Bold and Italic {#3805 .graf .graf--h3 .graf-after--p name="3805"}

```
 {#2118 .graf .graf--pre .graf-after--h3 name="2118"}
markdown
```


```
 {#dcf8 .graf .graf--pre .graf-after--pre name="dcf8"}
This text **is bold**. 
This text *is italic*.
```


This text is bold.\
This text *is italic*.

### Header Text {#444e .graf .graf--h3 .graf-after--p name="444e"}

```
 {#2c1b .graf .graf--pre .graf-after--h3 name="2c1b"}
markdown
```


```
 {#1b13 .graf .graf--pre .graf-after--pre name="1b13"}
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```


### Header 1 {#7ae2 .graf .graf--h3 .graf-after--pre name="7ae2"}

### Header 2 {#2ef2 .graf .graf--h3 .graf-after--h3 name="2ef2"}

### Header 3 {#c589 .graf .graf--h3 .graf-after--h3 name="c589"}

#### Header 4 {#5c8b .graf .graf--h4 .graf-after--h3 name="5c8b"}

Header 5Header 6

### Line Continuation {#56dc .graf .graf--h3 .graf-after--p name="56dc"}

By default Markdown adds paragraphs at double line breaks. Single line
breaks by themselves are simply wrapped together into a single line. If
you want to have soft returns that break a single line, add two spaces
at the end of the line.

```
 {#5c49 .graf .graf--pre .graf-after--p name="5c49"}
markdown
```


```
 {#54d6 .graf .graf--pre .graf-after--pre name="54d6"}
This line has a paragraph break at the end (empty line after).
```


```
 {#0550 .graf .graf--pre .graf-after--pre name="0550"}
Theses two lines should display as a single
line because there's no double space at the end.
```


```
 {#1948 .graf .graf--pre .graf-after--pre name="1948"}
The following line has a soft break at the end (two spaces at end)  
This line should be following on the very next line.
```


This line has a paragraph break at the end (empty line after).

Theses two lines should display as a single line because there's no
double space at the end.

The following line has a soft break at the end (two spaces at end)\
This line should be following on the very next line.

### Links {#793e .graf .graf--h3 .graf-after--p name="793e"}

```
 {#8c38 .graf .graf--pre .graf-after--h3 name="8c38"}
markdown
```


```
 {#388a .graf .graf--pre .graf-after--pre name="388a"}
[Help Builder Web Site](http://helpbuilder.west-wind.com/)
```


[Help Builder Web
Site](http://helpbuilder.west-wind.com/) 

If you need additional image tags like targets or title attributes you
can also embed HTML directly:

```
 {#0799 .graf .graf--pre .graf-after--p name="0799"}
markdown
```


```
 {#5aa8 .graf .graf--pre .graf-after--pre name="5aa8"}
Go the Help Builder sitest Wind site: <a href="http://west-wind.com/" target="_blank">Help Builder Site</a>.
```


### Images {#5a30 .graf .graf--h3 .graf-after--pre name="5a30"}

```
 {#958c .graf .graf--pre .graf-after--h3 name="958c"}
markdown
```


```
 {#0fb7 .graf .graf--pre .graf-after--pre name="0fb7"}
![Help Builder Web Site](https://helpbuilder.west-wind.com/images/HelpBuilder_600.png)
```


![](https://cdn-images-1.medium.com/max/800/0*ibU0D-Zr0qDT5h3z.png) 

### Block Quotes {#085b .graf .graf--h3 .graf-after--figure name="085b"}

Block quotes are callouts that are great for adding notes or warnings
into documentation.

```
 {#08e0 .graf .graf--pre .graf-after--p name="08e0"}
markdown
```


```
 {#a33c .graf .graf--pre .graf-after--pre name="a33c"}
> ###  Headers break on their own
> Note that headers don't need line continuation characters 
as they are block elements and automatically break. Only text
lines require the double spaces for single line breaks.
```


> *Headers break on their own*

> *Note that headers don't need line continuation characters as they are
> block elements and automatically break. Only text lines require the
> double spaces for single line breaks.*

### Fontawesome Icons {#1fab .graf .graf--h3 .graf-after--blockquote name="1fab"}

Help Builder includes a custom syntax for
[FontAwesome](http://fortawesome.github.io/Font-Awesome/icons/)  icons in its templates. You can embed a
`@ icon-`{.markup--code .markup--p-code} followed by a font-awesome icon
name to automatically embed that icon without full HTML syntax.

```
 {#db78 .graf .graf--pre .graf-after--p name="db78"}
markdown
```


```
 {#8415 .graf .graf--pre .graf-after--pre name="8415"}
Gear:  Configuration
```


Configuration

### HTML Markup {#e7b4 .graf .graf--h3 .graf-after--p name="e7b4"}

You can also embed plain HTML markup into the page if you like. For
example, if you want full control over fontawesome icons you can use
this:

```
 {#6fd9 .graf .graf--pre .graf-after--p name="6fd9"}
markdown
```


```
 {#ac01 .graf .graf--pre .graf-after--pre name="ac01"}
This text can be **embedded** into Markdown:  
<i class="fa fa-refresh fa-spin fa-lg"></i> Refresh Page
```


This text can be embedded into Markdown:\
 Refresh Page

### Unordered Lists {#dc79 .graf .graf--h3 .graf-after--p name="dc79"}

```
 {#160c .graf .graf--pre .graf-after--h3 name="160c"}
markdown
```


```
 {#95f5 .graf .graf--pre .graf-after--pre name="95f5"}
* Item 1
* Item 2
* Item 3
This text is part of the third item. Use two spaces at end of the the list item to break the line.
```


```
 {#20ae .graf .graf--pre .graf-after--pre name="20ae"}
A double line break, breaks out of the list.
```


-   [Item 1]{#7904}
-   [Item 2]{#1cf1}
-   [Item 3\
    This text is part of the third item. Use two spaces at end of the
    the list item to break the line.]{#ded6}

A double line break, breaks out of the list.

### Ordered Lists {#1eae .graf .graf--h3 .graf-after--p name="1eae"}

```
 {#fe99 .graf .graf--pre .graf-after--h3 name="fe99"}
markdown
```


```
 {#8948 .graf .graf--pre .graf-after--pre name="8948"}
1. **Item 1**  
Item 1 is really something
2. **Item 2**  
Item two is really something else
```


```
 {#a0da .graf .graf--pre .graf-after--pre name="a0da"}
If you want lines to break using soft returns use two spaces at the end of a line.
```


1.  [Item 1 Item 1 is really something]{#01d6}
2.  [Item 2\
    Item two is really something else]{#51ea}

If you want to lines to break using soft returns use to spaces at the
end of a line.

### Inline Code {#8b74 .graf .graf--h3 .graf-after--p name="8b74"}

If you want to embed code in the middle of a paragraph of text to
highlight a coding syntax or class/member name you can use inline code
syntax:

```
 {#4a3f .graf .graf--pre .graf-after--p name="4a3f"}
markdown
```


```
 {#8855 .graf .graf--pre .graf-after--pre name="8855"}
Structured statements like `for x =1 to 10` loop structures 
can be codified using single back ticks.
```


Structured statements like `for x =1 to 10`  loop structures can be codified using single back
ticks.

### Code Blocks with Syntax Highlighting {#4bcf .graf .graf--h3 .graf-after--p name="4bcf"}

Markdown supports code blocks syntax in a variety of ways:

```
 {#3fc3 .graf .graf--pre .graf-after--p name="3fc3"}
markdown
```


```
 {#edc3 .graf .graf--pre .graf-after--pre name="edc3"}
The following code demonstrates:
```


```
 {#17b2 .graf .graf--pre .graf-after--pre name="17b2"}
    // This is code by way of four leading spaces
    // or a leading tab
```


```
 {#5277 .graf .graf--pre .graf-after--pre name="5277"}
More text here
```


The following code demonstrates:

```
 {#5ae1 .graf .graf--pre .graf-after--p name="5ae1"}
pgsql
```


```
 {#6ca4 .graf .graf--pre .graf-after--pre name="6ca4"}
// This is code by way of four leading spaces
// or a leading tab
```


More text here

### Code Blocks {#0002 .graf .graf--h3 .graf-after--p name="0002"}

You can also use triple back ticks plus an optional coding language to
support for syntax highlighting (space injected before last \` to avoid
markdown parsing):

```
 {#caf9 .graf .graf--pre .graf-after--p name="caf9"}
markdown
```


```
 {#df76 .graf .graf--pre .graf-after--pre name="df76"}
`` `csharp
// this code will be syntax highlighted
for(var i=0; i++; i < 10)
{
    Console.WriteLine(i);
}
`` `
```


```
 {#b5ed .graf .graf--pre .graf-after--pre name="b5ed"}
csharp
```


```
 {#574f .graf .graf--pre .graf-after--pre name="574f"}
// this code will be syntax highlighted
for(var i=0; i++; i < 10)
{
    Console.WriteLine(i);
}
```


Many languages are supported: html, xml, javascript, css, csharp,
foxpro, vbnet, sql, python, ruby, php and many more. Use the Code drop
down list to get a list of available languages.

You can also leave out the language to get no syntax coloring but the
code box:

```
 {#0021 .graf .graf--pre .graf-after--p name="0021"}
markdown
```


```
 {#a4a4 .graf .graf--pre .graf-after--pre name="a4a4"}
`` `dos
robocopy c:\temp\test d:\temp\test
`` `
```


```
 {#7b70 .graf .graf--pre .graf-after--pre name="7b70"}
dos
```


```
 {#c768 .graf .graf--pre .graf-after--pre name="c768"}
robocopy c:\temp\test d:\temp\test
```


To create a formatted block but without formatting use the
`txt`{.markup--code .markup--p-code} format:

```
 {#00e7 .graf .graf--pre .graf-after--p name="00e7"}
markdown
```


```
 {#81fd .graf .graf--pre .graf-after--pre name="81fd"}
`` `txt
This is some text that will not be syntax highlighted
but shows up in a code box.
`` `
```


which gives you:

```
 {#4fad .graf .graf--pre .graf-after--p name="4fad"}
text
```


```
 {#aa90 .graf .graf--pre .graf-after--pre name="aa90"}
This is some text that will not be syntax highlighted
but shows up in a code box.
```


#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#2f9a .graf .graf--h4 .graf-after--pre name="2f9a"}
 
[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz) 

[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz){.js-mixtapeImage 


Or Checkout my personal Resource Site:

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/){.js-mixtapeImage 






By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 8, 2021](https://medium.com/p/3497ce56de3).


