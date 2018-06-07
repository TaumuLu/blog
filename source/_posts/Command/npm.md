---
title: npm
date: 2018-04-10 16:06:25
tags: Command
---

## 命令
- npm 
    + init
    + set
    + config
    + info
    + search
    + list
        * -g --depth=0
    + update
    + install
    + uninstall
    + run
    + bin 相对于当前目录的，Node模块的可执行脚本所在的目录
    + adduser
    + login
    + publish
    + deprecate
    + owner
        * ls
    + home
    + repo
    + outdated
    + prune
    + shrinkwrap

### install
- --save -S
- --save-dev -D
- --save-exact 在package.json文件指定安装模块的确切版本
- --unsafe-perm 
```
npm install <name>@<tag|version>
npm install --tag <tag>
```

### run
- package.json文件有一个scripts字段，可以用于指定脚本命令，供npm run直接调用
- node_modules/.bin目录链接node_modules/package/bin
- start和test属于特殊命令，可以省略run
- pre- 和 post- 脚本
    + npm run为每条命令提供了pre-和post-两个钩子（hook）
    + npm restart命令，如果没有设置restart脚本，prerestart和postrestart会依次执行stop和start脚本
    + prepublish
    + postpublish
    + postinstall

### link
- npm link 全局
- npm link package 本地
- npm unlink package

### publish
- npm publish --tag <tag\>
    + 发布指定标签，默认发布标签是latest
- 私有模块
    +  npm init --scope=<yourscope\>
- 废弃版本 
    + npm deprecate package@"< 0.2.3" "critical bug fixed in v0.2.3"

### shrinkwrap
锁定当前项目的依赖模块的版本

> 运行该命令后，会在当前项目的根目录下生成一个npm-shrinkwrap.json文件
> 内容是node_modules目录下所有已经安装的模块，以及它们的精确版本
> 下次运行npm install命令时，npm发现当前目录下有npm-shrinkwrap.json文件，就会只安装里面提到的模块，且版本也会保持一致


## .npmrc
- prefix 定义全局安装包路径

```
prefix = /home/username/npm
// export PATH=~/npm/bin:$PATH
```

## package.json
- 内部变量 $npm_package_*
- scripts
    + 运行脚本
    + 可使用Linux命令(| && &)
