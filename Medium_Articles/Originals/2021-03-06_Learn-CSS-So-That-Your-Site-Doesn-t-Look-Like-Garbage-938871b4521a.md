Learn CSS So That Your Site Doesn't Look Like Garbage {#learn-css-so-that-your-site-doesnt-look-like-garbage .p-name}
=====================================================


CSS Selectors


 
{.section .section .section--body .section--first name="e9df"}
 

------------------------------------------------------------------------


  
### Learn CSS So That Your Site Doesn't Look Like Garbage {#2a25 .graf .graf--h3 .graf--leading .graf--title name="2a25"}

### CSS Selectors {#142a .graf .graf--h3 .graf-after--h3 name="142a"}

-   [`CSS                     Selector`{.markup--code
    .markup--li-code} : Applies styles to a specific DOM element(s),
    there are various types:]{#62c3}
-   [`Type                     Selectors`{.markup--code
    .markup--li-code} : Matches by node name.]{#d60d}
-   [`Class                     Selectors`{.markup--code
    .markup--li-code} : Matches by class name.]{#9826}
-   [`ID                     Selectors`{.markup--code
    .markup--li-code} : Matches by ID name.]{#10a7}
-   [`Universal                     Selectors`{.markup--code
    .markup--li-code} : Selects all HTML elements on a page.]{#64c0}
-   [`Attribute                     Selectors`{.markup--code
    .markup--li-code} : Matches elements based on the prescence or value
    of a given attribute. (i.e. a\[title\] will match all a elements
    with a title attribute)]{#9c6b}

```
 {#62fc .graf .graf--pre .graf-after--li name="62fc"}
/* Type selector */
div {
  background-color: #000000;
}/* Class selector */
.active {
  color: #ffffff;
}/* ID selector */
#list-1 {
  border: 1px solid gray;
}/* Universal selector */
* {
  padding: 10px;
}/* Attribute selector */
a[title] {
  font-size: 2em;
}
```


**Class Selectors**

-   [Used to select all elements of a certain class denoted with
    a `.[class name]`{.markup--code .markup--li-code}]{#fddf}
-   [You can assign multiple classes to a DOM element by separating them
    with a space.]{#72af}

**Compound Class Selectors**

-   [To get around accidentally selecting elements with multiple classes
    beyond what we want to grab we can chain dots.]{#befd}
-   [TO use a compound class selector just append the classes together
    when referencing them in the CSS.]{#e2c8}

```
 {#1e80 .graf .graf--pre .graf-after--li name="1e80"}
<div class="box yellow"></div>
<div class="box orange"></div>
<div class="circle orange"></div>
```


-   [i.e. .box.yellow will select only the first element.]{#7dd3}
-   [KEEP IN MIND that if you do include a space it will make the
    selector into a *descendant selector*.]{#8904}

```
 {#cca2 .graf .graf--pre .graf-after--li name="cca2"}
h1#heading,
h2.subheading {
  font-style: italic;
}
```


-   [When we want to target all `h1`{.markup--code .markup--li-code}
    tags with the id of `heading`{.markup--code
    .markup--li-code}.]{#a8bc}

**CSS Combinators**

-   [CSS Combinators are used to combine other selectors into more
    complex or targeted selectors --- they are very powerful!]{#c196}
-   [Be careful not to use too many of them as they will make your CSS
    far too complex.]{#71a6}
-   [`Descendant                     Selectors`{.markup--code
    .markup--li-code}]{#6032}
-   [Separated by a space.]{#6f41}
-   [Selects all descendants of a parent container.]{#3829}
-   [`Direct Child                     Selectors`{.markup--code
    .markup--li-code}]{#e90c}
-   [Indicated with a `>`{.markup--code .markup--li-code}.]{#52b5}
-   [Different from descendants because it only affects the direct
    children of an element.]{#ea8e}
-   [`.menu > .is-active { background-color: #ffe0b2; }`{.markup--code
    .markup--li-code}]{#486f}
-   [`<body> <div class="menu"> <div                   class="is-active">Belka</div> <div> <div                   class="is-active">Strelka</div> </div> </div> </body> <div                   class="is-active"> Laika </div> </body>`{.markup--code
    .markup--li-code}]{#96f9}
-   [Belka would be the only element selected.]{#59ca}
-   [`Adjacent Sibling                     Selectors`{.markup--code
    .markup--li-code}]{#0266}
-   [Uses the `+`{.markup--code .markup--li-code} symbol.]{#a648}
-   [Used for elements that directly follow one another and who both
    have the same parent.]{#9d79}
-   [`h1 + h2 { font-style: italic; } <h1>Big header</h1>                   <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one                   is NOT styled because there is no H1 right before it</h2>`{.markup--code
    .markup--li-code}]{#4865}

**Pseudo-Classes**

-   [`Pseudo-Class`{.markup--code .markup--li-code} : Specifies a
    special state of the seleted element(s) and does not refer to any
    elements or attributes contained in the DOM.]{#b638}
-   [Format is a `Selector:Pseudo-Class Name`{.markup--code
    .markup--li-code} or `A:B`{.markup--code .markup--li-code}]{#0360}
-   [`a:hover { font-family: "Roboto Condensed", sans-serif;                   color: #4fc3f7; text-decoration: none; border-bottom: 2px solid #4fc3f7; }`{.markup--code
    .markup--li-code}]{#91ee}
-   [Some common pseudo-classes that are frequently used are:]{#27ac}
-   [`active`{.markup--code .markup--li-code} : 'push down', when ele
    are activated.]{#9b2b}
-   [`checked`{.markup--code .markup--li-code} : applies to things like
    radio buttons or checkbox inputs.]{#5b2f}
-   [`disabled`{.markup--code .markup--li-code} : any disabled
    element.]{#58da}
-   [`first-child`{.markup--code .markup--li-code} : first element in a
    group of children/siblings.]{#d3bd}
-   [`focus`{.markup--code .markup--li-code} : elements that have
    current focus.]{#40fc}
-   [`hover`{.markup--code .markup--li-code} : elements that have cursor
    hovering over it.]{#ed43}
-   [`invalid`{.markup--code .markup--li-code} : any form elements in an
    invalid state from client-side form validation.]{#6fa2}
-   [`last-child`{.markup--code .markup--li-code} : last element in a
    group of children/siblings.]{#7811}
-   [`not(selector)`{.markup--code .markup--li-code} : elements that do
    not match the provided selector.]{#1bdf}
-   [`required`{.markup--code .markup--li-code} : form elements that are
    required.]{#be5c}
-   [`valid`{.markup--code .markup--li-code} : form elements in a valid
    state.]{#43ed}
-   [`visited`{.markup--code .markup--li-code} : anchor tags of whih the
    user has already been to the URL that the href points to.]{#6460}

`Pseudo-Selectors`{.markup--code .markup--p-code}

-   [Used to create pseudo-elements as children of the elements to which
    the property applies.]{#89e7}
-   [`::after`{.markup--code .markup--li-code}]{#0bef}
-   [`::before`{.markup--code .markup--li-code}]{#52f9}

```
 {#b01a .graf .graf--pre .graf-after--li name="b01a"}
<style>
  p::before {
    background-color: lightblue;
    border-right: 4px solid violet;
    content: ":-) ";
    margin-right: 4px;
    padding-left: 4px;
  }
</style>
<p>This is the first paragraph</p>
<p>This is the second paragraph</p>
<p>This is the third paragraph</p>
```


-   [Will add some blue smiley faces before the p tag elements.]{#a843}

**CSS Rules**

-   [`CSS                     Rule`{.markup--code .markup--li-code} :
    Collection of single or compound selectors, a curly brace, zero or
    more properties]{#919a}
-   [`CSS Rule                     Specificity`{.markup--code
    .markup--li-code} : Sometimes CSS rules will contain multiple
    elements and may have overlapping properties rules for those same
    elements - there is an algorithm in CSS that calculates which rule
    takes precedence.]{#555f}
-   [`The Four Number                     Calculation`{.markup--code
    .markup--li-code} : listed in increasing order of
    importance.]{#a1db}

Who has the most IDs? If no one, continue.

Who has the most classes? If no one, continue.

Who has the most tags? If no one, continue.

Last Read in the browser wins.

![](https://cdn-images-1.medium.com/max/800/0*Ub47AaMXuT1m8_T-) 

![](https://cdn-images-1.medium.com/max/800/0*t0oXzsLPxpMwNbKo.png) 

![](https://cdn-images-1.medium.com/max/800/0*2xr0vyHwf6UN905l) 

![](https://cdn-images-1.medium.com/max/800/0*oq83hQ5qvtT6gDd9.png) 

```
 {#8b16 .graf .graf--pre .graf-after--figure name="8b16"}
<style>
  .box {
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }
  .orange {
    background-color: orange;
  }
  .yellow {
    background-color: yellow;
    border: 1px solid purple;
  }
</style>
<div class="box yellow"></div>
<div class="box orange"></div>
```


-   [Coming back to our example where all the CSS Rules have tied, the
    last step 4 wins out so our element will have a
    `purple border`{.markup--code .markup--li-code}.]{#1939}




 ="ea25"}
 

------------------------------------------------------------------------


  
### CSS: Type, Properties, and Imports {#4ad6 .graf .graf--h3 .graf--leading name="4ad6"}
 
**Typography**

-   [`font-family`{.markup--code .markup--li-code} : change the
    font.]{#d6fc}

![](https://cdn-images-1.medium.com/max/800/0*ssVcT1Bd9Edfo6KF) 

![](https://cdn-images-1.medium.com/max/800/0*WmqUyKiumM8RCJQo.png) 

-   [Remember that not all computers have the same fonts on
    them.]{#daba}
-   [You can import web fonts via an api by using]{#0aa8}
-   [`@import                   url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');`{.markup--code
    .markup--li-code} and pasting it st the top of your CSS
    file.]{#0c5d}
-   [And then reference it in your font-family.]{#d8ff}
-   [`font-size`{.markup--code .markup--li-code} : Changes the size of
    your font.]{#ee9f}
-   [Keep in mind the two kind of units CSS uses:]{#782e}
-   [`Absolute`{.markup--code .markup--li-code} : `Pixels`{.markup--code
    .markup--li-code}, Points, Inches, Centimeters.]{#c4f7}
-   [`Relative`{.markup--code .markup--li-code} : Em, Rem.]{#2884}
-   [Em: Calulating the size relative to the previous div (bubbles
    down)]{#f9b5}
-   [Rem: Calulates relative to the parent element always.]{#5a5d}
-   [`font-style`{.markup--code .markup--li-code} : Used to set a font
    to italics.]{#79b0}
-   [`font-weight`{.markup--code .markup--li-code} : Used to make a font
    bold.]{#f464}
-   [`text-align`{.markup--code .markup--li-code} : Used to align your
    text to the left, center, or right.]{#3d56}
-   [`text-decoration`{.markup--code .markup--li-code} : Use to put
    lines above, through, or under text. Lines can be solid, dashed, or
    wavy!]{#4cbc}
-   [`text-transform`{.markup--code .markup--li-code} : Used to set text
    to all lowercase, uppercase, or capitalize all words.]{#1c96}

**Background-Images**

-   [You can use the background-image property to set a background image
    for an element.]{#13eb}




 ="0f6e"}
 

------------------------------------------------------------------------


  
### CSS: Colors, Borders, and Shadows {#57e3 .graf .graf--h3 .graf--leading name="57e3"}

 

-   [You can set colors in CSS in three popular ways: by name, by
    hexadecimal RGB value, and by their decimal RGB value.]{#6bed}
-   [rgba() is used to make an rbg value more transparent, the
    `a`{.markup--code .markup--li-code} is used to specify the
    `alpha channel`{.markup--code .markup--li-code}.]{#38fb}
-   [**Color** : Property used to change the color of text.]{#cb05}
-   [**Background-Color** : Property to change the backgrounf color of
    an element.]{#6f05}

**Borders**

-   [Borders take three values: The width of the border, the style (i.e.
    solid, dotted, dashed), color of the border.]{#d922}

**Shadows**

-   [There are two kinds of shadows in CSS:
    `box                     shadows`{.markup--code .markup--li-code}
    and `text shadows`{.markup--code .markup--li-code}.]{#bccb}
-   [Box refers to HTML elements.]{#7fd2}
-   [Text refers to text.]{#f3a7}
-   [Shadows take values such as, the horizontal & vertical offsets of
    the shadow, the blur radius of the shadow, the spread radius, and of
    course the colors.]{#2a53}




 ="b86c"}
 

------------------------------------------------------------------------


  
### The Box Model {#2fcd .graf .graf--h3 .graf--leading name="2fcd"}

**Box Model** : A concept that basically boils down that every DOM
 

Imagine a gift, inside is the gift, wrapped in foam all around
(padding), and the giftbox outside of it (border) and then a wrapping
paper on the giftbox (margin).- For items that are using
`block`{.markup--code .markup--p-code} as it's display, the browser will
follow these rules to layout the element: - The box fills 100% of the
available container space. - Every new box takes on a new line/row. -
Width and Height properties are respected. - Padding, Margin, and Border
will push other elements away from the box. - Certain elements have
`block`{.markup--code .markup--p-code} as their default display, such
as: divs, headers, and paragraphs.- For items that are using
`inline`{.markup--code .markup--p-code} as it's display, the browser
will follow these rules to layout the element: - Each box appears in a
single line until it fills up the space. - Width and height are **not**
respected. - Padding, Margin, and Border are applied but they **do not**
push other elements away from the box. - Certain elements have
`inline`{.markup--code .markup--p-code} as their default display, such
as: span tags, anchors, and images.

**Standard Box Model vs Border-Box**- As per the standard Box Model, the
width and height pertains to the content of the box and excludes any
additional padding, borders, and margins.

This bothered many programmers so they created the **border box** to
include the calculation of the entire box's height and width.

**Inline-Block**- Inline-block uses the best features of both
`block`{.markup--code .markup--p-code} and `inline` . - Elements still get laid out left to right. - Layout
takes into account specified width and height.

**Padding**- Padding applies padding to every side of a box. It is
shorthand for four padding properties in this order:
`padding-top`{.markup--code .markup--p-code},
`padding-right`{.markup--code .markup--p-code},
`padding-bottom`{.markup--code .markup--p-code},
`padding-left`{.markup--code .markup--p-code} (clockwise!)

**Border**- Border applies a border on all sides of an element. It takes
three values in this order: `border-width` , `border-style`{.markup--code .markup--p-code},
`border-color`{.markup--code .markup--p-code}. - All three properties
can be broken down in the four sides clockwise: top, right, bottom,
left.

**Margin**- Margin sets margins on every side of an element. It takes
four values in this order: `margin-top`{.markup--code .markup--p-code},
`margin-right`{.markup--code .markup--p-code},
`margin-bottom`{.markup--code .markup--p-code},
`margin-left`{.markup--code .markup--p-code}. - You can use
`margin: 0 auto`{.markup--code .markup--p-code} to center an element.

### Positioning {#debc .graf .graf--h3 .graf-after--p name="debc"}

-   [The `position`{.markup--code .markup--li-code} property allows us
    to set the position of elements on a page and is an integral part of
    creatnig a Web page layout.]{#d380}
-   [It accepts five values: `static`{.markup--code .markup--li-code},
    `relative`{.markup--code .markup--li-code}, `absolute`{.markup--code
    .markup--li-code}, `fixed`{.markup--code .markup--li-code},
    `sticky`{.markup--code .markup--li-code}.]{#1bd6}
-   [Every property (minus `static`{.markup--code .markup--li-code}) is
    used with: `top`{.markup--code .markup--li-code},
    `right`{.markup--code .markup--li-code}, `bottom`{.markup--code
    .markup--li-code}, and `left`{.markup--code .markup--li-code} to
    position an element on a page.]{#0b53}

**Static Positioning**

-   [The default position value of page elements.]{#7aa9}
-   [Most likely will not use static that much.]{#700a}

**Relative Positioning**

-   [Remains in it's original position in the page flow.]{#adc3}
-   [It is positioned *RELATIVE* to the it's *ORIGINAL PLACE* on the
    page flow.]{#9533}
-   [Creates a **stacking context** : overlapping elements whose order
    can be set by the z-index property.]{#8c0b}
 
```
 {#4bc9 .graf .graf--pre .graf-after--li name="4bc9"}
#pink-box {
  background-color: #ff69b4;
  bottom: 0;
  left: -20px;
  position: relative;
  right: 0;
  top: 0;
}
```


![](https://cdn-images-1.medium.com/max/800/0*mMCUEQ94L4_zxwNc) 

![](https://cdn-images-1.medium.com/max/800/0*TgjpfTmdczESRAfU.png) 

**Absolute Positioning**

-   [Absolute elements are removed from the normal page flow and other
    elements around it act like it's not there. (how we can easily
    achieve some layering)]{#d597}
-   [Here are some examples to illustration absolute
    positioning:]{#eb5b}

```
 {#6ca4 .graf .graf--pre .graf-after--li name="6ca4"}
.container {
  background-color: #2b2d2f;
  position: relative;
}#pink-box {
  position: absolute;
  top: 60px;
}
```


![](https://cdn-images-1.medium.com/max/800/0*Mu1E5D10RQaBpzms) 

![](https://cdn-images-1.medium.com/max/800/0*6jvV-NnX5HS5PuVT.png) 

-   [Note that the container ele has a relative positioning --- this is
    so that any changes made to the absolute positioned children will be
    positioned from it's top-left corner.]{#adb4}
-   [Note that because we removed the pink from the normal page flow,
    the container has now shifted the blue box to where the pink box
    should have been --- which is why it is now layered beneath the
    pink.]{#be4f}

```
 {#ccfe .graf .graf--pre .graf-after--li name="ccfe"}
.container {
  background-color: #2b2d2f;
  position: relative;
}#pink-box {
  position: absolute;
  top: 60px;
}#blue-box {
  position: absolute;
}
```


![](https://cdn-images-1.medium.com/max/800/0*phWx-191VVQ5pRF9) 

![](https://cdn-images-1.medium.com/max/800/0*o_T8meZgQSu7kxfs.png) 

-   [As you can see here, since we have also taken the blue box out of
    the normal page flow by declaring it as absoutely positioned it now
    overlaps over the pink box.]{#9e42}

```
 {#2ec3 .graf .graf--pre .graf-after--li name="2ec3"}
.container {
  background-color: #2b2d2f;
  position: relative;
}#pink-box {
  background-color: #ff69b4;
  bottom: 60px;
  position: absolute;
}
```


![](https://cdn-images-1.medium.com/max/800/0*HJbtARqC1qmeWTHS) 

![](https://cdn-images-1.medium.com/max/800/0*rRNttTlXfnhqERYU.png) 

-   [Example where the absolute element has it's bottom property
    modified.]{#528a}

```
 {#1aa7 .graf .graf--pre .graf-after--li name="1aa7"}
.container {
  background-color: #2b2d2f;
}#pink-box {
  background-color: #ff69b4;
  bottom: 60px;
  position: absolute;
}
```


![](https://cdn-images-1.medium.com/max/800/0*e7H6ImFUmcPGMaoa) 

![](https://cdn-images-1.medium.com/max/800/0*Al6ILt84EC0bhjnK.png) 

-   [If we removed the container's relative position. Our absolute unit
    would look for the nearest parent which would be the document
    itself.]{#f676}

**Fixed Positioning**

-   [Another positioning that removes it's element from the page flow,
    and automatically positions it's parent as the HTML doc
    itself.]{#fe31}
-   [Fixed also uses top, right, bottom, and left.]{#2388}
-   [Useful for things like nav bars or other features we want to keep
    visible as the user scrolls.]{#3903}

**Sticky Positioning**

-   [Remains in it's original position in the page flow, and it is
    positioned relative to it's closest block-level ancestor and any
    *scrolling* ancestors.]{#8ae2}
-   [Behaves like a relatively positioned element until the point at
    which you would normally scroll past it's viewport --- then it
    sticks!]{#abe8}
-   [It is positioned with top, right, bottom, and left.]{#7ac0}
-   [A good example are headers in a scrollable list.]{#9080}

![](https://cdn-images-1.medium.com/max/800/0*BRVlqobKK0IZtnXq) 

![](https://cdn-images-1.medium.com/max/800/0*jQQJYWVoQY2eNANS.gif) 




 ="e89f"}
 

------------------------------------------------------------------------


  
 
-   [Flexbox is   **CSS module** that provides a convenient way for us
    to display items inside a flexible container so that the layout is
    responsive.]{#46aa}
-   [Float was used back in the day to display position of elements in a
    container.]{#ebb3}
 the need to *clear* the
    float.]{#2a8e}
-   [To 'clear' a float we need to set up a ghost div to properly
    align --- this is already sounds so inefficient.]{#ba98}

**Using Flexbox**

-   [Flexbox automatically resizes a container element to fit the
    viewport size without needing to use breakpoints.]{#e23b}

![](https://cdn-images-1.medium.com/max/800/0*_SXOQpq3yrywWCcL) 

![](https://cdn-images-1.medium.com/max/800/0*IBJIWQ7Z_23eERWn.png) 

-   [Flexbox layout applies styles to the parent element, and it's
    children.]{#b505}

```
 {#7d82 .graf .graf--pre .graf-after--li name="7d82"}
.container {
  display: flex; /*sets display to use flex*/
  flex-wrap: wrap; /*bc flex tries to fit everything into one line, use wrap to have the elements wrap to the next line*/
  flex-direction: row; /*lets us create either rows or columns*/
}
```


-   [`flex-flow`{.markup--code .markup--li-code} can be used to combine
    wrap and direction.]{#4898}
-   [`justify-content`{.markup--code .markup--li-code} used to define
    the alignment of flex items along the main axis.]{#acdb}
-   [`align-items`{.markup--code .markup--li-code} used to define the
    alignment on the Y-axis.]{#68d6}
-   [`align-content`{.markup--code .markup--li-code} redistributes extra
    space on the cross axis.]{#f0d8}
-   [By default, flex items will appear in the order they are added to
    the DOM, but we can use the `order`{.markup--code .markup--li-code}
    property to change that.]{#531c}
-   [Some other properties we can use on flex items are:]{#39b0}
-   [`flex-grow`{.markup--code .markup--li-code} : dictates amount of
    avail. space the item should take up.]{#ec38}
-   [`flex-shrink`{.markup--code .markup--li-cod } : defines the ability
    for a flex item to shrink.]{#0916}
-   [`flex-basis`{.markup--code .markup--li-code}   Default size of an
    element before the remaining space is distributed.]{#4dda}
-   [`flex`{.markup--code .markup--li-code} : sho thand for grow, shrink
    and basis.]{#d9f2}
-   [`align-self`{.markup--code .markup--li code} : Overrides default
    alignment in the container.]{#f127}
 



 ="e7e3"}
 

------------------------------------------------------------------------


  
 
-   [CSS Grid is a 2d layout system that let's use create a grid with
    columns and rows purely using Vanilla CSS. (flex is one
    dimensional)]{#cc4f}

**Bootstrap vs CSS Grid**

-   [Bootstrap was a front-end library commonly used to create grid
 r flexibility and
    control.]{#4af2}
-   [Grid applies style to a parent container and it's child
    elements.]{#e404}

```
 {#1c7b .graf .graf--pre .graf-after--li name="1c7b"}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header"
    "main . sidebar"
    "footer footer footer";  grid-column-gap: 20px;
  grid-row-gap: 30px;
  justify-items: stretch;
  align-items: stretch;
  justify-content: stretch;
  align-content: stretch;
}.item-1 {
  grid-area: header;
}
.item-2 {
  grid-area: main;
}
.item-3 {
  grid-area: sidebar;
}
.item-4 {
  grid-area: footer;
}
```


-   [Columns and Rows can be defined with: pixels, percentages, auto,
    named grid lines, using `repeat`{.markup--code .markup--li-code},
    fractions.]{#26c3}
-   [`Grid Template                     Areas`{.markup--code
    .markup--li-code} gives us a handy way to map out and visualize
    areas of the grid layout.]{#a117}
-   [Combine areas with templates to define how much space an area
    should take up.]{#17ae}
-   [`Grid                     Gaps`{.markup--code .markup--li-code} can
    be used to create 'gutters' between grid item.s]{#f90a}
-   [The way we have defined our grid with
    `grid-templates`{.markup--code .markup--li-code} and
    `areas`{.markup--code .markup--li-code} are considered
    **explicit**.]{#d7c0}
-   [We can also `implicitly`{.markup--code .markup--li-code} define
    grids.]{#cef6}

```
 {#83e0 .graf .graf--pre .graf-after--li name="83e0"}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 50px 50px 50px;
  grid-auto-columns: 100px;
  grid-auto-rows: 50px;
}
```


-   [Any grid items that aren't explicity placed are automatically
    placed or *re-flowed*]{#e6d3}

**Spanning Columns & Rows**

-   [We can use the following properties to take up a specified num of
    cols and rows.]{#98c8}
-   [`grid-column-start`{.markup--code .markup--li-code}]{#0208}
-   [`grid-column-end`{.markup--code .markup--li-code}]{#437a}
-   [`grid-row-start`{.markup--code .markup--li-code}]{#7d03}
-   [`grid-row-end`{.markup--code .markup--li-code}]{#0a8e}
-   [All four properties can take any of the following values: the line
    number, span \#, span name, auto.]{#c62b}

```
 {#94d5 .graf .graf--pre .graf-after--li name="94d5"}
.item-1 {
  grid-row-start: row2-start; /* Item starts at row line named "row2-start" */
  grid-row-end: 5; /* Item ends at row line 5 */
  grid-column-start: 1; /* Item starts at column line 1 */
  grid-column-end: three; /* Item ends at column line named "three" */
}.item-2 {
  grid-row-start: 1; /* Item starts at row line 1 */
  grid-row-end: span 2; /* Item spans two rows and ends at row line 3 */
  grid-column-start: 3; /* Item starts at column line 3 */
  grid-column-end: span col5-start; /* Item spans and ends at line named "col5-start" */
}
```


**Grid Areas**

-   [We use the grid areas in conjunction with grid-container property
    to **define sections of the layout**.]{#9dd0}
-   [We can then assign named sections to individual element's css
    rules.]{#5ec2}

**Justify & Align Self**

-   [Justify items and Align Items can be used to align all grid items
    at once.]{#06b0}
-   [**Justify Self** is used to align self on the row.]{#53f5}
-   [It can take four values: start, end, center, stretch.]{#f6b1}
-   [**Align Self** is used to align self on the column.]{#72bb}
-   [It can take four values: start, end, center, stretch.]{#d5d4}




 ="e0cf"}
 

------------------------------------------------------------------------


  
 
**Overflow**

`css .btn { background-color: #00bfff; color: #ffffff; border-radius:                 10px; padding: 1.5rem; }` 

`.bt --active:hover { cursor: pointer; transform:                 translateY(-0.25rem);` 

`/*                 Moves our button up/down on the Y axis */ }` 

The Pseudo Class Selector `hover`{.markup--code .markup--p-code}
 cted element.

**Content Overflow**- You can apply an `overflow`  content property to an element if it's inner contents
are spilling over.

There are three members in the overflow
family: --- `overflow-x`{.markup--code .markup--p-code} : Apply
horizontally. - `overflow-y`{.markup--code .markup--p-code} : Apply
vertically. - `overflow`{.markup--code .markup--p-code} : Apply both
directions.

### Transitions {#23b5 .graf .graf--h3 .graf-after--p name="23b5"}
 
-   [Transitions provide a way to control animation speed w en changing
    CSS properties.]{#b5a7} 
-   [**Implicit Transitions** : Animations that involve transitioning
    between two states.]{#2e1b}

**Defining Transitions**

-   [`transition-property`{.markup--code .markup--li-code} : specifies
    the name of the CSS prope ty to apply the transition.]{#bbd6}
-   [`transition-duration`{.markup--code .markup--li-code} : during of
    the transition.]{#6340}
-   [`transition-delay`{.markup--code .markup--li-code} : time before
    the transition should start.]{#7463}
 
**Examples** :
 
```
 {#14ce .graf .graf--pre .graf-after--p name="14ce"}
#delay { 
  font-size: 14px;
  transition-property: font-size;
  transition duration: 4s;
  transition-delay: 2s;
}#delay:hover {
  font-size: 36px;
}
```


![](https://cdn-images-1.medium.com/max/800/0*Z6AbWnbmbFfu-tSM) 

![](https://cdn-images-1.medium.com/max/800/0*_6nSuCOR34-6ET7n.gif) 

-   [After a delay of two seconds, a four second transition begins where
    the font size goes from 36px to 14px.]{#e6c9}

```
 {#70fd .graf .graf--pre .graf-after--li name="70fd"}
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```


![](https://cdn-images-1.medium.com/max/800/0*PH5_YmVDFVGqWGjO) 

![](https://cdn-images-1.medium.com/max/800/0*Ya7xiy0AqJaJ9RPq.gif) 

-   [When the mouse hovers over a box, it spins due to the rotate
    transform. Width and height change and also the bg color.]{#c336}




 

------------------------------------------------------------------------


  
### BEM Guidelines {#4d37 .graf .graf--h3 .graf--leading name="4d37"}

-   [BEM was created as a guideline to solve the issue of loose
    standards around CSS naming conventions.]{#6474}
     `element`{.markup--code .markup--li-code}, `modifier`{.markup--code
    .markup--li-code}.]{#6d0c}
-   [**Block**]{#3eb9}
-   [A standalone entity that is meaningful on it's own.]{#f6b4}
-   [Can be nested and interact with one another.]{#7e86}
-   [Holistic entities without DOM rep can be blocks.]{#338e}
-   [May consist latin letters, digits, and dashes.]{#f2f0}
-   [Any DOM node can be a block if it accepts a class name.]{#3bfb}
-   [**Element**]{#5c9b}
-   [Part of a block and has no standalone meaning.]{#1b95}
-   [Any element that is semantically tied to a block.]{#b5cf}
-   [May consist latin letters, digits, and dashes.]{#10e2}
 t's block name.]{#9b79}
-   [Any DOM node within a block can be an element.]{#e282}
-   [Element classes should be used independently.]{#a0dc}
-   [**Modifier**]{#26f1}
-   [A flag on blocks or elements. Use them to change appearance,
    behavior or state.]{#6642}
-   [Extra class name to add onto blocks or elements.]{#6cca}
-   [Add mods only to the elements they modify.]{#745f}
-   [Modifier names may consist of Latin letters, digits, dashes and
    underscores.]{#6416}
-   [Written with two dashes.]{#f940}

**BEM Example**

```
 {#7580 .graf .graf--pre .graf-after--p name="7580"}
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>/* block selector */
.form {
}/* block modifier selector */
.form--theme-xmas {
}/* block modifier selector */
.form--simple {
}/* element selector */
.form__input {
}/* element selector */
.form__submit {
}/* element modifier selector */
.form__submit--disabled {
}
```


#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#0d66 .graf .graf--h4 .graf-after--figure name="0d66"}

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
[March 6, 2021](https://medium.com/p/938871b4521a).


