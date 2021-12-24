---
id: 1087
title: How to create and run a jar file
date: 2012-09-08T17:57:34+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1087
permalink: /2012/09/08/how-to-create-and-run-a-jar-file/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
categories:
  - java
tags:
  - command line
  - howto
---
JAR (Java ARchive) is an archive file format typically used to aggregate many Java class files and associated metadata and resources (text, images and so on) into one file to distribute application software or libraries on the Java platform.

JAR files are built on the ZIP file format and have the .jar file extension. Computer users can create or extract JAR files using the jar command that comes with a JDK. They can also use zip tools to do so; however, the order of entries in the zip file headers is important when compressing, as the manifest often needs to be first.

## How to create jar file
Into directory, there are at least [java class files](http://ittips.pandle.net/2012/09/08/how-to-create-and-run-a-java-file/ "How to create and run a java file"). It is important create the manifest file. Manifest file contains information about version, author, main class and other data about application created. Follow the <a href="http://download.bilardi.net/download/game/java/TicTacToe.java" title="TicTacToe java" target="_blank">TicTacToe</a> example **MANIFEST.MF** file:  
> `cat MANIFEST.MF`<br />
Manifest-Version: 1.0<br />
Created-By: biliards<br />
Main-Class: TicTacToe

Change directory where there are java class files and MANIFEST.MF file. To create jar file, edit this command line:  
> `jar cfm TicTacToe.jar MANIFEST.MF TicTacToe*class`

## How to run jar file
The jar file created is runnable with follow command line
> `java -jar TicTacToe.jar`

## JAR file manipulations
JAR file is a compress file and it is possible manipulate it in different ways
  * view the contents of a JAR file  
    > `jar tf TicTacToe.jar`
  * extract the contents of a JAR file  
    > `jar xf TicTacToe.jar`
  * extract specific files from a JAR file  
    > `jar xf TicTacToe.jar META-INF/MANIFEST.MF`

Reference: <a href="http://en.wikipedia.org/wiki/JAR_(file_format)" title="JAR file" target="_blank">Wikipedia</a>, <a href="http://java.sun.com/developer/Books/javaprogramming/JAR/basics/" title="JAR file" target="_blank">jar file</a> and <a href="http://java.sun.com/developer/Books/javaprogramming/JAR/basics/manifest.html" title="Manifest file" target="_blank">manifest file</a>.
