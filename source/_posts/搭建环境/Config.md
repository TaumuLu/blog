---
title: Config
date: 2017-03-20 22:57:39
tags: 搭建环境
---

## Node.js

### 全局安装包
- airs 
- code-push-cli
- hexo
- jshint
- react-native-cli
- supervisor
- uglify-js
- vue-cli
- webpack
- yarn

```
npm install -g airs yarn webpack vue-cli react-native-cli hexo jshint uglify-js

```

### .npmrc
```
registry=https://registry.npm.taobao.org
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

```

## Nvm

### setting.txt
```
root: C:\Users\MT\AppData\Roaming\nvm
path: C:\Program Files\nodejs
proxy: none
arch: 64
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/

```

## Linux

### .bashrc
```
alias bundle-android='react-native bundle --platform android --entry-file index.android.js --bundle-output ./bundles/index.android.bundle --dev false'

alias bundle-ios='react-native bundle --platform ios --entry-file index.ios.js --bundle-output ./bundles/index.ios.bundle --dev false'

alias gst='git status'
alias gl='git pull'
alias gp='git push'


```


## Google

### 主题
- Деревянный хром
- pine wood theme
- woodark
- black wood
- Blue/Green Cubes
- 炭黑+銀色金屬

### 插件
- Additional Information
- Appspector
- Adblock Plus
- Axure RP Extension for Chrome
- HostAdmin App
- JSONView
- LastPass: Free Password Manager
- Momentum
- Octotree
- OneTab
- Page Ruler
- Postman
- Proxy SwitchyOmega

- Redux DevTools
- React Developer Tools
- Vue.js devtools

- 二维码(QR码)生成器(QR Code Generator)
- 捕捉网页截图 - FireShot的
- 猎豹翻译

## 环境变量

### Java 
- JAVA_HOME
`C:\Program Files\Java\jdk`

### Android 
- ANDROID_HOME
`C:\Program Files (x86)\Android\android-sdk`

### Node 
- NODE_PATH
`C:\Program Files\nodejs\node_modules`

### NVM 
- NVM_HOME
`C:\Users\MT\AppData\Roaming\nvm`
- NVM_SYMLINK
`C:\Program Files\nodejs`

### path 
```
%JAVA_HOME%\bin
%ANDROID_HOME%\platform-tools\
%NVM_HOME%
%NVM_SYMLINK%

C:\Program Files\nodejs
C:\Users\Taumu\AppData\Roaming\nvm
C:\Users\MT\.babun

C:\ProgramData\Oracle\Java\javapath
C:\Program Files\Python36\
C:\Program Files\Python36\Scripts\

C:\Program Files\MongoDB\Server\3.4\bin
D:\Web\Develop\php-7.0.12-Win32-VC14-x64
D:\Web\Develop\Apache22\bin
```


# Config

## ESlint

### .eslintrc.yml
```
parser: babel-eslint
env:
  es6: true
  browser: true
  node: true
  mocha: true
parserOptions:
  ecmaVersion: 2017,
rules:
  semi:
    - 2
    - never
  arrow-body-style: 0
  max-len: 0
  global-require: 0
  no-console: 0
  no-use-before-define: 0
  no-underscore-dangle: 0
  no-class-assign: 0
  no-extra-boolean-cast: 0
  no-nested-ternary: 0
  eol-last: 0
  comma-dangle:
    - error
    - functions: ignore
      objects: always-multiline
      arrays: always-multiline
  jsx-quotes:
    - 2
    - prefer-single
  class-methods-use-this: 0
  no-param-reassign: 0
  camelcase: 0
  no-shadow: 0
  no-unused-expressions: 0
  no-var: 0
  indent:
    - 2
    - 2
    - SwitchCase: 1
  comma-spacing: 1

```

### .eslintignore


## .bash_profile
```
# show Mac info
# archey

export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/tools"
export PATH="$PATH:$ANDROID_HOME/platform-tools"

# export PATH=$PATH:/Applications/Visual" "Studio" "Code.app/Contents/Resources/app/bin
# export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"


[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
```

## .zshrc
```
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=/Users/mt/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="ys"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

plugins=(
  git
  autojump
  httpie
  git-flow
  zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh
source ~/.bash_profile

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"


# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"
```

