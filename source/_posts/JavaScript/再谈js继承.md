---
title: 再谈js继承
date: 2018-02-15 17:05:40
tags: JavaScript
---

# 前言
一直以为自己弄清了js的继承即原型相关的知识，今天偶然看到了关于Object.create的方法描述才发现自己还是没有搞清楚，在看了相关知识后又再次理解了继承原型，遂记录下来

## 相关方法
- Object.getPrototypeOf(object)  
    返回指定对象的原型(内部\[\[Prototype\]\]属性的值)
- Object.create(proto[, propertiesObject])  
    使用指定的原型对象(内部\[\[Prototype\]\]属性的值)及其属性去创建一个新的对象

## 原型
- \_\_proto\_\_(隐式原型)
- prototype(显式原型)

### 理解
- prototype理论上只存在于函数中(主要为构造函数)
- 真正的原型对象是\_\_proto\_\_，即原型链中的原型对象
- 对象.\_\_proto\_\_ === 该对象的构造函数.prototype


## ES6Class继承
- 类实例的继承
- 类本身即构造函数间的继承

class即构造函数本身的继承也一同改变了


## 参考资料
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://www.zhihu.com/question/34183746
