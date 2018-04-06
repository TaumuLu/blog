---
title: IntelliJ-IDEA使用
date: 2018-04-03 17:08:08
tags: 编辑器
---

## 配置

### Tomcat
- download tomcat
- preference 
    + plugins -> Tomcat and tomEE Integration
    + Build, Execution, Deployment -> Application Servers -> add -> Tomcat Server
- configuration -> add -> Tomcat Server -> Local -> Application Server

### Preference
- Editor
    + 头部注释风格 code style -> code generation -> comment code -> add a space at comment 

### Project
- setting
    + autoscroll to source
    + autoscroll from source

### Project structor
- Project
    + project compliler outpu 配置的是项目中的默认编译输出总目录
- Modules
    + 项目的模块，一个项目中可以有多个子项目，每个子项目相当于一个模块
    + 一般我们项目只是单独的一个，所以只需要配置一个模块，我们可以给模块添加框架
    + Sources
        * 项目的目录资源  那些是项目部署的时候需要的目录 有颜色提示
    + Paths
        * 可以指定项目的编译输出目录 项目类和测试类的编译输出地址，替换掉Project的默认输出地址
    + Depedencies
        * Provided 也就是项目部署的时候是忽略的 只是再编译项目的时候进行使用
        * Compile 跟随着项目部署的  
        * Test 测试环境
    + Libraries
    + Facts
    + Artifacts 打包部署设置
        * 添加项目的部署包
            - exploded 适合开发，输出未压缩前的目录结构
        * 项目的输出目录
        * 输出结构

### configuration
- 依赖Artifacts


## 参考资料
http://www.phperz.com/article/15/0923/159043.html
https://my.oschina.net/lujianing/blog/186737?p=1#OSC_h2_1
