set nocompatible

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

Bundle 'git://github.com/gmarik/vundle'

Bundle 'git://github.com/mileszs/ack.vim'
Bundle 'git://github.com/tpope/vim-commentary'
Bundle 'git://github.com/kien/ctrlp.vim.git'
Bundle 'git://github.com/tpope/vim-fugitive'
Bundle 'git://github.com/scrooloose/nerdtree'
Bundle 'git://github.com/Lokaltog/vim-powerline'
Bundle 'git://github.com/thisivan/vim-bufexplorer'

Bundle 'git://github.com/tpope/vim-markdown'
Bundle 'git://github.com/juvenn/mustache.vim.git'
Bundle 'git://github.com/pangloss/vim-javascript'

colorscheme slate
syntax on
set autoindent
set number
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
set incsearch
set hlsearch
set backspace=indent,eol,start
set visualbell
" set colorcolumn=81

au BufNewFile,BufRead *.ejs set filetype=html

nmap H :tabp<CR>
nmap L :tabn<CR>

map <leader>p :CtrlP %<CR>

map <space><space> :NERDTreeToggle<CR>
map <space>f :NERDTreeFind<CR>

set t_Co=256
let g:Powerline_symbols = 'fancy'
set laststatus=2
set encoding=utf-8

hi ColorColumn ctermbg=234 guibg=#3a3a3a

if filereadable(expand("~/.vimrc.local"))
  source ~/.vimrc.local
endif

" now my stuff
imap ii <Esc>
set incsearch
set modeline
set cursorline
set ignorecase
set smartcase
:nmap <silent> <c-n> :NERDTreeToggle<CR>
:vmap gb :<C-U>!git blame % -L<C-R>=line("'<") <CR>,<C-R>=line("'>") <CR><CR>

" run current file as test when you do control-something
map <C-u> :w !t %<CR>
map <C-y> :w !jst %<CR>

:highlight Comment ctermfg=yellow

" pathogen maybe?
execute pathogen#infect()

" Notify me on lines longer than 80 characters!
highlight OverLength ctermbg=red ctermfg=white guibg=#592929
match OverLength /\%81v.\+/


" Make ',e' (in normal mode) give a prompt for opening files
" in the same dir as the current buffer's file.
if has("unix")
  map ,e :e <C-R>=expand("%:p:h") . "/" <CR>
else
  map ,e :e <C-R>=expand("%:p:h") . "\\" <CR>
endif

" cabbr TMPFIX 
" or mkdir(fnamemodify(tempname(),':h'),'p',0700)
map <C-a> :call mkdir(fnamemodify(tempname(), ":p:h")) <CR>
map <C-d> :ccl <CR>

" search tbgs but with leading providesModule
cabbr TPRO TBGS @providesModule

" open nerd tree to this location
nmap <C-n> :NERDTree %<CR>
