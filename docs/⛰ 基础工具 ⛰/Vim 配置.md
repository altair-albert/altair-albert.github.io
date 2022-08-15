---
tags: 
- 配置
- 工具
date created: 星期一, 八月 15日 2022, 9:20:50 晚上
date modified: 星期一, 八月 15日 2022, 9:35:00 晚上
---
# Vim 配置

```vim
set nocompatible
" have Vim jump to the last position when
" reopening a file
if has("autocmd")
    au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif

" 设置通用缩进策略
set shiftwidth=4
set tabstop=4
set smarttab
set smartindent
set linebreak

"字体设置
set guifontwide=Fira\ Code\ Retina\ 12
set guifont=Fira\ Code\ Retina\ 12

set scrolloff=3              " 滚动时保留3行
set showtabline=1            " tab 页设置
set formatoptions+=mM        " 自动格式化代码
set backspace=2              " 设置退格键可用
set autoindent               " 自动对齐
set number                   " 显示行号
set relativenumber           " 显示相对行号
set ruler                    " 右下角显示光标位置的状态行
set incsearch                " 开启实时搜索功能
set nohlsearch               " 开启高亮显示结果
set nowrapscan               " 搜索到文件两端时不重新搜索
set laststatus=2             " 开启状态栏信息
set cmdheight=1              " 命令行的高度
set writebackup              " 设置无备份文件
set autoread                 " 当文件在外部被修改时自动更新该文件
set nobackup                 " 不生成备份文件
set noswapfile               " 不生成交换文件
set expandtab                " 将Tab自动转化成空格 [需要输入真正的Tab键时，使用 Ctrl+V + Tab]
set showmatch                " show pattern
set matchtime=0              " 不高亮匹配，避免光标跳动
set clipboard+=unnamed       " 共享剪贴板"
set go-=T                       "关闭工具栏"
set go-=r                       "关闭滚动条"
set go-=L                       "关闭左侧滚动条"
set noerrorbells visualbell t_vb=       " 关闭响铃

"set autochdir                   " 自动切换到当前路径
set cursorline                  " 当前行高亮
set wildmenu                     " tab 展示匹配列表显示在命令行上方
set complete=.,w,b,u,t,d         " 不搜索include头文件，加速补全响应
set completeopt=menu             " 关闭Preview窗口
set nofoldenable
set foldmethod=indent
set signcolumn=yes
set ttyfast
set hidden                         " switch buffer without save
set nolazyredraw                     " don't reflash unitill macro complete
set list
set updatetime=300                  "set updatetime to 300ms, better for auto save & coc.nvim

" 设置文件编码和文件格式
set fileformats=unix,mac,dos
set encoding=utf-8
set termencoding=utf-8
set fileencodings=utf-8,chinese,latin-1

" curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
"     https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
call plug#begin('~/.vim/plugged')
""""""""""""""""show autocomplete, and snippet engine""""""""""""""""""""
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'skywind3000/asyncrun.vim'

" git utils plugins
Plug 'tpope/vim-fugitive'

" show file explore
Plug 'lambdalisue/fern.vim', {'branch': 'main'}

" tags list
Plug 'liuchengxu/vista.vim'

" fast commented code
Plug 'preservim/nerdcommenter'
Plug 'sbdchd/neoformat'
Plug 'tpope/vim-surround'

" status line and colorscheme
Plug 'vim-airline/vim-airline'
Plug 'morhetz/gruvbox'
Plug 'joshdick/onedark.vim'
Plug 't9md/vim-quickhl'
Plug 'sheerun/vim-polyglot'
let g:gruvbox_sign_column='bg0'      " fix sign column bg color

" 快速查找文件
Plug 'liuchengxu/vim-clap'
Plug 'vn-ki/coc-clap'

" 自动插入文件描述
Plug 'aperezdc/vim-template'
Plug 'altair-albert/doxygen'

call plug#end()

" open automatic matching on
filetype plugin indent on

" 配置主题
if has('termguicolors')
    set termguicolors
    set t_Ce=
    set t_Cs=
    set listchars=tab:\ \ ,trail:∮
endif
set background=dark
colorscheme gruvbox

" line enables syntax highlighting by default.
if has("syntax")
    syntax enable on
endif

" airline setting
"使用powerline字体
let g:airline_powerline_fonts=1
" disable detection of whitespace errors.
let g:airline_section_z = ('%p%%')
let g:airline#extensions#whitespace#enabled = 0
" 关闭单词统计
let g:airline#extensions#wordcount#enabled = 0
let g:airline#extensions#tabline#enabled = 0
let g:airline#extensions#tabline#buffer_min_count = 2
"let g:airline#extensions#tabline#buffer_nr_show = 1
let g:airline#extensions#tabline#buffer_idx_mode = 1
let airline#extensions#tabline#current_first = 1
let g:airline#extensions#tabline#formatter = 'unique_tail'
let airline#extensions#tabline#ignore_bufadd_pat = '\c\vgundo|undotree|vimfiler|tagbar|nerd_tree'

if executable("rg")
    set grepprg=rg\ --vimgrep\ $*
    set grepformat=%f:%l:%c:%m
    let g:asyncrun_open = 8
    command -nargs=+ -complete=file -bar Rg silent! AsyncRun! rg --vimgrep <args>
    "nnoremap \ :Rg<SPACE>
    "vnoremap \ :Rg <C-R>"<CR>
    nnoremap \ :Clap grep<CR>
    vnoremap \ y:Clap grep -- <C-R>" <CR>
endif

" c++ complete setting
set tags+=~/.vim/tags

" 模板设置
let g:templates_directory=['~/.vim/templates']
let g:email="altair.albert@yahoo.com"
let g:username="User Name"
let g:dateformat="%m/%d/%Y %T"

" Key Map
let mapleader="\<Space>"
noremap <silent> <Leader>t :Vista!!<CR>
"noremap <silent> <Leader>d :Fern . -drawer -stay -keep -reveal=% -toggle<CR>
noremap <silent> <Leader>d :Fern . -drawer -keep -reveal=%<CR>
noremap <silent> <Leader>b :Clap buffers<CR>
noremap <silent> <Leader>f :Clap files<CR>
noremap <silent> <Leader>s :Clap tags<CR>
noremap <silent> <Leader>q <Plug>(coc-fix-current)
noremap <silent> <Leader>g :Dox<CR>

noremap <C-t> :Clap tags<CR>
noremap <C-p> :Clap<CR>
let NERDCreateDefaultMappings = 0
map <C-c> <plug>NERDCommenterNested
map <C-x> <plug>NERDCommenterUncomment
map <silent> m <Plug>(quickhl-manual-this-whole-word)
vmap <silent> m <Plug>(quickhl-manual-this)
map <silent> M <Plug>(quickhl-manual-reset)
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)
noremap J :vimgrep! /<C-R><C-W>/g % <CR>:Clap quickfix<CR>
vnoremap J y:vimgrep! /<C-R>"/g % <CR>:Clap quickfix<CR>

" coc.nvim
let g:coc_data_home="~/.vim/coc"
let g:coc_global_extensions=['coc-json', 'coc-sh', 'coc-pairs', 'coc-tabnine',
            \ 'coc-pyright', 'coc-clangd', 'coc-cmake']


function! s:check_back_space() abort
    let col = col('.') - 1
    return !col || getline('.')[col - 1]  =~ '\s'
endfunction

" Insert <tab> when previous text is space, refresh completion if not.
inoremap <silent><expr> <TAB>
            \ coc#pum#visible() ? coc#pum#next(1):
            \ <SID>check_back_space() ? "\<Tab>" :
            \ coc#refresh()

inoremap <expr><S-TAB> coc#pum#visible() ? coc#pum#prev(1) : "\<C-h>"


inoremap <silent><expr> <CR> coc#pum#visible() ? coc#_select_confirm()
            \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  elseif (coc#rpc#ready())
    call CocActionAsync('doHover')
  else
    execute '!' . &keywordprg . " " . expand('<cword>')
  endif
endfunction
autocmd CursorHold * silent call CocActionAsync('highlight')

" Use K to show documentation in preview window.
map <silent> gi <Plug>(coc-implementation)
map <silent> gd <Plug>(coc-definition)
map <silent> gr <Plug>(coc-references-used)
map <silent> <Leader>r <Plug>(coc-rename)
map <silent> <Leader>k :call <SID>show_documentation()<CR>
map <silent> <Leader>, <Plug>(coc-codeaction)
vmap <silent> <Leader>. <Plug>(coc-refactor)

" same keymapping as helix
let g:surround_no_mappings = 1
noremap mm %
noremap mr <Plug>Csurround
noremap ms <Plug>Ysurround
xnoremap ms <Plug>VSurround
noremap md <Plug>Dsurround
""""

augroup autosave
    autocmd!
    autocmd CursorHold * if &readonly == 0 && &modified == 1 && &filetype != "" | update | endif
augroup END

" Fern setting
function! s:init_fern() abort
  setlocal nonumber
  setlocal norelativenumber
  map <buffer> <CR> <Plug>(fern-action-open-or-expand)
endfunction

augroup fern-custom
  autocmd! *
  autocmd FileType fern call s:init_fern()
augroup END

" gdb layout, need terminal
let g:termdebug_wide = 163

" vim-clap
let g:clap_layout = { 'relative': 'editor' }
let g:clap_disable_run_rooter = v:true
let g:clap_enable_icon = 1

" cross copy

let g:yankfile=$HOME . "/.vim/yank"
function! s:yank2File()
    if v:event.operator == 'y'
        call writefile(v:event.regcontents, g:yankfile, 's')
    endif
endfunction

function! s:loadFromYank()
    if filereadable(g:yankfile)
        let text = readfile(g:yankfile)
        if len(text) > 0
            call append(line("."), text)
        endif
    endif
endfunction

autocmd TextYankPost * silent call s:yank2File()
map <silent>  P :call <SID>loadFromYank()<CR>


" Source a local configuration file if available
if filereadable($HOME . "/.vim/vimrc.local")
    source ~/.vim/vimrc.local
endif
```

>[!INFO]
> 使用coc.nvim 实现LSP, cpp 使用 clangd 作为后端
> 