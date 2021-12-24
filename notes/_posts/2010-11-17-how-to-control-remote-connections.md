---
id: 646
title: How to control remote connections
date: 2010-11-17T12:31:15+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=646
permalink: /2010/11/17/how-to-control-remote-connections/
categories:
  - unix
tags:
  - howto
  - network
---
It is often necessary to control the ports because firewall, other inbound port blocking problems, VMWare NAT&#8217;ed without port forwarding, MySQL not listening on the correct interface / MySQL not running networking, incorrect MySQL grant&#8230;)

Things to consider:

  * Is MySQL running and running with networking (you may need to specify a user/pass for these)?
     * check if accessible via UNIX socket
> `mysqladmin --protocol=socket ping`
     * check if accessible via localhost TCP/IP
> `mysqladmin --protocol=tcp ping`
     * check if accessible via external IP (MySQL can be configured to listen on the loopback address only, it can also be configured to *skip-networking* entirely)
> `mysqladmin --protocol=tcp --host=ipaddress ping`

  * Is the machine accessible from other machines? Run
> `nmap -sT -p 22,3306 ipaddress`

  * from another machine, this will give an indication whether the machine is accessible on the SSH/MySQL ports or not
  * If the VM is running in NAT networking mode (as opposed to bridged), then you&#8217;ll need to ensure the correct ports are forwarded to the machine&#8217;s real IP address, or otherwise use the NAT address (where accessible) for communicating
  * Is a firewall on the VM, or the VM&#8217;s host preventing access to port 3306 (the default MySQL port)? Check your firewall rules (`iptables -L for iptables`)
  * If you&#8217;re accessing the MySQL server via DNS, is DNS causing the problem? You can try connecting using the IP address instead of a hostname in this case to eliminate this possibility
  * If logins are working on the machine, but permission is being denied remote machines, remember that MySQL performs access control using username, password and hostname (with wildcards permitted). You may need to adjust your grant tables

Reference: [serverfault.com](http://serverfault.com/questions/94054/remote-connections-and-mysql-on-ubuntu)
