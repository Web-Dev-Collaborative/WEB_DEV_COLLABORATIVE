---
id: 658
title: How to add line number
date: 2010-11-17T17:32:26+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=658
permalink: /2010/11/17/how-to-add-line-number/
categories:
  - code
tags:
  - file
  - howto
---
Simple but useful. The sample file is &#8220;,&#8221; delimited.  
> `cat sample`<br />
3232,32332,54545,34<br />
3233,45645,23233,23<br />
1211,1212,4343,434<br />
3434,121121,121,33

If I have to add the line number as the first field. Then  
> `awk '{$1=$1; print NR,$0}' sample`<br />
1 3232,32332,54545,34<br />
2 3233,45645,23233,23<br />
3 1211,1212,4343,434<br />
4 3434,121121,121,33<br />

If I have to change the field separator of the above file from &#8220;,&#8221; to &#8220;|&#8221; (can also be done using &#8216;tr&#8217;) and have to add the line number as the first field. Then  
> `awk 'BEGIN{FS=",";OFS="|"} {$1=$1; print NR,$0}' sample`<br />
1|3232|32332|54545|34<br />
2|3233|45645|23233|23<br />
3|1211|1212|4343|434<br />
4|3434|121121|121|33<br />
