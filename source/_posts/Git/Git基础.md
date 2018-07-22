---
title: Git基础
date: 2017-03-15 08:37:42
tags: Git 
---

## 前言
** Git是目前世界上最先进的分布式版本控制系统（没有之一） **
** Unix的哲学是“没有消息就是好消息” **

## 安装Git
1. 下载msysgit
2. 设置环境变量
    选择使用什么样的命令行工具，一般情况使用默认配置，使用Git Bash

    > Git自带：使用Git自带的Git Bash命令行工具
    > 系统自带CMD：使用windows系统的命令行工具
    > 二者都有：上面二者同时配置，但是注意，这样会将windows中的find.exe和sort.exe工具覆盖，如果不懂这些尽量不要选择
3. 配置windows环境变量
    右键“计算机”->“属性”->“高级系统设置”->“环境变量”->在下方的“系统变量”中找到“path”添加
    `C:\Program Files\Git\cmd`

## Git生成SSH密钥
1. 设置Git的user name和email
    `$ git config --global user.name "name"`
    `$ git config --global user.email "email@gmail.com"`

2. 生成SSH密钥
    检查本机是否有ssh key设置
    `$ cd ~/.ssh 或cd .ssh`
    如果有则进入~/.ssh路径下（ls查看当前路径文件，rm * 删除所有文件）

3. 使用Git Bash生成新的ssh key
    ```
    $ cd ~   // 保证当前路径在”~”下`
    $ ssh-keygen -t rsa -C "xxxxxx@yy.com"   // 建议填写自己真实有效的邮箱地址

    Generating public/private rsa key pair.
    Enter file in which to save the key (/c/Users/xxxx_000/.ssh/id_rsa):   
    // 不填直接回车
    Enter passphrase (empty for no passphrase):   // 输入密码（可以为空）
    Enter same passphrase again:   // 再次确认密码（可以为空）
    Your identification has been saved in /c/Users/xxxx_000/.ssh/id_rsa.   
    // 生成的密钥
    Your public key has been saved in /c/Users/xxxx_000/.ssh/id_rsa.pub. 
    // 生成的公钥
    The key fingerprint is:
    e3:51:33:xx:xx:xx:xx:xxx:61:28:83:e2:81 xxxxxx@yy.com
    *本机已完成ssh key设置，其存放路径为：c:/Users/xxxx_000/.ssh/下。
    注释：
    可生成ssh key自定义名称的密钥，默认id_rsa
    $ ssh-keygen -t rsa -C "邮箱地址" -f ~/.ssh/githug_blog_keys 
    // 生成ssh key的名称为githug_blog_keys，慎用，容易出现其它异常
    ```

4. 添加ssh key到GitHub
    登录GitHub系统；
    点击右上角账号头像的“▼”→Settings→SSH kyes→Add SSH key
    复制** id_rsa.pub **的公钥内容
    Title自定义，将公钥粘贴到GitHub中Add an SSH key的key输入框，最后“Add Key”

5. 测试ssh keys是否设置成功。
    ```
    $ ssh -T git@github.com
    The authenticity of host 'github.com (192.30.252.129)' can't be established.
    RSA key fingerprint is 16:27:xx:xx:xx:xx:xx:4d:eb:df:a6:48.
    Are you sure you want to continue connecting (yes/no)? yes 
    // 确认你是否继续联系，输入yes
    ...
    Enter passphrase for key '/c/Users/xxxx_000/.ssh/id_rsa':  
    // 输入生成ssh key时设置的密码即可，未设则跳过
    ```

## HTTPS和SSH切换
[官网说明](https://help.github.com/articles/testing-your-ssh-connection/)

```
// 列出当前远程名现有的url
git remote -v   
// 从SSH远程的URL更改到HTTPS 
git remote set-url origin https://github.com/userame/repository.git
// 从HTTPS远程的URL更改到SSH
git remote set-url origin git@github.com:userame/repository.git
```

## Gitignore

### .gitignore文件
新建.gitignore文件，windows可在命令行中进行创建：echo >.gitignore，或git base下创建：touch .gitignore

### gitignore规则
```
# name           // 注释符号
fileName.js      // 忽略此文件
*.js             // 忽略此后缀的所有文件，通配符为*、？、[]等
!fileName.js     // 取消忽略
name             // 忽略所有此名称的文件和文件夹
name/            // 忽略所有此名称的文件夹
/name            // 只忽略当前文件夹下的文件和文件夹
```

### 清除本地缓存
```
git rm -r --cached .
git add .
git commit -m 'update gitignore'
```

## Git配置
```
git config --list   // 列出配置信息

git config --global user.name "user"  
git config --global user.email "user@email.com"

git config core.longpaths true                // 支持长文件名     
git config --global core.quotepath false      // 路径中文转义
git config --global credential.helper store   // 记住提交密码
git config --global core.ignorecase false              // 关闭忽略大小写
git config --global core.editor "vim"         // 默认编辑器  

// 设置别名
git config --global alias.st "status" 
git config --global alias.ci "commit" 
git config --global alias.co "checkout"

```

## Git常用命令清单
```
git status                    // 当前状态
git add .                     // 添加到缓存区
git commit -m ""              // 提交操作内容
git push origin master        // 上传master分支
git status                    // 当前状态

git clone github地址          // 获取github上文件

git log                       // 列出提交历史，输入q退出查看
git reset --hard commit       // 恢复到历史的某个版本
git reset --hard HEAD^        // 恢复到历史第一个版本

git rm file                   // 删除文件
git mv file                   // 移动文件

git stash save ""             // 临时保存
git stash list                // 查看所有临时保存
git stash pop                 // 恢复最后一次

git pull origin master        // 获取master分支

git checkout master           // 切换master分支
git checkout -b master1       // 在当前分支创建并切换到master1新分支

git merge master              // 将master分支合并到当前分支

http://yourname:password@git.oschina.net/name/project.git

```
