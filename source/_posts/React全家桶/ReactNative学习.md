---
title: ReactNative学习
date: 2017-03-25 23:17:20
tags: React全家桶
---

## 前言
先接触的ReactNative，后学习的React，其实也都差不多，但ReactNative要稍微局限点，限制较多，但很强大，实现了跨平台开发，正如React所追求的一次编写，随处运行(Writeonce, run anywhere)，现在还记得当时刚接触React一脸懵逼的状态，还好有人带也对其有所了解了


## 基础
只用ReactNatiev开发过一段时间，当时还不熟悉React用法就去写所以RN，写的代码质量很差，还是应先打好基础

### 布局

#### Flex
RN的布局为flex布局，基本实现了css3里的flex布局，语法也是类似的

#### PixelRatio, Dimensions 
```
const ratio = PixelRatio.get() > 2 ? PixelRatio.get() : 3;
const { width, height } = Dimensions.get('window');
```

react 宽度基于pt为单位， 可以通过Dimensions 来获取宽高，PixelRatio 获取密度，如果想使用百分比，可以通过获取屏幕宽度手动计算。

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

### ios

#### icon

| size  | @1x | @2x | @3x |
| --- | --- | --- | --- |
| 20pt |  | 40x40 | 60x60 |
| 29pt |  | 58x58 | 87x87 |
| 40pt |  | 80x80 | 120x120 |
| 60pt |  | 120x120 | 180x180 |
| 1024pt | 1024x1024 |  |  |
 
#### 启动图
  
| ios  | @1x | @2x | @3x | Retina4 |
| --- | --- | --- | --- | --- |
| iOS 5,6 | 320×480 | 640×960 |  | 640×1136 |
| ios 7+ |  | 640×960 |  | 640×1136 |
| ios 8+ |  | 750×1334 | 1242×2208 |  |
| ios x |  |  | 1125x2436 |  |

### android

| 项目 | 屏幕比 | 分辨率(启动图) | Icon |
| :-- | :-- | :-- | :-- |
| drawable-xxhdpi | 480dpi | 1080x1920 | 144x144 |
| drawable-xhdpi |  320dpi | 720x1280 | 96x96 |
| drawable-hdpi | 240dpi | 400x800 | 72x72 |
| drawable-mdpi | 160dpi | 320x480 | 48x48 |
| drawable-ldpi | 120dpi | 240x320 | 36x36 |

## IOS
cd ~/Library/MobileDevice/Provisioning\ Profiles/


## 报错收集

 

