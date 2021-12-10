---
id: 830
title: Installing msttcorefonts
date: 2010-12-02T09:05:43+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=830
permalink: /2010/12/02/installing-msttcorefonts/
categories:
  - centos
  - debian
  - fedora
  - ubuntu
tags:
  - font
  - install
---
If you need MS fonts installed in our Linux Operating System, in order to look at the documents in the same way they are looking at it.  
**on Debian / Ubuntu**  
> `sudo aptitude install msttcorefonts`  

**on Fedora / Centos**  
_Install the software needed_  
> `sudo yum install rpm-build cabextract`  

or  
download **cabextract** package [here](http://www.cabextract.org.uk/)  
_Download the specs to build the RPM_  
> `wget http://corefonts.sourceforge.net/msttcorefonts-2.0-1.spec`  

_Build the RPM_  
> `rpmbuild -ba msttcorefonts-2.0-1.spec`  

or  
> `wget http://quattorsrv.lal.in2p3.fr/packages/lemon/sl-i386/msttcorefonts-2.0-1.noarch.rpm`  

_Install the RPM_  
> `rpm -ivh msttcorefonts-2.0-1.noarch.rpm`  

_Reload xfs_  
> `/sbin/service xfs reload`  

Now the msttcorefonts are installed and available. Look:  
> `yum list msttcorefonts`

Reference: [sourceforge.net](http://corefonts.sourceforge.net/)
