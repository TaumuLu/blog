---
title: install
date: 2018-02-27 16:32:16
tags: 搭建环境
---

# Install

## Mongobd

### 主动创建数据目录
```
D:\MongoDB {
    \data {
        \db
        \log {
            mongodb.log
        }
    }
    \conf {
        mongod.conf {
            #数据库路径
            dbpath=D:\MongoDB\data\db
            #日志输出文件路径
            logpath=D:\MongoDB\data\logs\mongodb.log
            #错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
            logappend=true
            #启用日志文件，默认启用
            journal=true
            #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
            quiet=true
            #端口号 默认为27017
            port=27017
        }
    }
    \Server\3.4\bin {
        先配置数据库目录再更改加配置安装服务
        mongod --dbpath "D:\MongoDB\data\db"

        mongod --config "D:\MongoDB\conf\mongod.conf" --install --serviceName "MongoDB"
        mongod --remove --serviceName "MongoDB"
        net start MongoDB
        net stop MongoDB
    }
}
```

## Memcached 
```
D:\Web\Develop\Memcached {
    memcached -d install
    memcached -d uninstall

    memcached -d start
    memcached -d stop
    memcached -p

    -p 监听的端口
    -l 连接的IP地址, 默认是本机
    -d start 启动memcached服务
    -d restart 重起memcached服务
    -d stop|shutdown 关闭正在运行的memcached服务
    -d install 安装memcached服务
    -d uninstall 卸载memcached服务
    -u 以的身份运行 (仅在以root运行的时候有效)
    -m 最大内存使用，单位MB。默认64MB
    -M 内存耗尽时返回错误，而不是删除项
    -c 最大同时连接数，默认是1024
    -f 块大小增长因子，默认是1.25
    -n 最小分配空间，key+value+flags默认是48
    -h 显示帮助

    修改参数，windows下修改注册表信息进行设置，重启服务后生效
    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\memcached {
        ImagePath {
            D:\memcached\memcached.exe" -d runservice -m 1024 -c 2048 -p 11210
        }
    }
}
```

## Apache 
```
Apache22/conf/httpd.conf {
    ServerRoot "D:/Web/Develop/Apache22"
    DocumentRoot "D:/Web/Develop/Apache22/htdocs"
    Listen 8040
}

Apache22/bin {
    httpd -k install
    httpd -k uninstall

    httpd -k start
}
```

## genymotion 

### 下载地址  
https://www.genymotion.com/download/

### 下载模拟器速度慢
点击界面上的+号，选择要下载的模拟器虚拟机版本，点击下载
```
C:\Users\Administrator\AppData\Local\Genymobile\ {
    log文件，找到Downloading file后面的http开头的链接，复制到迅雷开始下载
}
```
下载完成之后拷贝到C:\Users\Administrator\AppData\Local\Genymobile\Genymotion\ova下
