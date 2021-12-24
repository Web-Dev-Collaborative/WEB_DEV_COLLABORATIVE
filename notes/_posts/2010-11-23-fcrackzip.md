---
id: 691
title: fcrackzip
date: 2010-11-23T12:43:13+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=691
permalink: /2010/11/23/fcrackzip/
categories:
  - debian
  - unix
tags:
  - command line
  - file
---
**NAME**  
fcrackzip &#8211; a Free/Fast Zip Password Cracker  
**SYNOPSIS**  
> `fcrackzip  [-bDBchVvplum2] [--brute-force] [--dictionary] [--benchmark] [--charset characterset] [--help] [--validate] [--verbose] [--init-password string/path] [--length min-max] [--use-unzip] [--method name] [--modulo r/m] file...`

**EXAMPLE**  
> `fcrackzip -v -b -p aaaaaaa -u file.zip`<br />
`fcrackzip -b -u -l 1-7 file.zip`
