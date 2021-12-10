Basic Web Development Environment Setup 
=======================================


Windows Subsystem for Linux (WSL) and Ubuntu




------------------------------------------------------------------------


### Basic Web Development Environment Setup

#### Windows Subsystem for Linux (WSL) and Ubuntu 

 

![](https://cdn-images-1.medium.com/max/800/0*aqKP1drNHmNm34zz.jpg) 

Test if you have Ubuntu installed by typing "Ubuntu" in the search box
in the bottom app bar that reads "Type here to search". If you see a
search result that reads **"Ubuntu 20.04 LTS"** with "App" under it,
then you have it installed.

 

1.  [In the application search box in the bottom bar, type "PowerShell"
    to find the application named "Windows PowerShell"]{#110a}
2.  [Right-click on "Windows PowerShell" and choose "Run as
    administrator" from the popup menu]{#54fd}
3.  [In the blue PowerShell window, type the following:
    `Enable-WindowsOptionalFeature -Online -FeatureName                   Microsoft-Windows-Subsystem-Linux`{.markup--code
    .markup--li-code}]{#a018}
4.  [Restart your computer]{#6269}
5.  [In the application search box in the bottom bar, type "Store" to
    find the application named "Microsoft Store"]{#6dd9}
6.  [Click "Microsoft Store"]{#eb4e}
7.  [Click the "Search" button in the upper-right corner of the
    window]{#74c1}
8.  [Type in "Ubuntu"]{#9d35}
9.  [Click "Run Linux on Windows (Get the apps)"]{#4205}
10. [Click the orange tile labeled **"Ubuntu"** Note that there are 3
    versions in the Microsoft Store... you want the one just entitled
    'Ubuntu']{#1799}
11. [Click "Install"]{#edec}
12. [After it downloads, click "Launch"]{#2935}
13. [If you get the option, pin the application to the task bar.
    Otherwise, right-click on the orange Ubuntu icon in the task bar and
    choose "Pin to taskbar"]{#a859}
14. [When prompted to "Enter new UNIX username", type your first name
    with no spaces]{#669c}
15. [When prompted, enter and retype a password for this UNIX user (it
    can be the same as your Windows password)]{#e9c1}
16. [Confirm your installation by typing the command
    `whoami 'as in who-am-i'`followed by
    Enter at the prompt (it should print your first name)]{#4217}
17. [You need to update your packages, so type
    `sudo apt update` (if prompted for
    your password, enter it)]{#48fe}
18. [You need to upgrade your packages, so type
    `sudo apt upgrade` (if prompted for
    your password, enter it)]{#d12f}

### Git
Git comes with Ubuntu, so there's nothing to install. However, you
should configure it using the following instructions.

 Open an Ubuntu terminal if you don't have one open already.

1.  [You need to configure Git, so type
    `git config --global user.name "Your Name"` with replacing \"Your Name\" with your real
    name.]{#8cfe}
2.  [You need to configure Git, so type
    `git config --global user.email your@email.com` with replacing \"<your@email.com>\" with your real
    email.]{#0e0d}

**Note: if you want git to remember your login credentials type:**

```
 
$ git config --global credential.helper store
```


 

### Google Chrome 

Test if you have Chrome installed by typing "Chrome" in the search box
in the bottom app bar that reads "Type here to search". If you see a
search result that reads "Chrome" with "App" under it, then you have it
installed. Otherwise, follow these instructions to install Google
Chrome.

 

1.  [Open Microsoft Edge, the blue "e" in the task bar, and type in
    [http://chrome.google.com](http://chrome.google.com/){.markup--anchor
    .markup--li-anchor}. Click the "Download Chrome" button. Click the
    "Accept and Install" button after reading the terms of service.
    Click "Save" in the "What do you want to do with ChromeSetup.exe"
    dialog at the bottom of the window. When you have the option to
    "Run" it, do so. Answer the questions as you'd like. Set it as the
    default browser.]{#578c}
2.  [Right-click on the Chrome icon in the task bar and choose "Pin to
    taskbar".]{#40db}

### Node.js {#ce17 .graf .graf--h3 .graf-after--li name="ce17"}

Test if you have Node.js installed by opening an Ubuntu terminal and
typing `node --version` . If it reports
\"Command \'node\' not found\", then you need to follow these
directions.

1.  [In the Ubuntu terminal, type `sudo apt update`{.markup--code
    .markup--li-code} and press Enter]{#9098}
2.  [In the Ubuntu terminal, type
    `sudo apt install build-essential`
    and press Enter]{#806b}
3.  [In the Ubuntu terminal, type
    `curl -o-                   https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash`{.markup--code
    .markup--li-code} and press Enter]{#5f3a}
4.  [In the Ubuntu terminal, type `. ./.bashrc`{.markup--code
    .markup--li-code} and press Enter]{#2abd}
5.  [In the Ubuntu terminal, type `nvm install --lts`{.markup--code
    .markup--li-code} and press Enter]{#3c16}
6.  [Confirm that **node** is installed by typing
    `node --version` and seeing it print
    something that is not \"Command not found\"!]{#d567}

### Unzip {#7d5d .graf .graf--h3 .graf-after--li name="7d5d"}

You will often have to download a zip file and unzip it. It is easier to
do this from the command line. So we need to install a linux unzip
utility.

 In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

 Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and
typing `which mocha` . If it prints a
path, then you\'re good. Otherwise, if it prints nothing, install
Mocha.js by typing `npm install -g mocha` .

 

### Python 3 {#ad40 .graf .graf--h3 .graf-after--p name="ad40"}

Ubuntu does not come with Python 3. Install it using the command
`sudo apt install python3` . Test it by
typing `python3 --version`  and seeing it
print a number.

 

### Note about WSL {#63b7 .graf .graf--h3 .graf-after--p name="63b7"}

 

As of the time of writing of this document, WSL has an issue renaming or
deleting files if Visual Studio Code is open. So before doing any linux
commands which manipulate files, make sure you **close** Visual Studio
Code before running those commands in the Ubuntu terminal.

 

### Some other common instillations {#7ef9 .graf .graf--h3 .graf-after--p name="7ef9"}

```
bash
# Installing build essentials
sudo apt-get install -y build-essential libssl-dev
# Nodejs and NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.profile
sudo nvm install 7.10.0
sudo nvm use 7.10.0
node -v
#nodemon
sudo npm install -g nodemon
sudo npm install -g loopback-cli
# Forever to run nodejs scripts forever
sudo npm install forever -g
# Git - a version control system
sudo apt-get update
sudo apt-get install -y git xclip
# Grunt - an automated task runner
sudo npm install -g grunt-cli
# Bower - a dependency manager
sudo npm install -g bower
# Yeoman - for generators
sudo npm install -g yo
# maven
sudo apt-get install maven -y
# Gulp - an automated task runner
sudo npm install -g gulp-cli
# Angular FullStack - My favorite MEAN boilerplate (MEAN = MongoDB, Express, Angularjs, Nodejs)
sudo npm install -g generator-angular-fullstack
# Vim, Curl, Python - Some random useful stuff
sudo apt-get install -y vim curl python-software-properties
sudo apt-get install -y python-dev, python-pip
sudo apt-get install -y libkrb5-dev
# Installing JDK and JRE
sudo apt-get install -y default-jre
sudo apt-get install -y default-jdk
# Archive Extractors
sudo apt-get install -y unace unrar zip unzip p7zip-full p7zip-rar sharutils rar uudeview mpack arj cabextract file-roller
# FileZilla - a FTP client
sudo apt-get install -y filezilla
```


#### If you found this guide helpful feel free to checkout my github/gists where I host similar content: 

[bgoonz's gists ·
GitHub](https://gist.github.com/bgoonz) 

[**bgoonz - Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz")[](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:


[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/) 






By [Bryan Guner](https://medium.com/@bryanguner) on
[February 27, 2021](https://medium.com/p/9f36c3f15afe).

 March 13, 2021.
