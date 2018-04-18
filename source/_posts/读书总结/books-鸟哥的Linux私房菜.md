---
title: 鸟哥的Linux私房菜
date: 2018-04-13 22:08:02
tags: 读书总结
---

# 第一部分 Linux的规则与安装

## 第5章

### 5.2
- 多行输入用反斜杠转义\[Enter]，反斜杠后立即跟特殊字符
- 区分大小写
- date 显示日期与时间
- echo $LANG 显示当前语言
- LANG=en_US(zh_CN) 设置语言
    + /etc/sysconfig/i18n
- cal 显示日历
    + +%Y/%m/%d
    + +%H:%M
- bc 计算器
    + scale=number
- tab
    + 命令补全
    + 文件补全
- ctrl-c 中断程序
- ctrl-d 键盘输入结束代替输入exit

### 5.3
- man
    + 1 可执行命令或文件
    + 3 函数与函数库
    + 5 配置文件或某些文件的格式
    + 8 管理员可用的管理命令
- info
- /usr/share/doc/

### 5.4
- nano

### 5.5
- who
- netstat -a
- ps -aux
- sync
- shutdown
- reboot
- halt
- poweroff


## 第6章

### 6.1
- 用户与用户组
    + user
    + group
    + other
- ls -al
    + drwxr-xr-x 19 mt staff 608 4 13 15:50 app
    + 权限 链接 所有者 用户组 文件容量 修改日期 文件名
- 权限
    + 文件类型
        * d - l b c
    + 所有者权限 读写执
    + 用户组权限 写执
    + 其他用户权限 读执
        * r w x
        * 4 2 1
        * 读 写 执行

### 6.2
- 更改权限
    + chgrp
        * /etc/group
        * chgrp \[config] \[group] \[dirname|filename]...
    + chown
        * /etc/passwd
        * chown \[config] \[user] \[dirname|filename]...
        * user中小数点隔开用户组
    + chmod
        * chmod \[config] \[mode] \[dirname|filename]...
        * mode
            - \[ugoa]\[\[+-=]\[rwxX]...]\[,...]
                * r读权限 w写权限 x执行权限 X当该文件是个子目录或者该文件已经被设定过为可执行
            - ugo u,g,o各为一个数字，分别表示Owner、Group、及Other的权限
                * r=4 w=2 x=1
- cp 源文件 目标文件
- 是否能执行由x权限决定
    + windows则由文件扩展名决定
- 文件w权限不能删除文件本身
- 文件夹w权限可以删除，x权限能否成为工作目录
- mkdir
- touch
- su - user

### 6.3
- 四种目录特色
    + shareable
    + unshareable
    + static
    + variable
- 三层主目录
    + /(root) 与开机系统有关
    + /usr 与软件安装/执行有关
    + /var 与系统运作过程有关


## 第7章

### 7.1
- 特殊目录 . .. - ~ ~user
- cd
- pwd \[-P]
- mkdir 
    + -p 
    + -m
- rmdir 删除一个空的目录
    + -p
- $PATH
    + 优先使用先查到的同名命令
- mv 源文件 目标文件
- rm
- basename
- dirname

### 7.2



## 第10章

### 10.1
- vi
    + 一般模式
    + 编辑模式
        * i I o O a A r R
    + 命令行模式
        * : / ?
    + tab与空格的输入不一样
