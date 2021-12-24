#!/usr/bin/env bash
export DOTFILES_DIR
DOTFILES_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

ln -sv "$DOTFILES_DIR/.bash_profile" ~
ln -sv "$DOTFILES_DIR/.vimrc" ~
ln -sv "$DOTFILES_DIR/.vim" ~
ln -sv "$DOTFILES_DIR/.gitconfig" ~
