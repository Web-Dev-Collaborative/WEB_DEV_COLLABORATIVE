---
id: 1075
title: yum segmentation fault in centos
date: 2012-08-29T21:52:12+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1075
permalink: /2012/08/29/yum-segmentation-fault-in-centos/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
categories:
  - centos
  - unix
tags:
  - package management
---
After an upgrading with **yum** program, yum will end with segmentation fault.

Last link about **libz** is the cause:  
> -rwxr-xr-x 1 root root  75028  9 gen  2007 libz.so.1.2.3<br />
-rwxr-xr-x 1 root bin   96572  8 nov  2010 libz.so.1.2.5<br />
-rw-r--r-- 1 root bin  101462  8 nov  2010 libz.a<br />
lrwxrwxrwx 1 root root     13  8 apr  2011 libz.so -> libz.so.1.2.3<br />
lrwxrwxrwx 1 root root     13  8 apr  2011 libz.so.1 -> libz.so.1.2.5

**libz.so.1** need a different link:  
> lrwxrwxrwx 1 root root     13  8 apr  2011 libz.so.1 -> libz.so.1.2.3

Reference: <a href="http://bugs.centos.org/view.php?id=4702&#038;nbn=1" title="yum fails with segfault after source zlib upgrade" target="_blank">yum fails with segfault after source zlib upgrade</a>
