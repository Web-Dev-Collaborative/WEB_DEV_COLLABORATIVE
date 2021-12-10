---
id: 851
title: PHP PEAR installation and configuration
date: 2010-12-02T15:22:51+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=851
permalink: /2010/12/02/php-pear-installation-and-configuration/
categories:
  - centos
  - debian
  - fedora
  - install
  - ubuntu
  - windows
tags:
  - configure
  - install
  - php
---
PEAR is short for &#8220;PHP Extension and Application Repository&#8221; and is pronounced just like the fruit. The purpose of PEAR is to provide:

  * A structured library of open-source code for PHP users
  * A system for code distribution and package maintenance
  * A standard style for code written in PHP, specified here
  * The PHP Extension Community Library (PECL), see more below
  * A web site, mailing lists and download mirrors to support the PHP/PEAR community

**Installation**  
There is not important what it is your OS: you could download http://pear.php.net/go-pear to begin installation.  
> `wget http://pear.php.net/go-pear`<br />
`mv go-pear go-pear.php`<br />
`php go-pear.php`

or simply:  
> `aptitude install php-pear (Debian / Ubuntu)`<br />
`yum install php-pear (Fedora / Centos)`

**Verifying the include path**  
To use PEAR and PEAR compatible packages in your applications, you normally include them into your PHP scripts using require\_once(). For this to work, PEAR&#8217;s php\_dir must be a part of PHP&#8217;s include path.  
- First, check where PEAR installs .php files:  
> `pear config-get php_dir`  

mine output is:  
> /usr/local/php/pear/

This directory will contain System.php.  
- Now it&#8217;s time to find which configuration file is used by your PHP installation. On command line, execute:  
> `php --ini | grep Loaded`  

mine output is:  
> Loaded Configuration File:         /etc/php.ini

To see which php.ini is used by PHP on your web server, create a file with only <?php phpinfo(); ?> as the contents, and save it in your local web root as check\_php.php. Open the file in your browser as http://localhost/check\_php.php, to find the path to the php.ini file your web server is using.

- include_path about php.ini must include php pear directory:  
> `grep include_path /etc/php.ini  | egrep "^[^;]"`  

mine output is:  
> include_path = ".:/usr/local/php/pear/"

If your include_path does not contain php pear directory, then you must add it modifying php.ini.  
**Modifying php.ini**  
To get PEAR working properly, you need to adjust PHP&#8217;s include_path. After you found php.ini, open it in an editor.  
Search for the line **include_path**.  
Now that you found it, you probably will see a semicolon ; at the beginning. This means the line is a comment. Add a new line below it.  
In this line, write:  
> include_path="."

Depending on your operating system, add a : (Unix/Linux/FreeBSD/Mac OS X) or a ; (Windows) after the dot. Add PEAR&#8217;s php_dir after it. (The directory System.php is located in!)  
The result should look like that:  
> ; Unix<br />
include_path=".:/usr/local/php/pear/"<br />

or  
> ; Windows<br />
include_path=".;C:\php\pear\"

**Checking if PEAR works**  
Now that this is done, try including a file. Create a new check_pear.php file with the following contents:  
> <? php<br />
require_once 'System.php';<br />
var_dump(class_exists('System'));<br />
?>

System.php is shipped with every PEAR installation and thus should be on your computer, too. Open the file with the browser from your web server, and also try it on command line:  
> `php check_pear.php`  

The only output should be  
> bool(true)

A message like:  
> Warning: require_once(System.php): failed to open stream:<br />
 No such file or directory in /path/to/check_pear.php on line 2

means that your include path is not correct. (So go and [fix it](http://pear.php.net/manual/en/installation.checking.php#installation.checking.cli.modifyingphpini)!)  
**Installing packages**  
After getting PEAR working on your machine you most likely want to install some packages. This guide shows people new to the PEAR command line installer how to get started. The general command to install a PEAR package named &#8220;foo&#8221; is  
> `pear install foo`  

Typing this and pressing return, the package will be downloaded and installed on your computer. It does not matter if you write the package name in lowercase, UPPERCASE or MixedCase &#8211; the installer will find the package by lowercasing the name.  
When a package is already installed, you will get the following message:  
> `pear install foo`  

Output is:  
> Ignoring installed package pear/foo<br />
Nothing to install

This happens even if there is a newer version of the package! The correct command to upgrade to the lastest version is  
> `pear upgrade foo`  

Output is:  
> upgrade ok: channel://pear.php.net/Foo-1.2.3

If the package already has the lastest version, you will get a message similar to the following:  
> Ignoring installed package pear/Foo<br />
Nothing to upgrade

In the case you deleted some file and really really want to re-install the package, you have two choices:

  * Uninstall the package, and reinstall it afterwards
  * Force the installation

Forcing an command should only be done when you absolutely know what you are doing &#8211; you might in some circumstances break PEAR otherwise. Forcing something should always be the last option.  
> `pear install -f foo`<br />
`pear upgrade -f foo`

_Unstable alpha/beta packages_  
Now and then, you will get error messages like  
> Failed to download pear/foo within preferred state "stable",<br />
 latest release is version 0.1.2, stability "beta",<br />
 use "channel://pear.php.net/foo-0.1.2" to install<br />
Cannot initialize 'channel://pear.php.net/foo', invalid or missing package file<br />
Package "channel://pear.php.net/foo" is not valid<br />
install failed

Reason for this is that PEAR by default installs stable packages only. When a package is in state devel, alpha or beta it will refuse to install them. You can easily persuade it by adding either the version number or the stability you are willing to accept:  
> `pear install Foo-beta`<br />
`pear install Foo-alpha`

You can also install a specific version, or upgrade to a specific version regardless of the state:  
> `pear install Foo-1.2.3`<br />
`pear upgrade Foo-1.2.3`

**Verifying the open basedir**  
It may happen that from the command line php pear works and via browser no. In the apache configuration file of domain may need to add:
> &lt;Directory "/var/www/domain.my/httpdocs"&gt;<br />
php_admin_value open_basedir "/var/www/domain.my/httpdocs:/usr/local/php/pear/:/tmp"<br />
php_admin_value include_path ".:/usr/local/php/pear/"<br />
&lt;/Directory&gt;

Reference: [about PEAR](http://pear.php.net/manual/en/about.pear.php), [getting started](http://pear.php.net/manual/en/installation.getting.php), [installing packages](http://pear.php.net/manual/en/guide.users.commandline.installing.php), [checking if PEAR works](http://pear.php.net/manual/en/installation.checking.php), [mediatemple.net](http://kb.mediatemple.net/questions/514/Enabling+PEAR+by+setting+your+open_basedir+and+include_path).