## .npmrc
```
//registry.npm.terminus.io/:_password="bnBtIz0zNzQ2NTU="
//registry.npm.terminus.io/:username=taumu
//registry.npm.terminus.io/:email=972409545@qq.com
//registry.npm.terminus.io/:always-auth=false
//registry.npmjs.org/:_authToken=f421c362-4b18-4d45-80e7-d4f3c2d6a38b

registry=http://registry.npm.terminus.io/
# registry=https://registry.npm.taobao.org
```

## .gitconfig
```
[credential]
    helper = store
[core]
    ignorecase = false
    quotepath = false
    excludesfile = /Users/mt/.gitignore_global
[alias]
    st = status
[difftool "sourcetree"]
    cmd = opendiff \"$LOCAL\" \"$REMOTE\"
    path = 
[mergetool "sourcetree"]
    cmd = /Applications/SourceTree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
    trustExitCode = true
[user]
    name = TaumuLu
    email = 972409545@qq.com
[commit]
    template = /Users/mt/.stCommitMsg

```


## VsCode

### settings
```
{
    "workbench.iconTheme": "vscode-icons",
    "editor.renderIndentGuides": true,
    "files.autoSave": "onFocusChange",
    "eslint.autoFixOnSave": true,
    "editor.wordWrap": "on",
    "editor.minimap.showSlider": "always",
    "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?（，：；。？）",
    "search.exclude": {
        "**/node_modules": true,
        "**/.happypack": true,
        "**/public": true,
        "*.map": true,
        "**/android/app/build": true
    },
    "files.exclude": {
        ".happypack": true
    },
    "workbench.colorTheme": "One Dark Pro",
    "editor.renderLineHighlight": "all",
    "window.zoomLevel": 0,
    "beautify.config": {
        "indent_size": 2,
        "e4x": true,
        "js": {
            "indent_size": 4,
            "end_with_newline": true
        },
        "html": {
            "indent_inner_html": true
        },
        "css": {
            "newline_between_rules": true,
            "space_around_combinator": true
        }
    },
    "editor.snippetSuggestions": "top",
    "emmet.showSuggestionsAsSnippets": true,
    "window.nativeTabs": true,
    // "todohighlight.isEnable": true,
    "java.home": "/Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/bin",
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "materialTheme.cache.workbench.settings": {
        "themeColours": "Default",
        "accentPrevious": "Acid Lime",
        "accent": "Bright Teal"
    },
    "workbench.colorCustomizations": {
        "activityBarBadge.background": "#44cfaf",
        "list.activeSelectionForeground": "#64FFDA",
        "list.inactiveSelectionForeground": "#5afad5",
        "list.highlightForeground": "#64FFDA",
        "scrollbarSlider.activeBackground": "#64FFDA50",
        "editorSuggestWidget.highlightForeground": "#64FFDA",
        "textLink.foreground": "#64FFDA",
        "progressBar.background": "#64FFDA",
        "pickerGroup.foreground": "#64FFDA",
        "tab.activeBorder": "#64FFDA",

        "tab.activeBackground": "#282c34",
        "activityBar.background": "#282c34",
        "editorGroup.background": "#282c34",
        "sideBar.background": "#282c34",
        
        "list.activeSelectionBackground": "#2a5a5a",
        "list.inactiveSelectionBackground": "#2a5a5a",
        "editor.lineHighlightBackground": "#3f4f5f",
        "editor.findMatchBackground": "#3f4f5f",
        "editorCursor.foreground": "#44cfaf"
    },
    "explorer.confirmDelete": false,
    "editor.multiCursorModifier": "alt",
}

```

### keyBindings
```
// 将键绑定放入此文件中以覆盖默认值
[
    {
        "key": "shift+alt+f",
        "command": "HookyQR.beautify",
        "when": "editorFocus"
    },
    {
        "key": "alt+x",
        "command": "git.openChange"
    },
    {
        "key": "shift+alt+x",
        "command": "git.openFile"
    },
    {
        "key": "alt+a",
        "command": "workbench.action.joinTwoGroups"
    },
    {
        "key": "alt+d",
        "command": "git.stage"
    },
    {
        "key": "shift+alt+d",
        "command": "git.unstage"
    },
    {
        "key": "alt+q",
        "command": "git.clean"
    },
]
```

## SublimeText

