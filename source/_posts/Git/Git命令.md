---
title: Git使用
date: 2017-03-25 23:03:53
tags: Git
---

## 前言
也算是Git的忠实用户了，但慢慢发现其实自己不会用Git，平时开发不但接触的Git命令少并且也没去尝试学习其他，故在此学习并记录Git的使用

## 同步fork源代码
1. 首先要先确定一下是否建立了主repo的远程源
```bash
git remote -v
```

2. 如果里面只能看到你自己的两个源(fetch 和 push)，那就需要添加主repo的源
```bash
git remote add upstream URL
git remote -v`
```

3. 然后你就能看到upstream了，如果想与主repo合并：
```bash
git fetch upstream
git merge upstream/master
```

## Git分支

### 查看分支
```bash
git branch -a                     # 查看所有本地分支和远程分支
git branch -r                     # 只查看远程分支
```

### 新建分支
```bash
git branch [branchname]           # 创建本地分支，只是创建分支不切换
git checkout -b [branchname]      # 创建本地分支且切换到此分支
```

### 删除分支
```bash
git branch -d | -D [branchname]   # 删除分支，大写的D强制删除
git branch -d -r [branchname]     # 删除远程分支
git push origin --delete [branchName]

git branch -a                     # 任然显示删除的分支，即使远程已删除
git remote show origin            # 查看remote地址，远程分支，本地分支与之相对应关系等信息
git remote prune origin           # 删除远程仓库不存在的分支

```

### 关联远程分支
```bash
git branch -vv                        查看分支关联
git branch -u origin/[branchname]     关联远程分支，git push不需要指定远程仓库
git branch --set-upstream devtest origin/[branchname]

```

## Git版本回退

### 3种回退方式
```bash
git reset --mixed       默认方式，只保留源码，回退commit和index信息
git reset --soft        只回退commit的信息，不会恢复到inde xfile一级。如果还要提交，直接commit即可
git reset --hard        彻底回退到某个版本，本地的源码也会变为上一个版本的内容
```

### reset命令
```bash
git reset HEAD^                 回退所有内容到上一个版本
git reset HEAD^ [file]            回退某个文件的版本到上一个版本  
git reset –-soft HEAD~3          向前回退到第3个版本  
git reset –-hard origin/[master]   将本地的状态回退到和远程的一样 
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
```bash
git add .        将文件的修改，文件的新建，添加到暂存区
git add -u       将文件的修改、文件的删除，添加到暂存区
git add -A       将文件的修改，文件的删除，文件的新建，添加到暂存区

```

### stash
```bash
git stash                       备份当前的工作区内容到Git栈中
git stash list                  列出Git栈内的所有备份
git stash pop stash@{id}        
恢复到最近一次stash，可恢复到指定的stash，执行后会删除stash list里的stashId
git stash apply stash@{id}    
恢复到指定的stash，不会删除继stash list里的stashId
git stash clear                 清空Git栈
git stash drop stash@{0}        删除指定队列
```

### commit
```bash
git commit -am "<message>"   将所有修改，但未进stage的改动加入stage，并记录commit信息，前提是被改动文件已被跟踪
git commit --amend -m "New commit message"

```

### pull
```bash
# git pull失败，提示：fatal: refusing to merge unrelated histories
git pull origin master --allow-unrelated-histories

```

### rebase
```bash
git rebase <branch>
git rebase --continue
git rebase --abort
```

### clean
```bash
git clean [参数]
    -n # 显示将要删除的文件和目录
    -f # 删除文件
    -df # 删除文件和目录

git clean -n
git clean -df
```

### [HTTPS和SSH切换](https://help.github.com/articles/testing-your-ssh-connection/)
```bash
# 列出当前远程名现有的url
git remote -v
# 从SSH远程的URL更改到HTTPS 
git remote set-url origin https://github.com/userame/repository.git
# 从HTTPS远程的URL更改到SSH
git remote set-url origin git@github.com:userame/repository.git
```

### 其他命令
```bash
# 重命名分支，如果newbranch名字分支已经存在，则需要使用-M强制重命名，否则，使用-m进行重命名
git branch -m | -M oldbranch newbranch 

# 将已提交的commit添加到当前分支
git cherry-pick <commit id>
```

### 清除本地缓存
```bash
git rm -r --cached .
git add .
git commit -m 'update gitignore'
```

### 删除大文件记录
```bash
// 获取大文件列表
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"

// 删除文件的记录
git log --pretty=oneline --branches -- [big-file.jar]
git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch [big-file.jar]' --prune-empty --tag-name-filter cat -- --all
git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch [big-file.jar]' -- commitId

rm -rf .git/refs/original/
git reflog expire --expire=now --all
git fsck --full --unreachable
git repack -A -d
git gc --aggressive --prune=now
git push --force [remote] master

// 删除暂存区或分支上的文件
git rm --cached  // 加cached本地不删除
```

## Git常用命令清单
```bash
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

## Git术语
- Organizations: 组织，即多个开发者组成的团体，可包含众多的库和开发团队
- Collaborator: 合作开发者，被库的所有者邀请共同开发某一项目，拥有对库的读写权限
- Contributor: 贡献者，对项目有所贡献(如提交代码，修复bug等)的开发者，但不具备合作开发者的访问权限
- Upstream: 上游，对于一个branch或者fork来说，源库的主分支即是其它修改信息的源头，被称为upstream，相对的其它branch或fork就被称为downstream了
- Pull Request(PR): 即代码合并请求，由其它开发者或用户向项目的collaborators提议的修改请求，collaborators觉得修改信息合理有效即接受，否则拒绝
- Merge: 将一个分支中的修改内容应用到另一个分支的操作就做合并；若两个分支内的修改内容无冲突，则可以通过合并请求(a Pull Request)或命令行(the command line)完成合并操作
- Fork: 对其它开发者的库的个人复制，复制的库存在你自己的账户上，你可以自行修改项目内容而不会影响原始的库，也可以将自己的修改通过合并请求(a pull request)的方式请求原始库的开发者更新你的修改
- Fetch: 取回，表示从在线的库上获取最新的修改信息而不需要合并代码，取回的代码可以与你本地的分支代码进行比较
- Push: 推送，表示将本地的修改内容推送至线上的库，这样其它的开发者就可以通过GitHub网站访问到你的修改内容了
- Remote: 远端版本，即类似于GitHub.com的非本地主机的项目版本，可以连接至本地克隆的版本以实现内容同步

## 参考资料
- https://help.github.com/articles/github-glossary/
- http://www.codeceo.com/article/how-to-use-git-flow.html
- http://blog.csdn.net/firststp/article/details/50390064
- http://blog.csdn.net/qq_16885135/article/details/52777871
- http://blog.csdn.net/xsckernel/article/details/9021225
- http://www.cnblogs.com/xueweihan/p/5703144.html
- http://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories

- http://gitbook.liuhui998.com/index.html
- [修改git全部已提交的用户名和邮箱](https://blog.csdn.net/hello5orld/article/details/51386218)
- [修改git全部已提交的用户名和邮箱(github)](https://help.github.com/articles/changing-author-info/)
