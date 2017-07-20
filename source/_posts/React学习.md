---
title: React学习
date: 2017-03-25 13:15:00
tags: React全家桶
---

## 前言
在此记录React的基础结构、API、知识点

## API
- React
    + context
    + Children
        * map
        * forEach
        * count
        * only
    + getDefaultProps
    + refs
        * ref
    + state
    + props
    + children
        * undefined
        * object
        * array
    + className
    + htmlFor

### context
指定数据并要将数据传递下去的父组件要定义childContextTypes和getChildContext()
想要接收到数据的子组件 必须定义contextTypes来使用传递过来的context 
- childContextTypes
- getChildContext
- contextTypes

### PropTypes  
- type 
    + func
    + object
    + array
    + symbol
    + string
    + number
    + bool
    + element
- prop
    + isRequired
- method
    + shape
    + oneOf

## 组件
- Component
    + 静态属性
        * propTypes
        * defaultProps
    + state
    + props

### 创建组件
- ES6
- ES5
- 函数式
    + 无状态
    + 无this
    + 没有完整意义的生命周期方法

## 性能优化
纯函数，无副作用，数据不可变

### Reselect
使用Resselect避免不必要的selector计算
> mapStateToProps也被叫做selector，在store发生变化的时候就会被调用，而不管是不是selector关心的数据发生改变它都会被调用，所以如果selector计算量非常大，每次更新都重新计算可能会带来性能问题。Reselect能帮你省去这些没必要的重新计算。
> Reselect 提供 createSelector 函数来创建可记忆的 selector。createSelector 接收一个 input-selectors 数组和一个转换函数作为参数。如果 state tree 的改变会引起 input-selector 值变化，那么 selector 会调用转换函数，传入 input-selectors 作为参数，并返回结果。如果 input-selectors 的值和前一次的一样，它将会直接返回前一次计算的数据，而不会再调用一次转换函数。这样就可以避免不必要的计算，为性能带来提升。

### Immutable

## 相关库
- Flux
    + Redux
- react-addons-perf
- react-addons-update
- recompose

## 相关名词
- Redux HOC
- Redux 木偶组件(无状态组件)

## 参考链接
http://www.oschina.net/translate/performance-engineering-with-react
http://www.jianshu.com/p/6e38c66366cd
