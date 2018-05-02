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
