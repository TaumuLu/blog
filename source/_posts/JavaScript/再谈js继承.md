---
title: 再谈js继承
date: 2018-02-15 17:05:40
tags: JavaScript
---

# 前言
一直以为自己弄清了js的继承即原型相关的知识，今天偶然看到了关于Object.create的方法描述才发现自己还是没有搞清楚，在看了相关知识后又再次理解了继承原型，遂记录下来

## 相关方法
- Object.getPrototypeOf(object) 返回指定对象的原型(内部\[\[Prototype\]\]属性的值)
- Object.create(proto[, propertiesObject]) 使用指定的原型对象(内部\[\[Prototype\]\]属性的值)及其属性去创建一个新的对象

## 原型
- \_\_proto\_\_(隐式原型) 任何对象都拥有此属性
- prototype(显式原型)

### 理解
- prototype理论上只有函数拥有此属性 箭头函数并没有此属性，甚至没有constructor属性，因此不能使用new
- 真正的原型对象是\_\_proto\_\_，即原型链中的原型对象
- 对象.\_\_proto\_\_ === 该对象的构造函数.prototype


## ES6Class继承
- class为双重继承，即构造函数本身的继承也一同改变了
    + 子类构造函数的原型指向父构造函数 `Child.__proto__ === Parent`
    + 子类构造函数的prototype原型指向父构造函数prototype `Child.prototype.__proto__ === Parent.prototype`
- es6的class是向java靠拢的
    + 父类先被创建之后才创建出子类，其实本该就是这样，但对于es5中的继承来说却是相反的
    + 子类使用super来调用父类的
        * super作为函数，代表父类的构造函数，类的构造函数必须执行一次super函数
        * super作为对象，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
        * super调用父类的方法时，方法内部的this指向当前的子类实例，普通方法和静态方法都是如此
    + 可以不写constructor，和java一样默认会有一个无参的构造器，但如果写了必须调用super()父类构造器


## 参考资料
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://www.zhihu.com/question/34183746
