---
id: 901
title: How to use vhost.conf in Plesk
date: 2011-01-03T10:42:07+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=901
permalink: /2011/01/03/how-to-use-vhost-conf-in-plesk/
categories:
  - plesk
tags:
  - howto
  - manage
---
Maybe you need to do some specific configurations for a domain or subdomain and you tried to do directly in httpd.include file. You saw that it works for the momment but plesk will delete again your specific configurations from this file. So, in this case the answer is vhost.conf file. This file will be placed inside your domain’s conf directory, usually found at /var/www/domain.com/conf. Create a file called vhost.conf in whatever editor you prefer.

**Modify Plesk skel for each vhost.conf**  
If you want modify configuration for all domains, then you must create vhost.conf in .skel directory:  
> `mkdir /var/www/.skel/0/conf/`<br />
`emacs /var/www/.skel/0/conf/vhost.conf`  

**Modify vhost.conf for one domain**  
If you want modify configuration for one domain, the you must create vhost.conf:  
> `emacs /var/www/onedomain.net/conf/vhost.conf`  

**Modify vhost.conf for one subdomain**  
If you want modify configuration for single subdomain, the you must create vhost.conf:  
> `emacs /var/www/onedomain.net/subdomain/siglesubdomain/conf/vhost.conf`

_**Edit vhost.conf**_  
If you want modify safe_mode directive to off in onedomain.net, then you could create vhost.conf into /var/www/onedomain.net/conf/:  
> &lt;Directory /var/www/onedomain.net/httpdocs&gt;<br />
&lt;IfModule mod_php4.c&gt;<br />
php_admin_flag safe_mode off<br />
&lt;/IfModule&gt;<br />
&lt;IfModule mod_php5.c&gt;<br />
php_admin_flag safe_mode off<br />
&lt;/IfModule&gt;<br />
&lt;/Directory&gt;

Now, you need to tell Plesk to update it’s information.  
You have to run:  
> `/usr/local/psa/admin/sbin/websrvmng -u --vhost-name=onedomain.net`

this will configure plesk only for one single domain, in this case domain.com  
If you want to configure it for all sites run:  
> `/usr/local/psa/admin/bin/websrvmng -a`

After this command if you look to httpd.include file, will see that your httpd.include will have an include line for your vhost.conf, something like this:  
> Include /srv/www/onedomain.net/conf/vhost.conf

There is also a vhost.conf file for subdomain in their DocumentRoot directory, if you want to do some specific things for subdomain.

Now, you must restart apache:  
> `apachectl -t`<br />
`apachectl graceful`

Reference: [vioan.ro](http://www.vioan.ro/wp/2007/07/31/how-to-use-vhostconf-in-plesk/), [deec.it](http://www.deec.it/?s=vhost.conf)
