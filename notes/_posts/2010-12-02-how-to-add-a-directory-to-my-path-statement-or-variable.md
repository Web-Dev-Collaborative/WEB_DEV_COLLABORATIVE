---
id: 844
title: How to add a directory to my PATH statement or variable
date: 2010-12-02T12:35:16+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=844
permalink: /2010/12/02/how-to-add-a-directory-to-my-path-statement-or-variable/
categories:
  - unix
tags:
  - howto
  - system
---
When you type the name of an executable file, GNU/Linux searches for that executable in all the directories specified in the PATH environment variable.  
By default, your GNU/Linux distribution probably set up a default PATH variable during install. To see what your current PATH variable is set to, in a terminal window, type:  
> `echo $PATH`  

and press ENTER. The system should respond by writing out the current value of the PATH variable. That probably looks something like:  
> /usr/bin:/usr/sbin

To add a directory to the PATH statement is a relatively straight forward process, but first a question needs to be answered:  
_Note that these instructions are for a bash shell which is very common n GNU/Linux systems. If you are running another shell, please consult the directions for that shell._  
Which users do you want to be affected by this new PATH value?  
1. In a home GNU/Linux system, it’s likely that there is only one user and therefore the answer is: me and my root account.  
2. If you are running a multi-user system, then the answer is likely: everybody and root.  
3. Possibly the third answer is: only ‘joe’ or some other single user on the system.  
Regardless of which user(s) are to affected, the same line(s) need to be added to a profile file. The only variable is: which file?  
The line(s) or code to add are:  
> `PATH=$PATH:/directory/you/want/to/add`<br />
`export PATH`

NOTE: The export command need only be called once in the profile file and after all the PATH statements in that file. If an export command is already present in the applicable profile file (see below), then you need not add another one.  
You are going to add these lines to the following location depending on which user(s) you want to affect:

1. To add that PATH to every user but root, add the line(s) to /etc/profile  
2. To add that PATH to root, add those line(s) to /root/.bash_profile  
3. To add that PATH to a specific user(s), add the line(s) to /home/user/.bash_profile

> `PATH=$PATH:$HOME/bin`<br />
`PATH=$PATH:/home/flebber/Python`<br />
`export PATH`

Reference: [everyjoe.com](http://everyjoe.com/technology/howto-add-a-directory-to-my-path-statementvariable/), [linuxforums.org](http://www.linuxforums.org/forum/newbie/91912-how-set-path.html)
