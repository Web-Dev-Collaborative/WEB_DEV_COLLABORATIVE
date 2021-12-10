---
id: 868
title: How to install multiple MySQL instances on the same machine
date: 2010-12-15T18:13:45+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=868
permalink: /2010/12/15/how-to-install-multiple-mysql-instances-on-the-same-machine/
categories:
  - configure
tags:
  - configure
  - howto
  - mysql
---
There are various methods to run multiple instances of mysql (on different ports) on the same machine. We can either compile the mysql binary with different defaults and paths, use mysqld_multi or the MySQL Sandbox project. Still the simplest solution I’ve used in the past for such situations is to use the same binary and use a separate configuration file (with separate port, pid, socket and data directory). This post will explain this method.

**Create separate data and log directories**  
We need to create new directories for our datadir and log folder (if used). Also we need to assign proper permissions on those folders:  
> `mkdir /var/lib/mysql2`<br />
`chown -R mysql:mysql /var/lib/mysql2/`<br />
`mkdir /var/log/mysql2`<br />
`chown -R mysql:mysql /var/log/mysql2`

**Create a new mysql configuration file**  
Next we need a separate configuration file. We can start by copying the existing one and changing the needed values. This example was taken on a debian machine that holds the mysql configurations under /etc/mysql/my.cnf. We just copy this folder and modify it from there:  
> `cp -R /etc/mysql/ /etc/mysql2`  

if you use a redhat variant package then your configuration file is under /etc/my.cnf by default and you can just copy it directly:  
> `cp /etc/my.cnf /etc/my2.cnf`  

(or change the path appropriately for your configuration file is in a different place).  
Next, we need to edit our new configuration file and at least update the mysql port (default to 3306), the pid and socket to be different than the default ones, and also point the data and log folders to the ones created before.  
> `cd /etc/mysql2/`<br />
`sed -i 's/3306/3307/g' my.cnf`<br />
`sed -i 's/mysqld.sock/mysqld2.sock/g' my.cnf`<br />
`sed -i 's/mysqld.pid/mysqld2.pid/g' my.cnf`<br />
`sed -i 's/var\/lib\/mysql/var\/lib\/mysql2/g' my.cnf`<br />
`sed -i 's/var\/log\/mysql/var\/log\/mysql2/g' my.cnf`

**Initializing and starting**  
Finally we need to initialize the default dbs:  
> `mysql_install_db --user=mysql --datadir=/var/lib/mysql2/`  

Alternatively we can copy the existing /var/lib/mysql if this is needed (shut down mysql prior to do this).  
Finally we can start our new mysql instance with:  
> `mysqld_safe --defaults-file=/etc/mysql2/my.cnf &#038;`  

We can connect to our new instance using:  
> `mysql -S /var/run/mysqld/mysqld2.sock`  

or  
> `mysql -h 127.0.0.1 -P 3307`  

and if we no longer need it, stop it with:  
> `mysqladmin -S /var/run/mysqld/mysqld2.sock shutdown`

## Other solution
**Create a unique mysql configuration file**  
You could create unique mysql configuration file /etc/my.cnf. You could label each instance with a number and define same parameters into unique file.  
If you have got two instances, 1 and 2, your minimal mysql congifuration file could be this:  
> [mysqld1]<br />
set-variable=local-infile=0<br />
datadir=/var/lib/mysql1<br />
socket=/var/lib/mysql1/mysql.sock<br />
user=mysql<br />
old_passwords=1<br />
bind-address=127.0.0.1<br />
[mysqld_safe1]<br />
log-error=/var/log/mysql1/mysqld.log<br />
pid-file=/var/run/mysqld/mysqld1.pid

> [mysqld2]<br />
set-variable=local-infile=0<br />
datadir=/var/lib/mysql2<br />
socket=/var/lib/mysql2/mysql.sock<br />
user=mysql<br />
old_passwords=1<br />
bind-address=127.0.0.1<br />
[mysqld_safe2]<br />
log-error=/var/log/mysql2/mysqld.log<br />
pid-file=/var/run/mysqld/mysqld2.pid

Each directory had owner mysql user:  
> `chown -R mysql:mysql /path/directory`

**Initializing and starting**  
As above. Or you could use mysqld_multi command line to start mysql instances together:  
> `mysqld_multi --verbose --log=/var/log/mysqld.log start 1,2`

About stop instances, you could use mysqladmin command line as above. If you  
need a particular mysql user about shutdown particular mysql instance, you could use:  
> `mysqladmin --defaults-file=/etc/myuser.cnf shutdown`  

where /etc/myuser.cnf is:  
> [client]<br />
user=myuser<br />
password=myuserpassword<br />
socket=/var/lib/mysql1/mysql.sock

and you must add in mysql shell:  
> `GRANT SHUTDOWN ON *.* TO 'myuser'@'localhost' IDENTIFIED BY 'myuserpassword'`

**Check port of MySQL instances**  
If you have worked well, then you have got two MySQL instances that they listen on different ports:  
> `netstat -ntl`  

My output is:  
> Active Internet connections (only servers)<br />
Proto Recv-Q Send-Q Local Address               Foreign Address             State<br />
tcp        0      0 127.0.0.1:3306              0.0.0.0:*                   LISTEN<br />
tcp        0      0 127.0.0.1:3307                 0.0.0.0:*                   LISTEN<br />

Reference: [ducea.com](http://www.ducea.com/2009/01/19/running-multiple-instances-of-mysql-on-the-same-machine/)
