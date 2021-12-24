---
id: 104
title: How to moving MU WordPress within your site
date: 2010-10-22T17:24:05+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=104
permalink: /2010/10/22/how-to-moving-mu-wordpress-within-your-site/
categories:
  - wordpress
tags:
  - howto
  - web based
---
Moving the MU WordPress files from one location on your server to another &#8211; changing its URL &#8211; requires some special care.

WordPress is installed into **/wordpress/** default folder and default url is to appear as **http://localhost/wordpress/**. This **howto post** is if you want moving from **/wordpress/** to **/blog/** and you want url to appear as **http://localhost/blog/**, in MU WordPress system. There are any differences about [codex.wordpress.org](http://codex.wordpress.org/Moving_WordPress) tutorial.

Here are the step-by-step instructions:

  * modify **/wordpress/** folder in **/blog/**
      * via ssh:  
> `cd /path-your-main-site`<br />
`mv wordpress blog`

      * via ftp
      * or via your file manager
  * modify **/blog/.htaccess** file: change all occurrences of **wordpress** in **blog**
  * modify mysql record about site url (MU WordPress 3.0 has not **WordPress address** in Administration > Settings > General panel):  
> ``mysql -h host -u user -ppassword database -e "UPDATE `wp_options` SET `option_value` = 'http://localhost/blog' WHERE `option_id` =1 LIMIT 1 ;"``

If you create subdomain site, you finished. If you have subdomain site:

  * digit on browser http://localhost/blog/ (your main site)
  * go to Super Admin > Sites
  * click **Edit** about each site and change all occurrences of **wordpress** in **blog**

Reference: [codex.wordpress.org](http://codex.wordpress.org/Moving_WordPress)
