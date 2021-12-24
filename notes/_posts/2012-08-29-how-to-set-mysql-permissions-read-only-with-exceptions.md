---
id: 1083
title: How to set MySQL permissions read-only with exceptions
date: 2012-08-29T22:51:19+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1083
permalink: /2012/08/29/how-to-set-mysql-permissions-read-only-with-exceptions/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
categories:
  - configure
tags:
  - howto
  - mysql
---
The infrastructure about [MySQL Master Slave replication](http://ittips.pandle.net/2010/12/16/how-to-create-replication-between-two-mysql-instances/ "How to create replication between two MySQL instances") involves:

  1. MySQL custom configuration
  2. MySQL custom recall
  3. Optimization and performance about point 1 and 2

Often there are open source that customizes MySQL recall, and it is not simple to adapt a MySQL Master Slave infrastructure. So that any simple idea is considered.

More open source uses user session, and table about session could be unique problem about a system of Master Slave replication with more slave.

Each slave could permit a read-only permission for each table excluding table session with these MySQL commands
> `grant select on database_name.* to 'mysql_user'@'localhost';`<br />
`grant all on database_name.table_session to 'mysql_user'@'localhost';`

Reference: <a href="http://dev.mysql.com/doc/refman/5.1/en/grant.html" title="MySQL grant" target="_blank">mysql.com</a>
