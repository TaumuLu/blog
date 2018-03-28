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
