---
title: Java学习
date: 2017-08-25 17:39:12
tags: Java
---

## 基础语法

- 编译与运行
    + java/javac
    
- 变量
    + byte 
    + int 
    + char 
    + short 
    + long 
    + float 
    + double 
    + boolean

- 基本类型初始值
    + 数值型: 0
    + 布尔值: false
    + 其他类型: null
    
- 构造器
    + 构造器的名字和类的名字相同
    + 构造器没有返回值
    
- 方法重载
    方法名 + 参数列表 => 实际调用哪一个方法
    构建和普通方法都可以进行重载

- 修饰符
    + public
    + private
    + protected
    + default
    
- interface 
    + 使用implements来实施
    + interface中的方法默认为public
    + 我们用implements关键字来实施interface，一旦在类中实施了某个interface，必须至少在该类中定义interface的所有方法
    + 一个类可以实施不止一个的interface

- 包管理
    + package 
    + import

- extends

- static
- final
    + final基本类型的数据: 定值 (constant value)，只能赋值一次，不能再被修改
    + final方法: 该方法不能被覆盖，private的方法默认为final的方法
    + final类: 该类不能被继承

- abstract
    + 当一个类中出现abstract方法时，这个类的声明必须加上abstract关键字
    + abstract类不能用于创建对象
    + 继承抽象类必须用完整的方法定义，覆盖抽象类中的抽象方法，否则，衍生类依然是一个抽象类
    + 感觉类似于interface

- 参数按值传递

- 类型转换
    + 基本类型转换
        * 收缩变换
        * 宽松变换
    + 引用类型转换
        * 衍生类对象成为基类对象Java会正确识别对象本身的类型
        * 基类引用成为衍生类引用，该基类引用所指向的对象已是衍生类对象

- String类
    + 唯一一个不需要new关键字 来创建对象的类
    + 不可变对象
    + 方法
        * length
        * charAt
        * subString
        * indexOf
        * startWith
        * endWith
        * equals
        * compareTo
        * trim
        * toUpperCase
        * toLowerCase
        * splace

- 异常处理
    + Trowable类
    + throws Exception 
        * 异常声明，对异常不处理，收到异常我也向外抛
    + getMessage()
    + 自定义异常

- IO
    + FileReader
    + BufferedReader
        * readLine
    + BufferedWriter

- RTTI
    + Class类
        * getClass()
        * forName
        * .class
        * getName()
        * getPackage()
        * newInstance()
        * getFields()
        * getMethods()
- Run-Time 
- TypeIdentification

- 多线程
    + Thread(class)
        * getName
        * run
        * start
        * join
        * setDaemon
    + Runnable(interface)
        * run
    + 修饰符
        * synchronized

- container
    + 数组
        * 类型加一个\[\]
        * 需要声明数组的大小
        * 使用{}初始化数组
        * System.arraycopy()
    + Collection
        * List
            - <class\>的方式声明类型
            - 只能放入class类及其衍生类的对象
            - add
            - get
            - remove
            - size
        * Set
            - add
            - size
            - contains
            - remove
        * iterator()
            - next()
        * Map
            - put
            - get
            - keySet(Set)
            - values(List)

- 嵌套类
    + 定义内部类时，我们同样有 访问权限控制(public, private, protected)
    + 我们在创建内部类对象时，必须基于一个外部类对象，并通过该外部类对象来创建对象
    + 闭包
    + 嵌套static类
    
