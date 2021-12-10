---
id: 842
title: How to add user to group
date: 2010-12-02T12:09:59+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=842
permalink: /2010/12/02/how-to-add-user-to-group/
categories:
  - unix
tags:
  - howto
  - user
---
How can I add a user to a group under Linux operating system?

You can use the useradd or usermod commands to add a user to a group. The useradd command creates a new user or update default new user information. The usermod command modifies a user account i.e. it is useful to add user to existing group. There are two types of group. First is primary user group and other is secondary group. All user account related information is stored in /etc/passwd, /etc/shadow and /etc/group files to store user information.

**useradd Example &#8211; Add A New User To Secondary Group**  
You need to the useradd command to add new users to existing group (or create a new group and then add user). If group does not exist, create it. The syntax is as follows:  
> `useradd -G {group-name} username`

In this example, create a new user called vivek and add it to group called developers. First login as a root user (make sure group developers exists), enter:  
> `grep developers /etc/group`  

Output:  
> developers:x:1124:

If you do not see any output then you need to add group developers using groupadd command:  
> `groupadd developers`  

Next, add a user called vivek to group developers:  
> `useradd -G developers vivek`  

Setup password for user vivek:  
> `passwd vivek`  

Ensure that user added properly to group developers:  
> `id vivek`  

Output:  
> uid=1122(vivek) gid=1125(vivek) groups=1125(vivek),1124(developers)

Please note that capital G (-G) option add user to a list of supplementary groups. Each group is separated from the next by a comma, with no intervening whitespace. For example, add user jerry to groups admins, ftp, www, and developers, enter:  
> `useradd -G admins,ftp,www,developers jerry`

**useradd example &#8211; Add a new user to primary group**  
To add a user tony to group developers use following command:  
> `useradd -g developers tony`<br />
`id tony`  

Output:  
> uid=1123(tony) gid=1124(developers) groups=1124(developers)

Please note that small -g option add user to initial login group (primary group). The group name must exist. A group number must refer to an already existing group.

**usermod example &#8211; Add a existing user to existing group**  
Add existing user tony to ftp supplementary/secondary group with usermod command using -a option ~ i.e. add the user to the supplemental group(s). Use only with -G option :  
> `usermod -a -G ftp tony`  

Change existing user tony primary group to www:  
> `usermod -g www tony`

Reference: [cyberciti.biz](http://www.cyberciti.biz/faq/howto-linux-add-user-to-group/)
