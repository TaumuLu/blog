---
title: Objective-C学习
date: 2018-02-25 10:37:46
tags: IOS
---

## 基础

### 变量
- 成员变量
- 静态变量 内部全局变量==java类变量
- 常量
- 全局变量
- 局部变量

#### 成员变量
类内使用成员变量类外使用属性
```
// 第一种
// Test.h
@interface Test : NSObject {
    // 权限默认@protected
    // @public，类外可使用指向->访问
    NSString *_field;
}
@property(nonatomic, copy) NSString *field;
@end
// Test.m
@implementation Test
@synthesize field = _field
@end

// 第二种
// Test.h
@interface Test : NSObject 
@property(nonatomic, copy) NSString *field;
@end
// Test.m
@implementation Test
// @synthesize field
@end
```
> 通过第二种方式声明的实例变量的访问权限是@private，子类是不能继承该实例变量的，若想实现继承由使用第一种声明方式

- @property() 参数
    + 读写属性： （readwrite/readonly）
    + setter语意：（assign/retain/copy）
    + 原子性： （atomicity/nonatomic）
    + nonatomic 非原子性访问, 不加同步机制, 多线程并非访问时可提高性能
    + strong 相当于一个深拷贝的操作
- @property 指令可使用位置
    + 类的声明处，该属性对应的存取器是可以被其他类使用的，该属性对应的实例变量是私有的
    + 类的extension处，该属性对应的存取器是私有的，属性对应的实例变量也是私有的
- @property 指令不可使用位置
    + 类的实现处，使用会报错
    + 类的分类（category），类的分类不可以声明实例变量

#### 静态变量
静态变量根本不可能被其他类使用  
语法  
`static type staticVar;`

- 特性
    + 静态变量的作用域是与它定义的位置有关系
        * 定义在文件中它的作用域就是整个文件，并且是私有的，其他的类或其他的文件是不可以访问该静态变量的
        * 定义在方法内，它的作用域就是这方法，其他的方法是不可以访问该静态变量
    + 静态变量只初始化一次（和java中是一样的）
    + 类方法和实例方法甚至函数都可以使用静态变量
    + 静态变量定义在源文件中（.m）
- 让静态变量变为外部全局的
    + 定义获取静态变量的类方法

#### 外部全局变量
外部全局变量即该变量不仅可以在所定义的文件内被访问，也可以在其他文件中被访问  凡是定义在函数或方法之外的变量（除静态变量之外）都是外部全局变量

引入文件，使用extern获取外部全局变量  
语法  
`extern type varName;`

#### 常量
语法  
`const type constVarName;`



> 变量可否定义在头文件(.h)中  
> 因为外部全局变量肯定必须是整个工程唯一的，import的作用是把头文件中的内容进行拷贝，若有多个文件import了一个定义了外部全局变量的头文件，那在整个工程中就会出现多个同名同类型的外部全局变量

### 基本数据类型
- int
- float
- double
- char

### 限定词
- long
- long long
- short
- unsined
- signed
- readnly 只读
- const
- extern
- static

### 其他类型
- 指针类型 *p
- 自定义类型
- id 万能类型，类型已经被预定义为指针类型，不需要加一个*号
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

### 类定义
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
    + <.h> 在编译器的安装目录的标准库中开始查找
    + ".h" 在当前的工程所在的文件夹开始寻找
- @interface 接口
- @implementation 实施
- @end 结束语句
- : 继承
- @property 属性
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
- typedef 
    + 定义新类型 typedef 类型 新类型
    + 函数指针 typedef 返回值类型 (*新类型) (参数列表)
    + typedef 结构体和枚举
        * NS_ENUM
        * NS_OPTIONS
        * enum

### 扩展名
|  | 头文件 | 实现文件 |
| --- | --- | --- |
| c语言 | .h | .c |
| c++语言 | .h | .cpp |
| oc语言 | .h | .m |
| oc&c++ | .h | .mm |

### .h文件
成员和方法声明的头文件

```
// 系统自带的用<>而不是双引号
#import "头文件.h"

@interface 类名 {
    // 成员变量是私有的，在类外部不能使用
    成员变量声明
}
// 定义属性外部可以使用， 相当于成员变量的get和set方法
属性声明 @property
方法声明 实例方法- 类方法+
@end  
```

### .m文件
类方法实现的文件
在此声明的类为私有的成员

```
// 扩展，对一个类的方法或属性进行扩展
// 其一，定义私有方法
// 其二，重新定义属性，更改属性权限
// 其三，申明私有变量和属性
@interfae 类名(可以添加一些说明性的文字，也可以留空)
//定义属性和方法，不能添加成员变量
@end

@implementation 类名 {
    // 成员变量是私有的，在类外部不能使用
    成员变量声明
}
@synthesize 属性名
方法实现 {
}
@end  

```


### 宏
\#define, 宏的名字, 主体
宏作用在预编译时期，其真正的效果就是代码替换，而且是直接替换
\#运算符被用于利用宏参数创建字符串
\#\#宏定义中的连接运算符

- 类对象宏
- 类函数宏
- ...、\_\_VA_ARGS\_\_ 定义可变参数宏的，放在参数的最后


