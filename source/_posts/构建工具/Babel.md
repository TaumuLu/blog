---
title: Babel
date: 2018-04-16 16:15:27
tags: 构建工具
---

## Babel
babel是一个转译器，作用的将es高版本规则翻译成低版本规则，目的旨是在让不支持es高版本的运行环境能够运行高版本es  

### babel转译需要做两个支持
- es新标准引入的语法
    + 箭头函数、模版字符串、let、const等
    + 依靠plugins处理支持
- es新标准引入的新的原生对象及API
    + 新对象 Set、Map、Symbol、Proxy、Iterator、Reflect、Promise、Generator等
    + 新API Object、Array等原有对象新加的方法
        * 静态方法
        * 实例方法(挂载到原型上的方法)  
    + 依靠polyfill处理支持
        * babel-runtime
            - 将转译的代码写进要处理的模块中
            - 提供plugins的方式babel-plugin-transform-runtime，以头部引入的方式
            - 不管何种方式都是babel-runtime提供支持
            - 为何是runtime呢，因为并非转译改写了处理代码，而是提供了支持的模块供代码引入使用，当代码执行到此处时才去支持
        * bable-polyfill
            - 暴力引入
        * core-js和regenerator-runtime才是真正的代码实现，以上两种支持都引用自它

### bable转译有几个流程
- parsing
    + babylon进行语法解析
    + babel-core将代码解析成ast
- transforming
    + babel-traverse遍历ast，供plugins使用
    + babel-plugin-transform-xxx类的插件依次对ast进行转译
- generating
    + babel-generator根据ast生成代码


## Config
babel会从当前转译的文件所在目录下查找配置文件，如果没有找到，就顺着文档目录树一层层往上查找，一直到.babelrc文件存在或者带babel字段的package.json文件存在为止  
bable的配置可以通过以下方式进行配置  

- package.json 添加babel字段进行配置
- .babelrc 根目录下独立的配置json格式
    + 所有babel API的options（除了回调函数之外）都能够支持
    + API https://babeljs.io/docs/usage/api/#options

### env
多环境配置，通过env字段配置不同环境变量下的babel配置  
env的值优先取自process.env.BABEL_ENV，其次为process.env.NODE_ENV的值，都没有设置时为"development"

### presets
babel转码真正需要的是plugins，presets是建立在plugin之上的概念，插件的集合  
要加载和使用的preset列表，preset名前的babel-preset-可省略，presets列表按从尾到头的逆序运行（为了兼容用户使用习惯）  

- babel-preset-es2015 ES2015转码规则
- babel-preset-react react转码规则
- babel-preset-react-native react-native转码规则
    + babel-preset-react-native-stage-0
- stage-\[number] 
    + babel-preset-stage-0
    + babel-preset-stage-1
    + babel-preset-stage-2
    + babel-preset-stage-3

#### stage-X
ES不同阶段语法提案的转码规则，规则向下兼容，这点可以从stage-X的源码处看到，每个stage-X包含当前一些转码规则plugins以及下一阶段的stage-(X-1)的presets

> es作为一门语音，它的规范制定是由某个委员会来统筹的。就像法律一样，一个标准的诞生是要经过很多次的讨论的：一开始是一些不成熟的想法(stage-0:Strawman)，通过之后变成提议(stage-1:Proposal)，再通过进入草案(stage-2: Draft），再通过进入候选(stage-3: Candidate)，最后才能进入标准(stage-4:finished)。标准里面的每一条都得经过层层的筛选，并不是所有都能在最后进入标准的，所以使用stage-x里面的新特性是有一定风险的，比如我们用得很多的async和await，它就是属于stage3，还差一点就进入标准了。所以，如果你想使用还没有进入标准的一些新特性，你就需要包含相应的stage-x-preset或者plugins

### plugins
要加载和使用的插件列表，插件名前的babel-plugin-可省略，plugin列表按从头到尾的顺序运行  
plugins先于presets运行  

- babel-plugin-transform-runtime
- babel-plugin-import
- transform-decorators-legacy
- babel-plugin-transform-decorators-legacy
    + vsCode支持需要在jsconfig.json里添加experimentalDecorators: true


## babel-cli
Babel提供babel-cli工具，用于命令行转码

- 文件转码
    + --out-file
    + -o
    + `babel example.js --out-file compiled.js`
- 目录转码
    + --out-dir
    + -d
    + `babel src --out-file lib`
- -s source map文件
- --presets 转码规则

### babel-node
babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境  
babel-node就进入PEPL环境  
可以用babel-node替代node执行代码，可以不用做转码处理  


## babel-register
babel-register可以将通过require引用的js先用Babel进行转码  
.js、jsx、.es、es6 后缀的模块都会先转码  

### 使用事项
- 当前文件不会被转码
- 需首先加载 babel-register
- 由于是实时转码，只适合开发环境


## babel-core
babel-core的作用是把js代码分析成ast，方便各个插件分析语法进行相应的处理  
提供了babel的转译API，用于对代码进行转译，webpack的babel-loader使用了babel-core的api  
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API


## polyfill
支持新的原生对象及API  
真正的实现代码为core-js和regenerator-runtime  

### babel-polyfill
JS标准新增的原生对象和API的shim，实现上仅仅是core-js和regenerator-runtime两个包的封装  
以全局变量的形式polyfill Map、Set、Promise 之类的类型，注入污染原生对象原型  

#### 使用
- 使用import或者require在入口顶部直接引入polyfill
- webpack中entry数组最前处加入babel-polyfill

##### 按需加载
以上的引入方式会引入所有的polyfill，增加项目打包文件的大小，可以按需加载使用polyfill

- 使用import或者require直接引入core-js/fn/*中需要的模块，会污染全局变量
- 使用import或者require直接引入core-js/library/*中需要的模块，不会污染全局变量，模块内使用
- 使用::这个符号而不是.来调用实例方式，不会污染全局变量，模块内使用

### babel-runtime
功能类似babel-polyfill，提供了regenerator、core-js和helpers的运行时库  
一般用于library或plugin中，不会污染全局作用域  
对新类型自动且按需进行polyfill  
原声类型静态方法也会被插件polyfill，但实例方法不会polyfill(需要使用babel-polyfill)  
会将一些帮助函数生成在模块中，导致重复和编译后的代码体积变大  

#### babel-plugin-transform-runtime
作为插件使用，依赖babel-runtime，解决babel-runtime生成重复代码的问题，通过引用babel-runtime提供的公共模块，而不是生成在代码中

### [core-js](https://github.com/zloirock/core-js)
三种使用方式

- 默认直接引入 
    + `require('core-js')`
    + 类似于babel-polyfill
- 模块方式引入
    + `var core = require('core-js/library')`
    + 类似于babel-runtime
- shim方式引入
    + `require('core-js/shim')`
    + 仅包含es标准特性

### regenerator-runtime
实现ES6/ES7中generators、yield、async及await等相关的polyfills  
babel-polyfill和babel-runtime都引用了此包  


## 参考资料
http://www.ruanyifeng.com/blog/2016/01/babel.html  
https://juejin.im/post/5a3700a45188252582277880  

https://www.jianshu.com/p/3b27dfc6785c  
https://github.com/youngwind/blog/issues/68  
https://github.com/brunoyang/blog/issues/20  
