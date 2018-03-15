---
title: Objective-C学习
date: 2018-02-25 10:37:46
tags: IOS
---

## 基础

### 基本数据类型
- int
- float
- double
- char

#### 限定词
- long
- long long
- short
- unsined
- signed

## 其他类型
- 指针类型 *p
- 自定义类型
- id 万能类型
- instancetype 只可作为返回值，使那些非关联返回类型的方法返回所在类的类型


- NSString @"" 不加@为C语言字符串类型
- NSNumber
- NSInteger
- CGfloat
- float
- double
- BOOL
- NSArray
- NSMutableArray
- NSMutableDictionary
- NSDictionary

- RSLog
    + %d
    + %p
    + %@


类内使用成员变量类外使用属性

- 成员变量
    + 默认修饰符为@protected
    + 加@public类外使用指向->访问
- 属性
    + @property()
        * nonatomic 非原子性访问, 不加同步机制, 多线程并非访问时可提高性能
        * strong 相当于一个深拷贝的操作

- 继承
    + : 冒号表示继承
    + 父类方法没有声明，子类无法继承

- 多态
    + 方法重写
    + 方法重载 OC不支持

- super 父类
- self 当前类

### 修饰符
- @public
- @private
- @protected
- @package


### 语法
- #import 引入
- @interface 接口
- @implementation 实施
- @end 结束语句
- : 继承
- @property
- @synthesize 让编译器为你自动生成setter与getter方法
- @autoreleasepool 在此关键字后面的程序自动进行内存回收
- \- 减号方法 普通方法即对象方法申明，对象调用
- \+ 加号方法 类方法即静态方法申明，类名调用
- goto
- \* 表示指针类型的数据
- new \[Person new\] === \[\[Person alloc\] init\]
    + alloc 为对象分配空间
    + init
- 函数调用使用\[\]

### 声明语法
- readnly 只读



### 扩展名
|  | 头文件 | 实现文件 |
| --- | --- | --- |
| c语言 | .h | .c |
| c++语言 | .h | .cpp |
| oc语言 | .h | .m |
| oc&c++ | .h | .mm |








- RN导出静态变量
constantsToExport

- info.plist
    - NSAppTransportSecurity 请求协议配置
        + NSAllowsArbitraryLoads YES禁用ATS
