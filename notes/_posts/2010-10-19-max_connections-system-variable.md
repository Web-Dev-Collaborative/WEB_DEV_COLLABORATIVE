---
id: 6
title: max_connections system variable
date: 2010-10-19T14:07:43+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=6
permalink: /2010/10/19/max_connections-system-variable/
categories:
  - mysql
tags:
  - configure
  - mysql
---
The number of connections permitted is controlled by the [max_connections](http://dev.mysql.com/doc/refman/5.1/en/server-system-variables.html#sysvar_max_connections) system variable. How to modify max_connections value:  
> `/etc/init.d/mysqld stop`<br />
`mysqld_safe -O max_connections=1000 &`<br />
`mysqladmin variables -u admin -ppassword | grep max_connections`  

or into /etc/my.cnf under the **[mysqld]** section add:  
> max_connections = 500

or log in mysql as root and execute:  
> `SET GLOBAL max_connections = 500;`

and restart MySQL:  
> `/etc/init.d/mysqld start`

Reference:[dev.mysql.com](http://dev.mysql.com/doc/refman/5.1/en/too-many-connections.html)
