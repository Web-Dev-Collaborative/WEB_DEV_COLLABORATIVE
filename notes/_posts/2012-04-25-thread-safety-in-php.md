---
id: 1049
title: Thread Safety in php
date: 2012-04-25T15:58:09+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1049
permalink: /2012/04/25/thread-safety-in-php/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
categories:
  - apache
  - configure
  - debian
  - ubuntu
  - windows
tags:
  - safety
  - web server
---
Thread safety is a computer programming concept applicable in the context of multi-threaded programs. A piece of code is thread-safe if it only manipulates shared data structures in a manner that guarantees safe execution by multiple threads at the same time.

There have been a few options available for a while to get PHP performing well on linux or IIS.  
One solution is to configure web service to use PHP in FastCGI mode which allows PHP processes to be recycled rather than killed off after each PHP request and also allows you to run several PHP processes at once, making PHP much much faster with the added bonus that as it is using the CGI interface there is little or no incompatibility issues with PHP extensions.

The utilization of non thread safe binaries does not allow to use FastCGI mode!

**On debian/ubuntu**  
Thread Safety enable.  
> `aptitude install apache2-mpm-worker libapache2-mod-fcgid php5-cgi & a2enmod fcgid & /etc/init.d/apache2 restart`

Thread Safety disable.  
> `aptitude install apache2-mpm-prefork libapache2-mod-php5 & a2dismod fcgid & /etc/init.d/apache2 restart`

If your non thread safe binaries software not works, it was because installing apache2-dev package on my system automatically installs apache2-thread-dev whose apxs2 tells the PHP build system to build with thread-safety on. Therefore, the solution was to directly install apache2-prefork-dev package.

Reference: [Wikipedia](http://en.wikipedia.org/wiki/Thread_safety), [Tnread Safety dis/able](http://www.iis-aid.com/articles/my_word/difference_between_php_thread_safe_and_non_thread_safe_binaries), [Install/Purge package](http://stackoverflow.com/questions/3425514/how-to-disable-thread-safety-in-php)
