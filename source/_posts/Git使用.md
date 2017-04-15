---
title: Git使用
date: 2017-03-25 23:03:53
tags: Git
---

## 前言
也算是Git的忠实用户了，但慢慢发现其实自己不会用Git，平时开发不但接触的Git命令少并且也没去尝试学习其他，故在此学习并记录Git的使用

## Git Flow
由来，就像代码需要代码规范一样，代码管理同样需要一个清晰的流程和规范
Vincent Driessen为了解决这个问题提出了[A Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)

### 流程分支说明
- Master 分支
这个分支最近发布到生产环境的代码，最近发布的Release，这个分支只能从其他分支合并，不能在这个分支直接修改

- Develop(Production) 分支
这个分支是我们是我们的主开发分支，包含所有要发布到下一个Release的代码，这个主要合并与其他分支，比如Feature分支

- Feature 分支
这个分支主要是用来开发一个新的功能，一旦开发完成，我们合并回Develop分支进入下一个Release

- Release分支
当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支

- Hotfix分支
当我们在Master分支发现新的Bug时候，我们需要创建一个Hotfix，完成Hotfix后，我们合并回Master和Develop分支，所以Hotfix的改动会进入下一个Release

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
```
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


## 同步fork源代码
1. 首先要先确定一下是否建立了主repo的远程源
`git remote -v`

2. 如果里面只能看到你自己的两个源(fetch 和 push)，那就需要添加主repo的源
```
git remote add upstream URL
git remote -v`
```

3. 然后你就能看到upstream了，如果想与主repo合并：
```
git fetch upstream
git merge upstream/master
```

## Git分支

### 查看分支
```
git branch -a       查看所有本地分支和远程分支
git branch -r       只查看远程分支

```

### 新建分支
```
git branch [branchname]           创建本地分支，只是创建分支不切换
git checkout -b [branchname]      创建本地分支且切换到此分支

```

### 删除分支
```
git branch -d | -D [branchname]   删除分支，大写的D强制删除
git branch -d -r [branchname]     删除远程分支

git branch -a                   任然显示删除的分支，即使远程已删除
git remote show origin          查看remote地址，远程分支，本地分支与之相对应关系等信息
git remote prune origin         删除远程仓库不存在的分支

```

### 关联远程分支
```
git branch -vv                        查看分支关联
git branch -u origin/[branchname]     关联远程分支，git push不需要指定远程仓库
git branch --set-upstream devtest origin/[branchname]

```

### 其他命令
```
git branch -m | -M oldbranch newbranch 
重命名分支，如果newbranch名字分支已经存在，则需要使用-M强制重命名，否则，使用-m进行重命名

```

## Git版本回退

### 3种回退方式
```
git reset --mixed       默认方式，只保留源码，回退commit和index信息
git reset --soft        只回退commit的信息，不会恢复到inde xfile一级。如果还要提交，直接commit即可
git reset --hard        彻底回退到某个版本，本地的源码也会变为上一个版本的内容
```

### reset命令
```
git reset HEAD^                 回退所有内容到上一个版本
git reset HEAD^ [file]            回退某个文件的版本到上一个版本  
git reset –soft HEAD~3          向前回退到第3个版本  
git reset –hard origin/[master]   将本地的状态回退到和远程的一样 
git reset [log]      回退到某个版本
git revert HEAD      回退到上一次提交的状态，按照某一次的commit完全反向的进行一次commit
```

### reset和revert区别
reset是指将当前head的内容重置，不会留任何痕迹
revert是撤销某次提交，但是这次撤销也会作为一次提交进行保存
git revert撤销某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销作为一次最新的提交
git reset是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容


## Git其他命令

### add
```
git add .        将文件的修改，文件的新建，添加到暂存区
git add -u       将文件的修改、文件的删除，添加到暂存区
git add -A       将文件的修改，文件的删除，文件的新建，添加到暂存区

```

### commit
```
git commit -am "<message>"   将所有修改，但未进stage的改动加入stage，并记录commit信息，前提是被改动文件已被跟踪

```

## Git术语
- Organizations
组织，即多个开发者组成的团体，可包含众多的库和开发团队

- Collaborator
合作开发者，被库的所有者邀请共同开发某一项目，拥有对库的读写权限

- Contributor
贡献者，对项目有所贡献(如提交代码，修复bug等)的开发者，但不具备合作开发者的访问权限

- Upstream
上游，对于一个branch或者fork来说，源库的主分支即是其它修改信息的源头，被称为upstream，相对的其它branch或fork就被称为downstream了

- Pull Request(PR)
即代码合并请求，由其它开发者或用户向项目的collaborators提议的修改请求，collaborators觉得修改信息合理有效即接受，否则拒绝

- Merge
将一个分支中的修改内容应用到另一个分支的操作就做合并；若两个分支内的修改内容无冲突，则可以通过合并请求(a Pull Request)或命令行(the command line)完成合并操作

- Fork
对其它开发者的库的个人复制，复制的库存在你自己的账户上，你可以自行修改项目内容而不会影响原始的库，也可以将自己的修改通过合并请求(a pull request)的方式请求原始库的开发者更新你的修改

- Fetch
取回，表示从在线的库上获取最新的修改信息而不需要合并代码，取回的代码可以与你本地的分支代码进行比较

- Push
推送，表示将本地的修改内容推送至线上的库，这样其它的开发者就可以通过GitHub网站访问到你的修改内容了

- Remote
远端版本，即类似于GitHub.com的非本地主机的项目版本，可以连接至本地克隆的版本以实现内容同步

## 参考资料
https://help.github.com/articles/github-glossary/
http://www.codeceo.com/article/how-to-use-git-flow.html
http://blog.csdn.net/firststp/article/details/50390064
http://blog.csdn.net/qq_16885135/article/details/52777871
http://www.cnblogs.com/xueweihan/p/5703144.html
