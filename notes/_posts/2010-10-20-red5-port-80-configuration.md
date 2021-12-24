---
id: 55
title: Red5 port 80 configuration
date: 2010-10-20T16:07:07+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=55
permalink: /2010/10/20/red5-port-80-configuration/
categories:
  - red5
tags:
  - configure
  - streaming
---
You could setup HTTP on port 80 and RTMPT on port 80 as well.  
We need to modify is the server properties file located in the conf directory: red5_path/conf/red5.properties

  * Locate the http.port key and change it to 80 instead of 5080
  * Do not change the rtmpt.port entry, it should be 8088
  * Save and close the file

Reference: [gregoire.org](http://gregoire.org/2009/01/28/rtmpt-and-red5/)

