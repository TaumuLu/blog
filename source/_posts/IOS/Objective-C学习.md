---
title: Objective-C学习
date: 2018-02-25 10:37:46
tags: IOS
---

## 基础

### 语法
- \#import 引入
    + <.h> 在编译器的安装目录的标准库中开始查找
    + ".h" 在当前的工程所在的文件夹开始寻找
- @interface 接口
- @implementation 实施
- @end 结束语句
- : 继承
- @property 属性
- @synthesize 生成setter与getter方法实现
- @autoreleasepool 在此关键字后面的程序自动进行内存回收
- \- 减号方法 普通方法即对象方法申明，对象调用
- \+ 加号方法 类方法即静态方法申明，类名调用
- goto 跳转关键词
- \* 表示指针类型的数据
- new \[Class new\] == \[\[Class alloc\] init\]
    + alloc 为对象分配空间
    + init 初始无参构造函数
    + initWith 带参构造函数
- 函数调用使用 \[Object method\]
- \#define 宏定义
- typedef 定义类型
    + 定义新类型 typedef 类型 新类型
    + 函数指针 typedef 返回值类型 (*新类型) (参数列表)
    + typedef 结构体和枚举
        * NS_ENUM
        * NS_OPTIONS
        * enum

### 修饰符
- @public
- @private
- @protected
- @package

### 基本类型
- int
- float
- double
- char
- BOOL

### 限定词
- long
- long long
- short
- unsined
- signed
- readnly
- const
- extern
- static

### 其他类型
- 指针类型 *p
- 自定义类型
- id 万能类型
    + 类型已经被预定义为指针类型，不需要加一个*号
- instancetype 未知类型
    + 只可作为返回值，使那些非关联返回类型的方法返回所在类的类型
- NSString @"" 不加@为C语言字符串类型
- NSNumber
- NSInteger
- CGfloat
- NSArray
- NSMutableArray
- NSMutableDictionary
- NSDictionary
- RSLog
    + %d
    + %p
    + %@

### 扩展名
| 语言 | 头文件 | 实现文件 |
| --- | ----- | ------- |
| c语言 | .h | .c |
| c++语言 | .h | .cpp |
| oc语言 | .h | .m |
| oc&c++ | .h | .mm |

#### .h文件
- 定义对外的接口
- 实例变量和方法声明的头文件
- 对外开放的方法、变量放到.h文件中

#### .m文件
- 类方法实现的文件
- 在此声明的类为私有的成员


## 变量
- 实例变量
- 静态变量 内部全局变量==java类变量
- 常量
- 全局变量
- 局部变量

### 实例变量
- 类内使用实例变量类外使用属性
- 访问权限
    + @public
    + @private
    + @protected 默认

#### 声明方式
- 两种声明方式
- 通过第二种方式声明的实例变量的访问权限是@private，子类是不能继承该实例变量的，若想实现继承使用第一种声明方式
    + .h文件中声明的成员变量，默认是protected
    + .m文件中声明的成员变量，默认是private
    + @synthesize找不到同名实例变量，系统会自动生成该成员变量且为private权限

```objective-c
// 第一种，旧式声明
// Test.h
@interface Test : NSObject {
    // 权限默认@protected
    // @public，类外可使用指向->访问
    // 实例变量是私有的，在类外部不能使用
    NSString *_field;
}
@property(nonatomic, copy) NSString *field;
@end
// Test.m
@implementation Test
@synthesize field = _field // 关联到实例变量
@end

// 第二种，新式声明
// Test.h
@interface Test : NSObject 
// 定义属性供外部使用， 生成了getter和setter方法声明
// Xcode4.4开始，编译器会自动为每一条@property都添加一条对应的@synthesize，不用再写@synthesize
// @synthesize自动生成实例变量getter和setter实现
// 不再需要为属性声明实例变量了，因为@synthesize默认会去访问的同名，如果找不到同名实例变量，会自动生成一个私有同名实例变量
@property(nonatomic, copy) NSString *field;
@end
// Test.m
@implementation Test
// @synthesize field // property默认添加，可以不用再写了
@end
```

#### 结论
- @property免去访问器的声明
- @synthesize免去访问器的实现
- 两者旨是在免去手动声明并实现getter和setter方法

