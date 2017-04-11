---
title: SublimeText使用
date: 2017-04-9 21:51:43
tags: 编辑器
---

## 前言
工欲善其事，必先利其器！
对于有强迫症的的我来说选一款适合自己的开发工具是非常非常重要的还有一个非常！
从学习前端初始，便选择了SublimeText作为我的开发神器，当然个人非常喜欢Sublime的，能用Sublime的地方肯定不会使用其他编辑器，也在Sublime上投入了大量的时间去学习和配置，故必须写一篇Sublime的使用心得

### 介绍
Sublime一直被称为前端开发利器，本人是非常认同的，优雅的界面，流畅的运行，行云流水的操作体验是无可替代的，时至今日也是被大多数人作为主要开发工具，唯一值得诟病的也就不是开源的而已

## 安装
之前一直用的破解的，清风流音制作，用起来也是很好的，之后也是建议直接去官网下载安装好点，个人更喜欢绿色免安装的，可能需要配置右键菜单，Windows可以参考我写的配置右键菜单的方法即可

## 配置
要说Sublime最磨人的还是在配置方面，虽然自定义定制化很高，但繁琐的插件配置就让很多人没了耐心选择直接配好的来用

本人也是一直在不断配置自己的Sublime，从插件到插件的配置修改再到个人设置，对于如此多的配置还是记下来好点

### 设置
首选项 -> 设置
可以自己对照左边默认设置来配置

配置文件
```
{
    "auto_complete_triggers":
    [
        {
            "characters": "<",
            "selector": "text.html"
        },
        {
            "characters": "/",
            "selector": "string.quoted.double.html,string.quoted.single.html, source.css"
        }
    ],
    "bold_folder_labels": true,
    "color_scheme": "Packages/User/SublimeLinter/MT (SL).tmTheme",
    "default_encoding": "UTF-8",
    "draw_minimap_border": true,
    "ensure_newline_at_eof_on_save": true,
    "file_exclude_patterns":
    [
        ".DS_Store",
        "*.sublime-workspace",
        "*.scssc"
    ],
    "fold_buttons": true,
    "folder_exclude_patterns":
    [
        ".git",
        "log",
        "tmp/cache",
        ".vagrant"
    ],
    "font_size": 13,
    "highlight_line": true,
    "ignored_packages":
    [
        "SyncedSidebarBg",
        "Vintage"
    ],
    "save_on_focus_lost": true,
    "show_encoding": true,
    "tab_size": 4,
    "theme": "Material-Theme.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "update_check": false,
    "word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?（，。、：；）",
    "word_wrap": true
}
```

### 快捷键
```
[
    {
        "keys": ["shift+tab"],
        "command": "reindent",
        "args": {
            "single_line": "false"
        }
    },
    {
        "keys": ["ctrl+alt+f"],
        "command": "htmlprettify"
    },
    // {
    //     "keys": ["ctrl+alt+h"],
    //     "command": "js_format",
    //     "context": [{
    //         "key": "selector",
    //         "operator": "equal",
    //         "operand": "source.js,source.json"
    //     }]
    // },
    // {
    //     "keys": ["ctrl+alt+g"],
    //     "command": "css_format",
    //     "args": {
    //         "action": "expand"
    //     }
    // },
    // {
    //     "keys": ["ctrl+alt+b"],
    //     "command": "alignment"
    // },
    {
        "keys": ["tab"],
        "command": "expand_abbreviation_by_tab",

        // put comma-separated syntax selectors for which
        // you want to expandEmmet abbreviations into "operand" key
        // instead of SCOPE_SELECTOR.
        // Examples: source.js, text.html - source
        "context": [{
                "operand": "source.js",
                "operator": "equal",
                "match_all": true,
                "key": "selector"
            },

            // run only if there's no selected text
            {
                "match_all": true,
                "key": "selection_empty"
            },

            // don't work if there are active tabstops
            {
                "operator": "equal",
                "operand": false,
                "match_all": true,
                "key": "has_next_field"
            },

            // don't work if completion popup is visible and you
            // want to insert completion with Tab. If you want to
            // expand Emmet with Tab even if popup is visible --
            // remove this section
            {
                "operand": false,
                "operator": "equal",
                "match_all": true,
                "key": "auto_complete_visible"
            }, {
                "match_all": true,
                "key": "is_abbreviation"
            }
        ]
    },
]

```

### 主题
好用的东西怎么能不配上套好看的衣服

- Material
- Spacefunk
- soda
- Afterglow

### 插件
强大的插件机制让你使用起来更得心应手

- package control 
    包管理，必不可少
    ctrl+`粘贴以下代码
    ```
    import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
    ```


- 文本编辑 
    + Markdown Preview  
        更改Markdown文件视图
    + MarkdownEditing
        生成html文件
    + Plain​Tasks
- 代码格式化 
    + Alignment            
        =号对齐
    + JSFormat
    + CSS Format
    + HTML-CSS-JS Prettify
- 中文支持 
    + Chinese​Localizations
    + ConvertToUTF8
    + IMESupport     
        中文输入法光标跟随          
- 代码识别高亮
    + Less                     
    + Vue Syntax Highlight     
    + Jade
    + Babel
- 代码提示
    + Emmet
    + Emmet Css Snippets
    + Auto​File​Name
        自动输入文件路径
    + All Autocomplete         
        匹配所有打开的文件寻找提示词 
    + jQuery
    + Nodejs
    + HTML5
- Git
- GitGutter
- Color​Picker
- File​Diffs   
- DocBlockr    
- Side​Bar​Enhancements      
    增强右键菜单
- SyncedSidebarBg          
    侧边栏同步背景颜色
- Clipboard History        
    粘贴板历史记录
- Bracket​Highlighter       
    起始结束标记
- Sublime​REPL              
    运行各种语言
- Sublime​Linter            
    错误语法提示
    + Sublime​Linter-jshint
- Sublime​Code​Intel         
    代码提示支持多种编程语言

### Sublime​Code​Intel
SublimeCodeIntel/.codeintel/config下添加 
```
//注意上下文需要添加的逗号
"JavaScript":{
    "javascriptExtraPaths":[]
}
```












