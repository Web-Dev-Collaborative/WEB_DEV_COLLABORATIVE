VsCode Extension Readme Compilation {#vscode-extension-readme-compilation .p-name}
===================================


Markdown PDF


 
{.section .section .section--body .section--first name="4b23"}
 

------------------------------------------------------------------------


  
### VsCode Extension Readme Compilation {#6be1 .graf .graf--h3 .graf--leading .graf--title name="6be1"}

### Markdown PDF {#c397 .graf .graf--h3 .graf-after--h3 name="c397"}

This extension converts Markdown files to pdf, html, png or jpeg files.

[Japanese
README](https://github.com/yzane/vscode-markdown-pdf/blob/master/README.ja.md) 

### Table of Contents {#86d1 .graf .graf--h3 .graf-after--p name="86d1"}

-   [[Features](https://trusting-aryabhata-e5438d.netlify.app/#features){.markup--anchor
    .markup--li-anchor}]{#90b5}
-   [[Install](https://trusting-aryabhata-e5438d.netlify.app/#install){.markup--anchor
    .markup--li-anchor}]{#d7f3}
-   [[Usage](https://trusting-aryabhata-e5438d.netlify.app/#usage){.markup--anchor
    .markup--li-anchor}]{#1e6e}
-   [[Extension
    Settings](https://trusting-aryabhata-e5438d.netlify.app/#extension-settings){.markup--anchor
    .markup--li-anchor}]{#0c76}
-   [[Options](https://trusting-aryabhata-e5438d.netlify.app/#options){.markup--anchor
    .markup--li-anchor}]{#844c}
-   [[FAQ](https://trusting-aryabhata-e5438d.netlify.app/#faq){.markup--anchor
    .markup--li-anchor}]{#aefd}
-   [[Known
    Issues](https://trusting-aryabhata-e5438d.netlify.app/#known-issues){.markup--anchor
    .markup--li-anchor}]{#2a66}
-   [[Release
    Notes](https://trusting-aryabhata-e5438d.netlify.app/#release-notes){.markup--anchor
    .markup--li-anchor}]{#15a9}
-   [[License](https://trusting-aryabhata-e5438d.netlify.app/#license){.markup--anchor
    .markup--li-anchor}]{#ef6e}
-   [[Special
    thanks](https://trusting-aryabhata-e5438d.netlify.app/#special-thanks){.markup--anchor
    .markup--li-anchor}]{#33c9}

### Features {#ad4a .graf .graf--h3 .graf-after--li name="ad4a"}

Supports the following features \* [Syntax
highlighting](https://highlightjs.org/static/demo/)  \*
[emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)  \*
[markdown-it-checkbox](https://github.com/mcecot/markdown-it-checkbox)  \*
[markdown-it-container](https://github.com/markdown-it/markdown-it-container)  \*
[markdown-it-include](https://github.com/camelaissani/markdown-it-include)  \* [PlantUML](https://plantuml.com/)  \*
[markdown-it-plantuml](https://github.com/gmunguia/markdown-it-plantuml)  \*
[mermaid](https://mermaid-js.github.io/mermaid/) 

Sample files \*
[pdf](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.pdf)  \*
[html](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.html)  \*
[png](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.png)  \*
[jpeg](https://github.com/yzane/vscode-markdown-pdf/blob/master/sample/README.jpeg) 

### markdown-it-container {#7af0 .graf .graf--h3 .graf-after--p name="7af0"}

INPUT

```
 {#6771 .graf .graf--pre .graf-after--p name="6771"}
warning
*here be dragons*

```


OUTPUT

```
 {#71a5 .graf .graf--pre .graf-after--p name="71a5"}
<div class="warning">
<p><em>here be dragons</em></p>
</div>
```


### markdown-it-plantuml {#cf8a .graf .graf--h3 .graf-after--pre name="cf8a"}

INPUT

```
 {#74cc .graf .graf--pre .graf-after--p name="74cc"}
@startuml
Bob -[#red]> Alice : hello
Alice -[#0000FF]->Bob : ok
@enduml
```


OUTPUT

![](https://cdn-images-1.medium.com/max/800/0*p64cJfrdlmoa_qSg.png) 

### markdown-it-include {#bc3c .graf .graf--h3 .graf-after--figure name="bc3c"}

Include markdown fragment
files: `:[alternate-text](https://github.com/yzane/vscode-markdown-pdf/blob/master/relative-path-to-file.md)` .

```
 {#dd2e .graf .graf--pre .graf-after--p name="dd2e"}
├── [plugins]
│  └── README.md
├── CHANGELOG.md
└── README.md
```


INPUT

```
 {#65b6 .graf .graf--pre .graf-after--p name="65b6"}
README Content
```


```
 {#2c9a .graf .graf--pre .graf-after--pre name="2c9a"}
:[Plugins](https://github.com/yzane/vscode-markdown-pdf/blob/master/./plugins/README.md)
```


```
 {#f5cc .graf .graf--pre .graf-after--pre name="f5cc"}
:[Changelog](https://github.com/yzane/vscode-markdown-pdf/blob/master/CHANGELOG.md)
```


OUTPUT

```
 {#0dd7 .graf .graf--pre .graf-after--p name="0dd7"}
Content of README.md
```


```
 {#db0d .graf .graf--pre .graf-after--pre name="db0d"}
Content of plugins/README.md
```


```
 {#0014 .graf .graf--pre .graf-after--pre name="0014"}
Content of CHANGELOG.md
```


### mermaid {#7101 .graf .graf--h3 .graf-after--pre name="7101"}

INPUT

```
` {#8dd9 .graf .graf--pre .graf-after--p name="8dd9"}
```
mermaid
stateDiagram
    [*] --> First
    state First {
        [*] --> second
        second --> [*]
    }
```

```
`

OUTPUT

![](https://cdn-images-1.medium.com/max/800/0*zJ3IBfpthTH778lH.png) 

### Install {#316f .graf .graf--h3 .graf-after--figure name="316f"}

Chromium download starts automatically when Markdown PDF is installed
and Markdown file is first opened with Visual Studio Code.

However, it is time-consuming depending on the environment because of
its large size (\~ 170Mb Mac, \~ 282Mb Linux, \~ 280Mb Win).

During downloading, the message `Installing Chromium`  is displayed in the status bar.

If you are behind a proxy, set the `http.proxy`  option to settings.json and restart Visual Studio Code.

If the download is not successful or you want to avoid downloading every
time you upgrade Markdown PDF, please specify the installed
[Chrome](https://www.google.co.jp/chrome/)  or 'Chromium' with
[markdown-pdf.executablePath](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfexecutablepath)  option.

### Usage {#3bc4 .graf .graf--h3 .graf-after--p name="3bc4"}

### Command Palette {#9a47 .graf .graf--h3 .graf-after--h3 name="9a47"}

1.  [Open the Markdown file]{#8794}
2.  [Press `F1`{.markup--code .markup--li-code} or
    `Ctrl+Shift+P`{.markup--code .markup--li-code}]{#c89f}
3.  [Type `export`{.markup--code .markup--li-code} and select
    below]{#7b3b}

-   [`markdown-pdf: Export (settings.json)`{.markup--code
    .markup--li-code}]{#4ae1}
-   [`markdown-pdf: Export (pdf)`{.markup--code
    .markup--li-code}]{#ab58}
-   [`markdown-pdf: Export (html)`{.markup--code
    .markup--li-code}]{#98f6}
-   [`markdown-pdf: Export (png)`{.markup--code
    .markup--li-code}]{#df2d}
-   [`markdown-pdf: Export (jpeg)`{.markup--code
    .markup--li-code}]{#b6e7}
-   [`markdown-pdf: Export (all: pdf, html, png, jpeg)`{.markup--code
    .markup--li-code}]{#b337}

![](https://cdn-images-1.medium.com/max/800/0*KWm2zIER68qBJWls.gif) 

### Menu {#ca89 .graf .graf--h3 .graf-after--figure name="ca89"}

1.  [Open the Markdown file]{#86ac}
2.  [Right click and select below]{#4f5e}

-   [`markdown-pdf: Export (settings.json)`{.markup--code
    .markup--li-code}]{#687f}
-   [`markdown-pdf: Export (pdf)`{.markup--code
    .markup--li-code}]{#aed1}
-   [`markdown-pdf: Export (html)`{.markup--code
    .markup--li-code}]{#4c25}
-   [`markdown-pdf: Export (png)`{.markup--code
    .markup--li-code}]{#fc37}
-   [`markdown-pdf: Export (jpeg)`{.markup--code
    .markup--li-code}]{#7f4f}
-   [`markdown-pdf: Export (all: pdf, html, png, jpeg)`{.markup--code
    .markup--li-code}]{#c6a1}

![](https://cdn-images-1.medium.com/max/800/0*A_o-vh7A_1zrARH5.gif) 

### Auto convert {#8ac4 .graf .graf--h3 .graf-after--figure name="8ac4"}

1.  [Add `"markdown-pdf.convertOnSave": true`{.markup--code
    .markup--li-code} option to **settings.json**]{#9be5}
2.  [Restart Visual Studio Code]{#51ac}
3.  [Open the Markdown file]{#4d84}
4.  [Auto convert on save]{#8f8a}

### Extension Settings {#df2c .graf .graf--h3 .graf-after--li name="df2c"}

[Visual Studio Code User and Workspace
Settings](https://code.visualstudio.com/docs/customization/userandworkspace) 

1.  [Select **File \> Preferences \> UserSettings or Workspace
    Settings**]{#d15f}
2.  [Find markdown-pdf settings in the **Default Settings**]{#6e37}
3.  [Copy `markdown-pdf.*`{.markup--code .markup--li-code}
    settings]{#96e3}
4.  [Paste to the **settings.json**, and change the value]{#afc7}

![](https://cdn-images-1.medium.com/max/800/0*ESq2GocyLJGAWDFP.gif) 

### Options {#2aef .graf .graf--h3 .graf-after--figure name="2aef"}

### List {#d3d5 .graf .graf--h3 .graf-after--h3 name="d3d5"}

CategoryOption name[Configuration
scope](https://code.visualstudio.com/api/references/contribution-points#Configuration-property-schema) [Save
options](https://trusting-aryabhata-e5438d.netlify.app/#save-options) [markdown-pdf.type](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdftype) [markdown-pdf.convertOnSave](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfconvertonsave) [markdown-pdf.convertOnSaveExclude](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfconvertonsaveexclude) [markdown-pdf.outputDirectory](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfoutputdirectory) [markdown-pdf.outputDirectoryRelativePathFile](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfoutputdirectoryrelativepathfile) [Styles
options](https://trusting-aryabhata-e5438d.netlify.app/#styles-options) [markdown-pdf.styles](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfstyles) [markdown-pdf.stylesRelativePathFile](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfstylesrelativepathfile) [markdown-pdf.includeDefaultStyles](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfincludedefaultstyles) [Syntax highlight
options](https://trusting-aryabhata-e5438d.netlify.app/#syntax-highlight-options) [markdown-pdf.highlight](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfhighlight) [markdown-pdf.highlightStyle](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfhighlightstyle) [Markdown
options](https://trusting-aryabhata-e5438d.netlify.app/#markdown-options) [markdown-pdf.breaks](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfbreaks) [Emoji
options](https://trusting-aryabhata-e5438d.netlify.app/#emoji-options) [markdown-pdf.emoji](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfemoji) [Configuration
options](https://trusting-aryabhata-e5438d.netlify.app/#configuration-options) [markdown-pdf.executablePath](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfexecutablepath) [Common
Options](https://trusting-aryabhata-e5438d.netlify.app/#common-options) [markdown-pdf.scale](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfscale) [PDF
options](https://trusting-aryabhata-e5438d.netlify.app/#pdf-options) [markdown-pdf.displayHeaderFooter](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfdisplayheaderfooter) resource[markdown-pdf.headerTemplate](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfheadertemplate) resource[markdown-pdf.footerTemplate](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdffootertemplate) resource[markdown-pdf.printBackground](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfprintbackground) resource[markdown-pdf.orientation](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdforientation) resource[markdown-pdf.pageRanges](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfpageranges) resource[markdown-pdf.format](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfformat) resource[markdown-pdf.width](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfwidth) resource[markdown-pdf.height](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfheight) resource[markdown-pdf.margin.top](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmargintop) resource[markdown-pdf.margin.bottom](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarginbottom) resource[markdown-pdf.margin.right](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarginright) resource[markdown-pdf.margin.left](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarginleft) resource[PNG JPEG
options](https://trusting-aryabhata-e5438d.netlify.app/#png-jpeg-options) [markdown-pdf.quality](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfquality) [markdown-pdf.clip.x](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipx) [markdown-pdf.clip.y](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipy) [markdown-pdf.clip.width](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipwidth) [markdown-pdf.clip.height](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfclipheight) [markdown-pdf.omitBackground](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfomitbackground) [PlantUML
options](https://trusting-aryabhata-e5438d.netlify.app/#plantuml-options) [markdown-pdf.plantumlOpenMarker](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfplantumlopenmarker) [markdown-pdf.plantumlCloseMarker](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfplantumlclosemarker) [markdown-pdf.plantumlServer](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfplantumlserver) [markdown-it-include
options](https://trusting-aryabhata-e5438d.netlify.app/#markdown-it-include-options) [markdown-pdf.markdown-it-include.enable](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmarkdown-it-includeenable) [mermaid
options](https://trusting-aryabhata-e5438d.netlify.app/#mermaid-options) [markdown-pdf.mermaidServer](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfmermaidserver) 

### Save options {#7168 .graf .graf--h3 .graf-after--p name="7168"}

#### `markdown-pdf.type`{.markup--code .markup--h4-code} {#6b60 .graf .graf--h4 .graf-after--h3 name="6b60"}

-   [Output format: pdf, html, png, jpeg]{#3e6b}
-   [Multiple output formats support]{#9210}
-   [Default: pdf]{#8a44}

```
 {#b396 .graf .graf--pre .graf-after--li name="b396"}
"markdown-pdf.type": [
  "pdf",
  "html",
  "png",
  "jpeg"
],
```


#### `markdown-pdf.convertOnSave`{.markup--code .markup--h4-code} {#b993 .graf .graf--h4 .graf-after--pre name="b993"}

-   [Enable Auto convert on save]{#e7da}
-   [boolean. Default: false]{#4ecf}
-   [To apply the settings, you need to restart Visual Studio
    Code]{#a752}

#### `markdown-pdf.convertOnSaveExclude`{.markup--code .markup--h4-code} {#55a8 .graf .graf--h4 .graf-after--li name="55a8"}

-   [Excluded file name of convertOnSave option]{#61a8}

```
 {#1856 .graf .graf--pre .graf-after--li name="1856"}
"markdown-pdf.convertOnSaveExclude": [
  "^work",
  "work.md$",
  "work|test",
  "[0-9][0-9][0-9][0-9]-work",
  "work\\test"  // All '\' need to be written as '\\' (Windows)
],
```


#### `markdown-pdf.outputDirectory`{.markup--code .markup--h4-code} {#da4e .graf .graf--h4 .graf-after--pre name="da4e"}

-   [Output Directory]{#0d6c}
-   [All `\`{.markup--code .markup--li-code} need to be written as
    `\\`{.markup--code .markup--li-code} (Windows)]{#425d}

```
 {#9293 .graf .graf--pre .graf-after--li name="9293"}
"markdown-pdf.outputDirectory": "C:\\work\\output",
```


-   [Relative path]{#f029}
-   [If you open the `Markdown file`{.markup--code .markup--li-code}, it
    will be interpreted as a relative path from the file]{#5302}
-   [If you open a `folder`{.markup--code .markup--li-code}, it will be
    interpreted as a relative path from the root folder]{#c65d}
-   [If you open the `workspace`{.markup--code .markup--li-code}, it
    will be interpreted as a relative path from the each root
    folder]{#7848}
-   [See [Multi-root
    Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces){.markup--anchor
    .markup--li-anchor}]{#079a}

```
 {#6c83 .graf .graf--pre .graf-after--li name="6c83"}
"markdown-pdf.outputDirectory": "output",
```


-   [Relative path (home directory)]{#95a7}
-   [If path starts with `~`{.markup--code .markup--li-code}, it will be
    interpreted as a relative path from the home directory]{#1f42}

```
 {#6440 .graf .graf--pre .graf-after--li name="6440"}
"markdown-pdf.outputDirectory": "~/output",
```


-   [If you set a directory with a `relative path`{.markup--code
    .markup--li-code}, it will be created if the directory does not
    exist]{#bb9d}
-   [If you set a directory with an `absolute path`{.markup--code
    .markup--li-code}, an error occurs if the directory does not
    exist]{#1dff}

#### `markdown-pdf.outputDirectoryRelativePathFile`{.markup--code .markup--h4-code} {#26aa .graf .graf--h4 .graf-after--li name="26aa"}

-   [If `markdown-pdf.outputDirectoryRelativePathFile`{.markup--code
    .markup--li-code} option is set to `true`{.markup--code
    .markup--li-code}, the relative path set with
    [markdown-pdf.outputDirectory](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfoutputDirectory){.markup--anchor
    .markup--li-anchor} is interpreted as relative from the file]{#e32e}
-   [It can be used to avoid relative paths from folders and
    workspaces]{#ff1e}
-   [boolean. Default: false]{#d30c}

### Styles options {#904d .graf .graf--h3 .graf-after--li name="904d"}

#### `markdown-pdf.styles`{.markup--code .markup--h4-code} {#3279 .graf .graf--h4 .graf-after--h3 name="3279"}

-   [A list of local paths to the stylesheets to use from the
    markdown-pdf]{#558c}
-   [If the file does not exist, it will be skipped]{#d552}
-   [All `\`{.markup--code .markup--li-code} need to be written as
    `\\`{.markup--code .markup--li-code} (Windows)]{#0be7}

```
 {#030f .graf .graf--pre .graf-after--li name="030f"}
"markdown-pdf.styles": [
  "C:\\Users\\<USERNAME>\\Documents\\markdown-pdf.css",
  "/home/<USERNAME>/settings/markdown-pdf.css",
],
```


-   [Relative path]{#a041}
-   [If you open the `Markdown file`{.markup--code .markup--li-code}, it
    will be interpreted as a relative path from the file]{#309f}
-   [If you open a `folder`{.markup--code .markup--li-code}, it will be
    interpreted as a relative path from the root folder]{#ed68}
-   [If you open the `workspace`{.markup--code .markup--li-code}, it
    will be interpreted as a relative path from the each root
    folder]{#e282}
-   [See [Multi-root
    Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces){.markup--anchor
    .markup--li-anchor}]{#d3d7}

```
 {#b91a .graf .graf--pre .graf-after--li name="b91a"}
"markdown-pdf.styles": [
  "markdown-pdf.css",
],
```


-   [Relative path (home directory)]{#10b6}
-   [If path starts with `~`{.markup--code .markup--li-code}, it will be
    interpreted as a relative path from the home directory]{#6d43}

```
 {#afee .graf .graf--pre .graf-after--li name="afee"}
"markdown-pdf.styles": [
  "~/.config/Code/User/markdown-pdf.css"
],
```


-   [Online CSS (https://xxx/xxx.css) is applied correctly for JPG and
    PNG, but problems occur with PDF
    [\#67](https://github.com/yzane/vscode-markdown-pdf/issues/67){.markup--anchor
    .markup--li-anchor}]{#45de}

```
 {#c999 .graf .graf--pre .graf-after--li name="c999"}
"markdown-pdf.styles": [
  "https://xxx/markdown-pdf.css"
],
```


#### `markdown-pdf.stylesRelativePathFile`{.markup--code .markup--h4-code} {#b3e7 .graf .graf--h4 .graf-after--pre name="b3e7"}

-   [If `markdown-pdf.stylesRelativePathFile`{.markup--code
    .markup--li-code} option is set to `true`{.markup--code
    .markup--li-code}, the relative path set with
    [markdown-pdf.styles](https://trusting-aryabhata-e5438d.netlify.app/#markdown-pdfstyles){.markup--anchor
    .markup--li-anchor} is interpreted as relative from the file]{#04be}
-   [It can be used to avoid relative paths from folders and
    workspaces]{#2389}
-   [boolean. Default: false]{#41b7}

#### `markdown-pdf.includeDefaultStyles`{.markup--code .markup--h4-code} {#6a2e .graf .graf--h4 .graf-after--li name="6a2e"}

-   [Enable the inclusion of default Markdown styles (VSCode,
    markdown-pdf)]{#61e7}
-   [boolean. Default: true]{#7b12}

### Syntax highlight options {#7c1a .graf .graf--h3 .graf-after--li name="7c1a"}

#### `markdown-pdf.highlight`{.markup--code .markup--h4-code} {#aa1c .graf .graf--h4 .graf-after--h3 name="aa1c"}

-   [Enable Syntax highlighting]{#f8d4}
-   [boolean. Default: true]{#ece1}

#### `markdown-pdf.highlightStyle`{.markup--code .markup--h4-code} {#a015 .graf .graf--h4 .graf-after--li name="a015"}

-   [Set the style file name. for example: github.css,
    monokai.css ...]{#2e47}
-   [[file name
    list](https://github.com/isagalaev/highlight.js/tree/master/src/styles){.markup--anchor
    .markup--li anchor}]{#5e74}
-   [demo site : <https://highlightjs.org/static/demo/>]{#746b}

```
 {#aeb1 .graf .graf--pre .graf-after--li name="aeb1"}
"markdown-pdf. ighlightStyle": "github.css",
```


### Markdown options {#423a .graf .graf--h3 .graf-after--pre name="423a"}

#### `markdown-pdf.breaks`{.markup--code .markup--h4-code} {#56ed .graf .graf--h4 .graf-after--h3 name="56ed"}

-   [Enable line breaks]{#4c3f}
-   [boolean. Default: false]{#6ca3}

### Emoji options {#007f .graf .graf--h3 .graf-after--li name="007f"}

#### `markdown-pdf.emoji`{.markup--code .markup--h4-code} {#fb83 .graf .graf--h4 .graf-after--h3 name="fb83"}

-   [Enable emoji. [EMOJI CHEAT
    SHEET](https://www.webpagefx.com/tools/emoji-cheat-sheet/){.markup--anchor
    .markup--li-anchor}]{#3e02}
-   [boolean. Default: true]{#99be}

### Configuration options {#6d10 .graf .graf--h3 .graf-after--li name="6d10"}

#### `markdown-pdf.executablePath`{.markup--code .markup--h4-code} {#7984 .graf .graf--h4 .graf-after--h3 name="7984"}

-   [Path to a Chromium or Chrome executable to run instead of the
    bundled Chromium]{#4b4b}
-   [All `\`{.markup--code .markup--li-code} need to be written as
    `\\`{.markup--code .markup--li-code} (Windows)]{#5bb8}
-   [To apply the settings, you need to restart Visual Studio
    Code]{#3f10}

```
 {#a97f .graf .graf--pre .graf-after--li name="a97f"}
"markdown-pdf.executablePath": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
```


### Common Options {#7f11 .graf .graf--h3 .graf-after--pre name="7f11"}

#### `markdown-pdf.scale`{.markup--code .markup--h4-code} {#8db0 .graf .graf--h4 .graf-after--h3 name="8db0"}

-   [Scale of the page rendering]{#04f1}
-   [number. default: 1]{#c3f1}

```
 {#9e0f .graf .graf--pre .graf-after--li name="9e0f"}
"markdown-pdf.scale": 1
```


### PDF options {#3bf5 .graf .graf--h3 .graf-after--pre name="3bf5"}

-   [pdf only. [puppeteer page.pdf
    options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions){.markup--anchor
    .markup--li-anchor}]{#6871}

#### `markdown-pdf.displayHeaderFooter`{.markup--code .markup--h4-code} {#9da1 .graf .graf--h4 .graf-after--li name="9da1"}

-   [Enable display header and footer]{#cd99}
-   [boolean. Default: true]{#9aac}

#### `markdown-pdf.headerTemplate`{.markup--code .markup--h4-code} {#a8a5 .graf .graf--h4 .graf-after--li name="a8a5"}

#### `markdown-pdf.footerTemplate`{.markup--code .markup--h4-code} {#6f70 .graf .graf--h4 .graf-after--h4 name="6f70"}

-   [HTML template for the print header and footer]{#330c}
-   [`<span class='date'></span>`{.markup--code .markup--li-code} :
    formatted print date]{#cbb0}
-   [`<span class='title'></span>`{.markup--code .markup--li-code} :
    markdown file name]{#8418} 
-   [`<span class='url'></span>`{.markup--code .markup--li-code} :
    markdown full path name]{#c04b} 
-   [`<span class='pageNumber'></span>`{.markup--code
    .markup--li-code} : current page number]{#3529} 
-   [`<span class='totalPages'></span>`{.markup--code
    .markup--li-code} : total pages in the document]{#0296}
 
```
 {#09e6 .graf .graf--pre .graf-after--li name="09e6"}
"markdown-pdf.headerT mplate": "<div style=\"font-size: 9px; margin-left: 1cm;\"> <span class='title'></span></div> <div style=\"font-size: 9px; margin-left: auto; margin-right: 1cm; \"> <span class='date'></span></div>",
```


```
 {#51ee .graf .graf--pre .graf-after--pre name="51ee"}
"markdown-pdf.footerTemplate": "<div style=\"font-size: 9px; margin: 0 auto;\"> <span class='pageNumber'></span> / <span class='totalPages'></span></div>",
```


#### `markdown-pdf.printBackground`{.markup--code .markup--h4-code} {#d3bb .graf .graf--h4 .graf-after--pre name="d3bb"}

-   [Print background graphics]{#1ada}
-   [boolean. Default: true]{#140d}

#### `markdown-pdf.orientation`{.markup--code .markup--h4-code} {#2b32 .graf .graf--h4 .graf-after--li name="2b32"}

-   [Paper orientation]{#f2cd}
-   [portrait or landscape]{#0f1e}
-   [Default: portrait]{#b5eb}

#### `markdown-pdf.pageRanges`{.markup--code .markup--h4-code} {#c1cc .graf .graf--h4 .graf-after--li name="c1cc"}

-   [Paper ranges to print, e.g., '1--5, 8, 11--13']{#2011}
-   [Default: all pages]{#fa63}

```
 {#5f98 .graf .graf--pre .graf-after--li name="5f98"}
"markdown-pdf.pageRanges": "1,4-",
```


#### `markdown-pdf.format`{.markup--code .markup--h4-code} {#2218 .graf .graf--h4 .graf-after--pre name="2218"}

-   [Paper format]{#8737}
-   [Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6]{#8e8a}
-   [Default: A4]{#816d}

```
 {#4c24 .graf .graf--pre .graf-after--li name="4c24"}
"markdown-pdf.format": "A4",
```


#### `markdown-pdf.width`{.markup--code .markup--h4-code} {#2bf9 .graf .graf--h4 .graf-after--pre name="2bf9"}

#### `markdown-pdf.height`{.markup--code .markup--h4-code} {#cf52 .graf .graf--h4 .graf-after--h4 name="cf52"}

-   [Paper width / height, accepts values labeled with units(mm, cm, in,
    px)]{#9470}
-   [If it is set, it overrides the markdown-pdf.format option]{#c6e7}

```
 {#689c .graf .graf--pre .graf-after--li name="689c"}
"markdown-pdf.width": "10cm",
"markdown-pdf.height": "20cm",
```


#### `markdown-pdf.margin.top`{.markup--code .markup--h4-code} {#2ceb .graf .graf--h4 .graf-after--pre name="2ceb"}

#### `markdown-pdf.margin.bottom`{.markup--code .markup--h4-code} {#2b0a .graf .graf--h4 .graf-after--h4 name="2b0a"}

#### `markdown-pdf.margin.right`{.markup--code .markup--h4-code} {#b1cd .graf .graf--h4 .graf-after--h4 name="b1cd"}

#### `markdown-pdf.margin.left`{.markup--code .markup--h4-code} {#dcb4 .graf .graf--h4 .graf-after--h4 name="dcb4"}

-   [Paper margins.units(mm, cm, in, px)]{#6dd4}

```
 {#0554 .graf .graf--pre .graf-after--li name="0554"}
"markdown-pdf.margin.top": "1.5cm",
"markdown-pdf.margin.bottom": "1cm",
"markdown-pdf.margin.right": "1cm",
"markdown-pdf.margin.left": "1cm",
```


### PNG JPEG options {#e6dd .graf .graf--h3 .graf-after--pre name="e6dd"}

-   [png and jpeg only. [puppeteer page.screenshot
    options] https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagescreenshotoptions){.markup--anchor
    .markup--li-anchor}]{#59ad}

#### `markdown-pdf.quality`{.markup--code .markup--h4-code} {#847f .graf .graf--h4 .graf-after--li name="847f"}

-   [jpeg only. The quality of the image, between 0--100. Not applicable
    to png images]{#899c}

```
 {#532b .graf .graf--pre .graf-after--li name="532b"}
"markdown-pdf.quality": 100,
```


#### `markdown-pdf.clip.x`{.markup--code .markup--h4-code} {#ab72 .graf .graf--h4 .graf-after--pre name="ab72"}

#### `markdown-pdf.clip.y`{.markup--code .markup--h4-code} {#d938 .graf .graf--h4 .graf-after--h4 name="d938"}

#### `markdown-pdf.clip.width`{.markup--code .markup--h4-code} {#9e1e .graf .graf--h4 .graf-after--h4 name="9e1e"}

#### `markdown-pdf.clip.height`{.markup--code .markup--h4-code} {#d2a8 .graf .graf--h4 .graf-after--h4 name="d2a8"}

-   [An object which specifies clipping region of the page]{#3609}
-   [number]{#955d}

```
 {#441a .graf .graf--pre .graf-after--li name="441a"}
//  x-coordinate of top-left corner of clip area
"markdown-pdf.clip.x": 0,
```


```
 {#03fa .graf .graf--pre .graf-after--pre name="03fa"}
// y-coordinate of top-left corner of clip area
"markdown-pdf.clip.y": 0,
```


```
 {#b499 .graf .graf--pre .graf-after--pre name="b499"}
// width of clipping area
"markdown-pdf.clip.width": 1000,
```


```
 {#5356 .graf .graf--pre .graf-after--pre name="5356"}
// height of clipping area
"markdown-pdf.clip.height": 1000,
```


#### `markdown-pdf.omitBackground`{.markup--code .markup--h4-code} {#2450 .graf .graf--h4 .graf-after--pre name="2450"}

-   [Hides default white background and allows capturing screenshots
    with transparency]{#9be7}
-   [boolean. Default: false]{#a9a3}

### PlantUML options {#f5ba .graf .graf--h3 .graf-after--li name="f5ba"}

#### `markdown-pdf.plantumlOpenMarker`{.markup--code .markup--h4-code} {#d44b .graf .graf--h4 .graf-after--h3 name="d44b"}

-   [Oppening delimiter used for the plantuml parser.]{#380b}
-   [Default: \@startuml]{#cf53}

#### `markdown-pdf.plantumlCloseMarker`{.markup--code .markup--h4-code} {#6728 .graf .graf--h4 .graf-after--li name="6728"}

-   [Closing delimiter used for the plantuml parser.]{#3ac4}
-   [Default: \@enduml]{#e03b}

#### `markdown-pdf.plantumlServer`{.markup--code .markup--h4-code} {#299a .graf .graf--h4 .graf-after--li name="299a"}

-   [Plantuml server. e.g. <http://localhost:8080>]{#3fdd}
-   [Default: <http://www.plantuml.com/plantuml>]{#210a}
-   [For example, to run Plantuml Server locally
    [\#139](https://github.com/yzane/vscode-markdown-pdf/issues/139){.markup--anchor
    .markup--li-anchor} :]{#ea35}
-   [`docker run -d -p 8080:8080 plantuml/plantuml-server:jetty`{.markup--code
    .markup--li-code}]{#9f54}
-   [[plantuml/plantuml server --- Docker
    Hub](https://hub.docker.com/r/plantuml/plantuml-server/){.markup--anchor
    .markup--li-anchor}]{#1d30}

### markdown-it-include options {#c1de .graf .graf--h3 .graf-after--li name="c1de"}

#### `markdown-pdf.markdown-it-include.enable`{.markup--code .markup--h4-code} {#69cb .graf .graf--h4 .graf-after--h3 name="69cb"}

-   [Enable markdown-it-include.]{#cabd}
-   [boolean. Default: true]{#a97d}

### mermaid options {#93b2 .graf .graf--h3 .graf-after--li name="93b2"}

#### `markdown-pdf.mermaidServer`{.markup--code .markup--h4-code} {#b2d4 .graf .graf--h4 .graf-after--h3 name="b2d4"}

-   [mermaid server]{#4dc4}
-   [Default: <https://unpkg.com/mermaid/dist/mermaid.min.js>]{#7076}

### FAQ {#e6c4 .graf .graf--h3 .graf-after--li name="e6c4"}

### How can I change emoji size ? {#3508 .graf .graf--h3 .graf-after--h3 name="3508"}

1.  [Add the following to your stylesheet which was specified in the
    markdown-pdf.styles]{#4b8c} 

```
 {#56a5 .graf .graf--pre .graf-after--li name="56a5"}
.emoji {
  height: 2em;
}
```


### Auto guess encoding of files {#c31c .graf .graf--h3 .graf-after--pre name="c31c"}

Using `files.autoGuessEncoding`{.markup--code .markup--p-code} option of
the Visual Studio Code is  seful because it automatically guesses the
character code. See
[files.autoGuessEncoding](https://code.visualstudio.com/updates/v1_11#_auto-guess-encoding-of-files) 

```
 {#50c1 .graf .graf--pre .graf-after--p name="50c1"}
"files.autoGuessEncoding": true,
```


### Output directory {#f559 .graf .graf--h3 .graf-after--pre name="f559"}

If you always want to output to the relative path directory from the
Markdown file.

For example, to output to the "output" directory in the same directory
as the Markdown file, set it as follows.

```
 {#ed1c .graf .graf--pre .graf-after--p name="ed1c"}
"markdown-pdf.outputDirectory" : "output",
"markdown-pdf.outputDirectoryRelativePathFile": true,
```


### Page Break {#cfb4 .graf .graf--h3 .graf-after--pre name="cfb4"}

Please use the following to insert a page break.

```
 {#b4c2 .graf .graf--pre .graf-after--p name="b4c2"}
<div class="page"/>
```


### Known Issues {#51cd .graf .graf--h3 .graf-after--pre name="51cd"}

### `markdown-pdf.styles` option {#10d8 .graf .graf--h3 .graf-after--h3 name="10d8"}

-   [Online CSS (https://xxx/xxx.css) is applied correctly for JPG and
    PNG, but problems occur with PDF.
    [\#67](https://github.com/yzane/vscode-markdown-pdf/issues/67){.markup--anchor
    .markup--li-anchor}]{#fa12}

### [Release Notes](https://github.com/yzane/vscode-markdown-pdf/blob/master/CHANGELOG.md){.markup--anchor .markup--h3-anchor} {#ea1e .graf .graf--h3 .graf-after--li name="ea1e"}

### 1.4.4 (2020/03/19) {#2845 .graf .graf--h3 .graf-after--h3 name="2845"}

-   [Change: mermaid javascript reads from URL instead of from local
    file]{#5563}
-   [Add: `markdown-pdf.mermaidServer`{.markup--code .markup--li-code}
    option]{#38ae}
-   [add an option to disable mermaid
    [\#175](https://github.com/yzane/vscode-markdown-pdf/issues/175){.markup--anchor
    .markup--li-anchor}]{#82da}
-   [Add: `markdown-pdf.plantumlServer`{.markup--code .markup--li-code}
    option]{#4d6b}
-   [support configuration of plantUML server
    [\#139](https://github.com/yzane/vscode-markdown-pdf/issues/139){.markup--anchor
    .markup--li-anchor}]{#01fe}
-   [Add: configuration scope]{#4539}
-   [extend setting 'headerTemplate' with scope...
    [\#184](https://github.com/yzane/vscode-markdown-pdf/pull/184){.markup--anchor
    .markup--li-anchor}]{#8de1}
-   [Update:
    [slug](https://github.com/yzane/vscode-markdown-pdf/commit/3f4aeaa724999c46fc37423d4b188fd7ce72ffce){.markup--anchor
    .markup--li-anchor} for markdown-it-named-headers]{#a747}
-   [Update: markdown.css, markdown-pdf.css]{#e106}
-   [Update: dependent packages]{#232c}
-   [Fix: Fix for issue \#186
    [\#187](https://github.com/yzane/vscode-markdown-pdf/pull/187){.markup--anchor
    .markup--li-anchor}]{#a197}
-   [Fix: move the Meiryo font to the end of the font-family
    setting]{#475f}
-   [Meiryo font causing \\ to show as Â¥
    [\#83](https://github.com/yzane/vscode-markdown-pdf/issues/83){.markup--anchor
    .markup--li-anchor}]{#f844}
-   [Backslash false encoded
    [\#124](https://github.com/yzane/vscode-markdown-pdf/issues/124){.markup--anchor
    .markup--li-anchor}]{#132d}
-   [Errors in which í*œê¸&euro;(korean word) is not properly printed
    [\#148](https://github.com/yzane/vscode-markdown-pdf/issues/148){.markup--anchor
    .markup--li-anchor}]{#2aa7}
-   [Fix: Improve the configuration schema of package.json]{#cc46}
-   [Some settings can now be set from the settings editor.]{#761c}

![](https://cdn-images-1.medium.com/max/800/0*XIWcipeujuw-GhyC.gif) 




 ="5b09"}
 

------------------------------------------------------------------------


  
NEXT
 


 ="302c"}
 

------------------------------------------------------------------------


  
### Ruby for Visual Studio Code {#39d1 .graf .graf--h3 .graf--leading name="39d1"}
 This extension provides enhanced Ruby language and debugging support for
Visual Studio Code. 

### Features {#3f46 .graf .graf--h3 .graf-after--p name="3f46"}

-   [Automatic Ruby environment detection with support for rvm, rbenv,
    chruby, and asdf]{#8437}
-   [Lint support via RuboCop, Standard, and Reek]{#df0f}
-   [Format support via RuboCop, Standard, Rufo, Prettier and
    RubyFMT]{#2107}
-   [Semantic code folding support]{#8326}
-   [Semantic highlighting support]{#fcd3}
-   [Basic Intellisense support]{#95e2}

### Installation {#bebc .graf .graf--h3 .graf-after--li name="bebc"}

Search for `ruby`{.markup--code .markup--p-code} in the [VS Code
Extension
Gallery](https://code.visualstudio.com/docs/editor/extension-gallery)  and install it!

### Initial Configuration {#5196 .graf .graf--h3 .graf-after--p name="5196"}

By default, the extension provides sensible defaults for developers to
get a better experience using Ruby in Visual Studio Code. However, these
defaults do not include settings to enable features like formatting or
linting. Given how dynamic Ruby projects can be (are you using rvm,
rbenv, chruby, or asdf? Are your gems globally installed or via bundler?
etc), the extension requires additional configuration for additional
features to be available.

### Using the Language Server {#4445 .graf .graf--h3 .graf-after--p name="4445"}

It is **highly recommended** that you enable the Ruby language server
(via the Use Language  erver setting or
`ruby.useLanguageServer`{.markup--code .markup--p-code} config option).
The server does not default to enabled while it is under development but
it provides a significantly better experience than the legacy extension
functionality. See
[docs/language-server.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/language-server.md)  for more information on the language server.

Legacy functionality will most likely not receive additional
improvements and will be fully removed when the extension hits v1.0

### Example Initial Configuration: {#4578 .graf .graf--h3 .graf-after--p name="4578"}

```
 {#4a0e .graf .graf--pre .graf-after--h3 name="4a0e"}
"ruby.useBundler": true, //run non-lint commands with bundle exec
"ruby.useLanguageServer": true, // use the internal language server (see below)
"ruby.lint": {
  "rubocop": {
    "useBundler": true // enable rubocop via bundler
  },
  "reek": {
    "useBundler": true // enable reek via bundler
  }
},
"ruby.format": "rubocop" // use rubocop for formatting
```


Reviewing the
[linting](https://github.com/rubyide/vscode-ruby/blob/master/docs/linting.md) ,
[formatting](https://github.com/rubyide/vscode-ruby/blob/master/docs/formatting.md) , and [environment
detection](https://github.com/rubyide/vscode-ruby/blob/master/docs/language-server.md)  docs is recommended

For full details on configuration options, please take a look at the
`Ruby`{.markup--code .markup--p-code} section in the VS Code settings
UI. Each option is associated with a name and description.

### Debug Configuration {#4a37 .graf .graf--h3 .graf-after--p name="4a37"}

See
[docs/debugger.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/debugger.md) .

### Legacy Configuration {#6e7a .graf .graf--h3 .graf-after--p name="6e7a"}

[docs/legacy.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/legacy.md)  contains the documentation around the legacy
functionality

### Troubleshooting {#856b .graf .graf--h3 .graf-after--p name="856b"}

See
[docs/troubleshooting.md](https://github.com/rubyide/vscode-ruby/blob/master/docs/troubleshooting.md) 

### Other Notable Extensions {#8553 .graf .graf--h3 .graf-after--p name="8553"}

-   [[Ruby
    Solargraph](https://marketplace.visualstudio.com/items?itemName=castwide.solargraph){.markup--anchor
    .markup--li-anchor} --- Solargraph is a language server that
    provides intellisense, code completion, and inline documentation for
    Ruby.]{#7e23}
-   [[VSCode
    Endwise](https://github.com/kaiwood/vscode-endwise){.markup--anchor
    .markup--li-anchor} --- Wisely add "end" in Ruby]{#3b23}

![](https://cdn-images-1.medium.com/max/800/0*Wc4kcdykCJnhXfzj.png) 

### Comment Divider {#86a4 .graf .graf--h3 .graf-after--figure name="86a4"}

This is [**Visual Studio
Code**](https://github.com/Microsoft/vscode)  extension, which provides commands for generating
comment-wrapped separators from line content.

[**Supports all common
languages**](https://trusting-aryabhata-e5438d.netlify.app/#language-support) **.**

### Install {#9d0c .graf .graf--h3 .graf-after--p name="9d0c"}

<https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider>

### Demo {#459b .graf .graf--h3 .graf-after--p name="459b"}

![](https://cdn-images-1.medium.com/max/800/0*oEigp8g4f3WCdV8g.gif) 

### Commands {#2082 .graf .graf--h3 .graf-after--figure name="2082"}

### Make main header {#bf56 .graf .graf--h3 .graf-after--h3 name="bf56"}

-   [Default Shortcut:]{#9188}
-   [`Shift`{ markup--code .markup--li-code} + `Alt`{.markup--code
    .markup--li-code} + `X`{.markup--code .markup--li-code}]{#1d00}
-   [Default Style:]{#fd41}
-   [`/*                   -------------------------------------------------------------------------- */ /* Example text */ /*                   -------------------------------------------------------------------------- */`{.markup--code
    .markup--li-code}]{#ef3a}

### Make subheader {#bd07 .graf .graf--h3 .graf-after--li name="bd07"}

-   [Default Shortcut:]{#2205}
-   [`Alt`{.markup--code .markup--li-code} + `X`{.markup--code
    .markup--li-code}]{#1c94}
-   [Default Style:]{#8e4d}
-   [`/* ------------------------------ Example text                   ------------------------------ */`{.markup--code
    .markup--li-code}]{#4e8e}

### Insert solid line {#c98a .graf .graf--h3 .graf-after--li name="c98a"}

-   [Default Shortcut:]{#f3bb}
-   [`Alt`{.mark p--code .markup--li-code} + `Y`{.markup--code
    .markup--li-code}]{#3096}
-   [Default Style:]{#22f0}
-   [`/*                   -------------------------------------------------------------------------- */`{.markup--code
    .markup--li-code}]{#da3f}

### Language Support {#a0ca .graf .graf--h3 .graf-after--li name="a0ca"}

Extension uses relevant comment characters for all common languages.

For example, in python files subheader looks like

```
 {#9abf .graf .graf--pre .graf-after--p name="9abf"}
# ------------------------------ python example ------------------------------ #
```


or in html files

```
 {#f1b3 .graf .graf--pre .graf-after--p name="f1b3"}
<!-- ---------------------------- html example ----------------------------- -->
```


**Also, you can easily** [**add
support**](https://trusting-aryabhata-e5438d.netlify.app/#languages-configuration)  **for any missing language or override the default
preset.**

### Default Configuration {#0ca1 .graf .graf--h3 .graf-after--p name="0ca1"}

### Common {#ec2b .graf .graf--h3 .graf-after--h3 name="ec2b"}

```
 {#d337 .graf .graf--pre .graf-after--h3 name="d337"}
// Set line length for all dividers.
  "comment-divider.length": 80,
```


### Main Header {#f5e3 .graf .graf--h3 .graf-after--pre name="f5e3"}

```
 {#0bbd .graf .graf--pre .graf-after--h3 name="0bbd"}
// "Set symbol for main header line filling (only one).
  "comment-divider.mainHeaderFiller": "-",
```


```
 {#4908 .graf .graf--pre .graf-after--pre name="4908"}
  // Set main header vertical style.
  "comment-divider.mainHeaderHeight": "block",
```


```
 {#5b47 .graf .graf--pre .graf-after--pre name="5b47"}
  // Set main header text align.
  "comment-divider.mainHeaderAlign": "center",
```


```
 {#bc46 .graf .graf--pre .graf-after--pre name="bc46"}
  // Set main header text transform style.
  "comment-divider.mainHeaderTransform": "none",
```


### Subheader {#1941 .graf .graf--h3 .graf-after--pre name="1941"}

```
 {#ecf1 .graf .graf--pre .graf-after--h3 name="ecf1"}
// "Set symbol for subheader line filling (only one).
  "comment-divider.subheaderFiller": "-",
```


```
 {#afc8 .graf .graf--pre .graf-after--pre name="afc8"}
  // Set subheader vertical style.
  "comment-divider.subheaderHeight": "line",
```


```
 {#095c .graf .graf--pre .graf-after--pre name="095c"}
  // Set subheader text align.
  "comment-divider.subheaderAlign": "center",
```


```
 {#7edc .graf .graf--pre .graf-after--pre name="7edc"}
  // Set subheader text transform style.
  "comment-divider.subheaderTransform": "none",
```


### Solid Line {#bf0a .graf .graf--h3 .graf-after--pre name="bf0a"}

```
 {#e8a8 .graf .graf--pre .graf-after--h3 name="e8a8"}
// Set symbol for solid line filling.
  "comment-divider.lineFiller": "-",
```


### Languages Configuration {#8408 .graf .graf--h3 .graf-after--pre name="8408"}

If some language is not supported out of the box, or you want to change
default comment characters for an already supported language, it is
possible to do it in the settings.

```
 {#519d .graf .graf--pre .graf-after--p name="519d"}
"comment-divider.languagesMap": {
      "toml": ["#", "#"],
      "scss": ["//"]
}
```


The item name is the language mode name and is associated with an array
of 1 or 2 elements. The first element is the start of the line. The
second, if defined, is the end.

The example above defines the right characters for `toml`  and overrides `scss`{.markup--code .markup--p-code}
defaults. As a result, the subheaders for these languages look like
this:

```
 {#be5b .graf .graf--pre .graf-after--p name="be5b"}
# ------------------------------ toml subheader ------------------------------ #
```


```
 {#0048 .graf .graf--pre .graf-after--pre name="0048"}
// ----------------------------- scss subheader --------------------------------
```


### Issues {#c887 .graf .graf--h3 .graf-after--pre name="c887"}

Request features and report bugs using
[GitHub](https://github.com/stackbreak/comment-divider/issues) .

![](https://cdn-images-1.medium.com/max/800/0*UmMqShaDdas51l_x.gif) 




 ="d521"}
 

------------------------------------------------------------------------


  
NEXT

 

 ="6ae8"}
 

------------------------------------------------------------------------


  
### Auto Import --- ES6, TS, JSX, TSX (VSCode Extension) {#8f7f .graf .graf--h3 .graf--leading name="8f7f"}

 completion for all available imports. Works with JavaScript (ES6) and
TypeScript (TS). Forker from old repo
[vscode-extension-auto-import](https://github.com/martinoppitz/vscode-extension-auto-import) 

![](https://cdn-images-1.medium.com/max/800/0*qLaPCDGUFwrpwNeh.gif) 




 ="5b8f"}
 

------------------------------------------------------------------------


  
### PostgreSQL for Visual Studio Code {#59a3 .graf .graf--h3 .graf--leading name="59a3"}

 developing PostgreSQL with functionalities including:
 
-   [Connect to PostgreSQL instances]{#e4f6}
-   [Manage connection profiles]{#7a5d}
-   [Connect to a different Postgres instance or database in each
    tab]{#983e}
-   [View object DDL with 'Go to Definition' and 'Peek
    Definition']{#a2e4}
-   [Write queries with IntelliSense]{#0173}
-   [Run queries and save results as JSON, csv, or Excel]{#3449}

Install link:
<https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql>

### Quickstart {#3d97 .graf .graf--h3 .graf-after--p name="3d97"}

1.  [Open the Command Palette (Ctrl + Shift + P).]{#fe37}
2.  [Search and select 'PostgreSQL: New Query']{#9fec}
3.  [In the command palette, select 'Create Connection Profile'. Follow
    the prompts to enter your Postgres instance's hostname, database,
    username, and password.]{#7844}

You are now connected to your Postgres database. You can confirm this
via the Status Bar (the ribbon at the bottom of the VS Code window). It
will show your connected hostname, database, and user.

1.  [You can type a query like 'SELECT \* FROM
    pg\_stat\_activity';]{#acaf}
2.  [Right-click, select 'Execute Query' and the results will show in a
    new window.]{#5c21}

You can save the query results to JSON, csv or Excel.

### Offline Installation {#0c6a .graf .graf--h3 .graf-after--p name="0c6a"}

The extension will download and install a required PostgreSQL Tools
Service package during activation. For machines with no Internet access,
you can still use the extension by choosing the
`Install from                 VSIX...`{.markup--code .markup--p-code}
option in the Extension view and installing a bundled release from our
[Releases](https://github.com/Microsoft/vscode-postgresql/releases)  page. Each operating system has a .vsix file with the
required service included. Pick the file for your OS, download and
install to get started. We recommend you choose a full release and
ignore any alpha or beta releases as these are our daily builds used in
testing. 

### Support {#c60d .graf .graf--h3 .graf-after--p name="c60d"}

Support for this extension is provided on our [GitHub Issue
Tracker](https://github.com/Microsoft/vscode-postgresql/issues) . You can submit a [bug
report](https://github.com/Microsoft/vscode-postgresql/issues/new) , a [feature
suggestion](https://github.com/Microsoft/vscode-postgresql/issues/new)  or participate in \[discussions\].

![](https://cdn-images-1.medium.com/max/800/0*HmZlbJPK1aqWH_cf.gif) 




 ="24c3"}
 

------------------------------------------------------------------------


  
### JS JSX Snippets {#2199 .graf .graf--h3 .graf--leading name="2199"}

 
-   [JavaS ript (.js)]{#5373}
-   [TypeScript (.ts)]{#2c22}
-   [JavaScript React (.jsx)]{#1730}
-   [TypeScript React (.tsx)]{#a1da}

### Usage {#fed7 .graf .graf--h3 .graf-after--li name="fed7"}

After install this snippets add this inside your settings

```
 {#3cb7 .graf .graf--pre .graf-after--p name="3cb7"}
"editor.snippetSuggestions": "top",
```


### Snippets {#9f7a .graf .graf--h3 .graf-after--pre name="9f7a"}

### Import and export {#05b1 .graf .graf--h3 .graf-after--h3 name="05b1"}

TriggerContent`impimport name from 'module';imdimport { } from                 'module';` 

### Import pac age {#ff01 .graf .graf--h3 .graf-after--p name="ff01"}

TriggerContentDescription`imrimport React from 'react';` useful in
test`iptimport PropTypes from 'prop-types';` 

### Basic methods {#c591 .graf .graf--h3 .graf-after--p name="c591"}

TriggerContent`com`{.markup--code .markup--p-code}Comment
Block`clgconsole.log()`{.markup--code .markup--p-code}

### React components {#acea .graf .graf--h3 .graf-after--p name="acea"}

Only contain class component and function component.

TriggerContent`rcc`{.markup--code .markup--p-code}class component
skeleton`rccp`{.markup--code .markup--p-code}class component skeleton
with prop types after the class`rfc` function component skeleton`rfcp` function component with prop types
skeleton`con`{.markup--code .markup--p-code}class default constructor
with props`est`{.markup--code .markup--p-code}empty state
object`cdmcomponentDidMount methodscushouldComponentUpdate                 methodcdupcomponentDidUpdate methodcwuncomponentWillUnmount methodgsbugetSnapshotBeforeUpdate                 methodgdsfpstatic getDerivedStateFromProps methodcdccomponentDidCatch methodsstthis.setState with object                 as parameterssfthis.setState with function as parameterpropsthis.propsstatethis.statebndbinds the this                 of method inside the constructoruseState` useState block`useEffect` useEffect block`useContext` useContext block

### Jest {#a476 .graf .graf--h3 .graf-after--p name="a476"}

TriggerContent`describe`{.markup--code .markup--p-code}describe
Block`test`{.markup--code .markup--p-code}test Block`it` it Block

### PropTypes {#8cbf .graf .graf--h3 .graf-after--p name="8cbf"}

TriggerContent`ptaPropTypes.array,ptarPropTypes.array.isRequired,ptoPropTypes.object.,ptorPropTypes.object.isRequired,ptbPropTypes.bool,ptbrPropTypes.bool.isRequired,ptfPropTypes.func,ptfrPropTypes.func.isRequired,ptnPropTypes.number,ptnrPropTypes.number.isRequired,ptsPropTypes.string,ptsrPropTypes.string.isRequired,ptndPropTypes.node,ptndrPropTypes.node.isRequired,ptelPropTypes.element,ptelrPropTypes.element.isRequired,ptiPropTypes.instanceOf(ClassName),ptirPropTypes.instanceOf(ClassName).isRequired,ptePropTypes.oneOf(['News',                 'Photos']),pterPropTypes.oneOf(['News',                 'Photos']).isRequired,ptetPropTypes.oneOfType([PropTypes.string,                 PropTypes.number]),ptetrPropTypes.oneOfType([PropTypes.string,                 PropTypes.number]).isRequired,ptaoPropTypes.arrayOf(PropTypes.number),ptaorPropTypes.arrayOf(PropTypes.number).isRequired,ptooPropTypes.objectOf(PropTypes.number),ptoorPropTypes.objectOf(PropTypes.number).isRequired,ptshPropTypes.shape({color:                 PropTypes.string, fontSize: PropTypes.number}),ptshrPropTypes.shape({color: PropTypes.string, fontSize:                 PropTypes.number}).isRequired,` 

![](https://cdn-images-1.medium.com/max/800/0*FEudrdiwsQ5FN9ZC.gif) 




 ="eb70"}
 

------------------------------------------------------------------------


  
NEXT




 ="7266"}
 

------------------------------------------------------------------------


  ### Indent-Rainbow {#8b9e .graf .graf--h3 .graf--leading name="8b9e"}

### A simple extension to make indentation more readable {#2520 .graf .graf--h3 .graf-after--h3 name="2520"}

If you like this plugin, please consider a small donation:

![](https://cdn-images-1.medium.com/max/800/0*oYUoKTKYg5xyl8KU.gif) 




 ="143e"}
 
------------------------------------------------------------------------

 
  
This extension colorizes the indentation in front of your text
alternating four different colors on each step. Some may find it helpful
in writing code for Nim or Python.

![](https://cdn-images-1.medium.com/max/800/0*JopZWr3L1nWOUH3d.png) 

Get it here: [Visual Studio Code
Marketplace](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) 

It uses the current editor window tab size and can handle mixed tab +
spaces but that is not recommended. In addition it visibly marks lines
 help to find problems with indentation in some situations.

### Configuration {#a9c9 .graf .graf--h3 .graf-after--p name="a9c9"}

Although you can just use it as it is there is the possibility to
configure some aspects of the extension:

```
 {#670d .graf .graf--pre .graf-after--p name="670d"}
// For which languages indent-rainbow should be activated (if empty it means all).
  "indentRainbow.includedLanguages": [] // for example ["nim", "nims", "python"]
```


```
 {#f64d .graf .graf--pre .graf-after--pre name="f64d"}
  // For which languages indent-rainbow should be deactivated (if empty it means none).
  "indentRainbow.excludedLanguages": ["plaintext"]
```


```
 {#fe8c .graf .graf--pre .graf-after--pre name="fe8c"}
  // The delay in ms until the editor gets updated.
  "indentRainbow.updateDelay": 100 // 10 makes it super fast but may cost more resources
```


*Notice: Defining both* `includedLanguages`  *and* `excludedLanguages`  *does not make much sense. Use one of both!*

You can configure your own colors by adding and tampering with the
following code:

```
 {#9ddf .graf .graf--pre .graf-after--p name="9ddf"}
// Defining custom colors instead of default "Rainbow" for dark backgrounds.
  // (Sorry: Changing them needs an editor restart for now!)
  "indentRainbow.colors": [
    "rgba(255,255,64,0.07)",
    "rgba(127,255,127,0.07)",
    "rgba(255,127,255,0.07)",
    "rgba(79,236,236,0.07)"
  ]
```


```
 {#c187 .graf .graf--pre .graf-after--pre name="c187"}
  // The indent color if the number of spaces is not a multiple of "tabSize".
  "indentRainbow.errorColor": "rgba(128,32,32,0.6)"
```


```
 {#143a .graf .graf--pre .graf-after--pre name="143a"}
  // The indent color when there is a mix between spaces and tabs.
  // To be disabled this coloring set this to an empty string.
  "indentRainbow.tabmixColor": "rgba(128,32,96,0.6)"
```


> *Notice:* `errorColor`{.markup--code .markup--blockquote-code} *was
> renamed from* `error_color`{.markup--code .markup--blockquote-code}
> *in earlier versions.*

Skip error highlighting for RegEx patterns. For example, you may want to
turn off the indent errors for JSDoc's valid additional space (disabled
by default), or comment lines beginning with `//` 

```
 {#29a5 .graf .graf--pre .graf-after--p name="29a5"}
// Example of regular expression in JSON (note double backslash to escape characters)
  "indentRainbow.ignoreLinePatterns" : [
    "/[ \t]* [*]/g", // lines begining with <whitespace><space>*
    "/[ \t]+[/]{2}/g" // lines begininning with <whitespace>//
  ]
```


Skip error highlighting for some or all languages. For example, you may
want to turn off the indent errors for `markdown`  and `haskell`{.markup--code .markup--p-code} (which is
the default)

```
 {#e2fc .graf .graf--pre .graf-after--p name="e2fc"}
"indentRainbow.ignoreErrorLanguages" : [
    "markdown",
    "haskell"
  ]
```


If error color is disabled, indent colors will be rendered until the
length of rendered characters (white spaces, tabs, and other ones) is
divisible by tabsize. Turn on this option to render white spaces and
tabs only.

```
 {#1e40 .graf .graf--pre .graf-after--p name="1e40"}
"indentRainbow.colorOnWhiteSpaceOnly": true // false is the default
```


Build with:

```
 {#3812 .graf .graf--pre .graf-after--p name="3812"}
npm install
npm run vscode:prepublish
```


Running `npm run compile`{.markup--code .markup--p-code} makes the
compiler recompile on file change.

![](https://cdn-images-1.medium.com/max/800/0*hGe_EZpTAzcCcgUX.gif) 




 ="306d"}
 

------------------------------------------------------------------------


  
NEXT




 ="15a1"}
 

------------------------------------------------------------------------


  
### Path Intellisense {#c91b .graf .graf--h3 .graf--leading name="c91b"}

Visual Studio Code plugin that autocompletes filenames.
 ### Sponsors {#1cf4 .graf .graf--h3 .graf-after--p name="1cf4"}

![](https://cdn-images-1.medium.com/max/800/0*PCURf5A3ltjtHEk2.png) 

Eliminate context switching and costly distractions. Create and merge
PRs and perform code reviews from inside your IDE while using
jump-to-definition, your favorite keybindings, and other IDE tools.\
[Learn
more](https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=pathintel&utm_medium=banner "Try CodeStream") 

### Installation {#5a86 .graf .graf--h3 .graf-after--p name="5a86"}
 In the command palette (cmd-shift-p) select Install Extension and choose
Path Intellisense.

To use Path Intellisense instead of the default autocompletion, the
following configuration option must be added to your settings:

```
 {#a4a1 .graf .graf--pre .graf-after--p name="a4a1"}
{ "typescript.suggest.paths": false }
```


### Usage {#e693 .graf .graf--h3 .graf-after--pre name="e693"}

![](https://cdn-images-1.medium.com/max/800/0*TlyLRlQTYV3zdEIn.gif) 

### Node packages intellisense {#3632 .graf .graf--h3 .graf-after--figure name="3632"}

Use [npm
intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) 

### BaseUrl {#0728 .graf .graf--h3 .graf-after--p name="0728"}

Pathintellisense uses the ts.config.compilerOptions.baseUrl as a
mapping. So no need to define it twice. There is no support for paths at
the moment.

For example:

```
 {#1cbe .graf .graf--pre .graf-after--p name="1cbe"}
{
    "baseUrl": "src",
}
```


would allow to type:

```
 {#7017 .graf .graf--pre .graf-after--p name="7017"}
{
  import {} from "src/mymodule";
}
```


### Settings {#8549 .graf .graf--h3 .graf-after--pre name="8549"}

### File extension in import statements {#8bdb .graf .graf--h3 .graf-after--h3 name="8bdb"}

Path Intellisense removes the file extension by default if the statement
is a import statement. To enable file extensions set the following
setting to true:

```
 {#3ca9 .graf .graf--pre .graf-after--p name="3ca9"}
{
    "path-intellisense.extensionOnImport": true,
}
```


### Show hidden files {#debe .graf .graf--h3 .graf-after--pre name="debe"}

Per default, hidden files are not displayed. Set this to true to show
hidden files.

```
 {#3b2e .graf .graf--pre .graf-after--p name="3b2e"}
{
    "path-intellisense.showHiddenFiles": true,
}
```


If set to false, PathIntellisense ignores the default "files.exclude" as
well:

```
 {#7126 .graf .graf--pre .graf-after--p name="7126"}
{
    "files.exclude": {
        "**/*.map.js": true
    } 
}
```


### Auto slash when navigating to folder {#f237 .graf .graf--h3 .graf-after--pre name="f237"}

Per default, the autocompletion does not add a slash after a directory.

```
 {#e9ec .graf .graf--pre .graf-after--p name="e9ec"}
{
    "path-intellisense.autoSlashAfterDirectory": false,
}
```


### Absolute paths {#682a .graf .graf--h3 .graf-after--pre name="682a"}

Per default, absolute paths are resolved within the current workspace
root path. Set it to false to resolve absolute paths to the disk root
path.

```
 {#b49b .graf .graf--pre .graf-after--p name="b49b"}
{
    "path-intellisense.absolutePa hToWorkspace": true,
}
```


### Mappings {#1231 .graf .graf--h3 .graf-after--pre name="1231"}

Define custom mappings which can be useful for using absolute paths or
in combination with webpack resolve options.

```
 {#55df .graf .graf--pre .graf-after--p name="55df"}
{
    "path-intellisense.mappings": {
        "/": "${workspaceFolder}",
        "lib": "${workspaceFolder}/lib",
        "global": "/Users/dummy/globalLibs"
    },
}
```


Use \${workspaceFolder} when the path should be relative to the current
root of the current project. V2.2.1 and lower used \${workspaceRoot}.
Newer version support both placeholders.

![](https://cdn-images-1.medium.com/max/800/0*Ehx7LEJfAHj37qH-.gif) 




 ="1f00"}
 

------------------------------------------------------------------------


  
### turbo-js {#43bb .graf .graf--h3 .graf--leading name="43bb"}

Turbo-js for vscode is forked from
[atom-turbo-javascript](https://github.com/extrabacon/atom-turbo-javascript) 

### Declarations {#24a8 .graf .graf--h3 .graf-after--p name="24a8"}

#### `l=⇥`{.markup--code .markup--h4-code} let assignment {#4ffb .graf .graf--h4 .graf-after--h3 name="4ffb"}

```
 {#646b .graf .graf--pre .graf-after--h4 name="646b"}
let ${1:name} = ${2:value}
```


#### `co⇥`{.markup--code .markup--h4-code} const statement {#03be .graf .graf--h4 .graf-after--pre name="03be"}

 const ${1:name}
```


#### `co=⇥`{.markup--code .markup--h4-code} const assignment {#e401 .graf .graf--h4 .graf-after--pre name="e401"}

```
 {#788b .graf .graf--pre .graf-after--h4 name="788b"}
const ${1:name} = ${2:value}
```


### Flow Control {#4956 .graf .graf--h3 .graf-after--pre name="4956"}

#### `if⇥`{.markup--code .markup--h4-code} if statement {#05a9 .graf .graf--h4 .graf-after--h3 name="05a9"}

```
 {#8104 .graf .graf--pre .graf-after--h4 name="8104"}
if (${1:condition}) {
  ${0}
}
```


#### `ife⇥`{.markup--code .markup--h4-code} else statement {#2cc5 .graf .graf--h4 .graf-after--pre name="2cc5"}

```
 {#6b01 .graf .graf--pre .graf-after--h4 name="6b01"}
if (${1:condition}) {
  ${0}
} else {
```


```
 {#9eb6 .graf .graf--pre .graf-after--pre name="9eb6"}
}
```


#### `fo⇥`{.markup--code .markup--h4-code} for of loop (ES6) {#6700 .graf .graf--h4 .graf-after--pre name="6700"}

```
 {#d22c .graf .graf--pre .graf-after--h4 name="d22c"}
for (let ${1:key} of ${2:source}) {
  ${0}
}
```


#### `wl⇥`{.markup--code .markup--h4-code} while loop {#8d4e .graf .graf--h4 .graf-after--pre name="8d4e"}

```
 {#91f6 .graf .graf--pre .graf-after--h4 name="91f6"}
while (${1:condition}) {
  ${0}
}
```


#### `tc⇥`{.markup--code .markup--h4-code} try/catch {#0b46 .graf .graf--h4 .graf-after--pre name="0b46"}

```
 {#d0a6 .graf .graf--pre .graf-after--h4 name="d0a6 }
try {
 ${0}
} catch (${1:err}) {
```


```
 {#7027 .graf .graf--pre .graf-after--pre name="7027"}
}
```
 

### Functions {#023d .graf .graf--h3 .graf-after--pre name="023d"}

#### `fn⇥`{.markup--code .markup--h4-code} named function {#2896 .graf .graf--h4 .graf-after--h3 name="2896"}

```
 {#d8d8 .graf .graf--pre .graf-after--h4 name="d8d8"}
function ${1:name}(${2:arguments}) {
  ${0}
}
```


#### `iife⇥`{.markup--code .markup--h4-code} immediately-invoked function expression (IIFE) {#2d72 .graf .graf--h4 .graf-after--pre name="2d72"}

```
 {#d1f9 .graf .graf--pre .graf-after--h4 name="d1f9"}
(function (${1:arguments}) {
  ${0}
})(${2});
```


#### `af⇥`{.markup--code .markup--h4-code} arrow function (ES6) {#25b4 .graf .graf--h4 .graf-after--pre name="25b4"}

```
 {#3374 .graf .graf--pre .graf-after--h4 name "3374"}
(${1:arguments}) => ${2:statement}
```


#### `afb⇥`{.markup--code .markup--h4-code} arrow function with body (ES6) {#53d4 .graf .graf--h4 .graf-after--pre name="53d4"}

```
 {#d41f .graf .graf--pre .graf-after--h4 name="d41f"}
(${1:arguments}) => {
\t${0}
}
```


### Iterables {#6e25 .graf .graf--h3 .graf-after--pre name="6e25"}

#### `fe⇥`{.markup--code .markup--h4-code} forEach loop (chainable) {#29d3 .graf .graf--h4 .graf-after--h3 name="29d3"}

```
 {#3145 .graf .graf--pre .graf-after--h4 name="3145"} 
${1:iterable}.forEach((${2:item}) => {
  ${0}
});
```


#### `reduce⇥`{.markup--code .markup--h4-code} reduce function (chai able) {#2330 .graf .graf--h4 .graf-after--pre name="2330"}

```
 {#219f .graf .graf--pre .graf-after--h4 name="219f"}
${1:iterable}.reduce((${2:previous}, ${3:current}) => {
  ${0}
}${4:, initial});
```


#### `filter⇥`{.markup--code .markup--h4-code} filter function (chainable) {#8cd3 .graf .graf--h4 .graf-after--pre name="8cd3"}

```
 {#fd29 .graf .graf--pre .graf-after--h4 name="fd29"}
${1:iterable}.filter((${2:item}) => {
  ${0}
});
```


#### `find⇥`{.markup--code .markup--h4-code} ES6 find function (chainable) {#a9f5 .graf .graf--h4 .graf-after--pre name="a9f5"}

```
 {#d6ce .graf .graf--pre .graf-after--h4 name="d6ce"}
${1:iterable}.find((${2:item}) => {
  ${0}
});
```


### Objects and classes {#2bfc .graf .graf--h3 .graf-after--pre name="2bfc"}

#### `cls⇥`{.markup--code .markup--h4-code} class (ES6) {#8145 .graf .graf--h4 .graf-after--h3 name="8145"}

```
 {#5d94 .graf .graf--pre .graf-after--h4 name="5d94"}
class ${1:name} {
  constructor(${2:arguments}) {
    ${0}
  }
}
```


#### `cex⇥`{.markup--code .markup--h4-code} child class (ES6) {#2f27 .graf .graf--h4 .graf-after--pre name="2f27"}

```
 {#a142 .graf .graf--pre .graf-after--h4 name="a142"}
class ${1:name} extends ${2:base} {
  constructor(${2:arguments}) {
    super(${2:arguments});
    ${0} 
  }
} 
```


#### `med⇥`{.markup--code .markup--h4-code} method (ES6 syntax) {#fbf1 .graf .graf--h4 .graf-after--pre name="fbf1"}

```
 {#0535 .graf .graf--pre .graf-after--h4 name="0535"}
${1:method}(${2:arguments}) {
  ${0}
}
```

 
#### `get⇥`{.markup--code .markup--h4-code} getter (ES6 syntax) {#ca35 .graf .graf--h4 .graf-after--pre name="ca35"}

```
 {#216a .graf .graf--pre .graf-after--h4 name="216a"}
get ${1:property}() {
  ${0}
}
```


#### `set⇥`{.markup--code .markup--h4-code} setter (ES6 syntax) {#35a1 .graf .graf--h4 .graf-after--pre name="35a1"}

```
 {#d216 .graf .graf--pre .graf-after--h4 name="d216" 
set ${1:property}(${2:value}) {
  ${0}
}
```


#### `proto⇥`{.markup--code .markup--h4-code} prototype method (chainable) {#9a9d .graf .graf--h4 .graf-after--pre name="9a9d"}

```
 {#7bc7 .graf .graf--pre .graf-after--h4 name="7bc7" 
${1:Class}.prototype.${2:methodName} = function (${3:arguments}) {
  ${0}
};
```


#### `oa⇥`{.markup--code .markup--h4-code} Object assign {#2d4c .graf .graf--h4 .graf-after--pre name="2d4c"}

```
 {#32fd .graf .graf--pre .graf-after--h4 name="32fd" 
Object.assign(${1:dest}, ${2:source})
```


#### `ok⇥`{.markup--code .markup--h4-code} Object.keys {#beaa .graf .graf--h4 .graf-after--pre name="beaa"}

```
 {#37a1 .graf .graf--pre .graf-after--h4 name="37a1"}
Object.keys(${1:obj})
```


### Promises {#d3b4 .graf .graf--h3 .graf-after--pre name="d3b4"}

#### `rp⇥`{.markup--code .markup--h4-code} return Promise (ES6) {#2957 .graf .graf--h4 .graf-after--h3 name="2957"}

```
 {#6a54 .graf .graf--pre .graf-after--h4 name="6a54"}
return new Promise((resolve, reject) => {
  ${0} 
});
```


### ES6 modules {#2254 .graf .graf--h3 .graf-after--pre name="2254"}

#### `ex⇥`{.markup--code .markup--h4-code} module export {#0792 .graf .graf--h4 .graf-after--h3 name="0792"}

```
 {#36e5 .graf .graf--pre .graf-after--h4 name="36e5"}
export ${1:member};
```


#### `exd⇥`{.markup--code .markup--h4-code} module default export {#c6d3 .graf .graf--h4 .graf-after--pre name="c6d3"}

```
 {#67fd .graf .graf--pre .graf-after--h4 name="67fd"} 
export default ${1:member};
```


#### `im⇥`{.markup--code .markup--h4-code} module import {#5766 .graf .graf--h4 .graf-after--pre name="5766"}

```
 {#1a7f .graf .graf--pre .graf-after--h4 name="1a7f"}
import ${1:*} from '${2:module}';
```


#### `ima⇥`{.markup--code .markup--h4-code} modul  import as {#4a32 .graf .graf--h4 .graf-after--pre name="4a32"}

```
 {#d7ca .graf .graf--pre .graf-after--h4 name="d7ca"}
import ${1:*} as ${2:name} from '${3:module}';
```


### Console {#cb74 .graf .graf--h3 .graf-after--pre name=" b74"}

#### `cl⇥`{.markup--code .markup--h4-code} console.log {#27b2 .graf .graf--h4 .graf-after--h3 name="27b2"}

```
 {#cf0a .graf .graf--pre .graf-after--h4 name="cf0a"}
console.log(${0});
```
 

#### `ce⇥`{.markup--code .markup--h4-code} console.error {#1add .graf .graf--h4 .graf-after--pre name="1add"}

```
 {#69d5 .graf .graf--pre .graf-after--h4 name="69d5"}
console.error(${0});
```
 

#### `cw⇥`{.markup--code .markup--h4-code} console.warn {#8e03 .graf .graf--h4 .graf-after--pre name="8e03"}

```
 {#2c30 .graf .graf--pre .graf-after--h4 name="2c30"}
console.warn(${0});
```


### Timers {#1308 .graf .graf--h3 .graf-after--pre name="1308"}

#### `st⇥`{.markup--code .markup--h4-code} setTimeout {#239e .graf .graf--h4 .graf-after--h3 name="239e"}

```
 {#e3f4 .graf .graf--pre .graf-after--h4 name="e3f4"}
setTimeout(() => {
  ${0}
}, ${1:delay});
```


#### `si⇥`{.markup--code .markup--h4-code} setInterval {#0391 .graf .graf--h4 .graf-after--pre name="0391"}

```
 {#efc5 .graf .graf--pre .graf-after--h4 name="efc5"}
setInterval(() => {
  ${0}
}, ${1:delay});
```


#### `sim⇥`{.markup--code .markup--h4-code} setImmediate {#33da .graf .graf--h4 .graf-after--pre name="33da"}

```
 {#b0de .graf .graf--pre .graf-after--h4 name="b0de"}
setImmediate(() => {
  ${0}
});
```


### Node.js specifics {#e072 .graf .graf--h3 .graf-after--pre name="e072"}

#### `re⇥`{.markup--code .markup--h4-code} require a module {#0b20 .graf .graf--h4 .graf-after--h3 name="0b20"}

```
 {#ee56 .graf .graf--pre .graf-after--h4 name="ee56"}
require('${1:module}');
```


#### `cre⇥`{.markup--code .markup--h4-code} require a module {#38bf .graf .graf--h4 .graf-after--pre name="38bf"}

```
 {#f77a .graf .graf--pre .graf-after--h4 name="f77a"}
const ${1:name} = require('${2:module}');
```


#### `me⇥`{.markup--code .markup--h4-code} module.exports {#842e .graf .graf--h4 .graf-after--pre name="842e"}

```
 {#be20 .graf .graf--pre .graf-after--h4 name="be20"}
module.exports = ${1:name};
```


### Miscellaneous {#d445 .graf .graf--h3 .graf-after -pre name="d445"}

#### `us⇥`{.markup--code .markup--h4-code} use strict {#cff8 .graf .graf--h4 .graf-after--h3 name="cff8"}

```
 {#9ca2 .graf .graf--pre .graf-after--h4 name="9ca2"}
'use strict';
```
 

### vscode-standardjs-snippets {#2a75 .graf .graf--h3 .graf-after--pre name="2a75"}

Optinionated set of JS snippets. Originally forked from
<https://github.com/gaboesquivel/atom-standardjs-snippets,> but we've
added couple more. Also these are not using special characters because
vscode doesn't accept them in the snippets.

### Standard JavaScript Snippets for Visual studio code {#e9b2 .graf .graf--h3 .graf-after--p name="e9b2"}

A collection of javascript and react snippets for faster JavaScript
development in [Visual studio
Code](https://code.visualstudio.com/) . 

This collection is complementary to
[atom/language-javascript](https://github.com/atom/language-javascript) . It's based on
[extrabacon/atom-turbo-javascript](https://github.com/extrabacon/atom-turbo-javascript) .

### Code style {#41a4 .graf .graf--h3 .graf-after--p name="41a4"}

**Yes!, no semicolons:**

-   [[Are Semicolons Necessary in
    JavaScript?](https://www.youtube.com/watch?v=g fbh17Ax9I){.markup--anchor
    .markup--li-anchor}]{#9970}
-   [[An Open Letter to JavaScript Leaders Regarding
    Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding){.markup--anchor
    .markup--li-anchor}]{#2698}
-   [[JavaScript Semicolon Insertion --- Everything You Need to
    Know](http://inimino.org/~inimino/blog/javascript_semicolons){.markup--anchor
    .markup--li-anchor}]{#30ae}

### Snippets {#3989 .graf .graf--h3 .graf-after--li name="3989"}

Snippets are optimized to be short and easy to remember. Shortest are
the ones you should be using most often. Note that these links work only
on github, not on VSCode marketplace:

-   [[declarations](https://trusting-aryabhata-e5438d.netlify.app/#declarations){.markup--anchor
    .markup--li-anchor}]{#6c7a}
-   [[flow
    control](https://trusting-aryabhata-e5438d.netlify.app/#flow-control){.markup--anchor
    .markup--li-anchor}]{#9292}
-   [[functions](https://trusting-aryabhata-e5438d.netlify.app/#functions){.markup--anchor
    .markup--li-anchor}]{#07ac}
-   [[iterables](https://trusting-aryabhata-e5438d.netlify.app/#iterables){.markup--anchor
    .markup--li-anchor}]{#b188}
-   [[objects and
    classes](https://trusting-aryabhata-e5438d.netlify.app/#objects-and-classes){.markup--anchor
    .markup--li-anchor}]{#40e6}
-   [[returning
    values](https://trusting-aryabhata-e5438d.netlify.app/#returning-values){.markup--anchor
    .markup--li-anchor}]{#7d1a}
-   [[types](https://trusting-aryabhata-e5438d.netlify.app/#types){.markup--anchor
    .markup--li-anchor}]{#2b0c}
-   [[promises](https://trusting-aryabhata-e5438d.netlify.app/#promises){.markup--anchor
    .markup--li-anchor}]{#f163}
-   [[ES6
    modules](https://trusting-aryabhata-e5438d.netlify.app/#es6-modules){.markup--anchor
    .markup--li-anchor}]{#81fb}
-   [[testing](https://trusting-aryabhata-e5438d.netlify.app/#testing){.markup--anchor
    .markup--li-anchor}]{#2cce}
-   [[console](https://trusting-aryabhata-e5438d.netlify.app/#console){.markup--anchor
    .markup--li-anchor}]{#40f7}
-   [[timers](https://trusting-aryabhata-e5438d.netlify.app/#timers){.markup--anchor
    .markup--li-anchor}]{#6a9f}
-   [[DOM](https://trusting-aryabhata-e5438d.netlify.app/#dom){.markup--anchor
    .markup--li-anchor}]{#6311}
-   [[Node.js](https://trusting-aryabhata-e5438d.netlify.app/#nodejs){.markup--anchor
    .markup--li-anchor}]{#d9ec}
-   [[miscellaneous](https://trusting-aryabhata-e5438d.netlify.app/#miscellaneous){.markup--anchor
    .markup--li-anchor}]{#cebe}

### Declarations {#d313 .graf .graf--h3 .graf-after--li name="d313"}

#### `v⇥`{.markup--code .markup--h4-code} var statement {#fed9 .graf .graf--h4 .graf-after--h3 name="fed9"}

```
 {#6c44 .graf .graf--pre .graf-after--h4 name="6c44"}
var ${1:name}
```


#### `va⇥`{.markup--code .markup--h4-code} var assignment {#89d3 .graf .graf--h4 .graf-after--pre name="89d3"}

```
 {#7bb0 .graf .graf--pre .graf-after--h4 name="7bb0"}
var ${1:name} = ${2:value}
```


#### `l⇥`{.markup--code .markup--h4-code} let statement {#f43e .graf .graf--h4 .graf-after--pre name="f43e"}

```
 {#da30 .graf .graf--pre .graf-after--h4 name="da30"}
let ${1:name}
```


#### `la⇥`{.markup--code .markup--h4-code} let assignment awaited {#ac20 .graf .graf--h4 .graf-after--pre name="ac20"}

```
 {#6309 .graf .graf--pre .graf-after--h4 name="6309"}
let ${1:name} = await ${2:value}
```


#### `ly⇥`{.markup--code .markup--h4-code} let yielded assignment {#dd88 .graf .graf--h4 .graf-after--pre name="dd88"}

```
 {#74f2 .graf .graf--pre .graf-after--h4 name="74f2"}
let ${1:name} = yield ${2:value}
```


#### `c⇥`{.markup--code .markup--h4-code} const statement {#8786 .graf .graf--h4 .graf-after--pre name="8786"}

```
 {#588f .graf .graf--pre .graf-after--h4 name="588f"}
const ${1:name}
```


#### `cd⇥`{.markup--code .markup--h4-code} const from destructuring {#66a7 .graf .graf--h4 .graf-after--pre name="66a7"}

```
 {#161a .graf .graf--pre .graf-after--h4 name="161a"}
const { ${1:name} } = ${2:value}
```


#### `ca⇥`{.markup--code .markup--h4-code} const assignment awaited {#56ab .graf .graf--h4 .graf-after--pre name="56ab"}

```
 {#3033 .graf .graf--pre .graf-after--h4 name="3033"}
const ${1:name} = await ${2:value}
```


#### `cd⇥`{.markup--code .markup--h4-code} const from destructuring awaited {#3019 .graf .graf--h4 .graf-after--pre name="3019"}

```
 {#a754 .graf .graf--pre .graf-after--h4 name="a754"}
const { ${1:name} } = await ${2:value}
```


#### `cf⇥`{.markup--code .markup--h4-code} const arrow function assignment {#3617 .graf .graf--h4 .graf-after--pre name="3617"}

```
 {#8d37 .graf .graf--pre .graf-after--h4 name="8d37"}
const ${1:name} = (${2:arguments}) => {\n\treturn ${0}\n}
```


#### `cy⇥`{.markup--code .markup--h4-code} const yielded assignment {#f148 .graf .graf--h4 .graf-after--pre name="f148"}

```
 {#be32 .graf .graf--pre .graf-after--h4 name="be32"}
const ${1:name} = yield ${2:value}
```


### Flow Control {#ad5e .graf .graf--h3 .graf-after--pre name="ad5e"}

#### `i⇥`{.markup--code .markup--h4-code} if statement {#0390 .graf .graf--h4 .graf-after--h3 name="0390"}

```
 {#80bb .graf .graf--pre .graf-after--h4 name="80bb"}
if (${1:condition}) {
  ${0}
}
```


#### `te⇥`{.markup--code .markup--h4-code} ternary statement {#cfda .graf .graf--h4 .graf-after--pre name="cfda"}

```
 {#be78 .graf .graf--pre .graf-after--h4 name="be78"}
${1:cond} ? ${2:true} : ${3: false}
```


#### `ta⇥`{.markup--code .markup--h4-code} ternary statement {#0352 .graf .graf--h4 .graf-after--pre name="0352"}

```
 {#dbb7 .graf .graf--pre .graf-after--h4 name="dbb7"}
const ${0} = ${1:cond} ? ${2:true} : ${3: false}
```


#### `el⇥`{.markup--code .markup--h4-code} else statement {#2c51 .graf .graf--h4 .graf-after--pre name="2c51"}

```
 {#3090 .graf .graf--pre .graf-after--h4 name="3090"}
else {
  ${0}
}
```


#### `ife⇥`{.markup--code .markup--h4-code} else statement {#ef90 .graf .graf--h4 .graf-after--pre name="ef90"}

```
 {#2071 .graf .graf--pre .graf-after--h4 name="2071"}
if (${1:condition}) {
  ${0}
} else {
```


```
 {#7374 .graf .graf--pre .graf-after--pre name="7374"}
}
```


#### `ei⇥`{.markup--code .markup--h4-code} else if statement {#45bf .graf .graf--h4 .graf-after--pre name="45bf"}

```
 {#8005 .graf .graf--pre .graf-after--h4 name="8005"}
else if (${1:condition}) {
  ${0}
}
```


#### `fl⇥`{.markup--code .markup--h4-code} for loop (ES6) {#3c2d .graf .graf--h4 .graf-after--pre name="3c2d"}

```
 {#500c .graf .graf--pre .graf-after--h4 name="500c"}
for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length ${1:i} < ${2:len}; ${1:i}++) {
  ${0}
}
```


#### `fi⇥`{.markup--code .markup--h4-code} for in loop (ES6) {#a995 .graf .graf--h4 .graf-after--pre name="a995"}

```
 {#22b2 .graf .graf--pre .graf-after--h4 name="22b2"}
for (let ${1:key} in ${2:source}) {
  if (${2:source}.hasOwnProperty(${1:key})) {
    ${0}
  }
}
```


#### `fo⇥`{.markup--code .markup--h4-code} for of l op (ES6) {#dca7 .graf .graf--h4 .graf-after--pre name="dca7"}

```
 {#7399 .graf .graf--pre .graf-after--h4 name="7399"}
for (const ${1:key} of ${2:source}) {
  ${0}
}
```


#### `wl⇥`{.markup--code .markup--h4-code} while loop  #7759 .graf .graf--h4 .graf-after--pre name="7759"}

```
 {#b769 .graf .graf--pre .graf-after--h4 name="b769"}
while (${1:condition}) {
  ${0}
}
```


#### `wid⇥`{.markup--code .markup--h4-code} while iteration decrementing {#ec01 .graf .graf--h4 .graf-after--pre name="ec01"}

```
 {#6355 .graf .graf--pre .graf-after--h4 name="6355 }
let ${1:array}Index = ${1:array}.length
while (${1:array}Index--) {
  ${0}
}
```


#### `tc⇥`{.markup--code .markup--h4-code} try/catch {#8790 .graf .graf--h4 .graf-after--pre name="8790"}
 
```
 {#dd12 .graf .graf--pre .graf-after--h4 name="dd12"}
try {
 ${0}
} catch (${1:err}) {
```


```
 {#9a2a .graf .graf--pre .graf-after--pre name="9a2a"}
}
```


#### `tf⇥`{.markup--code .markup--h4-code} try/finally {#20d3 .graf .graf--h4 .graf-after--pre name="20d3"}

```
 {#ecc9 .graf .graf--pre .graf-after--h4 name="ecc9"}
try {
 ${0}
} finally {
```


```
 {#1c44 .graf .graf--pre .graf-after--pre name="1c44"}
}
```


#### `tcf⇥`{.markup--code .markup--h4-code} try/catch/finally {#59b6 .graf .graf--h4 .graf-after--pre name="59b6"}

```
 {#ac12 .graf .graf--pre .graf-after--h4 name="ac12"}
try {
  ${0}
} catch (${1:err}) {
```


```
 {#ba4b .graf .graf--pre .graf-after--pre name="ba4b"}
} finally {
```


```
 {#67b4 .graf .graf--pre .graf-after--pre name="67b4"}
}
```


### Functions {#3625 .graf .graf--h3 .graf-after--pre name="3625"}

#### `fan⇥`{.markup--code .markup--h4-code} anonymous function {#02a3 .graf .graf--h4 .graf-after--h3 name="02a3"}

```
 {#8651 .graf .graf--pre .graf-after--h4 name="8651"}
function (${1:arguments}) {${0}}
```


#### `fn⇥`{.markup--code .markup--h4-code} named function {#215d .graf .graf--h4 .graf-after--pre name="215d"}

```
 {#858c .graf .graf--pre .graf-after--h4 name="858c"}
function ${1:name}(${2:arguments}) {
  ${0}
}
```


#### `asf⇥`{.markup--code .markup--h4-code} async function {#18c6 .graf .graf--h4 .graf-after--pre name="18c6"}

```
 {#e776 .graf .graf--pre .graf-after--h4 name="e776"}
async function (${1:arguments}) {
  ${0}
}
```


#### `aa⇥`{.markup--code .markup--h4-code} async arrow function with {#96db .graf .graf--h4 .graf-after--pre name="96db"}

```
 {#d950 .graf .graf--pre .graf-after--h4 name "d950"}
async (${1:arguments}) => {
  ${0}
}
```


#### `iife⇥`{.markup--code .markup--h4-code} immediately-invoked function expression (IIFE) {#68e3 .graf .graf--h4 .graf-after--pre name="68e3"}

```
 {#43d0 .graf .graf--pre .graf-after--h4 name= 43d0"}
;(function (${1:arguments}) {
  ${0}
})(${2})
```


#### `aiife⇥`{.markup--code .markup--h4-code} async immediately-invoked function expression {#eccf .graf .graf--h4 .graf-after--pre name="eccf"}

```
 {#1bab .graf .graf--pre .graf-after--h4 name="1bab"} 
;(async (${1:arguments}) => {
  ${0}
})(${2})
```


#### `fa⇥`{.markup--code .markup--h4-code} function apply {#ae3b .graf .graf--h4 .graf-after--pre name="ae3b"}

```
 {#8b6d .graf .graf--pre .graf-after--h4 name="8b6d"}
${1:fn}.apply(${2:this}, ${3:arguments})
```


#### `fc⇥`{.markup--code .markup--h4-code} function call {#b270 .graf .graf--h4 .graf-after--pre name="b270"}

```
 {#7bdb .graf .graf--pre .graf-after--h4 name="7bdb"}
${1:fn}.call(${2:this}, ${3:arguments})
```


#### `fb⇥`{.markup--code .markup--h4-code} function bind {#de16 .graf .graf--h4 .graf-after--pre name="de16"}

```
 {#3c51 .graf .graf--pre .graf-after--h4 name="3c51"}
${1:fn}.bind(${2:this}, ${3:arguments})
```


#### `af⇥`{.markup--code .markup--h4-code} arrow fu ction (ES6) {#c2a2 .graf .graf--h4 .graf-after--pre name="c2a2"}

```
 {#6ac0 .graf .graf--pre .graf-after--h4 name="6ac0"}
(${1:arguments}) => ${2:statement}
```


#### `fd⇥`{.markup--code .markup--h4-code} arrow fu ction with destructuring {#848e .graf .graf--h4 .graf-after--pre name="848e"}

```
 {#0024 .graf .graf--pre .graf-after--h4 name="0024"}
({${1:arguments}}) => ${2:statement}
```


#### `fdr⇥`{.markup--code .markup--h4-code} arrow f nction with destructuring returning destructured {#b204 .graf .graf--h4 .graf-after--pre name="b204"}

```
 {#3d9a .graf .graf--pre .graf-after--h4 name="3d9a"}
({${1:arguments}}) => ${1:arguments}
```


#### `f⇥`{.markup--code .markup--h4-code} arrow function  ith body (ES6) {#7c19 .graf .graf--h4 .graf-after--pre name="7c19"}

```
 {#79a8 .graf .graf--pre .graf-after--h4 name="79a8"}
(${1:arguments}) => {
  ${0}
}
```


#### `fr⇥`{.markup--code .markup--h4-code} arrow function with return (ES6) {#0926 .graf .graf--h4 .graf-after--pre name="0926"}

```
 {#e0d8 .graf .graf--pre .graf-after--h4 name="e0d8"}
(${1:arguments}) => {
  return ${0}
}
```


#### `gf⇥`{.markup--code .markup--h4-code} generator function (ES6) {#17f7 .graf .graf--h4 .graf-after--pre name="17f7"}

```
 {#ca83 .graf .graf--pre .graf-after--h4 name="ca83"} 
function* (${1:arguments}) {
  ${0}
}
```


#### `gfn⇥`{.markup--code .markup--h4-code} named generator function (ES6) {#4b86 .graf .graf--h4 .graf-after--pre name="4b86"}

```
 {#fea5 .graf .graf--pre .graf-after--h4 name="fea5"} 
function* ${1:name}(${1:arguments}) {
  ${0}
}
```


### Iterables {#6bac .graf .graf--h3 .graf-after--pre name="6bac"}

#### `fe⇥`{.markup--code .markup--h4-code} forEach loop {#b74  .graf .graf--h4 .graf-after--h3 name="b744"}

```
 {#2b8c .graf .graf--pre .graf-after--h4 name="2b8c"}
${1:iterable}.forEach((${2:item}) => {
  ${0}
})
```


#### `map⇥`{.markup--code .markup--h4-code} map function {#1c0f .gra  .graf--h4 .graf-after--pre name="1c0f"}

```
 {#8b15 .graf .graf--pre .graf-after--h4 name="8b15"}
${1:iterable}.map((${2:item}) => {
  ${0}
})
```


#### `reduce⇥`{.markup--code .markup--h4-code} reduce function {#ec4a .graf .graf--h4 .graf-after--pre name="ec4a"}

```
 {#1d20 .graf .graf--pre .graf-after--h4 name=" d20"}
${1:iterable}.reduce((${2:previous}, ${3:current}) => {
  ${0}
}${4:, initial})
```


#### `filter⇥`{.markup--code .markup--h4-code} filter function {#3d59 .graf .graf--h4 .graf-after--pre name="3d59"}

```
 {#7b96 .graf .graf--pre .graf-after--h4 nam ="7b96"}
${1:iterable}.filter((${2:item}) => {
  ${0}
})
```


#### `find⇥`{.markup--code .markup--h4-code} ES6 find function {#dc8e .graf .graf--h4 .graf-after--pre name="dc8e"}

```
 {#0f12 .graf .graf--pre .graf-after--h4 name="0f1 "}
${1:iterable}.find((${2:item}) => {
  ${0}
})
```


#### `every⇥`{.markup--code .markup--h4-code} every function {#2443 .graf .graf--h4 .graf-after--pre name="2443"}

```
 {#6a7e .graf .graf--pre .graf-after--h4 name="6a7 "}
${1:iterable}.every((${2:item}) => {
  ${0}
})
```


#### `some⇥`{.markup--code .markup--h4-code} some function {#bba1 .graf .graf--h4 .graf-after--pre name="bba1"}

```
 {#9bc4 .graf .graf--pre .graf-after--h4 name="9bc "}
${1:iterable}.some((${2:item}) => {
  ${0}
})
```


### Objects and classes {#7a33 .graf .graf--h3 .graf-after--pre name="7a33"}

#### `cs⇥`{.markup--code .markup--h4-code} class (E 6) {#a44a .graf .graf--h4 .graf-after--h3 name="a44a"}

```
 {#d677 .graf .graf--pre .graf-after--h4 name="d677"}
class ${1:name} {
  constructor(${2:arguments}) {
    ${0}
  }
}
```
 

#### `csx⇥`{.markup--code .markup--h4-code} extend a class (ES6) {#30ef .graf .graf--h4 .graf-after--pre name="30ef"}

```
 {#0d5f .graf .graf--pre .graf-after--h4 name="0d5f"}
class ${1:name} extends ${2:base} {
  constructor(${2:arguments}) {
    super(${2:arguments})
    ${0} 
  }
} 
```


#### `m⇥`{.markup--code .markup--h4-code} method (ES6 syntax) {#ef31 .graf .graf--h4 .graf-after--pre name="ef31"}

```
 {#a365 .graf .graf--pre .graf-after--h4 name="a365"}
${1:method} (${2:arguments}) {
  ${0}
}
```

 
#### `get⇥`{.markup--code .markup--h4-code} getter (ES6 syntax) {#b756 .graf .graf--h4 .graf-after--pre name="b756"}

```
 {#c8d5 .graf .graf--pre .graf-after--h4 name="c8d5"}
get ${1:property} () {
  ${0}
}
```


#### `set⇥`{.markup--code .markup--h4-code} setter (ES6 syntax) {#e8f8 .graf .graf--h4 .graf-after--pre name="e8f8"}

```
 {#bb33 .graf .graf--pre .graf-after--h4 name="bb3 "}
set ${1:property} (${2:value}) {
  ${0}
}
```


#### `gs⇥`{.markup--code .markup--h4-code} getter and setter (ES6 syntax) {#68f1 .graf .graf--h4 .graf-after--pre name="68f1"}

```
 {#7faa .graf .graf--pre .graf-after--h4 name="7faa" 
get ${1:property} () {
  ${0}
}
set ${1:property} (${2:value}) {
```


```
 {#458f .graf .graf--pre .graf-after--pre name="458f"}
} 
```


#### `proto⇥`{.markup--code .markup--h4-code} prototype method {#56d9 .graf .graf--h4 .graf-after--pre name="56d9"}

```
 {#e4db .graf .graf--pre .graf-after--h4 name="e4db"}
${1:Class}.prototype.${2:methodName} = function (${3:arguments}) {
  ${0}
} 
```


#### `ok`{.markup--code .markup--h4-code} Object.keys {#0794 .graf .graf--h4 .graf-after--pre name="0794"}

```
 {#b77e .graf .graf--pre .graf-after--h4 name="b77e"}
Object.keys(${1:obj})
```


#### `ov`{.markup--code .markup--h4-code} Object.values {#a756 .graf .graf--h4 .graf-after--pre name="a756"}

```
 {#f5f1 .graf .graf--pre .graf-after--h4 name="f5f1"}
Object.values(${1:obj})
```


#### `oe`{.markup--code .markup--h4-code} Object.entries {#f0ec .graf .graf--h4 .graf-after--pre name="f0ec"}

```
 {#8e53 .graf .graf--pre .graf-after--h4 name="8e53"}
Object.entries(${1:obj})
```


#### `oc`{.markup--code .markup--h4-code} Object.create {#d9f0 .graf .graf--h4 .graf-after--pre name="d9f0"}

```
 {#4b39 .graf .graf--pre .graf-after--h4 name="4b39"}
Object.create(${1:obj})
```


#### `oa`{.markup--code .markup--h4-code} Object.assign {#d907 .graf .graf--h4 .graf-after--pre name="d907"}

```
 {#a536 .graf .graf--pre .graf-after--h4 name="a536"}
Object.assign(${1:dest}, ${2:source})
```


#### `og`{.markup--code .markup--h4-code} Object.getOwnPropertyDescriptor {#25a6 .graf .graf--h4 .graf-after--pre name="25a6"}

```
 {#b63b .graf .graf--pre .graf-after--h4 name="b63b"}
Object.getOwnPropertyDescriptor(${1:dest}, '${2:prop}')
```


#### `od`{.markup--code .markup--h4-code} Object.defineProperty {#c2b5 .graf .graf--h4 .graf-after--pre name="c2b5"}

```
 {#cfbe .graf .graf--pre .graf-after--h4 name="cfbe"}
Object.defineProperty(${1:dest}, '${2:prop}', {
  ${0}
})
```


### Returning values {#0a8a .graf .graf--h3 .graf-after--pre name="0a8a"}

#### `r⇥`{.markup--code .markup--h4-code} return {#29ba .graf .graf--h4 .graf-after--h3 name="29ba"}

```
 {#b322 .graf .graf--pre .graf-after--h4 name="b322"}
return ${0}
```


#### `rt⇥`{.markup--code .markup--h4-code} return this {#347b .graf .graf--h4 .graf-after--pre name="347b"}

```
 {#6146 .graf .graf--pre .graf-after--h4 name="6146"}
return this
```


#### `rn⇥`{.markup--code .markup--h4-code} return null {#eee5 .graf .graf--h4 .graf-after--pre name="eee5"}

```
 {#df0b .graf .graf--pre .graf-after--h4 name="df0b"}
return null
```


#### `ro⇥`{.markup--code .markup--h4-code} return new object {#21a1 .graf .graf--h4 .graf-after--pre name="21a1"}

```
 {#948b .graf .graf--pre .graf-after--h4 name="948b"}
return {
  ${0}
}
```
 

#### `ra⇥`{.markup--code .markup--h4-code} return new array {#b031 .graf .graf--h4 .graf-after--pre name="b031"}

```
 {#a9ec .graf .graf--pre .graf-after--h4 name="a9ec"}
return [
  ${0} 
]
```


#### `rp⇥`{.markup--code .markup--h4-code} return Promise (ES6) {#987a .graf .graf--h4 .graf-after--pre name="987a"}

```
 {#523e .graf .graf--pre .graf-after--h4 name="523 "}
return new Promise((resolve, reject) => {
  ${0}
})
```


#### `tof⇥`{.markup--code .markup--h4-code} typeof comparison {#6d6c .graf .graf--h4 .graf-after--pre name="6d6c"}

```
 {#4593 .graf .graf--pre .graf-after--h4 name="459 "}
typeof ${1:source} === '${2:undefined}'
```


#### `tf⇥`{.markup--code .markup--h4-code} this {#5911 .graf .graf--h4 .graf-after--pre name="5911"}

```
 {#3f1e .graf .graf--pre .graf-after--h4 name="3f1e"}
this.
```
 

#### `iof⇥`{.markup--code .markup--h4-code} instanceof comparison {#787e .graf .graf--h4 .graf-after--pre name="787e"}

```
 {#b794 .graf .graf--pre .graf-after--h4 name="b794"}
${1:source} instanceof ${2:Object}
```


#### `ia⇥`{.markup--code .markup--h4-code} isArray {#6532 .graf .graf--h4 .graf-after--pre name="6532"}

```
 {#0705 .graf .graf--pre .graf-after--h4 name="0705"}
Array.isArray(${1:source})
```


### Promises {#bbdd .graf .graf--h3 .graf-after--pre name="bbdd"}

#### `pa⇥`{.markup--code .markup--h4-code} Promise.all {#fce0 .graf .graf--h4 .graf-after--h3 name="fce0"}

```
 {#c863 .graf .graf--pre .graf-after--h4 name="c863"}
Promise.all(${1:value})
```


#### `p⇥`{.markup--code .markup--h4-code} new Promise (ES6) {#8ba2 .graf .graf--h4 .graf-after--pre name="8ba2"}

```
 {#d7ee .graf .graf--pre .graf-after--h4 name="d7ee"}
new Promise((resolve, reject) => {
  ${0}
})
```


#### `pt⇥`{.markup--code .markup--h4-code} Promise.then {#7834 .graf .graf--h4 .graf-after--pre name="7834"}

```
 {#8533 .graf .graf--pre .graf-after--h4 name="8533"}
${1:promise}.then((${2:value}) => {
  ${0}
})
```


#### `pc⇥`{.markup--code .markup--h4-code} Promise.catch {#227e .graf .graf--h4 .graf-after--pre name="227e"}

```
 {#44d7 .graf .graf--pre .graf-after--h4 name="44d "}
${1:promise}.catch(error => {
  ${0}
})
```


### ES6 modules {#0213 .graf .graf--h3 .graf-after--pre name="0213"}

#### `e⇥`{.markup--code .markup--h4-code} module export {#853a .graf .graf--h4 .graf-after--h3 name="853a"}

```
 {#c149 .graf .graf--pre .graf-after--h4 name="c149"}
export ${1:member}
```


#### `ed⇥`{.markup--code .markup--h4-code} module default export {#ebb0 .graf .graf--h4 .graf-after--pre name="ebb0"}

```
 {#9eb2 .graf .graf--pre .graf-after--h4 name="9eb2"}
export default ${1:member}
```


#### `edf⇥`{.markup--code .markup--h4-code} module default export function {#0baa .graf .graf--h4 .graf-after--pre name="0baa"}

```
 {#d37a .graf .graf--pre .graf-after--h4 name="d37a"}
export default function ${1:name} (${2:arguments}) {\n\t${0}\n}
```


#### `ec⇥`{.markup--code .markup--h4-code} modul  export const {#a5fd .graf .graf--h4 .graf-after--pre name="a5fd"}

```
 {#5144 .graf .graf--pre .graf-after--h4 name="5144"}
export const ${1:member} = ${2:value}
```


#### `ef⇥`{.markup--code .markup--h4-code} module export  onst {#640d .graf .graf--h4 .graf-after--pre name="640d"}

```
 {#27c1 .graf .graf--pre .graf-after--h4 name="27c1"}
export function ${1:member} (${2:arguments}) {\n\t${0}\n}
```


#### `im⇥`{.markup--code .markup--h4-code} module import {#5a27 . raf .graf--h4 .graf-after--pre name="5a27"}

```
 {#6c4c .graf .graf--pre .graf-after--h4 name="6c4c"}
import ${1:*} from '${2:module}'
```


#### `ia⇥`{.markup--code .markup--h4-code} module import as {#8972 .graf .graf--h4 .graf-after--pre name="8972"}

```
 {#efd0 .graf .graf--pre .graf-after--h4 name="efd0"}
import ${1:*} as ${2:name} from '${3:module}'
```


#### `id⇥`{.markup--code .markup--h4-code} module import destructuring {#420a .graf .graf--h4 .graf-after--pre name="420a"}

```
 {#60fc .graf .graf--pre .graf-after--h4 name="60fc"}
import { $1 } from '${2:module}'
```


### BDD testing (Mocha, Jasmine, etc.) {#0ede .gr f .graf--h3 .graf-after--pre name="0ede"}

#### `desc⇥`{.markup--code .markup--h4-code} describe {#3046 .graf .graf--h4 .graf-after--h3 name="3046"}

```
 {#882e .graf .graf--pre .graf-after--h4 name="882e"}
describe('${1:description}', function () {
  ${0} 
})
```


#### `it⇥`{.markup--code .markup--h4-code} asynchronous \"it\" {#a531 .graf .graf--h4 .graf-after--pre name="a531"}

```
 {#9bd8 .graf .graf--pre .graf-after--h4 name="9bd8"}
it('${1:description}', async () => {
  ${0}
})
```


#### `itd⇥`{.markup--code .marku --h4-code} \"it\" with callback {#6bd3 .graf .graf--h4 .graf-after--pre name="6bd3"}

```
 {#9860 .graf .graf--pre .graf-after--h4 name="9860"}
it('${1:description}', (done) => {
  ${0}
})
```


#### `its⇥`{.markup--code .markup--h4-code} \"it\" synchronous {#0160 .graf .graf--h4 .graf-after--pre name="0160"}

```
 {#4d23 .graf .graf--pre .graf-after--h4 name="4d23"}
it('${1:description}', () => {
  ${0}
})
```


#### `bf⇥`{.markup--code .markup--h4-code} before test suite {#4100 .graf .graf--h4 .graf-after--pre name="4100"}

```
 {#38ea .graf .graf--pre .graf-after--h4 name="38ea" 
before(function () {
  ${0}
})
```


#### `bfe⇥`{.markup--code .markup--h4-code} before each test {#efa1 .graf .graf--h4 .graf-after--pre name="efa1"}

```
 {#21fa .graf .graf--pre .graf-after--h4 name="21fa"}
beforeEach(function () {
  ${0}
})
```


#### `aft⇥`{.markup--code .markup--h4-code} after test suite {#7032 .graf .graf--h4 .graf-after--pre name="7032"}

```
 {#1d3d .graf .graf--pre .graf-after--h4 name="1d3d }
after(function () {
  ${0}
})
```


#### `afe⇥`{.markup--code .markup--h4-code} after each test {#7711 .graf .graf--h4 .graf-after--pre name="7711"}

```
 {#84f4 .graf .graf--pre .graf-after--h4 name="84f4" 
afterEach(function () {
  ${0}
})
```


### Timers {#afec .graf .graf--h3 .graf-after--pre name="afec"}

#### `st⇥`{.markup--code .markup--h4-code} setTimeout  #093d .graf .graf--h4 .graf-after--h3 name="093d"}

```
 {#78f9 .graf .graf--pre .graf-after--h4 name="78f9"}
setTimeout(() => {
  ${0}
}, ${1:delay})
```


#### `si⇥`{.markup--code .markup--h4-code} setInterval {#8503 .graf .graf--h4 .graf-after--pre name="8503"}

```
 {#3643 .graf .graf--pre .graf-after--h4 name="3643"}
setTimeout(() => {
  ${0}
}, ${1:delay})
```


#### `sim⇥`{.markup--code .markup--h4-code} setImmediate {#55a1 .graf .graf--h4 .graf-after--pre name="55a1"}

```
 {#c7e2 .graf .graf--pre .graf-after--h4 name="c7e2"}
setImmediate(() => {
  ${0}
})
```


### DOM {#8b39 .graf .graf--h3 .graf-after--pre name="8b39"}

#### `ae⇥`{.markup--code .markup--h4-code} addEventListener {#10d4 .graf .graf--h4 .graf-after--h3 name="10d4"}

```
 {#fc07 .graf .graf--pre .graf-after--h4 name="fc07"}
${1:document}.addEventListener('${2:event}', ${3:ev} => {
  ${0}
})
```


#### `rel⇥`{.markup--code .markup--h4-code} removeEventListener {#58fc .graf .graf--h4 .graf-after--pre name="58fc"}

```
 {#d048 .graf .graf--pre .graf-after--h4 name="d048"}
${1:document}.removeEventListener('${2:event}', ${3:listener})
```


#### `evc`{.markup--code .markup--h4-code} dom event cancel default and propagation {#50a6 .graf .graf--h4 .graf-after--pre name="50a6"}

```
 {#5b5d .graf .graf--pre .graf-after--h4 name="5b5d"}
ev.preventDefault()
ev.stopPropagation()
return false
```


#### `gi⇥`{.markup--code .markup--h4-code} getElementById {#ccbc .graf .graf--h4 .graf-after--pre name="ccbc"}

```
 {#f635 .graf .graf--pre .graf-after--h4 name="f635"}
${1:document}.getElementById('${2:id}')
```


#### `gc⇥`{.markup--code .markup--h4-code} getElementsByClassName {#ada4 .graf .graf--h4 .graf-after--pre name="ada4"}

```
 {#eafc .graf .graf--pre .graf-after--h4 name="eafc"}
Array.from(${1:document}.getElementsByClassName('${2:class}'))
```


#### `gt⇥`{.markup--code .markup--h4-code} getElementsByTagName {#15fe .graf .graf--h4 .graf-after--pre name="15fe"}

```
 {#7398 .graf .graf--pre .graf-after--h4 name="7398"}
Array.from(${1:document}.getElementsByTagName('${2:tag}'))
```


#### `qs⇥`{.markup--code .markup--h4-code} querySelector {#c553 .graf .graf--h4 .graf-after--pre name="c553"}

```
 {#b780 .graf .graf--pre .graf-after--h4 name="b780"}
${1:document}.querySelector('${2:selector}')
```


#### `qsa⇥`{.markup--code .markup--h4-code} querySelectorAll {#e9cc .graf .graf--h4 .graf-after--pre name="e9cc"}

```
 {#046a .graf .graf--pre .graf-after--h4 name="046a"}
Array.from(${1:document}.querySelectorAll('${2:selector}'))
```


#### `cdf⇥`{.markup--code .markup--h4-code} createDocumentFragment {#b531 .graf .graf--h4 .graf-after--pre name="b531"}

```
 {#73ac .graf .graf--pre .graf-after--h4 name="73ac"}
${1:document}.createDocumentFragment(${2:elem});
```


#### `cel⇥`{.markup--code .markup--h4-code} createElement {#1b67 .graf .graf--h4 .graf-after--pre name="1b67"}

```
 {#662f .graf .graf--pre .graf-after--h4 name="662f"}
${1:document}.createElement(${2:elem});
```


#### `heac⇥`{.markup--code .markup--h4-code} appendChild {#1c15 .graf .graf--h4 .graf-after--pre name="1c15"}

```
 {#bea8 .graf .graf--pre .graf-after--h4 name="bea8"}
${1:document}.appendChild(${2:elem});
```


#### `herc⇥`{.markup--code .markup--h4-code} removeChild {#cc84 .graf .graf--h4 .graf-after--pre name="cc84"}

```
 {#4bb5 .graf .graf--pre .graf-after--h4 name="4bb5"}
${1:document}.removeChild(${2:elem});
```


#### `hecla⇥`{.markup--code .markup--h4-code} classList.add {#0231 .graf .graf--h4 .graf-after--pre name="0231"}

```
 {#2d03 .graf .graf--pre .graf-after--h4 name="2d03"}
${1:document}.classList.add('${2:class}');
```


#### `hect⇥`{.markup--code .markup--h4-code} classList.toggle {#cac5 .graf .graf--h4 .graf-after--pre name="cac5"}

```
 {#64a5 .graf .graf--pre .graf-after--h4 name="64a5"}
${1:document}.classList.toggle('${2:class}');
```


#### `heclr⇥`{.markup--code .markup--h4-code} classList.remove {#76bc .graf .graf--h4 .graf-after--pre name="76bc"}

```
 {#fafa .graf .graf--pre .graf-after--h4 name="fafa"}
${1:document}.classList.remove('${2:class}');
```


#### `hega⇥`{.markup--code .markup--h4-code} getAttribute {#87e0 .graf .graf--h4 .graf-after--pre name="87e0"}

```
 {#4356 .graf .graf--pre .graf-after--h4 name="4356"}
${1:document}.getAttribute('${2:attr}');
```


#### `hesa⇥`{.markup--code .markup--h4-code} setAttribute {#553e .graf .graf--h4 .graf-after--pre name="553e"}

```
 {#715a .graf .graf--pre .graf-after--h4 name="715a"}
${1:document}.setAttribute('${2:attr}', ${3:value});
```


#### `hera⇥`{.markup--code .markup--h4-code} removeAttribute {#f919 .graf .graf--h4 .graf-after--pre name="f919"}

```
 {#1078 .graf .graf--pre .graf-after--h4 name="1078"}
${1:document}.removeAttribute('${2:attr}');
```


### Node.js {#389c .graf .graf--h3 .graf-after--pre name="389c"}

#### `cb⇥`{.markup--code .markup--h4-code} Node.js style callback {#90e6 .graf .graf--h4 .graf-after--h3 name="90e6"}

```
 {#72af .graf .graf--pre .graf-after--h4 name="72af"}
function (err, ${1:value}) {
  if (err) throw err
  t${0}
}
```


#### `rq⇥`{.markup--code .markup--h4-code} require a module {#4e52 .graf .graf--h4 .graf-after--pre name="4e52"}

```
 {#e135 .graf .graf--pre .graf-after--h4 name="e135"}
require('${1:module}')
```


#### `cr⇥`{.markup--code .markup--h4-code} require and assign a module {#a45d .graf .graf--h4 .graf-after--pre name="a45d"}

```
 {#3b71 .graf .graf--pre .graf-after--h4 name="3b71"}
const ${1:module} = require('${1:module}') 
```


#### `em⇥`{.markup--code .markup--h4-code} export member {#51bc .graf .graf--h4 .graf-after--pre name="51bc"}

```
 {#0c40 .graf .graf--pre .graf-after--h4 name="0c40"}
exports.${1:name} = ${2:value}
```


#### `me⇥`{.markup--code .markup--h4-code} module.ex orts {#d596 .graf .graf--h4 .graf-after--pre name="d596"}

```
 {#25f4 .graf .graf--pre .graf-after--h4 name="25f4"}
module.exports = ${1:name}
```


#### `on⇥`{.markup--code .markup--h4-code} attach an event hand er {#257c .graf .graf--h4 .graf-after--pre name="257c"}

```
 {#27f5 .graf .graf--pre .graf-after--h4 name="27f5"}
${1:emitter}.on('${2:event}', (${3:arguments}) => {
  ${0}
})
```
 

### Miscellaneous {#1252 .graf .graf--h3 .graf-after--pre name="1252"}

#### `uss⇥`{.markup--code .markup--h4-code} use strict {#f63e .graf .graf--h4 .graf-after--h3 name="f63e"}

```
 {#1447 .graf .graf--pre .graf-after--h4 name="1447"}
'use strict'
```


#### `js⇥`{.markup--code .markup--h4-code} JSON Stringify {#d57d .graf .graf--h4 .graf-after--pre name="d57d"}

```
 {#045e .graf .graf--pre .graf-after--h4 name="045e"} 
JSON.stringify($0)
```


#### `jp⇥`{.markup--code .markup--h4-code} JSON Parse {#7d56 .graf .graf--h4 .graf-after--pre name="7d56"}

```
 {#02bc .graf .graf--pre .graf-after--h4 name="02bc"}
JSON.parse($0)
```


#### `a⇥`{.markup--code .markup--h4-code} await {#c7d1 .graf .graf--h4 .graf-after--pre name="c7d1"}

```
 {#5b3a .graf .graf--pre .graf-after--h4 name="5b3a"}
await ${0}
```


#### `apa⇥`{.markup--code .markup--h4-code} Promise.all {#51d5 .graf .graf--h4 .graf-after--pre name="51d5"}

```
 {#5cc0 .graf .graf--pre .graf-after--h4 name="5cc0"}
await Promise.all(${1:value})
```


#### `apm⇥`{.markup--code .markup--h4-code} Pro ise.all map {#2714 .graf .graf--h4 .graf-after--pre name="2714"}

```
 {#ef98 .graf .graf--pre .graf-after--h4 name="ef98"}
await Promise.all(${1:array}.map((async ${2:value}) => {\n\t${0}\n}))
```


#### `ast⇥`{.markup--code .markup--h4-code} Promise sleep {#07ed .graf .graf--h4 .graf-after--pre name="07ed"}

```
 {#169e .graf .graf--pre .graf-after--h4 name="169e"}
await new Promise((r) => setTimeout(r, ${0}))
```


### Console {#cfc9 .graf .graf--h3 .graf-after--pre name="cfc9"}

#### `cl⇥`{.markup--code .markup--h4-code} console.log {#d8f0 .graf .graf--h4 .graf-after--h3 name="d8f0"}

```
 {#0d27 .graf .graf--pre .graf-after--h4 name="0d27"}
console.log(${0})
```


#### `cv⇥`{.markup--code .markup--h4-code} console.log {#d000 .graf .graf--h4 .graf-after--pre name="d000"}

```
 {#fe2c .graf .graf--pre .graf-after--h4 name="fe2c"}
console.log('${0}:', ${0})
```
 

#### `ce⇥`{.markup--code .markup--h4-code} console.error {#f11a .graf .graf--h4 .graf-after--pre name="f11a"}

```
 {#58cd .graf .graf--pre .graf-after--h4 name="58cd"}
console.error(${0})
```


#### `cw⇥`{.markup--code .markup--h4-code} console.warn {#6a94 .graf .graf--h4 .graf-after--pre name="6a94"}

```
 {#5055 .graf .graf--pre .graf-after--h4 name="5055"}
console.warn(${0})
```


#### `cod⇥`{.markup--code .markup--h4-code} console.dir {#946a .graf .graf--h4 .graf-after--pre name="946a"}

```
 {#1bc4 .graf .graf--pre .graf-after--h4 .graf--trailing name="1bc4"}
console.dir(${0})
```





 ="e10a"}
 

------------------------------------------------------------------------


  
### React snippets {#ce20 .graf .graf--h3 .graf--leading name="ce20"}

Are only enabled in `jsx`{.markup--code .markup--p-code} or
`tsx`{.markup--code .markup--p-code} files. If you write your jsx in
`js`{.markup--code .markup--p-code} files, you need to copy the
`react.json`{.markup--code .markup--p-code} files manually and add it to
your custom snippets.

### Why do we include them here? {#f4de .graf .graf--h3 .graf-after--p name="f4de"}

If you're not writing react, including them should not really bother you
because they are not short as the regular JS snippets. Also IMHO react
is the leading solution for FE apps deserves to be included by default,
because any JS dev will have to write some react eventually over the
course of his/her careeer. By having them in a single package we can
easily make sure --there aren't any conflicts in the trigger prefixes.
 ### Supported languages (file extensions) {#b681 .graf .graf--h3 .graf-after--p name="b681"}

-   [JavaScript (.js)]{#0fae}
-   [TypeScript (.ts)]{#1224}
-   [JavaScript React (.jsx)]{#63dc}
-   [TypeScript React (.tsx)]{#4211}

These were originally taken from
<https://github.com/TimonVS/vscode-react-standard> because the
maintainer wasn't able to  ublish a new version for months even when
there was a considerable flaw in the released version. Below is a list
of all available snippets and the triggers of each one.

TriggerContent`j`{.markup--code .markup--p-code}jsx
element`dp`{.markup--code .markup--p-code}destructuring of
props`ds`{.markup--code .markup--p-code}destructuring of
props`jc`{.markup--code .markup--p-code}jsx self-closed
element`jmjsx elements mapjmrjsx elements map with                 returnrfc` functional component. Prefer for 99% of new react
component`rfce`{.markup--code .markup--p-code}functional component with
emotion css import`rcc`{.markup--code .markup--p-code}class component
skeleton`rccp`{.markup--code .markup--p-code}class component skeleton
with prop types after the class`rcjc` class component skeleton without import and default
export lines`rcfc`{.markup--code .markup--p-code}class component
skeleton that contains all the lifecycle methods`rfcp` stateless component with prop types
skeleton`rpt`{.markup--code .markup--p-code}empty propTypes
declaration`con`{.markup--code .markup--p-code}class default constructor
with props`conc`{.markup--code .markup--p-code}class default constructor
with props and context`est`{.markup--code .markup--p-code}empty state
object`cwmcomponentWillMount methodcdmcomponentDidMount                 methodcwrcomponentWillReceiveProps methodcgdcomponentGetDerivedStateFromProps                 methodscushouldComponentUpdate methodcwupcomponentWillUpdate methodcdupcomponentDidUpdate                 methodcwuncomponentWillUnmount methodrenrender methodsstthis.setState with object as                 parameterssfthis.setState with function as                 parametertpthis.propststhis.stateususeStateueuseEffectuecuseEffect`  with a cleanup
function`uruseRefcccreateContextucuseContextumeuseMemo` -----------------------------------------------------------------------`uquseQuery`  to be used with
graphql-codegen`uqcuseQuery`{.markup--code .markup--p-code} that loads
up data for current component, to be used with
graphql-codegen`umuseMutation`{.markup--code .markup--p-code} to be used
with
graphql-codegen`uqguseQuery with raw gqlumguseMutation with raw                 gql` 

There are also snippets to be triggered with a text selection(trigger
via insert snippet command):

```
 {#9738 .graf .graf--pre .graf-after--p name="9738"}
jsx element wrap selection
```


The following table lists all the snippets that can be used for prop
types. Every snippet regarding prop types begins with `pt`  so it\'s easy to group it all together and explore all
the available options. On top of that each prop type snippets has one
equivalent when we need to declare that this property is also required.
For example `pta`{.markup--code .markup--p-code} creates the
`PropTypes.array`{.markup--code .markup--p-code} and
`ptar`{.markup--code .markup--p-code} creates the
`PropTypes.array.isRequired`{.markup--code .markup--p-code}

TriggerContent`ptaPropTypes.array,ptarPropTypes.array.isRequired,ptbPropTypes.bool,ptbrPropTypes.bool.isRequired,ptfPropTypes.func,ptfrPropTypes.func.isRequired,ptnPropTypes.number,ptnrPropTypes.number.isRequired,ptoPropTypes.object.,ptorPropTypes.object.isRequired,ptsPropTypes.string,ptsrPropTypes.string.isRequired,ptndPropTypes.node,ptndrPropTypes.node.isRequired,ptelPropTypes.element,ptelrPropTypes.element.isRequired,ptiPropTypes.instanceOf(ClassName),ptirPropTypes.instanceOf(ClassName).isRequired,ptePropTypes.oneOf(['News',                 'Photos']),pterPropTypes.oneOf(['News',                 'Photos']).isRequired,ptetPropTypes.oneOfType([PropTypes.string,                 PropTypes.number]),ptetrPropTypes.oneOfType([PropTypes.string,                 PropTypes.number]).isRequired,ptaoPropTypes.arrayOf(PropTypes.number),ptaorPropTypes.arrayOf(PropTypes.number).isRequired,ptooPropTypes.objectOf(PropTypes.number),ptoorPropTypes.objectOf(PropTypes.number).isRequired,ptshPropTypes.shape({color:                 PropTypes.string, fontSize: PropTypes.number}),ptshrPropTypes.shape({color: PropTypes.string, fontSize:                 PropTypes.number}).isRequired,` 

![](https://cdn-images-1.medium.com/max/800/0*8XiVi5TeVDat7LMo.gif) 




 ="4387"}
 

------------------------------------------------------------------------


  
### C/C++ for Visual Studio Code {#ec27 .graf .graf--h3 .graf--leading name="ec27"}

#### [Repository](https://github.com/microsoft/vscode-cpptools)  \| [Issues](https://github.com/microsoft/vscode-cpptools/issues)  \| [Documentation](https://code.visualstudio.com/docs/languages/cpp)  \| [Code Samples](https://github.com/microsoft/vscode-cpptools/tree/master/Code%20Samples)  \| [Offline Installers](https://github.com/microsoft/vscode-cpptools/releases)  {#6345 .graf .graf--h4 .graf-after--h3 name="6345"}

The C/C++ extension adds language support for C/C++ to Visual Studio
Code, including features such as IntelliSense and debugging.

### Overview and tutorials {#c12d .graf .graf--h3 .graf-after--p name="c12d"}

-   [[C/C++ extension
    overview](https://code.visualstudio.com/docs/languages/cpp){.markup--anchor
    .markup--li-anchor}]{#4e14}

C/C++ extension tutorials per compiler and platform \* [Microsoft C++
compiler (MSVC) on
Windows](https://code.visualstudio.com/docs/cpp/config-msvc)  \* [GCC and Mingw-w64 on
Windows](https://code.visualstudio.com/docs/cpp/config-mingw)  \* [GCC on Windows Subsystem for Linux
(WSL)](https://code.visualstudio.com/docs/cpp/config-wsl)  \* [GCC on
Linux](https://code.visualstudio.com/docs/cpp/config-linux)  \* [Clang on
macOS](https://code.visualstudio.com/docs/cpp/config-clang-mac) 
 ### Quick links {#496c .graf .graf--h3 .graf-after--p name="496c"}
 
-   [[Editing features
    (IntelliSense)](https://code.visualstudio.com/docs/cpp/cpp-ide){.markup--anchor
    .markup--li-anchor}]{#1414}
-   [[IntelliSense
    configuration](https://code.visualstudio.com/docs/cpp/customize-default-settings-cpp){.markup--anchor
    .markup--li-anchor}]{#ae9e}
-   [[Enhanced
    colorization](https://code.visualstudio.com/docs/cpp/colorization-cpp){.markup--anchor
    .markup--li-anchor}]{#91d5}
-   [[Debugging](https://code.visualstudio.com/docs/cpp/cpp-debug){.markup--anchor
    .markup--li-anchor}]{#f8a2}
-   [[Debug
    configuration](https://code.visualstudio.com/docs/cpp/launch-json-reference){.markup--anchor
    .markup--li-anchor}]{#fbf3}
-   [[Enable logging for IntelliSense or
    debugging](https://code.visualstudio.com/docs/cpp/enable-logging-cpp){.markup--anchor
    .markup--li-anchor}]{#3e39}

### Questions and feedback {#65a5 .graf .graf--h3 .graf-after--li name="65a5"}

[**FAQs**](https://code.visualstudio.com/docs/cpp/faq-cpp) \
Check out the FAQs before filing a question.

[**Provide
feedback**](https://github.com/microsoft/vscode-cpptools/issues/new/choose) \
File questions, issues, or feature requests for the extension.

[**Known
issues**](https://github.com/Microsoft/vscode-cpptools/issues) \
If someone has already filed an issue that encompasses your feedback,
please leave a 👍 or 👎 reaction on the issue to upvote or downvote it to
help us prioritize the issue.

[**Quick survey**](https://www.research.net/r/VBVV6C6) \
Let us know what you think of the extension by taking the quick survey.

### Offline installation {#5dfe .graf .graf--h3 .graf-after--p name="5dfe"}

The extension has platform-specific binary dependencies, therefore
installation via the Marketplace requires an Internet connection in
order to download additional dependencies. If you are working on a
computer that doe  not have access to the Internet or is behind a strict
firewall, you may need to use our platform-specific packages and install
them by running VS Code's
`"Install from                 VSIX..."`{.markup--code .markup--p-code}
command. These \"offline\' packages are available at:
<https://github.com/Microsoft/vscode-cpptools/releases.>

PackagePlatform`cpptools-linux.vsix`{.markup--code .markup--p-code}Linux
64-bit`cpptools-linux-armhf.vsix`{.markup--code .markup--p-code}Linux
ARM 32-bit`cpptools-linux-aarch64.vsix` Linux ARM 64-bit`cpptools-osx.vsix` macOS`cpptools-win32.vsix` Windows 64-bit &
32-bit`cpptools-win-arm64.vsix`{.markup--code .markup--p-code}Windows
ARM64`cpptools-linux32.vsix`{.markup--code .markup--p-code}Linux 32-bit
([available up to version
0.27.0](https://github.com/microsoft/vscode-cpptools/issues/5346) )

### Contribution {#f7f5 .graf .graf--h3 .graf-after--p name="f7f5"}

Contributions are always welcome. Please see our [contributing
guide](https://github.com/Microsoft/vscode-cpptools/blob/master/CONTRIBUTING.md)  for more details.

### Microsoft Open Source Code of Conduct {#0118 .graf .graf--h3 .graf-after--p name="0118"}

This project has adopted the [Microsoft Open Source Code of
Conduct](https://opensource.microsoft.com/codeofconduct/) . For more information see the [Code of Conduct
FAQ](https://opensource.microsoft.com/codeofconduct/faq/)  or contact opencode\@microsoft.com with any
additional questions or comments.

### Data and telemetry {#49fc .graf .graf--h3 .graf-after--p name="49fc"}

This extension collects usage data and sends it to Microsoft to help
improve our products and services. Collection of telemetry is controlled
via the same setting provided by Visual Studio Code:
`"telemetry.enableTelemetry"`{.markup--code .markup--p-code}. Read our
[privacy
statement](https://privacy.microsoft.com/en-us/privacystatement)  to learn more.

![](https://cdn-images-1.medium.com/max/800/0*Kt-50gUahwYMrK3D.gif) 




 ="d16a"}
 

------------------------------------------------------------------------


{.section-content} 
 
NEXT




 

------------------------------------------------------------------------


  
### Visual Studio IntelliCode {#289d .graf .graf--h3 .graf--leading name="289d"}

The [Visual Studio
IntelliCode](https://go.microsoft.com/fwlink/?linkid=872679)  extension provides AI-assisted development features
for Python, TypeScript/JavaScript and Java developers in Visual Studio
Code, with insights based on understanding your code context combined
with machine learning.

You'll need Visual Studio Code October 2018 Release 1.29.1 or later to
use this extension. For each supported language, please refer to the
"Getting Started" section below to understand any other pre-requisites
you'll need to install and configure to get IntelliCode completions.

For C\#, C++, TypeScript/JavaScript, and XAML support in the Visual
 Marketplace](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.VSIntelliCode) .

### About IntelliCode {#db8e .graf .graf--h3 .graf-after--p name="db8e"}

This extension provides AI-assisted IntelliSense by showing recommended
completion items for your code context at the top of the completions
list. The example below shows this in action for Python code.

![](https://cdn-images-1.medium.com/max/800/0*CQQaJIXL4J2cvEzF) 

When it comes to overloads, rather than taking the time to cycle through
 one first. In the example shown above, you can see that the predicted
APIs that **IntelliCode** elevates appear in a new section of the list
at the top with members prefixed by a star icon. Similarly, a member's
signature or overloads shown in the IntelliSense tool-tip will have
additional text marked by a small star icon and wording to explain the
recommended status. This visual experience for members in the list and
the tool-tip that **IntelliCode** provides is not intended as
final --- it is intended to provide you with a visual differentiation
for feedback purposes only.

Contextual recommendations are based on practices developed in thousands
of high quality, open-source projects on GitHub each with high star
ratings. This means you get context-aware code completions, tool-tips,
and signature help rather than alphabetical or most-recently-used lists.
By predicting the most likely member in the list based on your coding
context, AI-assisted IntelliSense stops you having to hunt through the
list yourself.

### Getting Started {#fc5a .graf .graf--h3 .graf-after--p name="fc5a"}

Install the Visual Studio IntelliCode extension by clicking the install
link on this page, or install from the Extensions tab in Visual Studio
Code. Then follow the language-specific instructions below.

### For TypeScript/JavaScript users: {#46ac .graf .graf--h3 .graf-after--p name="46ac"}

That's it --- just open a TypeScript or JavaScript file, and start
editing.

### For Python users: {#0d80 .graf .graf--h3 .graf-after--p name="0d80"}

1.  [Set up the Python extension by following the steps in the [Python
    tutorial](https://code.visualstudio.com/docs/python/python-tutorial#_prerequisites){.markup--anchor
    .markup--li-anchor}]{#447d}
2.  [Start editing Python files, you should get a prompt to enable the
    Microsoft Python Language Server, which itself is a preview
    release.]{#4637}
3.  [Reload Visual Studio Code after enabling the language
    server]{#d89f}
4.  [After the language server finishes initializing, you should now see
    recommended completions]{#1500}

### For Java users: {#7efd .graf .graf--h3 .graf-after--li name="7efd"}

1.  [Set up the Java extension for Visual Studio Code by following the
    steps in the [Java
    Tutorial](https://code.visualstudio.com/docs/java/java-tutorial){.markup--anchor
    .markup--li-anchor}]{#4c99}
2.  [Make sure that you have a minimum of Java 8 Update 151
    installed]{#66a3}
3.  [Reload Visual Studio Code after enabling the Java extension]{#ac44}
4.  [After the Java language server finishes initializing, you should
    now see recommended completions]{#03ba}

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: {#ea12 .graf .graf--h4 .graf-after--li name="ea12"}

[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz) 
 
[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:

 
[**a/A-Stude t-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 






By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 6, 2021](https://medium.com/p/92c60342cc8a). 


 