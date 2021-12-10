---
id: 61
title: Red5 IP dedicated configuration
date: 2010-10-20T16:41:13+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=61
permalink: /2010/10/20/red5-ip-dedicated-configuration/
categories:
  - red5
tags:
  - configure
  - streaming
---
You could setup apache2 on one IP (IP.AP.AC.HE) and Red5 on other IP dedicated (IP.DED.ICA.TED).

  * The first file we need to modify is the server properties file located in the conf directory red5_path/conf/red5.properties:  
> `sed "s/0.0.0.0/IP.DED.ICA.TED/g" red5_path/conf/red5.properties`

  * The second file we need to modify is the apache configuration file in the conf directory /etc/httpd/conf/httpd.conf (or /etc/apache2/apache2.conf):  
> `sed "s/Listen 80/Listen IP.AP.AC.HE:80/g" /etc/httpd/conf/httpd.conf`

  * Now you must reboot server:  
> `/sbin/reboot`

Reference: [webmultimediale.org](http://www.webmultimediale.org/guide/webpage/25)
