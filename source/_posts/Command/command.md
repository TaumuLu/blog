---
title: command
date: 2018-02-27 16:34:11
tags: Command
---

# Command

## react-native

### 运行
```
react-native run-android
react-native run-android
react-native start
```

### scripts
```
scripts {
    "postinstall": "remotedev-debugger --hostname 172.168.1.118 --port 5678 --injectserver",
    "postinstall": "remotedev-debugger --revert true"
}
```

### 本地调试
```
http://127.0.0.1:8081/debugger-ui
```

### code-push
```
react-native bundle --platform android --entry-file index.android.js --bundle-output ./bundles/index.android.bundle --dev false

./gradlew assembleRelease
./gradlew assembleDebug

code-push release Muyi ./bundles/index.android.bundle 1.0 --deploymentName Staging --description "更新至最新版" --mandatory true

code-push release-react Muyi android --description "更新至最新版" --mandatory true

code-push deployment list Muyi -k
```

### 打包

#### android

- 更改版本号  
    ```
    android/app/build.gradle
    android/app/src/main/AndroidManifest.xml
    ```

- 更改图标、首屏图  
    ```
    android/app/src/main/res
    ```

- 打包  
    ```
    cd android && rm -rf app/build && ./gradlew clean && ./gradlew assembleRelease
    ```

- 加固

#### ios

- 更改版本号  
    ```
    Gengral
    Info
    Buind Settings
    ```

- 更改图标、首屏图  
    ```
    ios/[project]/Images.xcassets
    ```

- generic ios device => product => archive => 证书 => 审核

## Mac 

```
curl ip.cn
```

## Xcode 

### Simulator
```
xcrun instruments -w 'iPhone 6 Plus'

xcrun simctl install booted [appName].app
xcrun simctl uninstall booted com.yuchang.[appName]
```

## Adb

```
adb install android/app/build/outputs/apk/app-debug.apk
adb uninstall [provider android:name="Muyi"]
adb shell input keyevent 82
adb reverse tcp:8081 tcp:8081
```

## Tools

### ios_webkit_debug_proxy
```
ios_webkit_debug_proxy -f chrome-devtools://devtools/bundled/inspector.html
```


## Other

### gem 
```
gem install cocoapods
```

### pod 
```
pod install --no-repo-update
pod update --no-repo-update
```

### apache 
```
ab -n100 -c10 http://localhost:8088/
```


## Git 

```
git config --global user.name "user"
git config --global user.email "user@email.com"

git config --global core.longpaths true               支持长文件名添加
git config --global core.ignorecase false             区分大小写
git config --global core.quotepath false              路径中文转义
git config --global credential.helper store           保存提交密码

git config --global alias.st "status"

git update-index --assume-unchanged PATH_TO_FILE
```

## Mongodb

```
show dbs                 显示数据库列表
show collections         显示当前数据库中的集合
show users               显示用户

use <db name>            切换到当前数据库
db.stats();
db.version();
db.getMongo();

db.mt.save({"name":"mt"})
db.mt.insert({"name":"mt", "age":21})
db.mt.find()
```

## MySQL

```
mysql.server start
mysql.server stop

mysql -u root -p
show databases;                             查看数据库
use db_name;                                连接数据库
show tables;                                查看数据表

mysqldump -u root -p 库名>sql_name.sql       备份数据库
```

## Cmd

```
netstat -ano                            查看所有占用端口
netstat -ano | findstr "8088"           查看占用端口

tasklist | findstr "9648"               查看占用程序

regedit                           注册表
recent                            最近的活动
netplwiz                          用户账户
msconfig                          系统配置
gpedit.msc                        组策略
services.msc                      本地服务
mspaint                           画图板
dxdiag                            DX版本查询
ipconfig /flushdns                清除DNS缓存
```

## Chrome

### Console
```
Array.from(document.querySelectorAll('.simditor-body span')).forEach((span) => span.style.fontSize = 'inherit')  // pmp
```
