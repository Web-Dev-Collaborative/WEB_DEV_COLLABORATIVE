---
id: 19
title: IP Failover configuration
date: 2010-10-19T14:51:21+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=19
permalink: /2010/10/19/ip-failover-configuration/
categories:
  - centos
  - IP Network
tags:
  - configure
  - network
  - ovh
---
Guide to configure IP Failover on CentOS server in ovh farm.  
> `nano /etc/sysconfig/network-scripts/ifcfg-eth0:0`

Copy and paste this code:  
> DEVICE="eth0:0"<br />
BOOTPROTO=static<br />
IPADDR="IP.FAIL.OVER"<br />
NETMASK="255.255.255.255"<br />
BROADCAST="IP.FAIL.OVER"<br />
ONBOOT=yes<br />

**IP.FAIL.OVER** is ip number of your IP Failover. Now set new interface and reboot server:  
> `ifup eth0:0`<br />
`/sbin/reboot`

When server restarted ping IP.FAIL.OVER:  
> `ping IP.FAIL.OVER`

If you have more IP Failover, set eth0:1, eth0:2, ..

Reference: [ovh.it](http://guida.ovh.it/IpSupplementare)
