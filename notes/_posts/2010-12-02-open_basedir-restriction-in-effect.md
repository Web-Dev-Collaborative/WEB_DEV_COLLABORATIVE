---
id: 849
title: open_basedir restriction in effect
date: 2010-12-02T14:03:21+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=849
permalink: /2010/12/02/open_basedir-restriction-in-effect/
categories:
  - apache
  - configure
  - plesk
tags:
  - configure
  - php
  - web server
---
PHP open\_basedir protection tweak is a Safe Mode security measure that prevents users from opening files or scripts located outside of their home directory with PHP, unless the folder has specifically excluded. PHP open\_basedir setting if enabled, will ensure that all file operations to be limited to files under certain directory, and thus prevent php scripts for a particular user from accessing files in unauthorized user’s account. When a script tries to open a file with, for example, fopen() or gzopen(), the location of the file is checked. When the file is outside the specified or permissible directory-tree, PHP will refuse to open it and the following errors may occur:  
> Warning: file_exists() [function.file-exists]: open_basedir restriction in effect. File ...

The above error message appears on a Apache httpd web server error log (error_log). However, the problem may happen to all system or websites that use PHP as scripting language.  
The solution or workaround to open\_basedir restriction problem is that disable the PHP open\_basedir protection altogether, or to exclude the protection for certain privileged user accounts, or to allow access to the additional directory for PHP scripts.

If you’re using cPanel WebHost Manager (WHM), you can easily disable PHP open\_basedir protection or exclude certain users from the protection with WHM. Simply go to “Tweak Security” under the “Security” section, then select “Configure” link for “Php open\_basedir Tweak”. Inside it, you can enable or disable php open_basedir Protection, or exclude and include hosts from the protection.

If you’re using Plesk hosting control panel, you may need to manually edit Apache configuration file of vhost.conf and vhost\_ssl.conf, and add in or edit the following php\_admin\_value open\_basedir lines to the following:
> &lt;Directory /full/path/to/the/directory/httpdocs&gt;<br />
php_admin_value open_basedir none<br />
&lt;/Directory&gt;<br />
&lt;Directory /full/path/to/the/directory/httpdocs&gt;<br />
php_admin_value open_basedir /full/path/to/dir:/full/path/to/directory/httpdocs:/tmp<br />
&lt;/Directory&gt;

Note: For SSL hosts in the vhost_ssl.conf file, the Directory path will end with “httpsdocs” instead of “httpdocs”.

The paths (above is example only and to be replaced with real path) that behind open_basedir are the directories that specifically allowed for the PHP scripts in the vhost domain account to access, so you can add in more directories that files are been stored and needed to be opened by PHP, each seperated by color “:”. But be careful as it might expose your system to security fraud.

Once done, restart Apache httpd web server (`apache2ctl restart` or `httpd restart`). If you have to manually edit the Apache configuration file to disable PHP open_basedir protection, simply open up the httpd.conf file, and search for the lines that starts with the following characters:  
> php_admin_value open_basedir ...

Replace the whole line under the virtual host for the domain user account that you want to disable protection with the following line to disable it:  
> php_admin_value open_basedir none

You can also opt to allow your PHP scripts to access additional directory instead without disabling the protection. Additional directory can be added to the line, separated with color “:”. For example, to add /new_directory to the allow list:  
> php_admin_value open_basedir “/home/user_account/:/usr/lib/php:/usr/local/lib/php:/tmp”<br />
php_admin_value open_basedir “/home/user_account/:/usr/lib/php:/usr/local/lib/php:/tmp:/new_directory”

Restart the Apache after finished editing. Note that the directory allowed list restriction above is actually a prefix, not a directory name. This means that “open\_basedir = /dir/incl” also allows access to “/dir/include” and “/dir/incls” if they exist. When you want to restrict access to only the specified directory, end with a slash. For example: “open\_basedir = /dir/incl/”.

Reference: [mydigitallife.info](http://www.mydigitallife.info/2007/03/15/php-scripts-open_basedir-restriction-in-effect-error/)
