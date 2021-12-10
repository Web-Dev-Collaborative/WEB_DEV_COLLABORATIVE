---
id: 1000
title: qmail and simple configuration
date: 2012-03-13T18:46:15+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1000
permalink: /2012/03/13/qmail-plesk-and-simple-configuration/
categories:
  - plesk
  - qmail
tags:
  - configure
  - mail
---
qmail is a modern SMTP server and the second most popular MTA on the Internet. A number of large Internet sites are using qmail, Plesk is one. If you are on Plesk control panel, and need to change email account password then changing password from Plesk is a lengthy process.

qmail is installed into /var/qmail or similar. There are more directories, but four are important: bin, control, mailnames and users. bin directory contains all binary programs about manage qmail service. mailnames directory contains all mail divided by domain and user.

## qmail-control
If you type this command:  
> `man qmail-control`

You obtain info about files into /var/qmail/control directory.  
We analize rejectnonexist, rcpthosts and virtualdomains.

_rejectnonexist_  
File is the list of domains, one per line. qmail-smtpd will reject any envelope recipient address with a domain not listed in rejectnoexist.

_rcpthosts_  
File is the list of domains, one per line. Allowed RCPT domains. If rcpthosts is supplied, qmail-smtpd will reject any envelope recipient address with a domain not listed in rcpthosts. Any details with command line:  
> `man qmail-smptd`

_virtualdomains_  
List of virtual users or domains, one per line. A virtual user has the form user@domain:prepend, without any extra spaces. When qmail-send sees the recipient address user@domain, it converts it to prepend-user@domain and treats it as local. Any details with command line:  
> `man qmail-send`

## qmail-users
If you type this command:  
> `man qmail-users`

You obtain info about files into /var/qmail/users directory: assign and cdb.

_assign_  
List of users addresses. File is a series of assignments, one per line. It ends with a line containing a single dot. Lines must not contain NUL.

_cdb_  
It is a constant database (CDB). CDB is a binary format that can be accessed quickly by qmail-lspawn, even when there are thousands of assignments.

## .qmail files
.qmail files contain a list of delivery instructions, one instruction per line. Delivery of a user&#8217;s mail is usually controlled by one or more &#8220;.qmail&#8221; (pronounced dot kyoo mail) files. The pseudo-user on all qmail systems whose home directory is usually /var/qmail/alias. About each user, home directory is usually /var/qmail/mailnames/domain/user/.qmail. Any details with command line:  
> `man dot-qmail`

## Usage
You could use any programs to manage qmail service. Most popular is vpopmail. vpopmail is a set of API that manages virtual user accounts on a qmail system, and handles delivery for these virtual users. The command-line utilities, and Qmailadmin all use the vpopmail API, provided by the vpopmail library to manage the system. vpopmail does not work with Plesk. So that, you could run the Plesk or qmail commands. Options about Plesk commands line may differ from version to version: we are using v10.3. Any details, you could run each command with `--help`.

## Create a domain
If you want configure only domain mail into Plesk,  
> `/usr/local/psa/bin/domain --create pandle.net -dns false -mail_service true -notify false -ip 192.168.1.11`

else if you have Plesk panel, you could add new domain out to Plesk and you could add mail into qmail service.  
This configuration is available only user with forward because it is disable change password without Plesk or vpopmail.  
You must modify five files (assign, cdb, rejectnonexist, rcpthosts and virtualdomains) and create new directory into /var/qmail/mailnames.  

_/var/qmail/control_  
If the domain is pandle.net, add domain into files:  
> `echo "pandle.net" >> /var/qmail/control/rejectnonexist`<br />
`echo "pandle.net" >> /var/qmail/control/rcpthosts`

To add domain into virtualdomains, and you are using prefix, you must use new prefix. Plesk uses progressive number like id domain. Show last prefix:  
> `tail -n 1 /var/qmail/control/virtualdomains | awk -F ':' '{print $2}'`

If last prefix number is 35, you could use 100 so that you could use again Plesk:  
> `echo "pandle.net:100" >> /var/qmail/control/virtualdomains`  

_/var/qmail/mailnames_  
> `mkdir /var/qmail/mailnames/pandle.net`<br />
`echo "|bouncesaying This\ address\ no\ longer\ accepts\ mail." > /var/qmail/mailnames/pandle.net/.qmail-default`<br />
`chown -R popuser.popuser /var/qmail/mailnames/pandle.net`<br />
`chmod -R 700 /var/qmail/mailnames/pandle.net`

