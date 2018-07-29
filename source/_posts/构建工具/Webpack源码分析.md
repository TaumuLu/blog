---
title: Webpack源码分析
date: 2018-07-27 10:03:04
tags: 构建工具
---

## 起源
一直对webpack这类的项目有所畏惧，涉及到DSL、AST的概念及模块缓存等，且对于webpack仅仅是使用它都很难做到得心应手的使用，更不用说去看源码理解他的原理了，但终究是要去学习的，无非早晚，本想等自己段位再升升级后再去看（目前也就是个白银哈哈），但刚好最近在搞ssr，里面涉及到了服务端代码的打包，于是遂开始学习webpack相关

### 概念
每当我学习新知识的时候开始都是不知从何下手，最快的上手方法也就是找个例子去仿写练习，其中涉及的知识理解一部分，当持续使用这类知识也在持续学习，渐渐也就能掌握乃至理解原理，直到有了原来如此的感觉，此时我便会想，如果开始学时我就有此时整体的概念可以把控理解、虽不是面面俱到但有整体的方向感，知道总体在围绕怎样的结构来构建的，就如各个官网的精简描述和总结，是多么的形象体贴，贯彻始终  
如同react native的一次编写,到处运行  

扯了这么多，如此对比到webpack上就如官网的图，模块打包机



## 参看资料
- https://segmentfault.com/a/1190000008060440

- https://juejin.im/post/5aa3d2056fb9a028c36868aa
- https://lihuanghe.github.io/2016/05/30/webpack-source-analyse.html
- http://taobaofed.org/blog/2016/09/09/webpack-flow/
- https://github.com/lcxfs1991/blog/issues/1
- https://juejin.im/post/5abf33f16fb9a028e46ec352

- https://segmentfault.com/a/1190000005614604
- https://juejin.im/post/5a1bcdadf265da430e4ee137
- https://github.com/happylindz/blog/issues/6

- https://webpack.docschina.org/guides/build-performance/#loaders
