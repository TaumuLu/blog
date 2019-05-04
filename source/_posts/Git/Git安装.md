---
title: Git基础
date: 2017-03-15 08:37:42
tags: Git 
---

## 前言
**Git是目前世界上最先进的分布式版本控制系统（没有之一）**  
**Unix的哲学是“没有消息就是好消息”**  

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
    ```bash
    git config --global user.name "name"
    git config --global user.email "email@gmail.com"
    ```

2. 生成SSH密钥  
    检查本机是否有ssh key设置
    `cd ~/.ssh 或cd .ssh`
    如果有则进入~/.ssh路径下（ls查看当前路径文件，rm * 删除所有文件）

3. 使用Git Bash生成新的ssh key  
    ```bash
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

## Gitignore

### .gitignore文件
新建.gitignore文件，windows可在命令行中进行创建：echo >.gitignore，或git base下创建：touch .gitignore

### gitignore规则
```bash
# name           # 注释符号
fileName.js      # 忽略此文件
*.js             # 忽略此后缀的所有文件，通配符为*、？、[]等
!fileName.js     # 取消忽略
name             # 忽略所有此名称的文件和文件夹
name/            # 忽略所有此名称的文件夹
/name            # 只忽略当前文件夹下的文件和文件夹
```

## Git Flow
git-flow由来，就像代码需要代码规范一样，代码管理同样需要一个清晰的流程和规范
Vincent Driessen为了解决这个问题提出了[A Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)

### 流程分支说明
- Master: 这个分支最近发布到生产环境的代码，最近发布的Release，这个分支只能从其他分支合并，不能在这个分支直接修改
- Develop: 这个分支是我们是我们的主开发分支，包含所有要发布到下一个Release的代码，这个主要合并与其他分支，比如Feature分支
- Feature: 这个分支主要是用来开发一个新的功能，一旦开发完成，我们合并回Develop分支进入下一个Release
- Release: 当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支
- Hotfix: 当我们在Master分支发现新的Bug时候，我们需要创建一个Hotfix，完成Hotfix后，我们合并回Master和Develop分支，所以Hotfix的改动会进入下一个Release

### git-flow
工具Git-flow是按照Vincent Driessen的branch模型，实现的一个高层次（级别）的git仓库操作扩展集合

#### 安装
- Mac
`brew install git-flow`
- Linux
`apt-get install git-flow`
- Windows
`wget -q -O –no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash`

#### 使用
- 命令一览
```bash
git flow <subcommand> [list] [-v]
git flow <subcommand> start [-F] <name> [<base>]
git flow <subcommand> finish [-rFk] <name|nameprefix>
git flow <subcommand> publish <name>
git flow <subcommand> track <name>
git flow <subcommand> diff [<name|nameprefix>]
git flow <subcommand> rebase [-i] [<name|nameprefix>]
git flow <subcommand> checkout [<name|nameprefix>]
git flow <subcommand> pull <remote> [<name>]

```
- subcommand
    + init
    + feature
        功能分支
        基于创建分支必须是develop
    + release
        发布分支
        基于创建分支必须是develop
    + hotfix
        修补分支
        基于创建分支必须是master
    + support
        支持分支
        基于创建分支必须是master

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

