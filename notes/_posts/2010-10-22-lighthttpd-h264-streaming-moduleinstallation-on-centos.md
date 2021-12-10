---
id: 95
title: lighthttpd h264 streaming module installation on CentOS
date: 2010-10-22T10:49:52+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=95
permalink: /2010/10/22/lighthttpd-h264-streaming-moduleinstallation-on-centos/
categories:
  - centos
  - lighthttpd
tags:
  - install
  - streaming
  - web server
---
> `wget http://packages.sw.be/lighttpd/lighttpd-1.4.28-1.el5.rf.i386.rpm`<br />
`wget http://packages.sw.be/lighttpd/lighttpd-fastcgi-1.4.28-1.el5.rf.i386.rpm`<br />
`wget http://ftp.heanet.ie/mirrors/pld-linux/dists/2.0/updates/general/i386/lighttpd-mod_h264_streaming-1.4.28-1.i386.rpm`<br />
`rpm -ivh lighttpd-1.4.28-1.el5.rf.i386.rpm`<br />
`rpm -ivh lighttpd-fastcgi-1.4.28-1.el5.rf.i386.rpm`<br />
`rpm -ivh --nodeps lighttpd-mod_h264_streaming-1.4.28-1.i386.rpm`  

Edit file /etc/lighttpd/lighttpd.conf and modify **server.use-ipv6** value in disable. I f you could dedicate one IP, uncomment **server.bind** and change localhost with IP dedicated.  
Edit file /etc/lighttpd/modules.conf and:

  * comment all modules in **server.modules**
  * in **server.modules**, add line:  
> "mod_h264_streaming",

  * below **server.modules**, add lines:  
> h264-streaming.extensions = ( ".mp4", ".f4v" )<br />
h264-streaming.buffer-seconds = 10

Start your new web server:  
> `service lighthttpd start`

Add web server in runlevel:  
> `chkconfig --add lighttpd`  

For testing purposes we recommend a tool like **wget**, or **curl**):

  * upload one f4v video to the document root of your website:  
> `wget sample.f4v`<br />
`cp sample.f4v /srv/www/lighttpd/`

  * download the full file:  
> `wget -O test.f4v "http://localhost/sample.f4v"`

  * download file with specify start time:  
> `wget -O test.f4v "http://localhost/sample.f4v?start=45.5"`  

    This saves a file (test.f4v) on your local disk that will have the first 45.5 seconds removed from the original (sample.f4v) video

You can use your favourite player to see if worked okay.

Reference: [installation](http://h264.code-shop.com/trac/wiki/Mod-H264-Streaming-Lighttpd-Version2) and [testing](http://h264.code-shop.com/trac/wiki/Mod-H264-Streaming-Testing-Version2)
