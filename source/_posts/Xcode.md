---
title: Xcode
date: 2018-06-04 21:45:26
tags: 编辑器
---


## 自定义快捷键

### 打开文件
`vim /Applications/Xcode.app/Contents/Frameworks/IDEKit.framework/Resources/IDETextKeyBindingSet.plist`

### 剪切当前行
1. Insertions and Indentations键最后添加
2. key `<key>Duplicate Current Line</key>`
3. string `<string>moveToBeginningOfText:, moveToEndOfTextAndModifySelection:, copy:, moveToBeginningOfLine:, deleteToBeginningOfLine:, moveToEndOfLine:, deleteToBeginningOfLine:, deleteBackward:, moveDown:, moveToEndOfLine:</string>`

key的名字可以自定义，string我参考网上给出最好的配置，只会剪切当前代码不包括缩进，剪切完后光标移到下一行代码的最后

### 上一行插入
1. Insertions and Indentations键最后添加
2. key `<key>Insert Up Newline</key>`
3. string `<string>moveUp:, moveToEndOfText:, insertNewline:</string>`

参考系统其他命令写的，和其他编辑器的向上插入效果一致

## 使用vim开发
让Xcode支持Vim操作，不得不说Xcode的自带的快捷键操作太少也不不好用了，更加坚定了我要用Vim做所有编辑器开发的决心  

### [XVim](https://github.com/XVimProject/XVim2)
项目地址有完整的安装说明，已用有几个小bug，也算不影戏使用  


## 参考资料
https://blog.csdn.net/garrison_Z/article/details/44730417
