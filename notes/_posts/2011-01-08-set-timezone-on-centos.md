---
id: 921
title: Set TimeZone on Centos
date: 2011-01-08T11:52:47+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=921
permalink: /2011/01/08/set-timezone-on-centos/
categories:
  - centos
  - unix
tags:
  - configure
  - system
---
CentOS update breaks another thing &#8211; the logwatch perl timezone manipulation. The exact error message is:  
> ERROR: Date::Manip unable to determine TimeZone.<br />
Execute the following command in a shell prompt:<br />
	perldoc Date::Manip<br />
The section titled TIMEZONES describes valid TimeZones and where they can be defined.

You could fix it modify /etc/localtime. You could use tzconfig command line and follow its questions or:  
> `cp /usr/share/zoneinfo/Europe/Rome /etc/localtime`

If your localtime is different, you could choose your zoneinfo in /usr/share/zoneinfo/.

Referece: [fullo.net](http://www.fullo.net/blog/2007/06/27/settare-la-timezone-in-un-server-centosred-hat/)