#### @property
- 生成getter和setter方法声明
- 现编译器会自动为每一条@property都添加一条对应的@synthesize
- 接收参数
    - 原子性
        + atomic(默认) 线程安全的，表示只有一个线程访问实例变量
        + nonatomic 不加同步机制，不能保证线程安全，可以被多个线程访问，性能较高
    - 存取器控制
        + readwrite(默认) 既有getter，也有setter
            * 可以修改setter和getter访问器方法名
        + readonly 只有getter，没有setter
        + readwrite、readonly两个属性是互相排斥的，只能存在一个
    - 内存管理
        + assign(默认) 简单赋值，不更引用计数，适用于值类型
        + retain setter方法中，对传入的对象引用计数加1
        + strong 强引用，跟retain相同并产生相同的代码，语意上更好
        + weak setter方法中，对传入的对象引用计数不加1
            * 对象被释放后，用weak声明的实例变量指向nil，即实例变量的值为0
            * delegate和Outlet一般用weak来声明
        + copy 与strong类似，但区别在于实例变量是对传入对象的副本拥有所有权，而非对象本身
- 可使用位置
    + 类的声明处，该属性对应的存取器是可以被其他类使用的，该属性对应的实例变量是私有的
    + 类的extension处，该属性对应的存取器是私有的，属性对应的实例变量也是私有的
- 不可使用位置
    + 类的实现处，使用会报错
    + 类的分类(category)
        + 类的分类不可以声明实例变量

#### @synthesize
- 生成getter和setter实现
- 默认访问属性同名的实例变量，找不到自动生成一个带下划线的同名实例变量
    + 在.m文件中执行，所以在此声明的实例变量权限为private
    + 下划线实例变量可类内直接使用
    + 下划线实例变量 == self.属性访问
- getter方法名 == virableName，setter方法名 == setVirableName
    + 设置@property中的setter和getter参数可以修改访问器方法名 `@property(getter=[getName],setter=[setName])`
    + 设置readonly属性后不能再设置setter属性
- 重写setter和getter实现
    + 只重写setter和getter其中之一，可以直接重写
    + 同时重写setter和getter，需要加上@synthesize propertyName = _propertyName;
        * 系统不会帮你自动生成这个实例变量，所以需要手机加上@synthesize，此时实例变量权限为protected

### 静态变量
- 语法 `static type virableName;`
- static修饰的变量不可能被其他类使用，只能在本文件中使用
- static修饰全局变量
    + 全局变量就被定义成为一个全局静态变量，全局静态变量和全局变量的生命周期是一样的，都是在堆中的静态区，在整个工程执行期间内一直存在
    + 全局静态变量
        * 静态存储区没变（静态存储区在整个程序运行期间都存在）
        * 全局静态变量在声明他的文件之外是不可见的，准确地讲从定义之处开始到文件结尾
        * 全局静态变量则限制了作用域，即只在定义该变量的源文件内有效，在同一源程序的其它源文件中不能使用它
- static修饰局部变量
    + 局部变量就被定义成为一个局部静态变量
    + 局部静态变量
        * 由栈变为静态存储区rw data，生存期为整个源程序，只能在定义该变量的函数内使用
        * 作用域仍为局部作用域，当定义它的函数或者语句块结束的时候，作用域随之结束
- static修饰函数
    + 函数的定义和声明默认情况下是extern的，但静态函数只是在声明他的文件当中可见，不能被其他文件所用
- 静态变量只初始化一次（和java中是一样的）
- 静态变量外部访问
    + 定义获取静态变量的get/set方法

### 全局变量
- 语法 `extern type virableName;`
- extern只能用来修饰全局变量
- 凡是定义在函数或方法之外的变量（除静态变量之外）都是外部全局变量
- 在.h文件中声明
    + 带有extern会被认为是全局变量
    + 在.m文件对全局变量的赋值必须是：type virableName(与声明一致) = value。并且在调用的时候，必须导入.h文件
- extern引用变量
    + 不用导入.h文件，通过extern去直接访问
    + 用于变量的声明，告诉编译器：已经存在一个全局变量，但是不在当前的编译单元内
- extern声明
    + extern声明，仅适于修饰全局变量，不能去修饰其他的变量。一般情况下默认，定义的全局变量都带有extern

### 常量
- 语法 `const type virableName;`
    + const
    + *const
- const修饰右边的变量，用来限制变量为只读属性

