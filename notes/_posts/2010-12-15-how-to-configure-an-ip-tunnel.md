---
id: 860
title: How to configure an IP Tunnel
date: 2010-12-15T17:28:27+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=860
permalink: /2010/12/15/how-to-configure-an-ip-tunnel/
categories:
  - IP Network
tags:
  - configure
  - howto
  - network
---
An IP tunnel is an Internet Protocol (IP) network communications channel between two networks. It is used to transport another network protocol by encapsulation of its packets.

IP tunnels are often used for connecting two disjoint IP networks that don&#8217;t have a native routing path to each other, via an underlying routable protocol across an intermediate transport network. In conjunction with the IPsec protocol they may be used to create a virtual private network between two or more private networks across a public network such as the Internet. Another prominent use is to connect islands of IPv6 installations across the IPv4 Internet.

You could try by two ways.  
**On-the-fly way**  
In the first (192.168.0.18) endpoint:  
> `ip tunnel add mytun mode ipip local 192.168.0.18 remote 192.168.0.118`<br />
`ip addr add 10.168.0.18/24 dev mytun`<br />
`ip link mytun up`  

In the second (192.168.0.118) endpoint:  
> `ip tunnel add mytun mode ipip local 192.168.0.118 remote 192.168.0.18`<br />
`ip addr add 10.168.0.118/24 dev mytun`<br />
`ip link mytun up`

**Permanent way**  
Host 192.168.0.18:  
> DEVICE=mytun<br />
TYPE=IPIP<br />
MY_OUTER_IPADDR=192.168.0.18<br />
PEER_OUTER_IPADDR=192.168.0.118<br />
MY_INNER_IPADDR=10.168.0.18/24<br />
PEER_INNER_IPADDR=10.168.0.118/24<br />
ONBOOT=yes

Host 192.168.0.118:  
> DEVICE=mytun<br />
TYPE=IPIP<br />
MY_OUTER_IPADDR=192.168.0.118<br />
PEER_OUTER_IPADDR=192.168.0.18<br />
MY_INNER_IPADDR=10.168.0.118/24<br />
PEER_INNER_IPADDR=10.168.0.18/24<br />
ONBOOT=yes

To starting tunnel is simple. On host 192.168.0.18 and on host 192.168.0.118:  
> `ifup mytun`

If you want check up tunnel:  
> `ip addr ls`

Reference: [wikipedia.org](http://en.wikipedia.org/wiki/IP_tunnel), [daverdave.com](http://www.daverdave.com/?q=node/105)
