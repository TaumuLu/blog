---
title: 疯狂Android讲义
date: 2018-02-27 16:27:48
tags: 读书总结
---

# 疯狂Android讲义

## Android应用和开发环境

### 命令
- android
- emulator
- monitor
- adb
    + install -r -s 'file'
    + uninstall -k 'package'
- mksdcard
- keytool

### 目录
- app
    + libs
    + build
    + src
        * androidTest
        * test
        * main
            - java
            - res
            - AndroidManifest.xml
- build
- gradle

#### res
- R.java 资源字典
    + layout
    + string
    + id
- 引用资源 @<资源类名>/<资源名>
- 未定义资源 @+id/<标识符代号>

#### AndroidManifest.xml
- 包名
- 组件
- 兼容版本
- 系统权限
- 访问权限

### 组件
- Activity
    + setContentView()
    + findViewById()
    + getWindow()
    + setTheme()
- Service
- BroadcastReceiver
    + onReceive
    + sendBroadcast()
    + sendStickyBroadcast()
    + sendOrderedBroadcast()
    + 注册
        * Content.registReceiver()
        * AndroidManifest.xml receiver标签
- ContentProvider
    + insert
    + delete
    + update
    + query
    + ContentResolver

- intent 胶水
    + 显式
    + 隐式 intentFilter
- Context 环境信息和功能

### 签名
- Android Studio
- keytool
- jarsigner


## Android应用界面
- View
    + ViewGroup
        * LayoutParams
        * MarginLayoutParams
- layout 
    + layout_height
    + layout_width
        * fill_parent
        * match_parent
        * wrap_parent

### 属性值
 - match_parent 与父元素相同
 - wrap_content 与包含的内容相同，本身的尺寸

### 方法
- setOnClickListener()

### 组件
ViewGroup

#### 线性布局
- LinerLayout
    + 不会换行
    + 子元素受到LinerLayout.LayoutParams控制
    + TableLayout
        * TableRow
- FrameLayout
    + 子元素受到FrameLayout.LayoutParams控制
- RelativeLayout
    + 子元素受到RelativeLayout.LayoutParams控制
- GridLayout
    + 子元素受到GridLayout.LayoutParams控制
- AbsoluteLayout


## 深入理解Activity与Fragment
- Activity
    + onCreate()





Toast.maketext()


## 事件处理
- 基于监听的事件处理
- 基于回调的事件处理

- 先触发监听后触发回调

为某个组件添加事件监听对象时，直接使用this作为事件监听对象即可


## 相关链接
https://www.zhihu.com/question/26947538
https://www.zhihu.com/question/51608979


