---
title: Redux学习
date: 2017-03-25 23:17:00
tags: React全家桶
---

## 前言
好吧，还是感觉一直没完全理解Redux，为什么呢，因为使用起来没有轻车熟路的感觉，好吧，为了描述这个感觉还专门查了下轻车熟路是种什么感觉，好了，言归正传，但是啊，不敢落后，从其他地方获取到如何学习Redux后说是不难啊，这个，不想否认自己的说，既然这样去学好他不就行了，还是首先你得去做，嗯，现在是不甘落后了

### 历程
不知何时，感觉自己到了瓶颈，怎么说，技术上很难再有大的进步，依据，很久没有那种写起代码来清晰的感觉，亦或是一直都没过这感觉？感觉很浑浊，词穷了？但是唯有一点心灵的慰藉是我只不过才入前端近一年，想想去年这时还不会拼接字符串呢。。。等等，又TM拿拼接字符串说事，还是放弃这想法赶紧学吧

## 学习方法
这里要说下自己学时走了弯路，包括后面请教了别人也证实了确实学习方法出了问题

### 方法
首先还是要学习任意技术，先看官方文档，这里的文档最清晰易懂，正常智商的都能看懂并顺便写给官方demo，但问题是你的耐下心来看，一般的官方文档也是有好几页的，需要花费点时间，但事后再想想是值得的，其次在看完官方文档的情况下再看其他人的技术理解才行，避免先入为主的观念走向弯路，没错我就是这样的。。。

## 概念
之前也有写过，如今加工下

### 流程
View => Action => Reducer => Store => View

- Store <= createStore()
    + dispatch <= Action <= Action Creator()
- dispatch() => Reducer() => new Store

### API
- createStore
    + reducer
    + preloadedState
    + enhancer
- combineReducers
    + reducers Object
- bindActionCreators
    + actionCreators
    + dispatch
- applyMiddleware
    + middlewares
- compose
    + funcs

- store
    + getState
    + dispatch
    + subscribe 
    + replaceReducer

## 原理
这里有一个自己人傻眼瞎的原因导致对其一直没能理解下面会讲

### 回到起点
学什么东西不应带着他能做什么，而是需要思考他是如何做到的，为了做到他用了哪些东西，亦或是他究竟是个什么东西
如Redux开始的学习我一直在思考他到底是怎么做管理数据流的，加之用在React上，所以关注点在Redux+React，但之后发现我错了，这种跟随着Redux去看他实现的方式处于被动，所以说还是应该主动去看源码，对了一部分，其实你知道知道他是什么就好了
如Redux关注他的API是什么不如想想这些API哪来的，其实一看便知Redux其实本身就是个函数，调用返回导出一个对象，等等，这不就是单例模式吗(JS高程P189)，而所说的State不过就是这个函数内的私有变量，利用了闭包来访问，好了这下明了了，所有的操作都在围绕这个State，获取更改什么的等操作
而其他中间件什么的也就是把能访问修改State的函数传给他们，在合适的时机去调用

什么东西都是明白了就感觉其实挺简单的，并不是在于简单而是在在于你明白了，可别忘了为了学会付出的努力，别这么快就否定了

还有关于看源码，个人是非常不愿意阅读他人的代码，或是能力太低读不下去，但是多看源码是个好事，可以看到别人的解决思路，为以后加以致用

还有一直阻挡我学习的其实莫过于自己了，先入为主的认为他难，难以战胜自己，心底里就没乐观的去对待，而是总有个声音在自己努力但未理解时轻轻说句好难啊，要不放弃吧。。。但就一定要实现，我的话一定可以

### 回到现在
- 2017-6-4
今天又看了下redux的实现，源于最近在看react全栈这本书，其中关于redux中间件的解释有所疑问，之前也是一直没弄清楚，主要是在redux中的compose函数一直想不通，这也是中间件机制其中的精髓所在，不得不说是挺难理解的，当然也对其简洁优美的实现所折服，在一番理解模拟后终于明白了其中的奥妙，遂记录下来，感慨函数式编程的优美和强大之处

#### compose
```
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (args) => a(b(args)))
}

let a = 0;

function test1(next) {
    const name = test1.name;
    console.log(name);
    return (action) => {
        a++;
        console.log(a, name, action, '1')
        return result = next(action);
    }
}

function test2(next) {
    const name = test2.name;
    console.log(name);
    return (action) => {
        a++;
        console.log(a, name, action, '2')
        return result = next(action);
    }
}

function test3(next) {
    const name = test3.name;
    console.log(name);
    return (action) => {
        a++;
        console.log(a, name, action, '3')
        return result = next(action);
    }
}

let next = (arg) => {
    console.log('dispatch', a);
    return arg;
}

let b = compose(
    test1,
    test2,
    test3
);

(arg) => {
    var prev =(arg) => {
        var prev = (arg) => {
            test1(test2(arg))
        }
        prev(test3(arg))
    }
    prev(test4(arg))
}

let c = b(next);
// test3
// test2
// test1
// 最终返回test1的返回函数
c(2333)
// 1 "test1" 2333 "1"
// 2 "test2" 2333 "2"
// 3 "test3" 2333 "3"
// "dispatch" "3"
// 2333
```

在此顺便说下redux中间键的机制，开始以为是最后调用原生的dispatch，后来发现错了，其实是对dispatch的覆盖增强，利用函数柯里化固定需要的store和next参数，对于最后一个中间件来说是next是原生dispatch，其他中间件next依次是上一个中间件的最后返回函数，最后暴露出来的函数用来接受action来触发dispatch从而改变store，而其中固定next参数就利用了compose函数来完成，实现十分巧妙

## 相关库
- redux
- react-redux
- redux-actions
- redux-promise
- redux-promise-middleware
- redux-thunk
- redux-saga
- redux-loop
- redux-effects

### react-redux
- Provider
- connectAdvanced
- connect
    + mapStateToProps(state, ownProps):stateProps
    + mapDispatchToProps(dispatch, ownProps):dispatchProps
    + mergeProps(stateProps, dispatchProps, ownProps):props
    + options

### Flux
Facebook出品，Redux之前，单向数据流，可创建多个store

#### 流程
View => Action => Dispathcer => Store => View

- Dispatcher
    + dispatch <= action
    + register(reducer)
    + waitFor

### Mobx
- mobox
    + observable 
    + autorun
    + computed
    + action

## 相关技巧

### 函数式编程
毋容置疑Redux本身就有浓厚的函数式编程思想，自己也是一直在为弄懂他而奔波，虽说还没弄懂面向对象的编程思想说，但函数式是趋势，要得掌握，说说自己对函数式的理解，也是一头雾水，只是体会到，函数套函数，函数传函数，函数返回函数，函数调函数。。。反正就是函数的事，现在也是只有一点理解，都不足以表达，等在理解透彻后来解答

## 尾声
写本篇文章断断续续，但也花费了很多时间，还是不一定理解最正确亦或写的很好，只是帮助现阶段的自己成长学习，身为技术人唯有不断沉淀自己才能成为别人眼里的大神，而不是当别人眼里的大神是什么感受呢！不甘心

## 参考链接
http://www.open-open.com/lib/view/open1481264095497.html
