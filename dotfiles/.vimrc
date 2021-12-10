set dir=~/dotfiles/.vim/swap/

set guifont=Dank\ Mono:h14
set number
set relativenumber
set expandtab
set tabstop=2
set shiftwidth=2
" allows for buffer switch without having to write the buffer first
set hidden 
" makes sure that the status bar is always visible and formatted
set laststatus=2
set statusline=%<%f%=\ %1*%m%*\ B:%n%R%H\ %p%%\ %8(%l,%v%)
hi User1 cterm=inverse,bold ctermbg=red gui=inverse,bold guibg=red

" set wrap characters and handling wrap offset
set nowrap
set sidescroll=10
set sidescrolloff=5
set listchars=extends:>,precedes:<

set encoding=utf-8

" clear out search
nnoremap <leader><space> :noh<cr>
nnoremap <leader>a :Ack 
" a different way to delete a tab
nmap <leader>d :bprevious<CR>:bdelete #<CR>
" remap Lusty Juggler
map <C-l> <leader>lj
" let g:LustyJugglerSuppressRubyWarning = 1

" load ctrl-p plugin
set runtimepath^=~/dotfiles/bundle/ctrlp.vim
let g:ctrlp_working_path_mode = 'ra'
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

syntax on
filetype on
filetype plugin on
filetype indent on

" unicode symbols
let g:airline_left_sep = ''
let g:airline_right_sep = ''
let g:airline_linecolumn_prefix = '¶ '
let g:airline_fugitive_prefix = '⎇ '
let g:airline_paste_symbol = 'ρ'
let g:airline_theme='dark'

set background=dark
colorscheme slate

if has("gui_running")
set guioptions-=T
endif

" Highlight Search terms
set hlsearch
set incsearch

let g:user_emmet_leader_key = '<c-e>'

" Set a nicer foldtext function
set foldtext=MyFoldText()
function! MyFoldText()
  let line = getline(v:foldstart)
  if match( line, '^[ \t]*\(\/\*\|\/\/\)[*/\\]*[ \t]*$' ) == 0
    let initial = substitute( line, '^\([ \t]\)*\(\/\*\|\/\/\)\(.*\)', '\1\2', '' )
    let linenum = v:foldstart + 1
    while linenum < v:foldend
      let line = getline( linenum )
      let comment_content = substitute( line, '^\([ \t\/\*]*\)\(.*\)$', '\2', 'g' )
      if comment_content != ''
        break
      endif
      let linenum = linenum + 1
    endwhile
    let sub = initial . ' ' . comment_content
  else
    let sub = line
    let startbrace = substitute( line, '^.*{[ \t]*$', '{', 'g')
    if startbrace == '{'
      let line = getline(v:foldend)
      let endbrace = substitute( line, '^[ \t]*}\(.*\)$', '}', 'g')
      if endbrace == '}'
        let sub = sub.substitute( line, '^[ \t]*}\(.*\)$', '...}\1', 'g')
      endif
    endif
  endif
  let n = v:foldend - v:foldstart + 1
  let info = " " . n . " lines"
  let sub = sub . "                                                                                                                  "
  let num_w = getwinvar( 0, '&number' ) * getwinvar( 0, '&numberwidth' )
  let fold_w = getwinvar( 0, '&foldcolumn' )
  let sub = strpart( sub, 0, winwidth(0) - strlen( info ) - num_w - fold_w - 1 )
  return sub . info
endfunction

" Wrap visual selection in an HTML tag.
vmap <Leader>w <Esc>:call VisualHTMLTagWrap()<CR>
function! VisualHTMLTagWrap()
  let tag = input("Tag to wrap block: ")
  if len(tag) > 0
    normal `>
    if &selection == 'exclusive'
      exe "normal i</".tag.">"
    else
      exe "normal a</".tag.">"
    endif
    normal `<
    exe "normal i<".tag.">"
    normal `<
  endif
endfunction

" setting up HTML encode/decode functions
function! HTMLEncode()
perl << EOF
 use HTML::Entities;
 @pos = $curwin->Cursor();
 $line = $curbuf->Get($pos[0]);
 $encvalue = encode_entities($line);
 $curbuf->Set($pos[0],$encvalue)
EOF
endfunction

function! HTMLDecode()
perl << EOF
 use HTML::Entities;
 @pos = $curwin->Cursor();
 $line = $curbuf->Get($pos[0]);
 $encvalue = decode_entities($line);
 $curbuf->Set($pos[0],$encvalue)
EOF
endfunction

map <Leader>H :call HTMLDecode()<CR>
map <Leader>h :call HTMLEncode()<CR>

" Number text object
" onoremap N :<c-u>call <SID>NumberTextObject(0)<cr>
xnoremap N :<c-u>call <SID>NumberTextObject(0)<cr>
onoremap aN :<c-u>call <SID>NumberTextObject(1)<cr>
xnoremap aN :<c-u>call <SID>NumberTextObject(1)<cr>
onoremap iN :<c-u>call <SID>NumberTextObject(1)<cr>
xnoremap iN :<c-u>call <SID>NumberTextObject(1)<cr>
 
function! s:NumberTextObject(whole)
    normal! v
 
    while getline('.')[col('.')] =~# '\v[0-9]'
        normal! l
    endwhile
 
    if a:whole
        normal! o
 
        while col('.') > 1 && getline('.')[col('.') - 2] =~# '\v[0-9]'
            normal! h
        endwhile
    endif
endfunction

