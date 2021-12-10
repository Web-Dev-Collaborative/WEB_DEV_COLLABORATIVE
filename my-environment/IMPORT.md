# Import my environment

## download softwares

```sh
#Caffeine1.1.1.zip # Jolt of Caffeine by Apple Store!
chrome-mac.zip # https://chromium.woolyss.com/
Docker.dmg # https://www.docker.com/products/docker-desktop
googlechrome.dmg # https://www.google.com/chrome/
iTerm2-3_2_3.zip # https://www.iterm2.com/downloads.html
mysql-workbench-community-8.0.20-macos-x86_64.dmg # https://dev.mysql.com/downloads/workbench/
RStudio-1.3.959.dmg # https://rstudio.com/products/rstudio/download/#download
Skype-8.61.0.77.dmg # https://www.skype.com/en/thank-you-skype/
Spectacle+1.2.zip # https://www.spectacleapp.com/
VSCode-darwin-stable.zip # https://code.visualstudio.com/download
```

## brew

```sh
#chsh -s /bin/bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install git bash-completion
brew install tmux
brew cask install meld
brew cask install emacs
brew install telnet
#brew install node
#brew tap ringohub/redis-cli
#brew update && brew doctor
#brew install redis-cli
```

## configurations

```sh
cd ~/
git clone https://github.com/bilardi/my-environment .
bash bin/env-update
cd bin
ln -s ../.tmux/plugins/tmux-resurrect tmux-resurrect
cd -
git submodule init
git submodule update --recursive
# Finder > ctrl + K
# MySQL WorkBench > Tools > Configuration > Restore connections
# iTerm2 > Preferences > Profiles > Color Presets > Solarized Dark
# iTerm2 > Install Shell Integration
# VScode
brew install node
npm install -g vscode
```

## extensions

* https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai
* https://chrome.google.com/webstore/detail/time-calculator/ehildbclipkplmjfidlkkplaieiglaml
* https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd

## import

* authenticator.*.txt
* bookmarks.*.html

## env

```sh
brew install eqnxio/cimpress-cloud-engineering/stskeygen
#curl https://bootstrap.pypa.io/get-pip.py -o ~/Documents/configurations/get-pip.py
#sudo python ~/Documents/configurations/get-pip.py
#pip install sceptre --user # some problems without --user and with sudo
# add /Users/alessandra.bilardi/Library/Python/2.7/bin on .bash_profile
#apm config set strict-ssl false # for atom packages installation
#npm config set strict-ssl false # for serverless packages installation
#brew install pyenv
#pyenv install 3.6.6 # brew install python3 installs python3.7
# Pip, setuptools, and wheel have been installed. To update them run
# pip3 install --upgrade pip setuptools wheel
sudo pip3 install awscli --upgrade
#npm install -g aws-cdk # now only in pyenv
```

## git

```sh
git status
find . -type d -exec chmod 0755 {} \;
find . -type f -exec chmod 0644 {} \;
git status
git diff | grep -B 1 "old mode" | grep "^diff" | awk '{print $3}' | sed 's#^a/#./#' | while read f; do git restore $f; done
```
