---
id: 1062
title: How to create Master Master replication between two MySQL instances
date: 2012-08-26T21:26:15+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1062
permalink: /2012/08/26/how-to-create-master-master-replication-between-two-mysql-instances/
aktt_notify_twitter:
  - 'no'
aktt_tweeted:
  - "1"
categories:
  - configure
tags:
  - configure
  - howto
  - mysql
---
MySQL Master Master replication is a double [MySQL Master Slave replication between two MySQL instances](http://ittips.pandle.net/2010/12/16/how-to-create-replication-between-two-mysql-instances/ "How to create replication between two MySQL instances"): one MySQL instance (**Mi1**) is Master and the other MySQL instance (**Mi2**) is Slave and vice versa.

Minimal configuration file (/etc/my.cnf) of each mysql instance is similar:

> [mysqld]<br />
log-bin=/var/log/mysql/binlog.log<br />
expire_logs_days=10<br />
max_binlog_size=100M<br />
datadir=/var/lib/mysql/data<br />
socket=/var/lib/mysql/mysql.sock<br />
innodb_flush_log_at_trx_commit=1<br />
sync_binlog=1<br />
relay-log-index=slave-relay-bin.index<br />
relay-log=slave-relay-bin<br />

There is few difference.  
**Mi1**  
> server-id = 1

**Mi2**  
> server-id = 2

If the servers are not alternative, and both writes into database, then it is important to be alert to the schema of the tables and it could be important add different auto increment configuration.  
**Mi1**  
> auto_increment_increment = 2<br />
auto_increment_offset = 1<br />

**Mi2**  
> auto_increment_increment = 2<br />
auto_increment_offset = 2<br />

The initializing and starting replication is even to [MySQL Master Slave replication between two MySQL instances](http://ittips.pandle.net/2010/12/16/how-to-create-replication-between-two-mysql-instances/ "How to create replication between two MySQL instances").

It is important to assess the risks of a desynchronization between two MySQL instances. The errors can arise in the retrieval of information from the slave. If both instance writes into database, the reasons can be many:

  1. MySQL instances create a record considered as identical to the schema of a table (error 1062, duplicate entry)
  2. MySQL instances can not communicate due to lack of network for a time sufficient to change log file
  3. SQL syntax could be contain an error (error 1064, sql syntax)
  4. and the list is endless

It may need to add the slave skip errors configuration into /etc/my.cnf:  
> slave_skip_errors = 1062,1064

It may need to delete error on the fly with MySQL commands:  
> `stop slave; set global SQL_SLAVE_SKIP_COUNTER=1; start slave;`

Reference: [mysql.com](http://dev.mysql.com/doc/refman/5.1/en/replication-options-master.html)
