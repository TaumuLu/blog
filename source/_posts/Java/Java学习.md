---
title: Java学习
date: 2017-08-25 17:39:12
tags: Java
---

## 命令
- 运行 java
- 编译 javac
- 分解器 javap

## 基础语法
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
    构造器和普通方法都可以进行重载
- 修饰符
    + public
    + private
    + protected
    + default
    - static
    - final
        + final基本类型: 定值，只能赋值一次，不能再被修改
        + final方法: 该方法不能被重写，private的方法默认为final的方法
        + final类: 该类不能被继承
- interface 
    + 使用implements来实施
    + interface中的方法默认为public
    + 我们用implements关键字来实施interface，一旦在类中实施了某个interface，必须至少在该类中定义interface的所有方法
    + 一个类可以实施不止一个的interface
- 包管理
    + import
    + package
- 继承 extends
- abstract
    + 当一个类中出现abstract方法时，这个类的声明必须加上abstract关键字
    + abstract类不能用于创建对象
    + 继承抽象类必须用完整的方法定义，覆盖抽象类中的抽象方法，否则，衍生类依然是一个抽象类
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
    + Throwable类
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
- 运行时多态的前提
    + 继承（实现）
    + 重写
    + 向上转型
- 向上转型与向下转型
- 继承链中对象方法的调用的优先级
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

## Enum
- 枚举变量的定义放在第一行，多个枚举变量直接用逗号隔开
- 以分号结束以区分自定义变量，没有的自定义变量分号可以省略
- 构造函数必须私有化，写private是多余的，默认并强制是private，也只能写private，写public是不能通过编译的
- 枚举类不能继承其他类，也不能被其他类继承(因为已经继承了枚举类)
- 枚举类中可以定义抽象方法，此时枚举类会编译为抽象类，一般枚举类会被编译为final的普通类(所以无法被继承)
- 枚举类相当于定义的变量==static new当前枚举类
- 枚举类不能继承其他类，但是还是可以实现接口

## Interface
- 不可new实例化
- 接口没有构造函数
- 接口的方法全部为public
- 接口中的方法都是抽象的需要实现
- 接口可以继承接口
- 接口内的变量自动设置为public static final
- 接口无修饰符缺省为package内可见，或者为public
- 一个类可以实现多个接口

## Abstract
- 不可new实例化
- 抽象类有构造函数
- 抽象类中可以有非抽象方法
- 抽象类的方法可以是public，protected or private

## 异常处理
- Throwable
    + Error
    + Exception
        * RuntimeException
        * IOException

## 线程
- 创建线程
    + Thread
    + Runnable
- 线程周期概念一个线程有4种状态
    + 创建(new)状态: 调用new 方法产生一个线程对象后、调用 start 方法前所处的状态。线程对象虽然已经创建,但还没有调用 start 方法启动,因此无法执行。当线程处于创建状态时,线程对象可以调用 start 方法进入启动状态,也可以调用 stop 方法进入停止状态。
    + 可运行(runnable)状态: 当线程对象执行 start()方法后,线程就转到可运行状态。进入此状态只是说明线程对象具有了可以运行的条件,但线程并不一定处于运行状态。因为在单处理器系统中运行多线程程序时,一个时间点只有一个线程运行,系统通过调度机制实现宏观意义上的运行线程共享处理器。因此一个线程是否在运行,除了线程必须处于 Runnable 状态之外,还取决于优先级和调度。
    + 不可运行(non Runnable)状态: 线程处于不可运行状态是由于线程被挂起或者发生阻塞,例如对一个线程调用 wait()函数后,它就可能进入阻塞状态;调用线程的notify 或 notifyAll 方法后它才能再次回到可执行状态。
    + 退出(done)状态: 一个线程可以从任何一个状态中调用 stop 方法进入退出状态。线程一旦进入退出状态就不存在了,不能再返回到其他的状态。除此之外,如果线程执行完 run 方法,也会自动进入退出状态。 
- Java中锁机制的实现方法是共享代码之前加入 synchronized 关键字
- 线程通信
    + Java 中线程之间的通信是通过Object 类中的 wait()、notify()、notifyAll()等几种方法实现的。Java 中每个对象内部不仅有一个对象锁之外,还有一个线程等待队列,这个队列用于存放所有等待对象锁的线程。wait 方法调用的前提条件是当前线程获取了这个对象的锁,也就是说 wait 方法必须放在同步块或同步方法中。

## 引用
- 强引用
- 弱引用
    + WeakReference
- 软引用
- 虚引用


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

## Other
- Java中实现真正的克隆，继承Cloneable接口
- 注意如果一个类的成员也是一个类，而又希望支持类克隆，则要对逐级类都实现克隆
- Overload和Override的区别
    + Overloaded的方法是否可以改变返回值的类型?
    + 方法的重写Overriding和重载Overloading是Java多态性的不同表现。重写Overriding是父类与子类之间多态性的一种表现，重载Overloading是一个类中多态性的一种表现。如果在子类中定义某方法与其父类有相同的名称和参数，我们说该方法被重写 (Overriding)。子类的对象使用这个方法时，将调用子类中的定义，对它而言，父类中的定义如同被“屏蔽”了。如果在一个类中定义了多个同名的方法，它们或有不同的参数个数或有不同的参数类型，则称为方法的重载(Overloading)。Overloaded的方法是可以改变返回值的类型

### 开源程序
- Jive http://www.jdon.com
- Pet Store


## 参考资料
http://blog.csdn.net/s10461/article/details/53941091
[Java中的泛型方法](https://www.cnblogs.com/iyangyuan/archive/2013/04/09/3011274.html)