### settings
```
{
    "bold_folder_labels": true,
    "close_windows_when_empty": false,
    "color_scheme": "Packages/Material Theme/schemes/Material-Theme.tmTheme",
    "default_encoding": "UTF-8",
    "draw_minimap_border": true,
    "ensure_newline_at_eof_on_save": true,
    "file_exclude_patterns":
    [
        ".DS_Store",
        "*.sublime-workspace"
    ],
    "find_selected_text": true,
    "fold_buttons": true,
    "folder_exclude_patterns":
    [
        ".svn",
        ".git",
        ".hg",
        "CVS",
        "node_modules",
        ".vscode",
        ".idea"
    ],
    "font_size": 12,
    "highlight_line": true,
    "ignored_packages":
    [
        "Vintage"
    ],
    "material_theme_accent_bright-teal": true,
    "open_files_in_new_window": false,
    "save_on_focus_lost": true,
    "scroll_past_end": true,
    "show_encoding": true,
    "tab_size": 2,
    "theme": "Material-Theme.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "update_check": true,
    "word_separators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?（，：；。？）",
    "word_wrap": true
}

```

### keyBindings
```
[
    {
        "keys": ["super+b"],
        "command": "markdown_preview",
        "args": { "target": "browser"}
    },
    {
        "keys": ["alt+shift+t"],
        "command": "open_terminal"
    },
    {
        "keys": ["super+shift+t"],
        "command": "reopen_last_file"
    },
    { "keys": ["alt+up"], "command": "swap_line_up" },
    { "keys": ["alt+down"], "command": "swap_line_down" },
    { "keys": ["alt+shift+down"], "command": "duplicate_line" },

    {
        "keys": ["alt+n"],
        "command": "side_bar_rename"
    },
    {
        "keys": ["ctrl+n"],
        "command": "side_bar_new_file"
    },
    {
        "keys": ["alt+d"],
        "command": "side_bar_delete"
    },
    {
        "keys": ["alt+f"],
        "command": "open_dir",
        "args": {
            "dir": "$file_path",
            "file": "$file_name"
        }
    }
]

```

### packageSetting
```
{
    "bootstrapped": true,
    "in_process_packages":
    [
    ],
    "installed_packages":
    [
        "Babel",
        "BracketHighlighter",
        "ConvertToUTF8",
        "Emmet",
        "FileDiffs",
        "HTML-CSS-JS Prettify",
        "Markdown Preview",
        "MarkdownEditing",
        "Material Theme",
        "Package Control",
        "Sass",
        "SideBarEnhancements",
        "SublimeLinter",
        "SublimeLinter-eslint",
        "SyncedSideBar",
        "Terminal"
    ]
}

```

### SublimeLinter Settings
```
{
  "linters": {
    "eslint": {
      "@disable": false,
      "args": [
        "-c",
        "/Users/mt/Code/Config/Eslint/.eslintrc.yml",
        "--ignore-path",
        "/Users/mt/Code/Config/Eslint/.eslintignore",
      ],
      "excludes": []
    },
  },
}
```


## MacApp
```
Adobe Application Manager Charles.app               Genymotion.app            Microsoft PowerPoint.app  Proxifier.app             Stickies.app              WeChat.app
Adobe Photoshop CC 2014   Chess.app                 Google Chrome.app         Microsoft Word.app        QQ.app                    Sublime Text.app          Xcode.app
Alfred 3.app              Contacts.app              Image Capture.app         Mission Control.app       
QuickTime Player.app      SwitchHosts!.app          Zeplin.app
AliEntSafe.app            DVD Player.app            IntelliJ IDEA.app         NeteaseMusic.app          Reminders.app             System Preferences.app    iBooks.app
AliLang.app               Dashboard.app             Keynote.app               Notes.app                 Safari.app                TeamViewer.app            iMovie.app
Android Studio.app        Dictionary.app            Launchpad.app             Numbers.app               
Sequel Pro.app            TextEdit.app              iStat Menus.app
App Store.app             FaceTime.app              LeguX.app                 OrayBox                   ShadowsocksX-NG.app       The Unarchiver.app        iTerm.app
AppCleaner.app            Firefox.app               MWeb.app                  PDF Expert.app            ShadowsocksX.app          Thunder.app               iTunes.app
Automator.app             Font Book.app             Mail.app                  Pages.app                 Siri.app                  Time Machine.app          wechatwebdevtools.app
BaiduNetdisk_mac.app      GarageBand.app            Maps.app                  Photo Booth.app           Sketch.app                Utilities                 钉钉.app
Calculator.app            Gas Mask.app              Messages.app              Photos.app                SourceTree.app            VirtualBox.app
Calendar.app              Genymotion Shell.app      Microsoft Excel.app       Preview.app               Steam.app                 Visual Studio Code.app
```

