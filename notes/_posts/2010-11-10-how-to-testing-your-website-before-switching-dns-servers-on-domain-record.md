---
id: 121
title: How to testing your website before switching DNS servers on domain record
date: 2010-11-10T23:33:28+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=121
permalink: /2010/11/10/how-to-testing-your-website-before-switching-dns-servers-on-domain-record/
categories:
  - hosts
tags:
  - hosts
  - howto
---
You can test everything by editing the hosts file on your PC. In Unix system there is **/etc/hosts**.  
The hosts file contains lines of text consisting of an IP address in the first text field followed by one or more hostnames, each field separated by white space (blanks or tabulation characters). Comment lines may be included; they are indicated by a hash character (#) in the first position of such lines. Entirely blank lines in the file are ignored.

If you want testing your website on server, add line on /etc/hosts with server IP (IP.SE.RV.ER) and domain name about your website. Open /etc/hosts file:  
> `nano /etc/hosts`  

add this line:  

> IP.SE.RV.ER         www.mywebsite.net

and save file. Now if you ping hostname about your website:
> `ping www.mywebsite.net`  

It pings on IP.SE.RV.ER!

Reference: [wikipedia.org](http://en.wikipedia.org/wiki/Hosts_%28file%29)
