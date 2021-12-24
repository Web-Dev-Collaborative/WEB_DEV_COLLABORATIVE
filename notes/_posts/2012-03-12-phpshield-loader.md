---
id: 978
title: phpSHIELD Loader
date: 2012-03-12T13:21:09+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=978
permalink: /2012/03/12/phpshield-loader/
categories:
  - debian
  - install
  - phpmotion
  - ubuntu
tags:
  - php
  - web based
---
phpSHIELD is a premier php Encoder product. Loaders for phpSHIELD encoded scripts are free to download and install.

**Check your servers PHP version.**
You do this by typing the command:  
> `php -v`

**Check your system architecture.**
You do this by typing the command:  
> `uname -i`  

The result will either be i386 or x86_64. You will need this information to download the correct PHPshield loaders.

**Check your PHP extensions_directory.**
You do this by typing the command:  
> `php -i | grep extension_dir`

My path is  
> extension_dir => /usr/lib/php5/20090626 => /usr/lib/php5/20090626

You must first delete any loaders that may already be in your extensions directory  
> `cd /usr/lib/php5/20090626`<br />
`rm phpshield.*`

**Download PHPshield Loaders.** You must now download the appropriate PHPshield loader, based on your system architecture. below is a list of the files we have available for download

  * Linux, i386, v5.2.x `wget http://downloads.phpmotion.com/phpshield-loaders/32bit/phpshield.5.2.lin`
  * Linux, x86_64, v5.2.x `wget http://downloads.phpmotion.com/phpshield-loaders/64bit/phpshield.5.2.lin`
  * Linux, i386, v5.3.x `wget http://downloads.phpmotion.com/phpshield-loaders/linux/i386/ixed.5.3`
  * Linux, x86_64, v5.3.x `wget http://downloads.phpmotion.com/phpshield-loaders/linux/x86_64/ixed.5.3`

**v5.2.x**  
> `mv phpshield.5.2.lin /usr/lib/php5/20090626/`  

**v5.3.x**  
> `mv ixed.5.3 /usr/lib/php5/20090626/`  

First you need to find out the location of your main php.ini file. This file is the main configuration file for PHP on your server.  
You do this by typing the command below
> `php -i | grep php.ini`

You should get a result that shows something like this
> Loaded Configuration File => /etc/php.ini

In the case of our example above, the path we want it /etc/php.ini (others, /etc/php5/apache2/php.ini)  
Now run the command below. Remember to use your own php.ini directoy path in the command above  
> `echo "extension=ixed.5.3" >> /etc/php.ini`

**Restart your web server**  
> `/etc/init.d/apache restart`<br />

or

> `/etc/init.d/apache2 restart`

Reference: [phpSHIELD PHP encoder](http://www.phpshield.com/loaders/), [Loaders](http://wiki.phpmotion.com/PHPShield)
