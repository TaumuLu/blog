---
title: Hexo搭建博客
date: 2017-03-12 20:31:00
tags: Blog
---

## 安装Hexo
1. 安装hexo
`npm install hexo-cli -g`
2. 生成博客
`hexo init blog`
`cd blog`
3. 安装依赖
`npm install`
*注意：*可能会报错原因是fsevents是在macOS下的依赖包，当前是64位win系统，因此只报warning信息
4. 本地启动查看
`hexo server`
5. 生成网页
`hexo generate`
可以在 public 目录查看整个网站的文件
6. 部署到Git
`hexo deploy`
需要安装部署插件
`npm install hexo-deployer-git --save`

## 配置Github
1. 创建git仓库
2. 仓库名命名为 <userName>.github.io
3. Settings点击Launch automatic page generator将这个仓库生成静态网页
4. 填写Page name和Tagline点击Continue to layouts完成

## 配置Hexo
- 全局配置 _config.yml
```
language: zh-CN #语言
theme: next
...
deploy:
    type: git
    repo: github地址.git
    branch: master 
```
- 主题配置 themes/[next]/_config.yml

### 页面配置
```
---
title: Git使用
date: 2017-03-15 08:37:42
tags: Git 
categories: Tools
comments: true
---

// tags   设置文章的标签
// categories   设置文章分类
// comments   设置是否显示评论
```

### 社交链接
```
social:
  GitHub: https://github.com/chaserr
  Zhihu: https://www.zhihu.com/people/Taumu

social_icons:
  enable: true
  GitHub: github
  Zhihu: globe
  # Twitter: twitter
  # Weibo: weibo

```

### 开启评论
```
# disqus评论,  与多说类似, 国内一般使用多说
# disqus_shortname: 
duoshuo_shortname: #填写你的多说域名

# 多说热评文章 true 或者 false
duoshuo_hotartical: true

# 多说分享服务
duoshuo_share: true
duoshuo_info:
  ua_enable: true
  admin_enable: false
  user_id:
      admin_nickname:

```

## 开始写博客
1. 生成文章
`hexo new "标题"`
2. 生成页面
`hexo new page "页面"`
** 所有源文件都在source文件夹下 **

## 换主题
需改全局配置 _config.yml 下的 theme 为要替换的主题
然后执行
```
hexo clean
hexo generate
hexo server

```

## 管理Hexo博客源文件和Git页面
- 建立分支hexo管理源文件
`git checkout -b hexo`

## 附：hexo命令行使用
```
hexo help                   // 查看帮助
hexo init                   // 初始化一个目录
hexo new "postName"         // 新建文章
hexo new page "pageName"    // 新建页面
hexo generate               // 生成网页，可以在 public 目录查看整个网站的文件
hexo server                 // 本地预览，'Ctrl+C'关闭
hexo deploy                 // 部署.deploy目录
hexo clean
// 清除缓存，**强烈建议每次执行命令前先清理缓存，每次部署前先删除 .deploy 文件夹**
```
** 简写 ** 
```
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```
