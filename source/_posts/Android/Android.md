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


## 触摸事件
触摸事件是种责任链模式，上层到下层的分发，下层到上层的反馈  
触摸事件的类为MotionEvent，类似于js里的event  
一个手势（Gesture）被定义为以ACTION_DOWN开始，以ACTION_UP结束，中间穿插其他事件  
android的事件流和dom有点类似三个阶段：捕捉，目标，冒泡  

### 事件类型
- ACTION_DOWN
- ACTION_UP
- ACTION_MOVE
- ACTION_POINTER_DOWN
- ACTION_POINTER_UP
- ACTION_CANCEL

### 事件处理
- dispatchTouchEvent 分发
- onInterceptTouchEvent 拦截
- onTouchEvent 消费

#### 事件传递流程
- ACTION_DOWN
- dispatchTouchEvent
- onInterceptTouchEvent
- onTouchEvent

#### dispatchTouchEvent
分发事件的方法，在此控制拦截、处理事件以及分发给下级  

##### 伪代码
```
// 将dispatchTouchEvent的返回值交给上层组件，用作上层判断子view是否消费
public boolean dispatchTouchEvent(MotionEvent ev) {
    boolean result = false;             // 默认状态为没有消费过

    if (!onInterceptTouchEvent(ev)) {   // 如果没有拦截交给子View
        result = child.dispatchTouchEvent(ev);
    }

    if (!result) {                      // 如果事件没有被子View消费，询问自身onTouchEvent
        result = onTouchEvent(ev);
    }

    return result;                      // 如果自身onTouchEvent也没消费，返回false
}
```

#### onInterceptTouchEvent
拦截事件的方法，dispatchTouchEvent方法分发时会调用，且只关心此方法的返回值，返回true交由自身的onTouchEvent处理，返回false则传递给下级处理  
顶层Activity和底层View没有此方法，因为两者是事件的起点和终点，拦截没有意义，在dispatchTouchEvent处会直接调用onTouchEvent，不需要拦截判断  

#### onTouchEvent
处理事件的方法，用作消费事件，返回true表示消费此事件，此次和之后的事件不会再流入下级处理，返回false则代表不消费事件，交由下级处理

### 事件描述
- 整个过程由顶层Activity开始分发，直到底层View，再回传回顶层Activity
- 多个子View时计算Touch事件的坐标，判断哪个子View接收Touch事件
- 一但组件处理了Down，之后的MOVE和UP会直接到当前处理组件的onTouchEvent中不会再流入下级处理
- Down是关键，他到哪里被处理，之后的MOVE和UP就同样到那里

### 触摸冲突
某层组件一旦拦截处理了本次触摸事件，那么之后的同一事件序列在下次触摸事件之前都不会再分发给子组件，直接进入当前组件的onTouchEvent方法中，但之后的同一事件序列还是会经过当前组件的所有父组件，且每个手势事件都会触发父组件的dispatchTouchEvent和onInterceptTouchEvent方法，所以父组件是可以随时拦截处理掉，但父组件一旦拦截处理，就和开始说的当前组件拦截一样，之后的同一事件序列也不会再分发给当前组件直至下次触摸事件  

所以说android不支持嵌套滚动，一旦父组件拦截处理，子组件在当前事件就再也没有机会参与处理，所以android又提供了NestedScrolling这套API 来支持嵌入滑动机制  


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

### 触摸事件
https://blog.csdn.net/a_long_/article/details/52124606
https://race604.com/android-nested-scrolling/
https://www.jianshu.com/p/7ff768a77410
