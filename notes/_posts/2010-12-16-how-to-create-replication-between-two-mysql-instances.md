---
id: 871
title: How to create replication between two MySQL instances
date: 2010-12-16T11:19:41+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=871
permalink: /2010/12/16/how-to-create-replication-between-two-mysql-instances/
aktt_notify_twitter:
  - 'no'
categories:
  - configure
tags:
  - configure
  - howto
  - mysql
---
It is important create a mysql user into each instance that it could exec only replication actions, in mysql shell:  
> `create user replica@localhost;`<br />
`grant replication slave on *.* to replica@localhost identified by 'replicapassword';`

Minimal configuration file (/etc/my.cnf) of each mysql instance is:  
**master**  
> [mysqld]<br />
server-id=1<br />
log-bin=/var/log/mysql/binlog.log<br />
expire_logs_days=10<br />
max_binlog_size=100M<br />
datadir=/var/lib/mysql/data<br />
socket=/var/lib/mysql/mysql.sock<br />
innodb_flush_log_at_trx_commit=1<br />
sync_binlog=1

**slave**  
> [mysqld]<br />
server-id=2<br />
master-host=ip.server.master<br />
master-port=3306<br />
master-user=replica<br />
master-password=replicapassword<br />
log-bin=/var/log/mysql/binlog.log<br />
expire_logs_days=10<br />
max_binlog_size=100M<br />
datadir=/var/lib/mysql/data<br />
socket=/var/lib/mysql/mysql.sock<br />
innodb_flush_log_at_trx_commit=1<br />
sync_binlog=1<br />
relay-log-index=slave-relay-bin.index<br />
relay-log=slave-relay-bin

Last step is initializing and starting replication. In mysql shell:  
**master**  
> `reset master;`  

**slave**  
> `change master to master_host='ip.server.master',`<br />
`master_user='replica',`<br />
`master_password='replicapassword',`<br />
`master_port=3306;`<br />

If you want resetting replication:  
**master**  
> `reset master;`  

**slave**  
> `stop slave;`<br />
`reset slave;`<br />
`start slave;`  

If you want show which it is binary file and position:  
> `show master status;`<br />
`show slave status;`

Reference: [mysql.com](http://dev.mysql.com/doc/refman/5.0/en/replication-howto.html)
