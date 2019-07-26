---
title: Typescript
date: 2019-05-23 08:48:40
tags: JavaScript
---

## 声明文件
在d.ts文件里面，在最外层声明变量或者函数或者类要在前面加上declare这个关键字  
在typescript的规则里面，如果一个.ts、.d.ts文件如果没有用到import或者export语法的话，那么最顶层声明的变量就是全局变量  

### export default
只有function、class和interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出

### 三斜线指令
类似于声明文件中的 import，它可以用来导入另一个声明文件
与import的区别是，当且仅当在以下几个场景下，我们才需要使用三斜线指令替代import
- 当我们在书写一个全局变量的声明文件时
- 当我们需要依赖一个全局变量的声明文件时
