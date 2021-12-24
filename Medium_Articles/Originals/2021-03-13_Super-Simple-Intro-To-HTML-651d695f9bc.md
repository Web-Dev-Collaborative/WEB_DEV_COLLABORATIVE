Super Simple Intro To HTML {#super-simple-intro-to-html .p-name}
==========================


What is HTML, CSS & JS and why do we need all three?


 
{.section .section .section--body .section--first name="0c06"}
 

------------------------------------------------------------------------


  
### Super Simple Intro To HTML {#917a .graf .graf--h3 .graf--leading .graf--title name="917a"}

#### What is HTML, CSS & JS and why do we need all three? {#e447 .graf .graf--h4 .graf-after--h3 .graf--subtitle name="e447"}

![](https://cdn-images-1.medium.com/max/800/0*KxF-AuqgX7UklUa4.png) 

HTML stands for "Hypertext Markup Language". Basically, HTML is the
structure for the website, words, bullet points, data tables, etc. CSS
stands for "Cascading Style Sheets" which means it's the "Style" it's
how to make your website look professional, and look visually appealing.
JS is how to make your website actually \*\*work\*\*.

For example, if you created something like YouTube and one of the
options you can watch videos, you used HTML for the title, you used CSS
for the color/s, and you have to make it actually work! So when you
click on it it will run the video. This is an example of the three
programming languages working in unison to form an experience you're
already familiar with if you're reading this...

**I mean most likely... unless you printed it because you hate trees.**

--- --- --- --- --- --- --- --- --- --- -

### What are Tags and Attributes? {#fe7a .graf .graf--h3 .graf-after--p name="fe7a"}

Tags and attributes are the basis of HTML.

They work together but perform different functions --- it is worth
investing 2 minutes in **differentiating the two**.

#### What Are HTML Tags? {#78a3 .graf .graf--h4 .graf-after--p name="78a3"}

[Tags](https://html.com/tags/)  are
used to **mark up the start of an HTML element** and they are usually
enclosed in angle brackets. An example of a tag is: `<h1>` .

Most tags must be opened `<h1>`  and
closed `</h1>`  in order to function.

#### What are HTML Attributes? {#fea6 .graf .graf--h4 .graf-after--p name="fea6"}

[Attributes](https://html.com/attributes/)  contain **additional pieces of information**.
Attributes take the form of an opening tag and additional info is
**placed inside**.

An example of an attribute is:

`<img src="mydog.jpg" alt="A photo of my                 dog.">` 

In this instance, the image source (src) and the alt text (alt) are
attributes of the `<img>`  tag.

#### Golden Rules To Remember {#09ed .graf .graf--h4 .graf-after--p name="09ed"}

1.  [The vast majori y of tags must be **opened** (`<tag>`{.markup--code
    .markup--li-code}) and **closed** (`</tag>`{.markup--code
    .markup--li-code}) with the element information such as a title or
    text resting between the tags.]{#e12a}
2.  [When using multiple tags, the tags must be **closed in the order in
    which they were opened**. For example:]{#c99f}
3.  [`<strong><em>This is really                   important!</em></strong>`{.markup--code
    .markup--li-code}]{#9eb5}

Let's have a look at how CodePen works, firstly, you need to go to their
website. After that, you must create an account. After you do that, You
will see something like this


{.section-inner .sectionLayout--outsetColumn}


 
### How to get started {#046b .graf .graf--h3 .graf-after--figure name="046b"}

 ! There is Emmet support
built into VSCode, so you won't need to install any extensions. If
you're working in Atom you'll need to install the Emmet plugin, which
can be [found here](https://atom.io/packages/emmet) .

### Basic Syntax {#4d12 .graf .graf--h3 .graf-after--p name="4d12"}

***HTML Boilerplate***

If you've been working in VSCode, you've probably seen Emmet syntax
highlighting when working in HTML documents. In my opinion, the most
convenient Emmet shortcut is ***html:5***. This will create an HTML
boilerplate, and fill out metadata tags in the head of your document.

```
 {#6c6e .graf .graf--pre .graf-after--p name="6c6e"}
html:5
```


![](https://cdn-images-1.medium.com/max/800/0*oDrxfgtO2WE9_Z6d.png) 

Emmet Abbreviation for different HTML boilerplates.

**When you see the auto complete as pictured above you can hit tab to
auto fill the boilerplate html document.**

That one small shortcut autogenerates all this metadata and head and
body tags:

![](https://cdn-images-1.medium.com/max/800/0*LgiaI-W7QB4mtifR.png) 

#### Here's some slightly more advanced boilerplate for you to use as a starting point in your projects. {#ba38 .graf .graf--h4 .graf-after--figure name="ba38"}

### HTML Language {#a819 .graf .graf--h3 .graf-after--figure name="a819"}

**Chapter 1: Formatting text**

**Tags in HTML:** Tags are one of the most important parts in an HTML
document. (We will get to what HTML document is after we know what tags
are). HTML uses some predefined tags which tells the browser about
content display property, that is how to display a particular given
content. For Example, to create a paragraph, one must use the paragraph
tags(\<p\> \</p\>) and to insert an image one must use the img
tags(\<img /\>).

There are generally two types of tags in HTML:

1.  [**Paired tags:** These tags come in pairs. That is they have both
    opening (\< \>) and closing(\</ \>) tags.]{#9de4}
2.  [**Singular tags:** These tags do not required to be closed]{#4b61}

> i.e.

```
 {#a58d .graf .graf--pre .graf-after--blockquote name="a58d"}
<hr> 
<p> The tag above me is a horizontal line that doesn't need a closing tag </p>
```


HTML tags have two main types: **block-level** and **inline tags**.

1.  [Block-level elements take up the full available space and always
    start a new line in the document. Headings and paragraphs are a
    great example of block tags.]{#bd59}
2.  [Inline elements only take up as much space as they need and don't
    start a new line on the page. They usually serve to format the inner
    contents of block-level elements. Links and emphasized strings are
    good examples of inline tags.]{#2479}

### Block-Level Tags {#3bf1 .graf .graf--h3 .graf-after--li name="3bf1"}

The three block level tags every HTML document needs to contain are
**\<html\>**, **\<head\>**, and **\<body\>**.

1.  [The **\<html\>\</html\>** tag is the highest level element that
    encloses every HTML page.]{#bd5d}
2.  [The **\<head\>\</head\>** tag holds meta information such as the
    page's title and charset.]{#c015}
3.  [Finally, the **\<body\>\</body\>** tag encloses all the content
    that appears on the page.]{#5ca8}

-   [Paragraphs are enclosed by ***\<p\>\</p\>***, while blockquotes use
    the ***\<blockquote\>\</blockquote\>*** tag.]{#7864}
-   [Divisions are bigger content sections that typically contain
    several paragraphs, images, sometimes blockquotes, and other smaller
    elements. We can mark them up using the ***\<div\>\</div\>*** tag. A
    div element can contain another div tag inside it as well.]{#82ad}
-   [You may also use ***\<ol\>\</ol\>*** tags for ordered lists and
    ***\<ul\>\</ul\>*** for unordered ones. Individual list items must
    be enclosed by the ***\<li\>\</li\>*** tag. For example, this is how
    a basic unordered list looks like in HTML:]{#39c6}

1.  [**\<ul\>**]{#e470}
2.  [**\<li\>**List item 1**\</li\>**]{#b8c5}
3.  [**\<li\>**List item 2**\</li\>**]{#3c1d}
4.  [**\<li\>**List item 3**\</li\>**]{#97b4}
5.  [**\</ul\>**]{#b59a}

### **Structure of an HTML Document** {#eb2c .graf .graf--h3 .graf-after--li name="eb2c"}

An HTML Document is mainly divided into two parts:

-   [**HEAD**: This contains the information about the HTML document.
    For Example, Title of the page, version of HTML, Meta-Data
    etc.]{#0424}

HTML TAG Specifies an html document. The HTML element (or HTML root
element) represents the root of an HTML document. All other elements
must be descendants of this element. Since the element is the first in a
document, it is called the root element.

Although this tag can be implied, or not required, with HTML, it is
required to be opened and closed in XHTML.

-   [Divisions are bigger content sections that typically contain
    several paragraphs, images, sometimes blockquotes, and other smaller
    elements. We can mark them up using the ***\<div\>\</div\>*** tag. A
    div element can contain another div tag inside it as well.]{#83fe}
-   [You may also use ***\<ol\>\</ol\>*** tags for ordered lists and
    ***\<ul\>\</ul\>*** for unordered ones. Individual list items must
    be enclosed by the ***\<li\>\</li\>*** tag. For example, this is how
    a basic unordered list looks like in HTML:]{#9d53}

1.  [**\<ul\>**]{#4097}
2.  [**\<li\>**List item 1**\</li\>**]{#0103}
3.  [**\<li\>**List item 2**\</li\>**]{#1de2}
4.  [**\<li\>**List item 3**\</li\>**]{#dad0}
5.  [**\</ul\>**]{#592f}

### Inline Tags {#e81f .graf .graf--h3 .graf-after--li name="e81f"}

Many inline tags are used to format text. For example, a
**\<strong\>\</strong\>** tag would render an element in **bold**,
whereas *\<em\>\</em\>* tags would show it in *italics*.

Hyperlinks are also inline elements that require ***\<a\>\</a\>*** tags
and **href** attributes to indicate the link's destination:

1.  [**\<a** **href=**"https://example.com/\"**\>**Click
    me!**\</a\>**]{#f67d}

Images are inline elements too. You can add one using ***\<img\>***
without any closing tag. But you will also need to use the ***src***
attribute to specify the image path, for example:

1.  [**\<img** **src=**"/images/example.jpg" **alt=**"Example
    image"**\>**]{#3924}

#### **BODY**: This contains everything you want to display on the Web Page. {#9ad5 .graf .graf--h4 .graf-after--li name="9ad5"}

```
 {#6ce4 .graf .graf--pre .graf-after--h4 name="6ce4"} 
<body>
```


```
 {#b58e .graf .graf--pre .graf-after--pre name="b58e"}
<! — Everything the user sees on the webpage goes here! — ps… this is a comment →
```


```
 {#574f .graf .graf--pre .graf-after--pre name="574f"}
</body>
```


Let us now have a look on the basic structure of HTML. That is the code
which is must for every webpage to have:

***\<!DOCTYPE html\>***

#### Here is some boilerplate html you can use as a starting point:!!Every Webpage must contain this code.!! {#f09a .graf .graf--h4 .graf-after--p .graf--trailing name="f09a"}

 


 ="8081"}
 

------------------------------------------------------------------------


  
 


 
 

------------------------------------------------------------------------


  
 piece of HTML code:

**\<!DOCTYPE html\>:** This tag is used to tells the HTML version. This
currently tells that the version is HTML 5.

 lement and used to wrap all
> the code.

> **\<head\>:** Head tag contains metadata, title, page CSS etc. All the
> HTML elements that can be used inside the \<head\> element are:

> **\<body\>:** Body tag is used to enclosed all the data which a web
> page has from texts to links. All of the content that you see rendered
> in the browser is contained within this element.

### Bold Text: {#947e .graf .graf--h3 .graf-after--blockquote name="947e"}

\<b\> **this is bold** \</b\>

\<strong\> ⇐ this is for strong, emergency emotions.

\_\_\_\_\_\_\_\_\_\_\_

**HEADING/S:**

*6 types from largest(h1) to smallest (h6)*

\<h1\> \<h2\> \<h3\> \<h4\> \<h5\> \<h6\>

\_\_\_\_\_\_\_\_\_\_\_

**ITALICS:** There are two ways to use it, the first one is the \<i\>
tag and the second one is the \<em\> tag. They both italicize the
text[🤷](https://emojipedia.org/person-shrugging/) 

\<i\> *this is fancy text that's too good to for us*\</i\>

\_\_\_\_\_\_\_\_\_\_\_

**PARAGRAPHS:** In order to make Paragraphs, just add \<p\>.

\<p\> Hi there my name is Jason. \</p\>

\_\_\_\_\_\_\_\_\_\_\_

**TITLES: not the same thing as a heading (which renders on the html
page) but instead the title element represents the title of the page as
shown in the tab of the browser.**

\<head\>

As such \<title\>This is the title\</title\> it is always found between
\<head\> tags and not in the body of the page where all the content that
gets rendered on the page is contained.

![](https://cdn-images-1.medium.com/max/800/0*CSqPk3mD0fR-oOAb) 

### Here's a handy Cheat Sheet: {#6582 .graf .graf--h3 .graf-after--figure name="6582"}

![](https://cdn-images-1 medium.com/max/800/0*c9Vyer_N97InJsUB.png) 

Below I am going to Include a gist that contains html code that uses
pretty much every tag I could think of off the top of my head...

If it's not included here I promise you it's seldom used by most
webpages.

Below that I will embed an image of the webpage that it renders too....

that super small text at the bottom is actually one giant button:


{.section-inner .sectionLayout--fullWidth}
![](https://cdn-images-1.medium.com/max/2560/1*gdM-6smOEc2ChCI_8_Ql_g.png) 


 
#### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content: {#c590 .graf .graf--h4 .graf-after--figure name="c590"}

{#1c2f .graf .graf--mixtapeEmbed .graf-after--h4 name="1c2f"} 
[**bgoonz's gists**\
*There are tons of learning material on the Web The Front-End Checklist
is an exhaustive list of all elements you
 .com/bgoonz "https://gist.github.com/bgoonz") [](https://gist.github.com/bgoonz) 


{#3585 .graf .graf--mixtapeEmbed .graf-after--mixtapeEmbed name="3585"}
[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz)  

Or Checkout my personal Resource Site:

(Under construction... may be broken at any time)

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/)  





By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 13, 2021](https://medium.com/p/651d695f9bc).