## 类
- 接⼝ .h文件
- 实现 .m文件
- 多态
    + 方法重写
    + 方法重载 OC不支持
- super 父类
- self 当前类
- 实例化
    + new
    + \[\[Class alloc\] init\]
- 对象方法 +
- 类方法 -

### 继承(:)

#### 语法
```objective-c
// 定义
@interface 类名 : 父类 {
    定义实例属性
    // 只做声不能赋值
}
定义方法
// 方法类型 (返回类型)方法名:(参数类型)参数名称 参数二签名:(参数二类型)参数二名称
// 调用方法
// [对象 方法名:参数 参数二签名:参数二 参数三签名:参数三]
// 方法内真正使用参数，签名只是
@end
// 实现
@implementation 类名
@end
```

- OC中任何一个类都是继承NSObject
- 自定义初始化方法，以initWith开头
    + 调用父类的初始化方法 `self = [super init]`
- 点语法只能适用于set/get方法，其他能访问的属性使用->访问

### Category(类别)

#### 语法
```objective-c
@interface 已有类名 (类别名)
定义方法
@end
@implementation NSString (Extend)
实现方法
@end
```

- 命名
    + 类名+类别名称
    + 使用vsCode，新建Object-C Fie选File Type为Category会自动创建
- 类似用java聚合类的使用
- 可以添加实例方法，类方法，甚至可以实现协议，添加属性，不能增加实例变量
    + 利用RunTime也可以在Category中添加实例变量
- 分类方法的实现中可以访问原来类中的成员变量
- 分类可以重写原来类中的方法，但是会覆盖掉原来的方法，导致原来的方法无法再使用
- 方法调用的优先级：分类->原来的类->父类，若包含有多个分类，则最后参与编译的分类优先
- 一个类是可以定义多个类目的
- 类目可以被继承，子类可以使用super调用


### Extension(扩展)

#### 语法
```objective-c
@interface 已有类名 (可写可不写)
定义属性
定义方法
@end
```

- 命名同Category
- Extension是Category的一个特例，和类别相似，但是小括号里面没有扩展的名字，就像匿名的类别
- 对一个类的方法或属性进行扩展，.h文件中@interface的补充
- 可以添加实例变量，属性和方法，重新定义属性，更改属性权限
- 可定义在.h和.m文件中，一般的将类扩展直接写在.m文件中，而不单独建立类扩展文件
    + 单独创建的.h扩展文件中的内容和.m实现文件中扩展的内容是一样的
    + 需要将类扩展的.h引入到.m文件并实现该扩展方法
- 类扩展只能针对自定义的类，不能给系统类增加类扩展
- 类扩展定义的方法必须在类的实现中进行实现

### Protocol(协议)

#### 语法
```objective-c
@protocol 协议名Delegate <父协议|NSObject>
// 在此声明协议方法
// @requires修饰的声明方法，代理方必须实现
// @optional修饰的声明方法，代理方可以不实现
@end
```

- 命名同Category
    + 类名+Delegate
    + 使用vsCode，新建Object-C Fie选File Type为Protocol会自动创建
- 类似于java里的接口和抽象类
    + 只有@requires和接口一样
    + @requires和@optional都有时和抽象类一样
- @required修饰的方法必须实现，@optional修饰的方法可选实现
- 可单独定义.h或者定义在其他类的.h文件中，一般将协议制定在委托方的.h文件中
- 协议就是定义了一组方法，然后让其他类去实现
- 一个协议可以扩展自另一个协议
- 一个类可以同时实现多个协议，中间通过逗号分隔，协议通过<>进行实现
- 协议的实现只能在类的声明上，不能放到类的实现上
- 协议中不能定义属性、成员变量等，只能定义方法

### 区别

#### 继承和Category的区别
- 都是给一个类进行扩展
- 类别是对方法的扩展，不能添加成员变量。继承可以在原来父类的成员变量的基础上，添加新的成员变量
- 类别只能添加新的方法，不能修改和删除原来的方法。继承可以增加、修改和删除方法
- 类别不能对原有的方法进行重载。继承可以通过使用super对原来方法进行重载
- 类别可以被继承，如果一个父类中定义了类别，那么其子类中也会继承此类别

#### Category和Extension区别
- 形式上看：extension 是匿名的category
- extension中声明的方法需要在implementation中实现，而category不做强制要求
- extension 可以添加属性、成员变量，而category不可以


