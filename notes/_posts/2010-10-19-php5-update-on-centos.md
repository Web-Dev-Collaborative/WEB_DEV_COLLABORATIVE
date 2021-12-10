---
id: 37
title: php5 update on CentOS
date: 2010-10-19T16:25:09+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=37
permalink: /2010/10/19/php5-update-on-centos/
categories:
  - centos
  - install
tags:
  - install
  - php
  - repository
---
If you have CentOS v5.2 then you have PHP v5.1.6. Any PHP5 systems need PHP5 > v5.2.  
The php-sqlite2 library has a problem to update so that you must delete it:  
> `yum erase php-sqlite2`  

You have got any solutions.
- Update PHP5 to last stable version and create /etc/yum.repos.d/CentOS-Testing.repo with this content
> [c5-testing]<br />
name=CentOS-5 Testing<br />
baseurl=http://dev.centos.org/centos/$releasever/testing/$basearch/<br />
enabled=1<br />
gpgcheck=1<br />
gpgkey=http://dev.centos.org/centos/RPM-GPG-KEY-CentOS-testing<br />
includepkgs=php*

- Update PHP5 to last beta version and create /etc/yum.repos.d/utterramblings.repo with this content
> [utterramblings]<br />
name=Jason's Utter Ramblings Repo<br />
baseurl=http://www.jasonlitka.com/media/EL$releasever/$basearch/<br />
enabled=1<br />
gpgcheck=1<br />
gpgkey=http://www.jasonlitka.com/media/RPM-GPG-KEY-jlitka

Now, you could update system:  
> `yum update`

Reference: [wiki.centos.org](http://wiki.centos.org/HowTos/PHP_5.1_To_5.2) and [jasonlitka.com](http://www.jasonlitka.com/yum-repository/)
