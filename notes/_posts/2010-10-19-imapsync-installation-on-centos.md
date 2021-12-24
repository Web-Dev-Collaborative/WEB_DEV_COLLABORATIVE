---
id: 28
title: imapsync installation on CentOS
date: 2010-10-19T15:26:23+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=28
permalink: /2010/10/19/imapsync-installation-on-centos/
categories:
  - centos
tags:
  - install
  - mail
---
CentOS does not use **yum** to install imapsync as Debian with **apt-get**, so that you must follow these steps:  
> `perl -MCPAN -e "install Test::Inter"`<br />
`perl -MCPAN -e "install Parse::RecDescent"`<br />
`perl -MCPAN -e "install Getopt::Long"`<br />
`perl -MCPAN -e "CPAN::Shell->force(qw(install Date::Manip));"`<br />
`perl -MCPAN -e "CPAN::Shell->force(qw(install Mail::IMAPClient));"`<br />
`perl -MCPAN -e "CPAN::Shell->force(qw(install Term::ReadKey));"`<br />
`wget http://packages.sw.be/imapsync/imapsync-1.350-1.el5.rf.noarch.rpm`<br />
`rpm -i --nodeps imapsync-1.350-1.el5.rf.noarch.rpm`

Reference: [imapsync web site](http://www.linux-france.org/prj/imapsync/)
