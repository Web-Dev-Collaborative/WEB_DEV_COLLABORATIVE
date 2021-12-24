---
id: 639
title: How to rename multiple files
date: 2010-11-17T10:27:45+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=639
permalink: /2010/11/17/how-to-rename-multiple-files/
categories:
  - code
tags:
  - file
  - howto
---
There are more command line to rename files. If you have not got **rename** command line, you could use follow tips:  
> `ls -d *.foo | sed -e 's/.*/mv & &/' -e 's/foo$/bar/' | sh`

Reference: [faqs.org](http://www.faqs.org/faqs/unix-faq/faq/part2/section-6.html)
