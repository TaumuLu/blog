---
title: VSCode使用
date: 2017-04-10 21:51:28
tags: 编辑器
---

## 前言
刚写完Sublime没多久就马上来补VSCode，并非我抛弃了Sublime，Sublime在我心中永远不可替代，哈哈，工具会的越多越好，各取其长，且最近工作一直在用VSCode开发，对其也更加熟练了，不写篇文章来赞美下吗

### 介绍
首先既是VSCode是开源的，人人都能贡献代码，可要等到我能贡献的那天哈，其次VSCode在前端er的影响越来越大，加之其强大的功能及体验，大家对他评价也很好，个人也感觉确实好用，对前端很友好

## 配置
还是记录下自己的配置，及相应技巧

### 插件
- vscode-icons
- ESlint
- EditorConfig for VS Code
- JS-CSS-HTML Formatter
- Auto Close Tag
- Auto Rename Tag
- Material Theme
- React Native Tools

### 个人配置
工作区设置 > 用户设置 > 默认设置

```json
{
    "workbench.iconTheme": "vscode-icons",
    "editor.renderIndentGuides": true,
    "files.autoSave": "onFocusChange",
    "editor.wordWrap": "on",
    "eslint.autoFixOnSave": true,
    "search.exclude": {
        "**/.happypack": true,
        "*.map": true
    },
    "workbench.colorTheme": "Material Theme",
    "editor.renderLineHighlight": "all"
}
```

#### 注意
配置search.exclude在搜索处要点上排除项使其聚焦即可生效

## 寄语
暂时写这么多，以后继续补充，还有就是要尽快熟悉快捷键，熟悉后开发效率能提升上去，工具对我来说还是很重要的，尤其是这样强迫症的我