## 指针
指针是一个变量即指针变量，存储变量内存地址的变量，其指向的值是另一个变量，指针地址指向的内存位置  
OC中的类最终都会转化成一个结构体而存在，而类的实例对象其实是一个指向该结构体的指针  
OC系统类型的变量、自定义类型的变量都是指针  
指针相当于间接访问  
> 操作系统会为每个内存单元进行编号，这个编号就是内存单元的地址，指针也就是指这些单元的内存地址  
> 变量的内存地址就是该变量的指针，而用于保存内存地址（指针）的变量就是指针变量  

### 先说结论
**OC语言中除了基本数据类型之外的变量类型都为指针类型，对象是通过指针对其进行操作的**
这句话有几个含义
- 基础类型不用*声明，但却有真实的引用，可以用&获取引用，声明的变量就是真实的地址(基础类型也保存在栈上)，赋值时改变的也是真实的值
- 指针变量指向其他变量(可以是基本类型，结构体，甚至其他指针变量)，但本身并不是真实的地址
    + 所以只能用->来访问真实地址的属性
    + 如果用*解引用到的是真实地址，可以用.去直接访问(*obj)._property
- 指针 *
    + 运算符，代表读取星号后边这个地址指向的值
    + 声明时加*表示声明了一个指针变量
    + 使用时加*表示解引用，取*后面指针变量指向的内存地址(真正的值)
    + 指针访问用箭头符号->
- 引用 &
    + 运算符，代表读取&后边这个值的指针地址
    + 声明时加&表示创建一个变量的别名
    + 使用时不用加&，直接使用声明的引用名
    + 如果在使用加了&表示取这个变量的指针地址
- 区别
    + 有const指针，没有const引用
    + 指针可以有很多级，而引用只有一级（比如int **p是合法的，而int &&b是不合法的）
    + 指针可以为空，而引用不能为空，定义的时候必须对其进行初始化
    + 指针的值可以在初始化之后改变，而引用在初始化之后就不能变了
    + sizeof(引用)得到的是引用所表示的变量的大小，而sizeof(指针)得到的是指针本身的大小
- 用处
    + OC方法的形参变量都是对实参变量进行了拷贝（拷贝基本类型变量的值，或者拷贝指针变量存储的地址），如果方法内部想改变外部的变量那么只要传递外部变量的地址即可


## 数组


## struct结构体
结构体自定义了一种数据类型  
结构体名字和结构体变量必须有其一，也可以两者都存在  
结构体变量可以声明多个  
结构体成员访问和赋值使用点语法  
结构体指针成员访问和赋值使用箭头语法  
只有使用结构体名字声明可以用花括号一次性做初始化  

### 语法
```objective-c
struct 结构体名字 {
    类型 名字;
    类型 名字;
    类型 名字;
    ... 
} 结构体变量, ...;

// 使用typedef可以创建新类型，可以使用structExt定义新的结构体变量
typedef struct {
    char *name;
    int tag;
} 结构体变量;
```

## 方法调用
1. 给实例对象发送消息的过程(调用对象方法)
根据对象的isA指针去该对象的类方法中查找，如果找到了就执行
如果没有找到，就去该类的父类类对象中查找
如果没有找到就一直往上找，直到跟类（NSObject）
如果都没有找到就报错

2. 给类对象发送消息(调用类方法)
根据类对象的isA指针去元对象中查找，如果找到了就执行
如果没有找到就去父元对象中查找
如果如果没有找到就一直往上查找，直到根类（NSOject）
如果都没有找到就报错


## 其他定义

### 代码块Block
- 实质是为了给函数传一个回调函数
- Block就是一个函数体（匿名函数）
- Block类型定义
    + 使用typedef定义
    + 返回值类型(^ 变量名)(参数列表)
- Block的实现
    + ^(参数列表){操作主体}
- Block中可以读取块外面定义的变量但是不能修改，如果要修改那么这个变量必须声明_block修饰

### 宏
宏作用在预编译时期，其真正的效果就是代码替换，而且是直接替换

- 语法 `#define, 宏的名字, 主体`
- \#运算符被用于利用宏参数创建字符串
- \#\#宏定义中的连接运算符
- 类对象宏
- 类函数宏
- ...、\_\_VA_ARGS\_\_ 定义可变参数宏的，放在参数的最后

