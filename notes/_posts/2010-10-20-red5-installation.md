---
id: 47
title: Red5 installation
date: 2010-10-20T10:53:36+00:00
##author: biliards
layout: post
guid: http://ittips.bilardi.net/wordpress/?p=47
permalink: /2010/10/20/red5-installation/
categories:
  - centos
  - debian
  - red5
  - ubuntu
tags:
  - install
  - streaming
---
**CentOS**

  * Download and Install Java. RED5 server depends on Java. CentOS 5.3 comes with OpenJDK 1.6 and install it using yum.  
> `yum -y install java-1.6.0-openjdk java-1.6.0-openjdk-devel`

  * Download and Install Ant (Apache Project). Ant will need to compile RED5 server code. Ant comes in binary form, so just download and install it in /usr/local directory.  
> `cd /usr/src`<br />
`wget http://mirrors.kahuki.com/apache/ant/binaries/apache-ant-1.8.0-bin.tar.bz2`<br />
`tar jxvf apache-ant-1.8.0-bin.tar.bz2<br />
`mv apache-ant-1.8.0 /usr/local/ant`

  * Export Variables for Ant and Java  
> `export ANT_HOME=/usr/local/ant`<br />
`export JAVA_HOME=/usr/lib/jvm/java`<br />
`export PATH=$PATH:/usr/local/ant/bin`<br />
`export CLASSPATH=.:$JAVA_HOME/lib/classes.zip`

    Also export these variables in /etc/bashrc to become available for every user login or for any terminal opens.  
> `export ANT_HOME=/usr/local/ >> /etc/bashrc`<br />
`export JAVA_HOME=/usr/lib/jvm/ >> /etc/bashrc`<br />
`export PATH=$PATH:/usr/local/ant/ >> /etc/bashrc`<br />
`export CLASSPATH=.:$JAVA_HOME/lib/classes. >> /etc/bashrc`

  * Download and Install RED5 Server. Here the latest version available for RED5 is 0.7 on site but download from google code using svn as the tarball of 0.7 on site is missing some of the files.  
> `cd /usr/src`<br />
`svn checkout http://red5.googlecode.com/svn/java/server/trunk/ red5`<br />
`mv red5 /usr/local/`<br />
`cd /usr/local/red5`<br />
`ant prepare`<br />
`ant dist`

  * you will see a ton of lines, but you should get at last  
    `<br />
BUILD SUCCESSFUL`  
    this mean its install and now copy the conf directory from dist/ and test the red5 installation.  
> `cp -r dist/conf .`<br />
`./red5.sh`  

    If it shows Installer service created in the last then everything is fine here, press ctrl+c and move to next step to create init script.

**Debian**

  * Before beginning this make sure you are running these commands as root. Install Subversion:  
> `apt-get install subversion`

  * Install tools to build your own Debian packages:  
> `apt-get install dpkg-dev`<br />
`apt-get install debhelper`<br />
`apt-get install dh-make`<br />
`apt-get install devscripts`<br />
`apt-get install fakeroot`

  * Install Java (see this tutorial for more info):  
> `apt-get install java-package`

  * Install Apache Ant 1.7:  
> `wget http://apache.mirror.transip.nl/ant/binaries/apache-ant-1.7.0-bin.tar.gz`<br />
`gzip -d xf apache-ant-1.7.0-bin.tar.gz`<br />
`tar -xf apache-ant-1.7.0-bin.tar`<br />
`cd apache-ant-1.7.0`<br />
`mv apache-ant-1.7.0 /usr/local/ant`<br />
`export ANT_HOME=/usr/local/ant`

  * Once Java and Ant are all set up you simply download the latest development version of Red5 to your box.  
> `svn co http://svn1.cvsdude.com/osflash/red5/java/server/trunk red5-trunk`  

    That will create a folder in your current directory called red5-trunk.
  * Navigate to the red5-trunk directory and run  
> `/usr/local/ant/bin/ant`

    That will build the project on your machine.
  * At this point you will need to create a red5 directory in the /usr/local/red5 directory.  
> `mkdir /usr/local/red5`

  * Then you will want to copy the contents of the dist(distribution) folder to /usr/local/red5 like so  
> `cp -R red5-trunk/dist/* /usr/local/red5/`

  * We need need to fix the permissions on the red5.sh file:  
> `cd /usr/local/red5`<br />
`chmod 755 red5.sh`

  * To run the server you have a few options using the red5.sh file. Run the server by either running  
> `sh red5.sh &`<br />

or
> `./red5.sh &`

    This will start the Red5 service manually.
  * Verify the correct ports are being bound to:  
> `netstat -ant`

**Ubuntu**  
> `sudo apt-get update`<br />
`sudo apt-get install subversion`<br />
`sudo apt-get install java-package`<br />
`sudo apt-get install sun-java6-jdk`<br />
`sudo apt-get install ant`<br />
`mkdir -p ~/svn/red5`<br />
`cd ~/svn/red5`<br />
`svn checkout http://red5.googlecode.com/svn/java/server/trunk/ red5-read-only`<br />
`export JAVA_HOME=/usr/lib/jvm/java-6-sun`<br />
`export ANT_HOME=/usr/share/ant/`<br />
`cd ~/svn/red5/red5-read-only`<br />
`/usr/share/ant/bin/ant`<br />
`sudo mkdir /usr/share/red5`<br />
`cd ~/svn/red5/red5-read-only/dist`<br />
`sudo cp -R * /usr/share/red5/`<br />
`cd /usr/share/red5`<br />
`sudo chmod 755 red5.sh`<br />
`/usr/share/red5/red5.sh &`

**Digit on browser**: http://localhost:5080 and good luck!

**Init Script**  
Now we will create init script for red5 to start, stop and restart easily.  
> `wget http://ittips.pandle.net/download/script/bash/red5.txt`<br />
`cp red5.txt /etc/init.d/red5`<br />
`chmod 755 /etc/init.d/red5`

Reference: [corsidiinformaticaonline.it](http://www.corsidiinformaticaonline.it/corso-red5/index.php), [red5server.org](http://www.red5server.org/content_red5installdebian_500005), [sohailriaz.com](http://www.sohailriaz.com/how-to-install-red5-server-on-centos-53/)
