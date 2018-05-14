---
title: Java学习
date: 2017-08-25 17:39:12
tags: Java
---


## 基础语法
- 编译与运行 java/javac
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
- 继承 extends
- static
- final
    + final基本类型的数据: 定值 (constant value)，只能赋值一次，不能再被修改
    + final方法: 该方法不能被覆盖，private的方法默认为final的方法
    + final类: 该类不能被继承
- abstract
    + 当一个类中出现abstract方法时，这个类的声明必须加上abstract关键字
    + abstract类不能用于创建对象
    + 继承抽象类必须用完整的方法定义，覆盖抽象类中的抽象方法，否则，衍生类依然是一个抽象类
    + 类似于interface
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
- container 容器    
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
- 向上转型只能够调用子类重写的方法，子类独有的方法在父类中根本没有定义，所以父类无法找到子类独有的方法


## 泛型
编译期执行
泛型的本质是为了参数化类型
泛型只在编译阶段有效
常见的如T、E、K、V等形式的参数常用于表示泛型

### 泛型类
泛型的类型参数只能是类类型，不能是简单类型
不能对确切的泛型类型使用instanceof操作

### 泛型接口
未传入泛型实参时，与泛型类的定义相同，在声明类的时候，需将泛型的声明也一起加到类中
在实现类实现泛型接口时，如已将泛型类型传入实参类型，则所有使用泛型的地方都要替换成传入的实参类型

### 泛型通配符
同一种泛型可以对应多个版本（因为参数类型是不确定的），不同版本的泛型类实例是不兼容的
类型通配符一般是使用？代替具体的类型实参(是类型实参，而不是类型形参)

### 泛型方法
如果静态方法要使用类上的泛型，必须将静态方法也定义成泛型方法

### 泛型上下边界
泛型的上下边界添加，必须与泛型的声明在一起

### 泛型数组
不能创建一个确切的泛型类型的数组
数组的类型不可以是类型变量，除非是采用通配符的方式


## 注解
- Override
- Deprecated
- SuppressWarnings

### 运行机制
- 源码注解
- 编译时注解
- 运行时注解

### 自定义注解
使用@interface关键定义注解
成员无参无异常声明
可以用default为成员指定一个默认值

### 元注解
- Target
    + ElementType
        * CONSTRUCTOR
        * FIELD
        * LOCAL_VARIABLE
        * METHOD
        * PACKAGE
        * PARAMETER
        * TYPE
- Retention
    + RetentionPolicy
        * SOURCE
        * CLASS
        * RUNTIME
- Inherited
- Documented

## 反射
运行时执行，绕过编译

- Class
    + 类是class类的实例对象
    + 获取当前类的类类型
        * \[currentClass].class
        * \[instance].getClass()
        * Class.forName('当前类的全称')
            - .newInstance() 实例化获取的类类型，只能调用无参构造方法
    + 编译时刻静态加载类
        * new
    + 运行时刻动态加载类
        * forName
    + 基本的数据类型
        * void关键字都存在类类型

- ClassInfo
    + Method
        * getMethods 获取所有public的函数，包括父类继承而来的
        * getDeclaredMethods 获取该类所有，自己声明的方法
        * getDeclaredMethod
            - getName 得到方法的名称
            - getReturnName 得到方法返回值的类型的类类型 
            - getParameterTypes 得到参数列表的类型的类类型
    + Field
        * getFields 获取所有public的成员变量
        * getDeclaredFields 获取该类自己所有声明的成员变量
        * getDeclaredField
            - getName
            - getType 得到成员变量的类型的类类型
            - getModifiers 权限修饰符
            - setAccessible() 设置Java的权限控制检查，针对private变量
    + Constructor
        * getConstructor() 获取所有public的构造函数
        * getConstructors() 获得类中所有的构造函数
        * getDeclaredConstructor() 获取该类自己所有声明的构造函数
    + Interfaces
        * getInterfaces() 获得类所实现的接口
    + Inherit
        * getSuperclass() 获得类所继承的父类


### 涉及类包
java.lang.class
java.lang.reflect.Field
java.lang.reflect.Constructor


## 代码块
- 普通代码块 类中方法的方法体
- 构造代码块 构造块会在创建对象时被调用，每次创建时都会被调用，优先于类构造函数执行
- 静态代码块 用static {}包裹起来的代码片段，只会执行一次。静态代码块优先于构造块执行，有自己的作用域
- 同步代码块 使用synchronized() {}包裹起来的代码块，在多线程环境下，对共享数据的读写操作是需要互斥进行的，否则会导致数       据的不一致性。同步代码块需要写在方法中

### 注意
静态代码按顺序执行，依次加载


## 集合
- Integer
    + valueOf()
    + parseInt()
- Map
    + get()
    + entrySet()
        * iterator()
        * getKey()
        * getValue()
    + keySet()
    + valueSet()

## 多态
- 同一个行为具有多个不同表现形式或形态的能力
- 多态的分类
    + 编译时多态（重载，严格说不能算作多态）
    + 运行时多态（重写）
- 运行时多态的前提：
    + 继承（实现）
    + 重写
    + 向上转型
- 向上转型与向下转型
- 继承链中对象方法的调用的优先级：
    + this.show(O)
    + super.show(O)
    + this.show((super)O)
    + super.show((super)O)

## static
- 静态导入 `import static [package];`
- 静态变量
    + 不能在方法体中定义static变量，只有类变量，不包括方法内部的变量
- 静态方法
- 静态代码块
- 静态内部类


## 体系
- J2SE 桌面应用软件的编程
- J2ME 嵌入式系统开发
- J2EE 分布式的网络程序的开发
    + Jsp
    + Servlet
    + JavaBean
    + EJB
    + JDBC
    + JavaMail

### 开源程序
- Jive http://www.jdon.com
- Pet Store


## 参考资料
http://blog.csdn.net/s10461/article/details/53941091
[Java中的泛型方法](https://www.cnblogs.com/iyangyuan/archive/2013/04/09/3011274.html)