### SEL类型
- SEL类型的定义`typeof struct objc_selector *SEL`
- SEL类型代表着方法的签名，在类对象的方法列表中存储着该签名与方法代码的对应关系
- 每个类的方法列表都存储在类对象中
- 每个方法都有一个与之对应的SEL类型的对象
- 根据一个SEL对象就可以找到方法的地址，进而调用方法

> 在方法的查找过程中会有缓存，第一次找的时候是一个一个的找，非常耗性能，之后再用到的时候就直接使用

#### 获取SEL类型
- 编译时，通过编译器指令\@selector来获取
    + `SEL aSelector = @selector(methodName);`
- 运行时，通过字符串来获取一个方法名NSSelectorFromString
    + `SEL aSelector = NSSelectorFromString(@"methodName");`
- 将SEL对象转为NSString对象
    + `NSString *str = NSStringFromSelector(@selector(methodName));`

#### SEL的使用
- 检验对象是否实现了某个方法
    + `- (BOOL) respondsToSelector:(SEL)selector;` 检查实例方法
    + `+ (BOOL) instancesRespondToSelector:(SEL)aSelector;` 检查静态方法
- 让对象执行某个方法
    + `- (id) performSelector:(SEL)aSelector;`
    + `- (id) performSelector:(SEL)aSelector withObject:(id)object;`
    + `- (id) performSelector:(SEL)aSelector withObject:(id)object1 withObject:(id)object2;`


## 知识点
- OC中点相当于调用set和get方法，OC中的方法调用也不能用点，实例属性没有写get/set方法用箭头(->)调用(要有访问权限)
- 类本身也是一个对象，是class类型的对象，简称类对象
- 当程序启动时，就会加载项目中所有的类和分类，而且加载后会调用每个类和分类的+load方法，只会调用一次
- 当第一次使用某个类时，就会调用当前类的+initialize方法
- 先加载父类，再加载子类（先调用父类的+load方法，再调用子类的+load方法，最后调用分类的+load方法），先初始化父类，再初始化子类（先调用父类的+initialize方法，再调用子类的+initialize方法）
    + 在初始化的时候，如果在分类中重写了+initialize方法，则会覆盖掉父类的
    + 重写+initialize方法可以监听类的使用情况
- respondsToSelector:@selector(方法名) 判断当前对象中是否定义了一个方法
    + 有参数的方法名要加上引号
- 在.h文件中如果使用了另一个文件的类或协议我们可以通过@class或者@protocol进行声明，而不必导入这个文件，这样可以提高编译效率
    + 但是在.m文件中则必须导入对应的类声明文件或协议文件

### \#import和\#include的区别
> 当我们在代码中使用两次#include的时候会报错：因为#include相当于拷贝头文件中的声明内容，所以会报重复定义的错误 
> 但是使用两次#import的话，不会报错，所以他可以解决重复导入的问题，他会做一次判断，如果已经导入一次就不导入了 

### @class的作用
- @class解决两个类相互引入的问题，相互引用.h编译通不过
- 在.h文件中使用@class引入类，不用import引入，在.h文件中不会使用其类的属性和方法
- 在.m文件中引入@class类声明的.h文件，使用其类的属性和方法
- @class不会将类的.h拷贝过来，只是告诉编译器这个类有定义

### 标记
- \#pragma 标记后面的方法都是协议中的方法
- \#warning 标记此处代码有一个警告，Xcode会在此处显示黄色标记

## 参考资料
https://www.jianshu.com/p/d9759dd1fb2e
https://www.devtalking.com/articles/you-should-to-know-property/
https://blog.csdn.net/csdn_howe/article/details/53393980
https://my.oschina.net/cobish/blog/356550

https://tech.meituan.com/DiveIntoCategory.html

### 指针
http://skx926.com/2017/03/03/pointer-and-reference/
https://blog.csdn.net/senwin2009/article/details/48439361

### 插件
https://www.jianshu.com/p/eba015a543a5

### 保存文件
https://blog.csdn.net/pengpengpeng85/article/details/46984407

### 报错
https://www.jianshu.com/p/bc9792f86850
https://www.cnblogs.com/dsxniubility/p/4757760.html

### selector
https://blog.csdn.net/dkq972958298/article/details/69942077
