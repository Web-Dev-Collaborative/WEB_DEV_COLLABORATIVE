---
id: 714
title: How to insert into plesk new db and user db manually
date: 2010-11-24T11:00:54+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=714
permalink: /2010/11/24/how-to-insert-into-plesk-new-db-and-user-db-manually/
categories:
  - plesk
tags:
  - howto
  - manage
---
If you are a maniac of the shell but you need to work with plesk. If you&#8217;re not the only one to administer the db and who is not a practical use plesk.  
If you created the db via shell are in use and can not stop their use. It is good that the db and db users you entered manually, are also present in plesk.

The process is very simple. Plesk uses three tables:  
<pre>
mysql> desc accounts;
+----------+------------------+------+-----+---------+----------------+
| Field    | Type             | Null | Key | Default | Extra          |
+----------+------------------+------+-----+---------+----------------+
| id       | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| type     | varchar(32)      | NO   |     | plain   |                |
| password | text             | YES  |     | NULL    |                |
+----------+------------------+------+-----+---------+----------------+
mysql> desc db_users;
+------------+------------------+------+-----+---------+----------------+
| Field      | Type             | Null | Key | Default | Extra          |
+------------+------------------+------+-----+---------+----------------+
| id         | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| login      | varchar(16)      | NO   |     | NULL    |                |
| account_id | int(10) unsigned | NO   | MUL | NULL    |                |
| db_id      | int(10) unsigned | NO   | MUL | NULL    |                |
+------------+------------------+------+-----+---------+----------------+
mysql> desc data_bases;
+-----------------+------------------------------------+------+-----+---------+----------------+
| Field           | Type                               | Null | Key | Default | Extra          |
+-----------------+------------------------------------+------+-----+---------+----------------+
| id              | int(10) unsigned                   | NO   | PRI | NULL    | auto_increment |
| name            | varchar(63)                        | NO   | MUL | NULL    |                |
| type            | enum('mysql','postgresql','mssql') | NO   |     | mysql   |                |
| dom_id          | int(10) unsigned                   | NO   | MUL | NULL    |                |
| db_server_id    | int(10) unsigned                   | NO   | MUL | NULL    |                |
| default_user_id | int(10) unsigned                   | YES  |     | NULL    |                |
+-----------------+------------------------------------+------+-----+---------+----------------+
</pre>

So you can add, for each database, the following lines:  
> `mysql> insert into accounts values(id,'plain','dbUserPassword');`<br />
`mysql> insert into data_bases values(id,'dbName','mysql',idDomain,idDbServer,idDbUser);`<br />
`mysql> insert into db_users values(id,'dbUserName',idAccount,idDb);`
