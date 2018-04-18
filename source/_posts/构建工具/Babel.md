---
title: Babel
date: 2018-04-16 16:15:27
tags: 构建工具
---

## Config
- .babelrc

### presets
- es2015 
    + ES2015转码规则
    + babel-preset-es2015
- react 
    + react转码规则
    + babel-preset-react
- react-native
    + react-native转码规则
    + babel-preset-react-native
    + babel-preset-react-native-stage-0
- stage-\[number] 
    + ES7不同阶段语法提案的转码规则，规则向下兼容
    + babel-preset-stage-0
    + babel-preset-stage-1
    + babel-preset-stage-2
    + babel-preset-stage-3

### plugins
- transform-runtime
    + 抽取统一支持语法代码，提供运行时环境
    + babel-runtime
    + babel-plugin-transform-runtime
- import
    + 按需加载
    + babel-plugin-import
- transform-decorators-legacy
    + 支持ES7装饰器语法
    + babel-plugin-transform-decorators-legacy
    + vsCode支持需要在jsconfig.json里添加experimentalDecorators: true

#### babel-polyfill
支持新增的JavaScript API，无法通过语法转换能实现的
使用引入包即可
`import "babel-polyfill"`


## 参考资料
http://www.ruanyifeng.com/blog/2016/01/babel.html
https://juejin.im/post/5a3700a45188252582277880
