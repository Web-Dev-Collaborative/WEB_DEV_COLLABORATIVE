---
id: 40
title: MaxClients directive
date: 2010-10-20T09:46:13+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=40
permalink: /2010/10/20/maxclients-directive/
categories:
  - apache
  - centos
  - debian
tags:
  - configure
  - web server
---
The MaxClients directive sets the limit on the number of simultaneous requests that will be served. Any connection attempts over the MaxClients limit will normally be queued, up to a number based on the ListenBacklog directive. Once a child process is freed at the end of a different request, the connection will then be serviced.

For non-threaded servers (i.e., prefork), MaxClients translates into the maximum number of child processes that will be launched to serve requests. The default value is 256; to increase it, you must also raise ServerLimit.

For threaded and hybrid servers (e.g. beos or worker) MaxClients restricts the total number of threads that will be available to serve clients. The default value for beos is 50. For hybrid MPMs the default value is 16 (ServerLimit) multiplied by the value of 25 (ThreadsPerChild). Therefore, to increase MaxClients to a value that requires more than 16 processes, you must also raise ServerLimit.

## Set it on CentOS server
* digit this command line to test how modules are activated: `httpd -l`
* edit /etc/httpd/conf/httpd.conf and add/modify **ServerLimit** directive on active module
> ServerLimit  20000
* test the changes with `apachectl -t`
* reload the service by `apachectl graceful`
* edit /etc/httpd/conf/httpd.conf and modify **MaxClients** directive on active module
> MaxClients  20000
* test the changes with `apachectl -t`
* reload the service by `apachectl graceful`

## Set it on Debian server 
* digit this command line to test how modules are activated: `apache2 -l`
* edit /etc/apache2/apache2.conf and add/modify **ServerLimit** directive on active module
> ServerLimit  20000
* test the changes with `apachectl -t`
* reload the service by `apachectl graceful`
* edit /etc/apache2/apache2.conf and modify **MaxClients** directive on active module
> MaxClients  20000
* test the changes with `apachectl -t`
* reload the service by `apachectl graceful`
        
Reference: [apache2](http://httpd.apache.org/docs/2.0/mod/mpm_common.html)
