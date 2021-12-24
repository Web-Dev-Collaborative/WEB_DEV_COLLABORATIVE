---
id: 30
title: php-mcrypt installation on CentOS
date: 2010-10-19T15:37:23+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=30
permalink: /2010/10/19/php-mcrypt-installation-on-centos/
categories:
  - centos
  - install
tags:
  - install
  - php
---
**Updating/Installing mcrypt**  
If you have php-mcrypt for PHP 5.1.x installed you&#8217;ll want to remove it:  
Note: Your version number maybe different. Alter below command accordingly.  
> `rpm -e php-mcrypt-5.1.6-15.el5.centos.1`  

Download php-mcrypt for PHP 5.2.x and install it. You can find a 32-bit php-mcrypt package here FedoraJunkies.  
Note: You&#8217;ll notice the `--nodeps` flag in the example. When you try to install php-mcrypt without it you get an error that php-common-5.2.6-2.el5s2 is missing even though it is installed.  
> `wget -c http://sourcemirrors.org/scotth/centos/5/php/php-mcrypt-5.2.6-2.i386.rpm`<br />
`rpm -i --nodeps php-mcrypt-5.2.6-2.i386.rpm`  

Restart Apache and you should now see mcrypt information on your testing.php page.

System installs library and creates /usr/lib/php5/../mcrypt.so  
Check if mcrypt.ini file exists or create it in /etc/php5/conf.d and added this one liner:  
> extension=mcrypt.so

Reference: [wiki.centos.org](http://wiki.centos.org/HowTos/PHP_5.1_To_5.2#head-fe084db340a72a9b7b7fca8fcba57ef4e9a34485), [php.net](http://php.net/manual/en/mcrypt.setup.php)
