---
id: 644
title: How to replace text in single or multiple files
date: 2010-11-17T11:38:45+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=644
permalink: /2010/11/17/how-to-replace-text-in-multiple-files/
categories:
  - code
tags:
  - file
  - howto
---
**sed** commands change from distribution to distribution. The proposed method should be working for each distribution.  
> `for i in *.file; do sed -i _modified 's/foo/bar/g' "$i"; mv "$i"_modified "$i"; done`

If you want add filename into file, you could join another sed command. Our files have code_BLABLA.foo format:  
> `for i in *.foo; do m="$( echo $i | sed 's/_[A-Z_]*.foo//g' )";  sed -i _ 's/#/code='$m'/g' "$i"; done`

If you need add also &#8220;-&#8221; into code because it has ABC12345 format and you want ABC-12345 format:  
> `for i in *.foo; do j="$( echo $i | sed 's/_[A-Z_]*.foo//g' )";  k="$( echo $j | sed 's/\([A-Z]*\)/\1-/' )"; sed -i _ 's/#/code='$k'/g' "$i"; done`
