---
title: JS积累
date: 2017-03-14 23:55:28
tags: JavaScript
---

## 前言
在此记录自己平时学习知识点时自己恍然大悟的理解及体会，不一定理解准确，但定是当时最棒的理解了

## 日常积累

#### Scope  
共享的Scope，所以循环中创建多个函数会只取得最后一次循环变量的赋值

#### 鼠标事件  
js鼠标拖拽要触发mousemove事件绑定在document元素上，可解决快速移动失效所拖拽元素跟不上的问题，其他类似问题都可绑定在document上解决

#### 表达式赋值  
(operation)()赋值运算再执行函数的关键在于赋值时取到的函数为执行时直接触发的函数，而不在于会把这个函数赋值给谁再由它来执行(决定this指向)

#### 作用域  
查找变量先从作用域的前端开始，即当前环境的变量对象或活动对象查，之后若在函数中再沿着Scope中保存的父变量对象的层级链向上查找至全局对象，浏览器中即window对象，之后再进行二维作用域链查找，因window继承于Object.prototype对象，所以查到Object.prototype为止

#### 函数参数解构赋值  
解构赋值function({x=1,y=2}={})，{}为默认值，即没有传入参数将{}对象做为默认值，因为默认值为空对象，所以又触发设置默认的对象解构赋值所以参数为1，2

#### 函数参数传递  
函数参数只能按值传递，因此传递引用类型时并非按引用访问，而是存储实参到变量对象中并与传进的变量引用内存中的同一个引用类型，因此将参数指向另一个引用类型时并不会影响到传进函数的变量所引用的值

#### js执行机制  
js逐行解释执行代码，当执行到函数调用时，此时调用函数内部的作用域链为Scope + 当前函数的AO对象  
但Scope保存的对象为调用此函数的AO/VO对象，仅为预编译保存的值 + 调用函数之前的代码执行值  
所以在调用函数之后才赋值的变量是取不到的，即使是闭包也如此(单线程执行代码即同步)  

#### 正则表达式  
加标志g 会引起交替返回true 和false  
使用标志g 不会在匹配第一个项时就停止，而会保留状态，直到没有匹配才会重置  
可以写RegExp.lastIndex = 0重置这种状态

#### ==比较操作符  
参数数据类型相同直接进行比较
- 不同 
    + 布尔值：转换为数值进行比较
    + 字符串：如果另一比较类型为数值会转化为数值通过Number()方法转换
    + 对象：先调用valueOf()比较，不行再调用toString()比较(得到基本类型)
- 规则 
    + null和undefined不会转换且互相相等
    + NaN不等于任何值，即使是NaN
    + 两个对象会比较引用即指针

#### stack
数据结构
- 代码运行方式
- 内存区域

#### 异步/同步调用  
异步的函数调用不返回原来代码调用处  
回调函数
- 需要带状态的才叫回调函数
- 回调和闭包有一个共同的特性：在最终“回调”调用以前，前面所有的状态都得存着

#### EventLoop  
Event Loop是一个程序结构，用于等待和发送消息和事件  
EventLoop派一个人来轮询所有的，其他人都可以把观察条件和回调函数注册在EventLoop上，它进行统一的轮询，注册的人越多，轮询一圈的时间越长。但是简化了编程，不用每个人都写轮询了，提供API变得方便

#### 异步 => 回调 => EventLoop
文字不被选中 绑定selectstart 事件，return false

#### in运算符
in 运算符要求左边的操作数必须是字符串类型或可以转换为字符串类型的其他类型，右边的操作数必须是数组或对象，只有第1个操作数的值是第2个操作数的属性名，才会返回true，否则返回false  
in 运算符会在整个原型链上查询指定的属性或者键值

#### Promise
Promise 是异步的，所以对其 try catch 是没有作用的，只能用自身的then或catch方法去捕获

### Label
```html
<marquee direction="up" behavior="scroll" scrollamount="1" scrolldelay="0" loop="-1" width="1000" height="50" bgcolor="#0099FF" hspace="10" vspace="10">
    指整个Marquee对齐方式; (2)behavior:设置滚动的方式: scroll:表示由一端滚动到另一端,会重复,缺陷是不能无缝滚动。 slide:表示由一段滚动到另一端,不会重复...
</marquee>

<!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.3.0/respond.min.js"></script>
    <script src="http://cdn.bootcss.com/html5media/1.1.8/html5media.min.js"></script>
<![endif]-->
```

