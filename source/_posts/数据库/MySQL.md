---
title: MySQL
date: 2018-03-20 22:01:32
tags: 数据库
---

## 分类
- 关系型数据库
- 非关系型数据库

### 语句类型
- DDl
- TPL
- DCL
- DML

## Join语句
- INNER
- FULL OUTER
- LEFT OUTER
- RIGHT OUTER
- CROSS

## MySQL

### 配置
- 默认端口 3306
- 超级用户 root

### 参数
- -u
- -p
- -P
- -h
- --prompt
    + \D
    + \d
    + \h
    + \u

### 规范
- 关键字与函数名称全部大写
- 数据库、表名、字段名全部小写
- SQL语句必须以分号结尾

### 命令
- 创建数据库 CREATE DATABASE data_name
- 修改数据库 ALTER DATABASE data_name
- 删除数据库 DROP DATABASE data_name
- 打开数据库 USE data_name
- 创建数据表 CREATE TABLE table_name (column_name data_type, ...)
- 查看数据表 SHOW TABLES

### 数据类型
UNSIGNED

- 整型
- 浮点型
- 日期
- 字符型
