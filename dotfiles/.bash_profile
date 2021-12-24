export PATH=$PATH:/Applications/MacVim.app/Contents/bin
export PATH="/usr/local/opt/dart@2/bin:$PATH"

# git prompt
if [ -f "/usr/local/opt/bash-git-prompt/share/gitprompt.sh" ]; then
  __GIT_PROMPT_DIR="/usr/local/opt/bash-git-prompt/share"
  GIT_PROMPT_ONLY_IN_REPO=1
  source "/usr/local/opt/bash-git-prompt/share/gitprompt.sh"
fi

# bash completion
  [ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion
