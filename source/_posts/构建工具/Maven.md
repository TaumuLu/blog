---
title: Maven
date: 2018-03-28 20:52:58
tags: 构建工具
---

## Tree
- src
    + main
        * java
            - package
    + test
        * java
            - package
    + resources 
- target
    + classes
- pom.xml

### pom.xml
- project
    + modelVersion pmp版本 
    + groupId 反写公司地址+项目名 
    + artifactId 项目名+模块名 
    + version 
        * snapshot
        * alpha
        * beta
        * release
        * ga
    + dependencies
        * dependency
            - type
            - scope
            - optional 依赖是否可选
            - exclusions
                + exclusion
    + dependencyManagement
        * dependencies
            - dependency
    + build
        * plugins
            - plugin
    + parent
    + modules
        * module
    + packaging 默认打jar包
    + name
    + url
    + description
    + developer
    + licenses

## mvn
- compile
- test
- package
- clean 删除target
- install 安装jar包到本地仓库中

### 插件
- archetype mvn archetype:generator
    + -DgroupId= -DartifactId= -Dversion= -Dpackage=

## maven仓库
- 本地仓库
- 远程仓库
- 镜像仓库
