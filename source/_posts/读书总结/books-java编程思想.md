---
title: java编程思想
date: 2018-02-27 16:36:37
tags: 读书总结
---

# java编程思想

权限隐藏实现保护对象提供的功能
继承用来达到复用
继承形式添加或复写

## 一切都是对象

### 基本类型
- boolean - Boolean
- char - Character
- byte - Byte
- short - Short
- int - Integer
- long - Long
- float - Float
- double - Double
- void - Void

- BigInteger
- BigDecimal

- 数字不能做为布尔值使用


- Character
    + isLowerCase()
- Integet
    + toBinaryString()
- Random
    + next\[Int, Float ...\]
- String
    + toCharArray()
- Class
    + equals()
    + finalize()
- System
    + gc()
- Array
    + toString()
- enum
    + values()
    + ordinal()

- 已定义构造器后不会自动创建默认构造器了
- 只能构造器中调用构造器，且不能调用两个，调用必须放在起始处
- 对像引用默认为null
- 变量定义的先后顺序决定初始化顺序，且在构造器调用前初始化
- 静态初始化只在必要下进行，new和类访问时，此后不会再次初始化
- 非静态每次new初始化都执行

- public
- protected
- private

类的访问权限
- 只能有一个public类
- public类的名称与文件名完全匹配
- 可以完全不带public类
- 类不能是private和protected

- 每一个类都有toString()方法



