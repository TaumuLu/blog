---
title: Linux
date: 2017-03-22 17:02:26
tags: Command
---

## Init
可能出于前端出身且没计算机基础的我，如今还是挺恐惧命令行的，虽然近有改善开始尽可能多的使用命令行
Linux命令作为后端必要掌握，前端也不应落后于此，应去自我学习掌握

## Shell
`cat /etc/shells`
- bash
- csh
- ksh
- sh
- tcsh
- zsh

### 切换shell
`chsh -s /bin/zsh`

### 模式
- 交互
    + 交互式 输入输出
        * 不带有选项以外的参数或者-c选项，就会启动一个交互式shell
    + 非交互式 脚本输出
        * 用于执行脚本的shell都是“非交互式”的
        * 执行bash命令时，添加-i选项启动为“交互式”shell
- 登陆
    + 登陆shell
        * 用户通过输入用户名/密码（或证书认证）后启动的shell
        * 通过带有-l|--login参数的bash命令启动的shell
        * su -切换用户、通过bash --login
    + 非登陆shell
        * 其他情况启动的shell基本上就都是“非登陆shell”了
        * 图形界面启动终端
        * su切换用户、通过bash命令启动bash

> 登录shell和非登陆shell的主要区别在于启动shell时所执行的startup文件不同
> “登陆shell”启动时会加载“profile”系列的startup文件，而“交互式非登陆shell”启动时会加载“rc”系列的startup文件

#### 交互式
三种命令风格
- Unix
- GNU
- Xtoolkit
- BSD
- SystemV

> 两个--也可能后面不跟参数，仅仅用来表示后面接的是个路径，以避免歧义

##### Unix风格
短选项
- 一个横杠加上一个字母
- 多个短选项可以简写为一个横杠加上每个短选项的字母
- 选项后面跟参数的，选项与参数之间可以用空格分隔，也可以不分隔（但是不能用等号）

##### GNU风格
长选项
- 两个横杠加上若干单词
- 长选项不能简写
- 长选项后面跟参数，用空格或等号分隔

### 环境变量
env查看环境变量

- 加载顺序
    + 系统级别
        * /etc/profile
        * /etc/bashrc
        * /etc/paths
        * /etc/paths.d/
    + 用户级别
        * ~/.bash_profile(mac)
        * ~/.bash_login
        * ~/.profile
        * ~/.bashrc(linux)

#### PATH
man hier查看说明
`echo $PATH`
- /bin
- /sbin
- /usr/bin
- /usr/sbin
- /usr/local/bin

设置环境变量路径里有空格时用引号引起来即可

#### 创建软链接
> 通过sudo ln -s到/usr/local/bin
> 要么自己创建自定义命令，调用可执行文件原身，要么创建软链接到/usr/local/bin
> `sudo ln -s [源文件或目录] /usr/local/bin`


## 权限

### 文件权限
Linux/Unix 的文件调用权限分为三级 : 文件拥有者(Owner)、群组(Group)、其他(Other)
- 查看linux文件权限：`ls -l 文件名称`
- 查看linux文件夹的权限：`ls -ld 文件夹名称`

```
drwxr-xr-x
// 第一位表示文件类型，d是目录文件、l是链接文件、-是普通文件、p是管道
// rwx 第2-4位表示Owner的权限 读写执
// r-x 第5-7位表示Group的权限 读-执
// r-x 第8-10位表示Other的权限 读-执
```

#### 修改权限
chmod \[config] \[mode] file...
- config cfvR
    + -c或--changes 效果类似“-v”参数，但仅回报更改的部分
    + -f或--quiet或——silent 不显示错误信息
    + -R或——recursive 递归处理，将指令目录下的所有文件及子目录一并处理
    + -v或——verbose 显示指令执行过程
    + --reference=<参考文件或目录> 把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同
- mode 
    + \[ugoa...]\[\[+-=]\[rwxX]...]\[,...]
        * r读权限 w写权限 x执行权限 X当该文件是个子目录或者该文件已经被设定过为可执行
    + ugo u,g,o各为一个数字，分别表示Owner、Group、及Other的权限
        * r=4 w=2 x=1

```bash
chmod -R a+r *  // 将目前目录下的所有文件与子目录皆设为任何人可读取
chmod --reference=file1 file2  // 将file2的权限改为和file1相同
```


## 参考链接
http://man.linuxde.net/chmod
https://blog.csdn.net/sch0120/article/details/70226903
https://blog.csdn.net/sch0120/article/details/70256318
https://blog.csdn.net/gatieme/article/details/45064705
http://rexq.me/2017/06/24/OSX%E5%91%BD%E4%BB%A4%E7%BC%BA%E5%A4%B1%E6%80%8E%E4%B9%88%E5%8A%9E%EF%BC%9F/

https://blog.csdn.net/zhshow/article/details/6042350
