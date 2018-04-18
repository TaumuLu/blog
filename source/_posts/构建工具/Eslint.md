---
title: Eslint
date: 2018-04-16 16:34:19
tags: 构建工具
---

## Config
- .eslintrc
- .eslintrc.yml
- .eslintignore

### extends
使用Eslint提供的集成拓展包，使用共享的语法检测配置对象

- standard
    + eslint-config-standard
- standard-jsx
    + eslint-config-standard-jsx 
- standard-react
    + eslint-config-standard-react 
- standard*
    + eslint-plugin-standard 
    + eslint-plugin-import
    + eslint-plugin-promise 
    + eslint-plugin-node
    + eslint-plugin-react
- airbnb
    + eslint-config-airbnb
    + eslint-plugin-react
    + eslint-plugin-import
    + eslint-plugin-jsx-a11y

### parser
ESLint默认使用Espree作为其解析器

- babel-eslint
    + babel-eslint

### plugins
- babel
    + eslint-plugin-babel
- react
    + eslint-plugin-react
- import
    + eslint-plugin-import 
    + eslint-import-resolver-webpack
```yaml
settings:
  import/resolver:
    webpack:
      config: './webpack.config.js' // webpack路径
```

### rules
- off 或 0 - 关闭规则
- warn 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- error 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)


## 参考资料
https://juejin.im/post/5a3700a45188252582277880
