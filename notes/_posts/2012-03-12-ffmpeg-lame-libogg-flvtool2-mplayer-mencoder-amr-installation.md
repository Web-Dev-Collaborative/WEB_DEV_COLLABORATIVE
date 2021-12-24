---
id: 951
title: FFmpeg, FFmpeg-PHP, Lame, Libogg, Libvorbis, FLVtool2, Mplayer, Mencoder, AMR Installation
date: 2012-03-12T13:20:28+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=951
permalink: /2012/03/12/ffmpeg-lame-libogg-flvtool2-mplayer-mencoder-amr-installation/
categories:
  - debian
  - phpmotion
  - ubuntu
tags:
  - configure
  - howto
  - install
---
**Debian/Ubuntu**  
> `apt-get update`<br />
`apt-get upgrade`<br />
`apt-get install libjpeg-progs libjpeg62 libjpeg62-dev libsdl1.2-dev php5-dev build-essential subversion` `ruby libcurses-ruby git-core yasm unzip`

**Download all the files needed**  
> `cd /opt/phpmotion`<br />
`wget http://sourceforge.net/projects/lame/files/lame/3.99/lame-3.99.5.tar.gz`<br />
`wget http://downloads.xiph.org/releases/ogg/libogg-1.3.0.tar.gz`<br />
`wget http://downloads.xiph.org/releases/vorbis/libvorbis-1.3.3.tar.gz`<br />
`wget http://ftp.penguin.cz/pub/users/utx/amr/amrnb-10.0.0.0.tar.bz2`<br />
`wget http://ftp.penguin.cz/pub/users/utx/amr/amrwb-10.0.0.0.tar.bz2`<br />
`wget http://downloads.xiph.org/releases/theora/libtheora-1.1beta3.tar.gz`<br />
`wget http://www8.mplayerhq.hu/MPlayer/releases/codecs/essential-amd64-20071007.tar.bz2`<br />
`wget http://rubyforge.org/frs/download.php/17497/flvtool2-1.0.6.tgz`<br />
`svn checkout svn://svn.mplayerhq.hu/ffmpeg/trunk ffmpeg`<br />
`wget http://sourceforge.net/projects/ffmpeg-php/files/ffmpeg-php/0.6.0/ffmpeg-php-0.6.0.tbz2`<br />
`svn checkout svn://svn.mplayerhq.hu/mplayer/trunk mplayer`

**Extract all the files**  
> `tar zxvf lame-3.99.5.tar.gz`<br />
`tar zxvf libogg-1.3.0.tar.gz`<br />
`tar zxvf libvorbis-1.3.3.tar.gz`<br />
`bzip2 -cd amrnb-10.0.0.0.tar.bz2 | tar xvf -`<br />
`bzip2 -cd amrwb-10.0.0.0.tar.bz2 | tar xvf -`<br />
`tar zxvf libtheora-1.1beta3.tar.gz`<br />
`tar jxvf ffmpeg-php-0.6.0.tbz2`<br />
`tar zxvf flvtool2-1.0.6.tgz`<br />
`tar jxvf essential-amd64-20071007.tar.bz2`

**Install lame**  
> `cd /opt/phpmotion/lame-3.99.5`<br />
`./configure & make & make install`

**Install libogg**  
> `cd /opt/phpmotion/libogg-1.3.0`<br />
`./configure & make & make install`

**Install libvorbis**  
> `cd /opt/phpmotion/libvorbis-1.3.3`<br />
`./configure & make & make install`

**Install flvtool2**  
> `cd /opt/phpmotion/flvtool2-1.0.6/`<br />
`ruby setup.rb config`<br />
`ruby setup.rb setup`<br />
`ruby setup.rb install`

**Copy Codecs for mplayer**  
> `mkdir /usr/local/lib/codecs`<br />
`mv /opt/phpmotion/essential-amd64-20071007/* /usr/local/lib/codecs/`<br />
`chmod -R 755 /usr/local/lib/codecs/`<br />

We also need to secure the tmp directory  
> `mkdir /usr/local/src/tmp`<br />
`chmod 777 /usr/local/src/tmp`<br />
`export TMPDIR=/usr/local/src/tmp`

**Install mplayer & mencoder**  
> `cd /opt/phpmotion/mplayer`<br />
`svn update`<br />
`./configure --enable-jpeg`<br />
`make & make install`

**Install AMR (for 3gp conversion)**  
_Debian Lenny and Ubuntu 10.04 users, not install AMR packages_  
> `cd /opt/phpmotion/amrnb-10.0.0.0`<br />
`./configure & make & make install`<br />
`cd /usr/local/src/amrwb-10.0.0.0`<br />
`./configure & make & make install`

**Install libtheora (for ogg video encoding)**  
> `cd /opt/phpmotion/libtheora-1.1beta3`<br />
`./configure & make & make install`

**Install ffmpeg**  
> `cd /opt/phpmotion/ffmpeg/`<br />
`svn update`

Debian Lenny and Ubuntu 10.04 users please use the following configure command:  
> `./configure --enable-libmp3lame --enable-libvorbis --disable-mmx --enable-shared --enable-nonfree --enable-libtheora`

Debian Etch and Ubuntu 8.04 users please use the following configure command:  
> `./configure --enable-libmp3lame --enable-libvorbis --disable-mmx --enable-shared --enable-libamr-nb --enable-libamr-wb --enable-nonfree --enable-libtheora`

Ubuntu 7.06 users please use the following configure command:  
> `./configure --enable-libmp3lame --enable-libogg --enable-libvorbis --disable-mmx --enable-shared --enable-libamr-nb --enable-libtheora`

Now run these commands:  
> `make & make install`<br />
`ln -s /usr/local/lib/libavdevice.so.52 /usr/lib/libavdevice.so.52`<br />
`ln -s /usr/local/lib/libavformat.so.52 /usr/lib/libavformat.so.52`<br />
`ln -s /usr/local/lib/libavcodec.so.52 /usr/lib/libavcodec.so.52`<br />
`ln -s /usr/local/lib/libavutil.so.49 /usr/lib/libavutil.so.49`<br />
`ln -s /usr/local/lib/libmp3lame.so.0 /usr/lib/libmp3lame.so.0`<br />
`ln -s /usr/local/lib/libavformat.so.51 /usr/lib/libavformat.so.51`<br />
`ln -s /usr/local/lib/libamrnb.so.3 /usr/lib/libamrnb.so.3`<br />
`ln -s /usr/local/lib/libamrwb.so.3 /usr/lib/libamrwb.so.3`

**Install ffmpeg-php**  
Debian Lenny and Ubuntu 10.04 users please use the following configure command:  
> `aptitude install php5-ffmpeg`

Others Debian and Ubuntu users please use the following configure command:
> `cd /opt/phpmotion/ffmpeg-php-0.6.0/`<br />
`phpize`<br />
`./configure & make & make install`

You now check if there is ffmpeg-php module:  
> `grep -R ffmpeg /etc/php5/*`

If there is not, then you now need to add the new ffmpeg-php module to the php.ini file  
> `nano /etc/php5/apache2/php.ini`<br />
extension=ffmpeg.so (add this line to the end of the file)

**Restart & done**  
> `/etc/init.d/apache2 force-reload`

Reference: [linux.justinhartman.com](http://linux.justinhartman.com/FFmpeg,_FFmpeg-PHP,_Lame,_Libogg,_Libvorbis,_FLVtool2,_Mplayer,_Mencoder,_AMR_Installation)
