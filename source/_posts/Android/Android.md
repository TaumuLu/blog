---
title: Android
date: 2017-09-24 15:49:36
tags: Android
---


## 启动模式
- Standard(default)
- SingleTop
- SingleTask
- SingleInstance

SingleTop和SingleTask有额外的钩子函数onNewIntent

### 使用方式
- Manifest.xml中指定Activity启动模式 android:launchMode="singleTask" 无法指定FLAG_ACTIVITY_CLEAR_TOP
- Intent中指定启动模式去创建Activity 无法指定singleInstance
    + Flags
        * FLAG_ACTIVITY_NEW_TASK SingleTask
        * FLAG_ACTIVITY_SINGLE_TOP SingleTop
        * FLAG_ACTIVITY_CLEAN_TOP
        * FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS android:excludeFromRecents="trure"

## 资源文件
R文件（R.java）是由Android 资源打包工具AAPT（Android Asset Packaging Tool)）自动生成，包含了res目录下所有资源的Id。每当创建一个新资源，会自动地在R文件中添加该资源的id。我们可以在代码中使用该id，执行任何有关该资源的操作。注意，如果我们手动删除R文件，编译器会自动创建。 

R文件是一个java文件，因为它是被自动创建的，所以Android studio 会把它进行隐藏，具体位置在 app/build/generated/source/r/debug

## Library
- 应用模块 apk
- 库模块 AAR
    + 包含代码及Android的资源文件和manifest文件

### 创建
- New Module
- 应用模块转库模块
    + build.gradle
        * `java apply plugin: 'com.android.library'`

### 使用
- settings.gradle
    + `include ':myLibrary'`
- 应用模块
    + build.gralde
        * `compile project(":myLibrary")`
    + 应用模块的 minSdkVersion 必须大于或等于库定义的版本

### AAR文件
- 资源
    + 默认公开状态
    + 私有
        * res/values/public.xml
        * 如果想让库中的所有资源都为私有的，你必须要在public.xml中定义至少一个属性
    + 资源合并默认使用应用模块的资源
    + 用库的R文件和应用的R文件都能访问到库的资源，但无法用库的R文件访问应用资源
    + 使用同名资源，tools标记为重写状态
        * ` tools:override="true"`

### Other
- Library Module生成的R.java文件中，所有的IDs非final的(应用模块是final)
    + switch语句的case操作必须是一个常量



## android JNI实现

### JNI

#### 简介
- 定义 Java Native Interface
- 作用 使得Java与本地其他类型语言（如C、C++）交互
    + 即在 Java代码 里调用 C、C++等语言的代码 或 C、C++代码调用 Java 代码
- 概念
    + JNI是 Java 调用 Native 语言的一种特性
    + JNI 是属于 Java 的，与 Android 无直接关系

### NDK

#### 简介
- 定义 Native Development Kit，是Android的一个工具开发包
- 作用 快速开发C、 C++的动态库，并自动将so和应用一起打包成 APK
    + 即可通过 NDK在 Android中 使用 JNI与本地代码（如C、C++）交互
- 概念
    + NDK是属于 Android 的，与Java并无直接关系

### NDK与JNI关系
JNI是实现目的，NDK是android实现JNI的手段

## 参考资料
https://blog.csdn.net/michael1112/article/details/54579911
https://blog.csdn.net/carson_ho/article/details/73250163

https://blog.csdn.net/mcryeasy/article/details/53523562
https://juejin.im/post/591094ae2f301e006c2d4a61
