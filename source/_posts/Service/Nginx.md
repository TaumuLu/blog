---
title: Nginx
date: 2018-03-29 14:31:20
tags: Service
---

## Config
- main 全局配置
- events 工作模式
    + worker_connections
    + multi_accept
- http
    + server 服务器主机配置
        * server_name ip地址或者域名，多个配置空格分隔
        * root web项目的根目录
        * index 首页
        * charset 设置配置的网页的默认编码格式
        * access_log 访问记录日志存放路径
        * error_log 访问错误日志存放路径
        * location 路由配置
            - ocation / 表示匹配访问根目录
            - root 用于指定访问根目录时，访问虚拟主机的web目录
            - index 在不指定访问具体资源时，默认展示的资源文件列表

    + upstream name 负载均衡配置

### 文件路径
- root
- alias

alias会把location后面配置的路径丢弃掉
使用alias时，目录名后面一定要加"/"
alias只能位于location块中
