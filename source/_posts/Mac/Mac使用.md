---
title: Mac使用
date: 2017-04-08 22:15:56
tags: Mac
---

## 前言
对于一直在用Windows开发的我来说直接上手Mac有点麻烦且又要学习使用Mac，当然最大的阻碍还是不习惯，但是这是3、4天前的感受，短短几天时间我就深深体会到了Mac的优雅强大，工作开发起来简直不要太爽，要离不开的感觉，有种以前用windows开发都在浪费时间的感觉，哈哈，不过Mac对程序员还真是友好，故此记录下Mac的一些东西，随便写写玩了

2017.02.27
这次又看了一堆正确使用Mac的知识，不禁感叹距自己会用Mac还差的很远，尤其是作为程序员的我来说更要优雅的使用Mac，以提示自己的使用效率，继续学习一点点积累记录

## 常用软件
- homebrew
    + install
        * git
        * git-flow
        * nginx
        * node
        * mysql
        * python
        * python3
        * maven
        * archey
        * tree
        * autojump
    + cask install
        * java
        * react-native-debugger
- XCode
- iTerm2
- Oh My ZSH
- VSCode
- Sublime Text
- IDEA
- Switch Hosts
- XX-Net
- ShadowsockesX-NG
- SourceTree
- Chrome
- The Unarchiver
- PDF Expert
- Alfred
- QQ
- 微信
- 网易云音乐
- 钉钉
- 其他
    + CheatSheet
    + AppCleaner
    + istat menus

### homebrew

#### 常用命令
```bash
brew search [TEXT|/REGEX/]
brew (info|home|options) [FORMULA...]
brew install FORMULA...
brew update
brew upgrade [FORMULA...]
brew uninstall FORMULA...
brew list [FORMULA...]

brew update && brew cask install react-native-debugger
```

#### 安装
install和cask install的区别
> brew主要用来下载一些不带界面的命令行下的工具和第三方库来进行二次开发，brew cask主要用来下载一些带界面的应用软件，下载好后会自动安装，并能在mac中直接运行使用
> brew install curl可以安装curl第三方库，这样你在开发时就可以使用它的库来进行开发
> brew cask install chrome可以安装谷歌浏览器应用程序，可直接运行brew偏管理第三方库和命令行工具方面的东东brew cask可以看作是苹果官方app store的补充

### Mysql

#### 修改密码
```
mysqld_safe --skip-grant-tables
mysql -u root -p
UPDATE mysql.user SET authentication_string=PASSWORD('root') WHERE User='root';
FLUSH PRIVILEGES;
\q;
```

### Alfred
安装之后几乎没有怎么去使用，毕竟需要学习成本，今天开始学新使用，瞬间觉得差点就错过了这个很好的工具，确实很强大，配合各种workflows和其他特性

#### Workflows
https://github.com/zenorocha/alfred-workflows

#### Link
https://sspai.com/post/32979
https://zhuanlan.zhihu.com/p/19986749?columnSlug=pinapps
https://www.zhihu.com/question/20205127

## 重装系统
比Windows要操作简单，主要介绍U盘重装

- 准备工作
    + 备份
    + U盘
    + 下载OS
        * AppSotre上下载即可，下载完后别安装
        * 如从网盘下载的，请将解压后获得的 "Install OS X Yosemite.app"(显示为"安装 OS X Yosemite.app")移动到「应用程序」文件夹里面
- 格式化U盘
    + 应用程序 -> 实用工具 -> 磁盘工具
    + 将U盘「抹掉」(格式化)
        * Mac OS X 扩展（日志式）格式
        * GUID 分区图方案
        * 命名为「Sierra」(注意：这个盘符名称将会与后面的命令一一对应，如果你改了这盘符的名字，必须保证后面的命令里的名称也要一致)
- 输入终端命令开始制作启动盘
    + 应用程序 -> 实用工具 -> 终端
    + 将下面的一段命令复制并粘贴进去
    ```
    sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/Sierra --applicationpath /Applications/Install\ macOS\ Sierra.app --nointeraction
    ```
    + 回车并执行该命令，输入管理员密码开始制作过程，等待Done
- U盘启动安装Mac OS X
    + 关机
    + 按下电源键开机，当听到“噹”的一声时，按住 Option 键不放，直到出现启动菜单选项
    + 格式化系统盘
    + 退回U盘重装

## 快捷键
- control+shift+power               息屏，程序继续运行
- command+option+power              睡眠，等于合盖
- control+power                     显示重启、关机、睡眠对话框 
- command+control+power             重新启动 

## 配置

### 隐藏文件设置
- 显示 `defaults write com.apple.finder AppleShowAllFiles -bool true`
- 隐藏 `defaults write com.apple.finder AppleShowAllFiles -bool false`

### 更改截图位置
`defaults write com.apple.screencapture location /CustomPath`

### zsh
如果当前shell为zsh，则不加载bash相关文件，依次加载，可以source引入即可
- ~/.zlogin
- ~/.zshrc

```
// 查看当前shell
echo $SHELL
ps -p $$
```

### 设置开机自启
利用Launchctl来设置，通过写在/Library/LaunchDaemons/下的.plist文件

- brew
通过brew安装的软件去/usr/local/opt下找到对应的.plist文件
```bash
sudo cp /usr/local/opt/nginx/*.plist /Library/LaunchDaemons
sudo launchctl load -w /Library/LaunchDaemons/homebrew.mxcl.nginx.plist
```

- 验证.plist文件
sudo plutil -lint /Library/LaunchDaemons/com.mysql.plist

- 注册系统服务
sudo launchctl load -w /Library/LaunchDaemons/*.plist 

- 卸载注册服务
sudo launchctl unload -w /Library/LaunchDaemons/*.plist

- 修改执行权限
sudo chown root:wheel /Library/LaunchDaemons/*.plist

## 其他
http://www.iplaysoft.com/osx-yosemite-usb-install-drive.html
http://freemacsoft.net/
http://reactide.io/

## 参考链接
https://www.zhihu.com/question/22624898/answer/105234217
http://www.cnblogs.com/52php/p/5684348.html
http://macshuo.com/?p=676
https://blog.csdn.net/waneto2008/article/details/52486433



