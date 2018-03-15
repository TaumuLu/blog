---
title: android学习
date: 2017-09-24 15:49:36
tags: android
---

# Gradle

## Gradle Files
- MyApp
    + setting.gradle 管理项目和子项目，主要声明一些需要加入gradle的module
    + build.gradle 根项目
    + gradle.properties
    + app
        * build.gradle 子项目

## Groovy

### 语法
- 动态语言
- 面向对象
- 兼容java语法
- 分号可选
- 类、方法默认public
- 给属性自动添加gitter/setter方法
- 属性用点获取
- 最后一个表达式作为返回值
- ==等同于equals()
- assert语句 assert
- 弱类型 def定义
- 字符串 '' "" ''''''
- 集合API <<
- 可选括号
- 函数
    + 无返回类型，必须使用def关键字，否则声明返回类型
    + 可选括号执行
    + 当函数的最后一个参数是闭包的话，可以省略圆括号
- 闭包 
    + 非js的闭包，仅代表了一段可执行的代码
    + call调用或者括号
    + 没定义参数，则隐含有一个参数it
- times 循环/for (i in 0..5){}
- asType
- @Field 成员变量
- 容器
    + List ArrayList
    + Map LinkedHashMap
    + Range

### build.gradle
定位包
group -> name -> version

- project
    + apply 插件
        * apply plugin: 'com.android.application' 表示该module是这个应用程序的主module
        * apply plugin: 'com.android.library' 表示该module是这个应用程序的子module
    + dependencies 依赖
        * compile fileTree(dir: 'libs', include: \['*.jar'\]) 
        * compile group:,name:,version:/:::
        * runTime
    + repositories 仓库
        * mavenLocal()
        * mavenCentral()
        * maven { url '' }
    + task 任务
        * dependsOn
        * doFirst
        * doLast/<<
    + ext 
    + gradle.properties
    + android
        * productFlavors 在AS中BuildVariants中指定对应的调试特性包

- 构建生命周期
    + 初始化
    + 配置
    + 执行

### 代码片段
- 版本冲突构建失败
```
configurations.all { 
    resolutionStrategy { 
        failOnVersionConflict()
        force ''
    } 
}
```

- 自定义任务
```
def createDir = {
    path ->
        File dir = new File(path)
        if(!dir.exists()) {
            dir.mkdirs()
        }
}

task makeDebugDir() {
//    dependsOn ''
    def paths = ['app/src/debug/java']
    doFirst {
        paths.forEach(createDir)
    }
}
```
