# 10.190.200.78

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
#alias x='xinit -- :2'
##alias xr='xrandr --output VGA1 --auto --right-of HDMI1'
#alias xr='xrandr --output VGA1 --auto --left-of HDMI1'
##alias rbkp='rsync -avz `cat ~/.backup` ~/Backup/'
#alias rbkp='sudo rsync -avz `cat ~/.backup` /mnt/backup/alessandra/'
alias sdh='sudo shutdown -h now'
alias sdr='sudo shutdown -r now'
alias emacs='emacs -nw'
#alias scren='gnome-screenshot --interactive'

#alias test_check='ssh -X it-sito@10.190.180.160'
#alias centos='ssh -X alessandra@10.190.103.129'
#alias centosNetbeans='ssh -X alessandra@10.190.103.129 nohup /home/alessandra/Programs/netbeans-8.0.1/bin/netbeans &'
#alias syncro="rsync -va --exclude '*~' --exclude '*.git' ~/NetBeansProjects/testing/* alessandra@10.190.103.129:/var/www/html/testing/"

#alias svndiff='svn diff | grep Index'
#alias search='/bin/bash ~/Scrivania/scripting/search.sh'
#alias dafare='/bin/bash ~/Scrivania/scripting/dafare.sh'
#alias changeproject='/bin/bash ~/Scrivania/scripting/changeproject.sh'
#alias changehosts='/bin/bash ~/Scrivania/scripting/changehosts.sh'
#alias permissionproject='/bin/bash ~/Scrivania/scripting/permissionproject.sh'
#alias initialproject='/bin/bash ~/Scrivania/scripting/initialproject.sh'
#alias svnuplocalremote='/bin/bash ~/Scrivania/scripting/svnup.local.remote.sh'

# Add an "alert" alias for long running commands.  Use like so:
## sleep 10; alert
#alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# MacBook

alias pmm='ssh -i ~/.ssh/pmm-key.pem admin@172.31.6.217'
alias dumper='ssh -i ~/.ssh/alessandrabilardi.pem ec2-user@172.31.2.92'
alias rdstoqda-2a='ssh -i ~/.ssh/accesso-sistemi.pem centos@172.31.2.74'
alias rdstoqda-1b='ssh -i ~/.ssh/accesso-sistemi.pem centos@172.31.5.224'

#alias emacs='/usr/local/opt/emacs/Emacs.app/Contents/MacOS/Emacs -nw'
alias meld='/Applications/Meld.app/Contents/MacOS/Meld'
alias vscode='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'
alias psql='docker run -it --rm --net=test postgres:9 psql'
alias pg_dump='docker run -it --rm --net=test postgres:9 pg_dump'
alias mysql='/Applications/MySQLWorkbench.app/Contents/MacOS/mysql'
#alias mysql='docker run -it --rm -e MYSQL_ALLOW_EMPTY_PASSWORD=yes --net=test --entrypoint="mysql" mysql/mysql-server:5.7'
alias mysqldump='/Applications/MySQLWorkbench.app/Contents/MacOS/mysqldump'
#alias mysqldump='docker run -it --rm -e MYSQL_ALLOW_EMPTY_PASSWORD=yes --net=test --entrypoint="mysqldump" mysql/mysql-server:5.7'
alias mysqlbinlog='docker run -it --rm -e MYSQL_ALLOW_EMPTY_PASSWORD=yes --net=test mysql:5.7 mysqlbinlog'
#alias sceptre142='docker run --rm -it -e AWS_PROFILE=$AWS_PROFILE -v $HOME/.aws:/root/.aws:ro -v $(pwd):/workdir:ro craighurley/docker-sceptre:1.4.2'
#alias sceptre210='docker run --rm -it -e AWS_PROFILE=$AWS_PROFILE -v $HOME/.aws:/root/.aws:ro -v $(pwd):/workdir:ro craighurley/docker-sceptre:2.1.0'
alias myenv='PREVIOUS_PATH=$PWD; cd ~/; python3 -m venv .env && source .env/bin/activate && pip3 install --user --upgrade -r requirements.txt; cd $PREVIOUS_PATH'

