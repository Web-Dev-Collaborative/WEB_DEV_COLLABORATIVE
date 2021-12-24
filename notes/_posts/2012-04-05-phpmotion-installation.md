---
id: 974
title: PHPmotion installation
date: 2012-04-05T06:29:33+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=974
permalink: /2012/04/05/phpmotion-installation/
aktt_notify_twitter:
  - 'no'
aktt_tweeted:
  - "1"
categories:
  - phpmotion
tags:
  - howto
  - install
  - web based
---
**PHPmotion**  
PHPmotion is a free video sharing software that also has support for other types of media such as audio/mp3 sharing. The Content Managent System or (media cms application) will allow you to create and run your very own Video Sharing website, Music Sharing Site, Picture Sharing Site.

_Servers &#8211; Linux/Unix server_  
- PHP 4.3 and above (including support of CLI)<br />
- MySQL database server<br />
- LAME MP3 Encoder<br />
- Libogg + Libvorbis<br />
- Mencoder and also Mplayer<br />
- FFMpeg-PHP<br />
- GD Library 2 or higher<br />
- CGI-BIN<br />
- Be able to run background processes`

_PHP Settings_  
> open_basedir = (no value)<br />
upload_max_filesize = 100M<br />
post_max_size = 100M<br />
max_execution_time = 1500<br />
session.gc_maxlifetime = 14000<br />
safe_mode = off<br />
Thread saftery = disabled<br />
enable_dl = On

**Libraries installation**  
Follow the steps on [this page](http://ittips.pandle.net/2012/03/12/ffmpeg-lame-libogg-flvtool2-mplayer-mencoder-amr-installation/ "FFmpeg, FFmpeg-PHP, Lame, Libogg, Libvorbis, FLVtool2, Mplayer, Mencoder, AMR Installation").

**phpSHIELD loader**  
With this error:  
> PHP script /var/www/*/classes/config.php is protected by phpSHIELD and requires the phpSHIELD loader phpshield.5.3.lin. The phpSHIELD loader has not been installed, or is not installed correctly. Please visit the phpSHIELD php encoder site to download required loader.

Follow the steps on [this page](http://ittips.pandle.net/2012/03/12/phpshield-loader/ "phpSHIELD Loader").

With this error:  
> PHP Fatal error: SourceGuardian Loader - This protected script does not support version 5.3.2-1ubu of PHP. Please contact the script author about this problem. Error code [07] in /var/www/*/classes/config.php on line 2

Assuming you have old revision installed, you need to update / upload 4 files from the php5.3 release (or download [here](http://ittips.pandle.net/download/script/php/phpmotion_53_update.zip "phpmotion_53_update.zip"))  
> /classes/config.php<br />
/includes/mp3_id3_utils.php<br />
/addons/customprofile/index.php<br />
/addons/customprofile/pimp.class.php<br />

**Other error infamous**  
_White screen_

  * The following files MUST be uploaded in Binary mode  
> /phpshiled/ #all files in this folder<br />
/classes/config.php<br />
/addons/customprofile/pimp.class.php<br />
/addons/customprofile/index.php
  * Set error_reporting to E_ALL or into apache configuration  
> LogLevel debug
  * Set Thread Safety to disable (follow the steps on <a href="http://ittips.pandle.net/2012/04/25/thread-safety-in-php/" title="Thread Safety in php" target="_blank">this page</a>)
  * Your revision is too old that you must install last revision:
      * Backup your database and /upload and your /themes/*/templates directories
      * Install new release
      * Use old database during new intallation
      * Copy old /upload and your /themes/*/templates directories

Reference: [PHPmotion System Requirements](http://phpmotion.com/content/view/16/32/), [PHPmotion Forum](http://phpmotion.com/forum/index.php?topic=23170.0)