_/var/qmail/users_  
Show values about qmail user: popuser  
> `grep popuser /etc/passwd`  

Output could be:  
> popuser:x:110:31:POP3 service user:/var/qmail/popuser:/bin/false

Add on the top domain line into /var/qmail/users/assign:  
> `nano /var/qmail/users/assign`<br />
+100:popuser:110:31:/var/qmail/mailnames/pandle.net:::

Now run qmail-newu: it processes the assign file and generates a new cdb:  
> `/var/qmail/bin/qmail-newu`

## Create an user
If domain and mail are configured into Plesk and _you must create new user_,  
> `/usr/local/psa/bin/mail --create biliards@pandle.net -passwd mypassword -mailbox true`

else if domain and mail are configured into Plesk and _you must update only password_,  
> `/usr/local/psa/bin/mail -u biliards@pandle.net -passwd mypassword`

else if _domain and mail are not configured into Plesk_, commands are more than one. You must modify two files (assign and cdb) and create new directory into /var/qmail/mailnames/pandle.net. If the user name is biliards, add on the top user line into /var/qmail/users/assign:  
> `nano /var/qmail/users/assign`<br />
> =100-biliards:popuser:110:31:/var/qmail/mailnames/pandle.net/biliards:::

Now run qmail-newu: it processes the assign file and generates a new cdb:  
> `/var/qmail/bin/qmail-newu`

Make the user home directory:  
> `mkdir /var/qmail/mailnames/pandle.net/biliards`<br />
`mkdir /var/qmail/mailnames/pandle.net/biliards/\@attachments<br />
`mkdir /var/qmail/mailnames/pandle.net/biliards/Maildir<br />
`mkdir /var/qmail/mailnames/pandle.net/biliards/Maildir/cur<br />
`mkdir /var/qmail/mailnames/pandle.net/biliards/Maildir/new<br />
`mkdir /var/qmail/mailnames/pandle.net/biliards/Maildir/tmp`

Make two files:  
> `cat /var/qmail/mailnames/pandle.net/biliards/.qmail`<br />
true<br />
/usr/bin/deliverquota ./Maildir<br />
`cat /var/qmail/mailnames/pandle.net/biliards/Maildir/maildirsize`<br />
0S,0C<br />
           0           0

Modify the owner and permissions:  
> `chown -R popuser.popuser /var/qmail/mailnames/pandle.net/biliards`<br />
`chmod -R 700 /var/qmail/mailnames/pandle.net/biliards`<br />
`chmod 600 /var/qmail/mailnames/pandle.net/biliards/.qmail`<br />
`chmod 644 /var/qmail/mailnames/pandle.net/biliards/Maildir/maildirsize`

User password is configurable only Plesk or vpopmail programs. So that, if you have other domains configured into Plesk, you must use Plesk commands or you add line to user .qmail file to forward mailing:  
> `cat /var/qmail/mailnames/pandle.net/biliards/.qmail`<br />
true<br />
/usr/bin/deliverquota ./Maildir<br />
&ittips@pandle.net

## Create an alias
If domain and mail are configured into Plesk and _you must create new user alias_,  
for example, user biliards and alias bilardi and webmaster,  
> `/usr/local/psa/bin/mail -u biliards@pandle.net -aliases add:bilardi,webmaster`  

else if you want create only alias about mail already configured,  
> `nano /var/qmail/users/assign`<br />
=100-biliards:popuser:110:31:/var/qmail/mailnames/pandle.net/biliards:::

Now run qmail-newu: it processes the assign file and generates a new cdb:  
> `/var/qmail/bin/qmail-newu`

**To test mail that you created, follow the steps on [this page](http://ittips.pandle.net/2010/11/14/telnet/ "telnet").**

Reference: <a href="http://www.lifewithqmail.org/lwq.html" title="Life with qmail" target="_blank">lifewithqmail.org</a>, <a href="http://qmail.org/qmail-manual-html/misc/FAQ.html" title="FAQ" target="_blank">FAQ</a>, <a href="http://qmailwiki.org/index.php/Vpopmail" title="Vpopmail" target="_blank">vpopmail</a>, <a href="http://www.whirlycott.com/phil/pop3.html" title="pop account" target="_blank">pop account</a>
