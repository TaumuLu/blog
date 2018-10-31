---
title: ReactNative学习
date: 2017-03-25 23:17:20
tags: React全家桶
---

## 前言
先接触的ReactNative，后学习的React，其实也都差不多，但ReactNative要稍微局限点，限制较多，但很强大，实现了跨平台开发，正如React所追求的一次编写，随处运行(Writeonce, run anywhere)，现在还记得当时刚接触React一脸懵逼的状态，还好有人带也对其有所了解了

## 环境搭建

### iOS
- Xcode
- CocoaPods
```
gem update --system
gem sources --remove https://rubygems.org/
gem sources -a https://gems.ruby-china.org/
// gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
gem sources -l
gem install cocoapods
gem install -n /usr/local/bin cocoapods
pod setup
pod search 'AFNetworking'
```

### Android
- Android Studio 
- Android SDK
- Genymotion

### 启动指定模拟器
```
xcrun simctl list devices
react-native run-ios --simulator "iPhone 7 Latest"
```

### 手动打bundle包
```
sudo react-native bundle --entry-file index.ios.js --bundle-output ./ios/main.jsbundle --platform ios --assets-dest ./ios --dev false
```

## 基础
只用ReactNatiev开发过一段时间，当时还不熟悉React用法就去写所以RN，写的代码质量很差，还是应先打好基础

### 布局
- react宽度基于pt为单位
    + 可以通过Dimensions来获取宽高
    + PixelRatio获取密度
    + 如果想使用百分比，可以通过获取屏幕宽度手动计算
- 基于flex的布局 
    + view默认宽度为100%
    + 水平居中用alignItems, 垂直居中用justifyContent
    + 基于flex能够实现现有的网格系统需求，且网格能够各种嵌套无bug
- 图片布局 
    + 通过Image.resizeMode来适配图片布局，包括contain, cover, stretch
    + 默认不设置模式等于cover模式
    + contain模式自适应宽高，给出高度值即可
    + cover铺满容器，但是会做截取
    + stretch铺满容器，拉伸
- 定位 
    + 定位相对于父元素，父元素不用设置position也行
    + padding 设置在Text元素上的时候会存在bug。所有padding变成了marginBottom
- 文本元素 
    + 文字必须放在Text元素里边
    + Text元素可以相互嵌套，且存在样式继承关系
    + numberOfLines 需要放在最外层的Text元素上，且虽然截取了文字但是还是会占用空间

#### 其他
- RN支持style传入数组，不同于web端的React

### 获取组件的宽度和高度
- onLayout
- UIManager
    + measure

## app图标及启动图

### iOS

#### icon

| size  | @1x | @2x | @3x |
| --- | --- | --- | --- |
| 20pt |  | 40x40 | 60x60 |
| 29pt |  | 58x58 | 87x87 |
| 40pt |  | 80x80 | 120x120 |
| 60pt |  | 120x120 | 180x180 |
| 1024pt | 1024x1024 |  |  |
 
#### 启动图
  
| iOS  | @1x | @2x | @3x | Retina4 |
| --- | --- | --- | --- | --- |
| iOS 5,6 | 320×480 | 640×960 |  | 640×1136 |
| iOS 7+ |  | 640×960 |  | 640×1136 |
| iOS 8+ |  | 750×1334 | 1242×2208 |  |
| iOS x |  |  | 1125x2436 |  |

### android

| 项目 | 屏幕比 | 分辨率(启动图) | Icon |
| :-- | :-- | :-- | :-- |
| drawable-xxhdpi | 480dpi | 1080x1920 | 144x144 |
| drawable-xhdpi |  320dpi | 720x1280 | 96x96 |
| drawable-hdpi | 240dpi | 480x800 | 72x72 |
| drawable-mdpi | 160dpi | 320x480 | 48x48 |
| drawable-ldpi | 120dpi | 240x320 | 36x36 |

## iOS
- info.plist
    - NSAppTransportSecurity 请求协议配置
        + NSAllowsArbitraryLoads YES禁用ATS

### 证书
- Provision路径 `cd ~/Library/MobileDevice/Provisioning\ Profiles/`

### 创建工程
- 创建静态库 File -> New Project
- copy到RN项目
- 打开.xcodeproj
- 修改Build Setting -> Targets -> Header Search Paths 
    + $(SRCROOT)/../../react-native/React recursive
- 使用
    + 拖动到工程中的Library中
    + Podfile pod 'react-native-\*', :path => '../node_modules/react-native-\*'

### RN原生开发
- RCT_EXPORT_MODULE() 指定模块的名字，默认类名

#### 原生模块
- Module : NSObject <RCTBridgeModule>
    + RCT_EXPORT_METHOD()
    + constantsToExport 导出常量

#### 原生UI
- UIView : RCTViewManager
    + RCT_EXPORT_VIEW_PROPERTY()
    + \-(UIView *) view

## Android

### RN原生开发
- package implements ReactPackage
    + createViewManagers

### 创建工程
- 创建Module File -> New Module -> Android Library
- 填写模块名和包名及最低sdk版本
- copy到RN项目
- android/app/build.gradle compile project(':react-native-*')

#### 原生模块
- Module extends ReactContextBaseJavaModule
    + getName
    + @ReactMethod (public void)
    + getContants 导出常量

#### 原生UI
- Manager extends UI组件
    + getName
    + createViewInstance
    + REACT_CLASS (static final String)
    + @ReactModule
    + @ReactProp (public void)
    + @ReactPropGroup (public void)
    + getCommandsMap
    + receiveCommand
    + onAfterUpdateTransaction 属性都初始化完成后，做一些处理
- UIView


## 调试
debug地址使用localhost来调试，用本机ip网上说有跨域问题
`http://localhost:8081/debugger-ui/`

## 报错收集

## 报错解决
```
./gradlew --stop
./gradlew stop然后执行 ./gradlew assembleRelease

watchman watch-del-all
rm -rf node_modules && npm install
npm start -- --reset-cache
```
 
## 参考资料
- https://github.com/liuchungui/react-native-BGNativeModuleExample
- https://smallpath.me/post/react-native-debug
- https://zhuanlan.zhihu.com/p/40683068
