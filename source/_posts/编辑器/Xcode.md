---
title: Xcode
date: 2018-06-04 21:45:26
tags: 编辑器
---


## 自定义快捷键
打开文件 `vim /Applications/Xcode.app/Contents/Frameworks/IDEKit.framework/Resources/IDETextKeyBindingSet.plist`

### 剪切当前行
Insertions and Indentations键最后添加
```xml
<key>Duplicate Current Line</key>
<string>moveToBeginningOfText:, moveToEndOfTextAndModifySelection:, copy:, moveToBeginningOfLine:, deleteToBeginningOfLine:, moveToEndOfLine:, deleteToBeginningOfLine:, deleteBackward:, moveDown:, moveToEndOfLine:</string>
```
key的名字可以自定义，string我参考网上给出最好的配置，只会剪切当前代码不包括缩进，剪切完后光标移到下一行代码的最后

### 上一行插入
Insertions and Indentations键最后添加
```xml
<key>Insert Up Newline</key>
<string>moveUp:, moveToEndOfText:, insertNewline:</string>
```
参考系统其他命令写的，和其他编辑器的向上插入效果一致

## 插件

### 升级Xcode插件失效
- 获取Xcode的UUID `defaults read /Applications/Xcode.app/Contents/Info DVTPlugInCompatibilityUUID`
- 进入插件所在目录 `cd ~/Library/Application' 'Support/Developer/Shared/Xcode/Plug-ins`
- 右键显示包内容，打开Info.plist
- 在key为DVTPlugInCompatibilityUUIDs中的值里加入刚获取Xcode的UUID

### 清除Xcode插件设置
Xcode弹框提示是否加载插件选择Load Bundles  
若不小心点接了Skip Bundles，则需要清除Xcode插件设置  
运行以下命令清除，命令中的Xcode-X.X改成自己的Xcode版本

`defaults delete  com.apple.dt.Xcode DVTPlugInManagerNonApplePlugIns-Xcode-X.X`

### 使用vim开发
让Xcode支持Vim操作，不得不说Xcode的自带的快捷键操作太少也不不好用了，更加坚定了我要用Vim做所有编辑器开发的决心  

#### [XVim](https://github.com/XVimProject/XVim2)
项目地址有完整的安装说明，已用有几个小bug，也算不影戏使用  
还是要多用vim，方便不同编辑器的快速开发，正在努力适应中  


## 参考资料
https://blog.csdn.net/garrison_Z/article/details/44730417
https://www.jianshu.com/p/507d7e3ab10b
http://www.jubeat.net/2016/12/05/how-to-install-multi-xcode/
