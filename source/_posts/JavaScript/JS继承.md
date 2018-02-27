---
title: JS继承
date: 2016-02-24 18:21:28
tags: JavaScript
---

## 前言
此文写于工作前自学前端的日子，当时写在csdn上，时隔一年多翻出重新整理成markdown格式，同作为记录自己前端之路的历程 

## 面向对象的程序设计

### 初实
不记得了，只知道没有理解。怎么得出的结论呢，没有恍然大悟的感觉，看完只觉得一片混乱，自始至终也不知道就算学会那些了又有什么呢用，根本用不上的感觉，也就是不会运用。只能说见识太少了，试着去看了JQuery的源码找寻答案，看如何应用，结果只因看不懂。

### 后续
陆续又看了几遍吧，收获不大，这次除外，不过不排除这次是建立在之前看了几遍的基础上才有所收获的。想想只想说下次再想看懂书，先静下心来，全投入的去看。

## 正文
首先以习惯来，整理好层次。

### 属性
JavaScript中有三种不同类型的属性：

1. 数据属性
数据属性就是我们通常所用的"普通"属性，它用来将一个字符串名称映射到某个值上

2. 访问器属性
可以借助函数来获取或设置一个属性的值，这些函数称之为访问器函数，控制属性读取的访问器函数为getter，控制属性写入的访问器函数为setter

3. 内部属性
有一些属性仅仅是为规范所用的，为内部属性，因为它们无法通过JavaScript直接访问到，但是它们的确存在并影响着程序的表现，内部属性的名称比较特殊，都被两个中括号包围着

#### 属性特性
一个属性的所有状态，包括它的数据和元数据，都存储在该属性的特性中，属性拥有自己的特性，就像对象拥有自己的属性一样，特性的名称写成类似内部属性的形式即双中括号

- 数据属性拥有的特性:
    + Writable
    存储着一个布尔值，表明能否修改属性的值。默认值true
    + Value
    存储着属性的值,也就是属性的数据。默认值undefined

- 访问器属性拥有的特性:
    + Get
    存储着getter函数,也就是在读取这个属性时调用的函数，该函数返回的值也就是这个属性的值。默认值undefined
    + Set
    存储着setter函数,也就是在写入这个属性值时调用的函数。该函数在调用时会被传入一个参数，参数的值为所赋的那个新值。默认值undefined

- 两种类型的属性都有的特性：
    + Configurable
    存储着一个布尔值，表示能否删除这个属性从而重新定义属性，能否修改属性的特性，能否把属性修改成访问器属性，基本控制了一个属性的元数据的可写性。默认值true
    + Enumerable
    存储着一个布尔值，表示能否通过 for-in 循环返回属性。默认值true



### 创建对象
JavaScript使用new操作符创建对象，或者用直接字面量创建对象。与其他语言不同，JavaScript对象在完成创建后仍能增加成员

1. 工厂模式：
原理：创建对象的传统方式，首先创建一个Object实例，然后增加成员属性，把这些代码用一个函数封装起来并返回所创建的对象，那这个函数就是创建对象的工厂函数
> 解决了创建多个相似对象的问题，工厂函数的名字并不是类的名字，虽然可以用new操作符，但无法使用instanceof来判断所创建的对象的类型。另外，如果把成员函数的函数体定义在工厂函数的内部的话，创建对象时会重复的创建成员函数实例，函数也是一种对象，因此浪费内存。

    ** 问题 **
    对象识别问题，方法重复创建

2. 构造函数模式：
原理：创建一个新对象，将构造函数的作用域赋给新对象（this的作用），执行构造函数的代码来为新对象添加属性
> 构造函数类似工厂函数，所不同的是构造函数的名字就是类名，可以用new操作符来创建对象。用构造函数创建对象的好处是所生成的对象可以用instanceof来判断所属的类。创建的新对象有constroctor属性指向构造函数

    ** 问题 **
    方法重复创建

