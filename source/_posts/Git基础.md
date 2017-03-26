---
title: Git基础
date: 2017-03-25 23:03:53
tags: Git
---

## Git分支





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