#### head
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta http-equiv="content-Type" content="text/html; charset=utf-8"/>
<meta name='viewport' content='width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no'>

<link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 480px)" href="mobile-device.css"/>
```

### JSP 
- 小数点保留几位 <fmt:formatNumber type="number" value="${sell.value}" pattern="0" maxFractionDigits="0"/>
- 截取字符串 ${fn:substring(sell.value,0,1)}

### 正则表达式 
- 验证数字包括负数和小数 `const reg = /^(-)?\d+(\.\d+)?$/g;`

### Code Snippet
```js
// 为所有元素添加、移除不同颜色边框
[].forEach.call($$("*"),function(a){
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16);
})
[].forEach.call($$("*"),function(a){
  a.style.outline="none";
})

// <<是左移位，是位操作符的一种
// 举例说a<<b就是先将a化为二进制数，然后向左移动b个位置
// 例如：00000001<<2就变成了00000100
```



对象赋值属性失败情况 {
    属性为只读，defineProperty()除外
    属性是继承属性，且为只读，不能通过同名自有属性覆盖只读的继承属性
    不存在自有属性，没有使用setter方法继承，且不可扩展
}


DOM对象通过直接获取属性和getAttribute()方法获取属性
    直接通过.操作符获取属性得到绝对路径
    通过getAttribute()获取的为相对路径
        IE返回也是绝对路径，通过getAttribute()方法的第二个方法 {
            0: 默认值，搜索属性时大小写不敏感
            1: 搜索属性时大小写敏感，大小和小写字母必须完全匹配
            2: 返回BSTR形式的属性值？此标识对事件属性无效( 设置此值可返回相对路径 )
            4: 返回完整路径URL地址。只对URL属性有效
        }


undefined 表示"默认缺少值"，就是此处应该有一个值，但是还没有定义。
典型用法是 {
    变量被声明了，但没有赋值时，就等于 undefined
    调用函数时，应该提供的参数没有提供，该参数等于 undefined
    对象没有赋值的属性，该属性的值为 undefined
    函数没有返回值时，默认返回 undefined
}


数值上调用方法如10['add']，而不是10.add，是因为数值后面的点，会被解释为小数点，而不是点运算符
将数值放在圆括号中，就可以使用点运算符调用方法了(10).add()
或者10..add()此代码的第一个点解释为小数点，第二个点解释为点运算符。


ES5规定，每个对象的属性都有一个取值方法get，用来自定义该属性的读取操作。
Object.defineProperty(object, propertyname, descriptor)


同源策略 {
    协议相同
    域名相同
    端口相同
}
限制 {
    Cookie、LocalStorage 和 IndexDB 无法读取
    DOM 无法获得
    AJAX 请求不能发送
}

Cookie
两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置 document.domain 以共享 Cookie
另外，服务器也可以在设置Cookie的时候，指定Cookie的所属域名为一级域名，比如.example.com
Set-Cookie: key=value; domain=.example.com; path=/
这样的话，二级域名和三级域名不用做任何设置，都可以读取这个Cookie

iframe
如果两个窗口一级域名相同，只是二级域名不同，那么设置 document.domain属性，就可以规避同源政策，拿到DOM
对于完全不同源的网站，目前有三种方法，可以解决跨域窗口的通信问题 {
    片段识别符 (fragment identifier)
    window.name
    跨文档通信API (Cross-document messaging)
}

Ajax
规避限制 {
    JSONP
    WebSocket
    CORS
}


MVC {
    视图(View)：用户界面
    控制器(Controller)：业务逻辑
    模型(Model)：数据保存

    View 传送指令到 Controller
    Controller 完成业务逻辑后，要求 Model 改变状态
    Model 将新的数据发送到 View，用户得到反馈
}

MVP {
    Controller 改名为 Presenter，同时改变了通信方向

    各部分之间的通信，都是双向的
    View 与 Model 不发生联系，都通过 Presenter 传递
    View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里
}

MVVM {
    MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致
    唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然
}
