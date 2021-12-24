---
id: 1081
title: How to change default editor
date: 2012-08-29T22:18:13+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=1081
permalink: /2012/08/29/how-to-change-default-editor/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
categories:
  - bash
  - linux distro
  - unix
tags:
  - command line
  - custom
---
Each works well with your favorite text editor. It is important that there is a default editor known. In debian and in other linux distro, default editor is vi.

You could change default editor:

  1. during distro installation
  2. custom each user into .bashrc or .profile file with line:  
> `export EDITOR=/usr/bin/emacs`
  3. custom locally in a shell session and/or particular program:  
> `env EDITOR=nano crontab -e`