3. 原型模式：
原理：将属性和方法定义在构造函数原型对象中。
> 每个函数都有一个prototype属性，是一个指针，指向一个对象，其用途就是包含着所有实例共享的属性和方法。原型是对象的模板，可以用prototype属性来定义一个类，原型模式同构造函数一样可以用instanceof判断所创建的对象的类型

    ** 问题 **
    共享所有属性和方法，对引用类型而言有问题。原型模式的构造函数不能带任何参数

4. 组合使用构造函数和原型模式：
原理：结合各自利弊
> 组合模式利用构造函数定义非函数成员，用原型定义函数成员，避免了重复创建方法造成的内存浪费，又不会造成对象实例间的相互影响。

5. 动态原型模式：
原理：解决独立的构造函数和原型，利用if语句封装起来

6. 寄生构造函数模式：
原理：将工厂模式用 new 操作符创建
> 在特殊情况下用来为对象创建构造函数

    ** 问题 **
    对象识别问题

7. 稳妥构造函数：
原理：同寄生构造函数模式，区别在于方法不引用 this，不用 new 操作符创建

    ** 问题 **
    对象识别问题

#### 总结：
主要为构造函数和原型模式最为重要，寄生构造函数模式和稳妥构造函数只为特殊情况下使用，不过思想值得学习



### 继承
继承分为接口继承和实现继承，对JavaScript来说只能依靠实现继承，原理为原型链实现

1. 原型链
在之前创建对象的各类方法上加入了原型链而实现继承。从而可以让构造函数的原型对象继承另一个构造函数和原型对象，使其原型对象成为他们的实例（因此而拥有他们的方法和属性），之后在此构造函数上创建的实例就拥有这两个构造函数和其原型对象的所有属性和方法
```
// 超类型
function parent() {      
    this.name = par;
}
parent.prototype.getname = function() {
    return this.name;
}
// 子类型
function child() {       
    this.age = 11;
}
//替换原型，继承parent
child.prototype = new parent();       
child.prototype.getage = function() {
    return this.age;
}

var test = new child();

alert(test.name);       // par
alert(test.getname());  // par

alert(test.age);        // 11
alert(test.getage());   // 11

```
本质为重写child的原型对象，换了一个新原型为 parent的实例，即作为实例因此就拥有 parent实例所拥有的全部属性和方法
> 内部生成一个指针，为 [[prototype]]，指向 parent的原型

    本质上扩展了原型搜素机制，即 child的实例搜索其属性方法时，先搜索child.prototype的原型，没有找到再往上搜索 parent.prototype的原型

    所有引用类型都继承 Object，也是通过原型链实现的

    用instanceof和isPrototype都能识别对象，返回true

    给child原型添加方法的代码一定要放在替换child的原型语句之后。在 child原型上使用字面量添加的方法会再次重写原型链，使继承无效

    ** 问题 **
    通过原型实现的继承会共享属性和方法
    创建的子类型实例时，不能向超类型的构造函数传递参数

2. 借用构造函数
也叫伪造对象或经典继承
在子类型构造函数的内部调用超类型构造函数
通过 apply()和 call()方法来实现
```
// 超类型
function parent(oname) {      
    this.name = oname;
}
// 子类型
function child(oname, oage) {      
    // 继承了parent还传递了参数 
    parent.call(this, oname);       
    this.age = oage;
}
var test = new child();

alert(test.name);       // oname
alert(test.age);        // oage

```
** 问题 **
同构造函数，方法重复创建


3. 组合继承
也叫为经典继承
使用原型链来实现对原型属性和方法的继承，使用构造函数来实现对实例属性的继承
```
// 超类型
function parent(oname) {      
    this.name = oname;
    this.arrays = [1,2,3];
}
parent.prototype.getname = function() {
    return this.name;
}
// 子类型
function child(oname, oage) {       
    // 继承parent传递参数
    parent.call(this, oname);
    this.age = oage;
}
// 替换原型，继承parent
child.prototype = new parent();       
child.prototype.getage = function() {
    return this.age;
}

var one = new child();
var two = new child();

alert(one.name);        // oname
alert(one.getname());   // oname

one.arrays.push("4");
alert(one.arrays);      // 1,2,3,4
alert(one.age);         // oage
alert(one.getage());    // oage


alert(two.name);        // oname
alert(two.getname());   // oname

alert(two.arrays);      // 1,2,3
alert(two.age);         // oage
alert(two.getage());    // oage

```
同结合各自利弊，很完美了。但还差一点

    ** 问题 **
    我自己的问题，当时看的时候就有个问题，即通过child.prototype=new parent()替换了原型，继承了parent，按之前原型链说的应该连同parent构造函数中非其原型中的name和arrays属性一同继承，成为child原型的属性，因此实例one改变引用类型arrays，那么实例two的array也会改变，结果不然

    原因是调用了两次parent构造函数，第一次是替换原型时，第二次为在child构造函数中调用parent构造函数，所以在child原型中的这两个同名属性就被屏蔽了

