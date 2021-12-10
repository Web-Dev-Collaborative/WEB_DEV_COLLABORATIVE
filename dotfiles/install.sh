#!/usr/bin/env bash

# Install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install ruby sass/sass/sass bash-git-prompt bash-completion

## Sass path stuff for bash_profile (which should already be in there
# echo 'export PATH="/usr/local/opt/dart@2/bin:$PATH"' >> ~/.bash_profile

## bash-git-prompt stuff for bash_profile (which should already be in there
# if [ -f "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh" ]; then
#   __GIT_PROMPT_DIR=$(brew --prefix)/opt/bash-git-prompt/share
#   source "$(brew --prefix)/opt/bash-git-prompt/share/gitprompt.sh"
# fi

## bash completion stuff for bash_profile (which should already be in there
#  [ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion
