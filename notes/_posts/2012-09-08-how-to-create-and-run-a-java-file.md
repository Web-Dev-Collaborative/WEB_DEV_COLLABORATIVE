---
id: 1091
title: How to create and run a java file
date: 2012-09-08T17:10:11+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1091
permalink: /2012/09/08/how-to-create-and-run-a-java-file/
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
Java files are source code edited by programmers from where to create executable files. An example about code structure is a sample <a href="http://download.bilardi.net/download/game/java/TicTacToe.java" title="TicTacToe java" target="_blank">TicTacToe game</a>:

  1. create java file with main class (ie: TicTacToe class) and assign it the TicTacToe.java name
  2. if application is simple and uses few and simple classes, insert these class auxiliary into TicTacToe class
  3. else create one file for each class and declare each class into TicTacToe class

It is not possible run directly TicTacToe.java file. It needs to compile java file:  
> `javac -g TicTacToe.java`  

and then it is possible run application recall name of main class:  
> `java TicTacToe`

This method is same if there are created one file for each class.

Reference: <a href="http://en.wikipedia.org/wiki/Java_class_file" title="Java class file" target="_blank">Wikipedia</a>