4. 原型式继承
目的就是让已有的对象利用原型的共享性都共享一个属性
```
function object(O) {
    function F(){};
    F.prototype = O;
    return new F();
}
```
使用了原型的方法，即拥有原型的特性
> ECMAScript 5新増了 Object.create()规范了原型是继承
> 该方法接受两个参数，第一个参数为用作新对象原型的对象。第二个参数为为这个新对象定义额外属性的对象，格式与 Object.defineProperties()的第二个参数格式相同

5. 寄生式继承
目的是让已有的对象利用构造函数来添加一个方法
```
function createAnother(original) {
    var clone = Object(original);
    clone.sayHi = function() {
        alert("Hi");
    };
    return clone;
}
```
使用了构造函数的方法，即拥有构造函数的特性
方法会重复创建


6. 寄生组合式继承
目的：
组合继承会调用两次超类型，之前说过，因此需要解决
通过借用构造函数来继承属性，通过原型链的混成形式，即利用原型式继承来继承方法
```
// 超类型
function parent(oname) {      
    this.name = oname;
    this.arrays = [1,2,3];
}
parent.prototype.getname = function() {
    return this.name;
}
// 子类型
function child(oname, oage) {       
    parent.call(this, oname);
    this.age = oage;
}
// 之前的方法继承
// child.prototype=new parent();       
// 现在的方法继承
function inheritPrototype(child, parent) {        
    // 获取即复制 parent.prototype的原型得到其副本
    var prototype = Object(parent.prototype);     
    // 添加副本的 constructor属性并改为指向 child
    prototype.constructor = child;                
    // 再将副本赋值给子类型的原型
    child.prototype = prototype;                  
}

child.prototype.getage = function(){
    return this.age;
}
```
再创建child的实例和组合式继承的结果一样

    这样做的好处是只调用了一次 parent函数，避免在child.prototype上创建了不必要、多余的属性。（即之前讲到被屏蔽的）

#### 总结
在我看来创建对象有是三种
- 一是直接调用，通过在对象上定义，再返回对象，即工厂模式
- 二是用new调用，通过 this将定义的指向到创建的对象上，即构造函数
- 三是用new调用，通过构造函数的原型定义，即原型模式

其余的创建方法都是建立在这三个基础上，而继承无非就是扩大了创建对象方法的数量，让实例能不仅拥有一套创建对象方法上的属性和方法，还能继承从其他创建对象方法上定义的属性和方法

### 对象的定义为属性和方法的定义
他们的缺点即优点
- 构造函数模式：属性和方法会重复创建，如同基本类型的值复制一样，创建实例即复制重新创建，而一般我们需要实例拥有各自的属性，共享其方法
- 原型模式：属性和方法不会重复创建，如同引用类型的值复制一样，创建的实例都指向其共有的属性和方法，共享所有。一改则全改

所以创建对象的方法所产生的问题都是这些问题，无非属性和方法都共享或都不共享，而需要的是不共享属性，共享其方法

## 寄语
暂时就理解这么多了，以上纯属个人理解，等以后再理解更多再写，到时再来看此时的理解作为对比

总想写的更好更通俗易懂，说是写出来大家理解探讨，但发现除了自己看方便些反而不如书上定义的清晰透彻，也许这就是写博客本来的目地的。若想学点东西还是看书来的更深刻

## 参考资料
JavaScript高级程序设计


