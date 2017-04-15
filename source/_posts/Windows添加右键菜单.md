---
title: Windows添加右键菜单
date: 2017-04-10 21:50:37
tags: Windows
---

## 前言
最近在Windows上装VSCode需要加入右键菜单，包括Sublime也是，故上网搜了下顺便总结下右键菜单的添加方法

## 右键菜单

### 打开
win+R，输入regedit命令打开注册表管理器

### 作用域
- HKEY_CLASSES_ROOT
    + \\\*
        文件
        * \shell
    + \Directory
        文件夹
        * \shell
        * \Background
            文件夹空白处右键
    + \Drive
        驱动 
        * \shell
    + \Folder
        文件夹和驱动器
        * \shell

## 添加或移除
次方法适合大多数应用，改为对应程序的名称即可
可以添加更多区域的右键菜单，自己添加入即可

### 添加
将下段代码保存为.inf文件放在要添加的程序文件夹下安装即可
其中VSCode为自己设置的右键名称，以及之后的.exe为对应程序的名称
```
[Version]
Signature="$Windows NT$"

[DefaultInstall]
AddReg=VSCode

[VSCode]
hkcr,"*\\shell\\VSCode",,,"VSCode"
hkcr,"*\\shell\\VSCode","Icon",0x20000,"%1%\Code.exe, 0"
hkcr,"*\\shell\\VSCode\\command",,,"""%1%\Code.exe"" ""%%1"" %%*"

hkcr,"directory\\shell\\VSCode",,,"VSCode"
hkcr,"directory\\shell\\VSCode","Icon",0x20000,"%1%\Code.exe, 0"
hkcr,"directory\\shell\\VSCode\\command",,,"""%1%\Code.exe"" ""%%1"" %%*"

```

### 移除
将下段代码保存为.reg文件放在要添加的程序文件夹下运行即可
其中VSCode为自己设置的右键名称，以及之后的.exe为对应程序的名称
```
Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\*\shell\VSCode]
[-HKEY_CLASSES_ROOT\Directory\shell\VSCode]
```
