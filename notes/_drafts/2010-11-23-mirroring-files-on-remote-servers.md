---
id: 700
title: Mirroring files on remote servers
date: 2010-11-23T23:00:29+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=700
permalink: /2010/11/23/mirroring-files-on-remote-servers/
categories:
  - linux distro
tags:
  - howto
  - mirror
---
**Linux File Transfer Methods**  
When we need to download or copy a file from a remote machine to our local one or vice-versa, most of us use a plain, simple to use, FTP client. There are actually a wealth of tools available for transferring files, and some of them perform automation functions that can easily assist your business in building site mirrors, synchronizing directory contents, and more.

These lower security tools include lftp, rsync, and wget. Many of these programs can handle more than just FTP connections, and some even have their own shell-like syntax for sophisticated use.

The high security tools include scp and sftp are specially built for using in a secure manner. These are the tools you&#8217;ll want to develop a habit of using when transferring information you need to keep private. You&#8217;ll need to have ssh configured between the two machines in question before you can use either of these secure tools.

If scp and sftp are high security tools because they use ssh method.. why could we be not power lftp or rsync by ssh?

**lftp**  
Suppose you want or need to transfer files using the venerable FTP protocol. If you haven’t already discovered lftp, then it’s time to investigate. When you connect to a remote machine using lftp it’s rather like having a shell session open on that machine: you can navigate using tab completion and the usual shell tools relating to file and directory operations are there, as well as extra goodies like mirror and a decent help system.  
> `lftp -c 'open -e "set ftp:list-options -a; mirror -a --parallel=10 -v fromdir/ ./todir" -u user,pass host'`<br />
`lftp -c 'open -e "set ftp:passive-mode false; set ftp:list-options -a; mirror -a --parallel=1 --reverse -v fromdir/ ./todir" -u user,pass host'`<br />
`lftp -u user,pass -e "mirror --delete --only-newer --verbose fromdir/ ./todir" host`<br />
`lftp -u user,pass -e "mirror --reverse --delete --only-newer --verbose fromdir/ ./todir" host`

**rsync**  
rsync is another great command-line file-system shifter. It’s designed to keep two directory structures in sync, and to do so efficiently by just transmitting deltas between the two. Typically the source and destination directories reside on separate machines, and rsync is often invoked automatically as a scheduled job. Rsync forms the backbone of many a backup system.  
> `rsync -avrzogtp user@hostname:/fromdir/ ./todir`

_to be continued.._  
**scp**

**mcp**

**sftp**

Reference: [wordaligned.org](http://wordaligned.org/articles/file-shifting-using-lftp-and-rsync), [linux.com](http://www.linux.com/archive/feed/122169), [softpedia.com](http://news.softpedia.com/news/Linux-File-Transfer-Methods-37831.shtml), [krazydad.com](http://www.krazydad.com/mcp.php), [ubuntuforums.org](http://ubuntuforums.org/showthread.php?t=593034), [wordpress.com](http://ayaz.wordpress.com/2006/08/13/rsync-how-to-efficiently-mirror-websites-directories-and-filesystems/), [novell.com](http://www.novell.com/coolsolutions/trench/16061.html)
