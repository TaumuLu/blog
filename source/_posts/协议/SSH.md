---
title: SSH
date: 2018-04-08 21:36:58
tags: 协议
---

## SSH
SSH是一种网络协议，用于计算机之间的加密登录

## 密钥
生成密钥对，默认RSA  
`ssh-keygen`

### 密钥类型
- RSA
- RSA1
- DSA
- ECDSA
- ED25519

## 用法
- ssh 
    + host
    + user@host
    + -p port
    + -i id_rsa
    + -o ServerAliveInterval=60 
- ssh-copy-id user@host

## 登录

### 口令登录
登录前提示，登录后保存在文件$HOME/.ssh/known_hosts  
系统所有用户可信赖的远程主机的公钥有保存在/etc/ssh/ssh_known_hosts

### 公钥登录
- 生成公钥 
    + ssh-keygen
    + id_rsa.pub&id_rsa
- ssh-copy-id user@host
- /etc/ssh/sshd_config
```
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```
- 重启远程主机ssh服务
    + ubuntu `service ssh restart`
    + debian `/etc/init.d/ssh restart`

### authorized_keys
远程主机保存用户的公钥 $HOME/.ssh/authorized_keys  
```
ssh user@host 'mkdir -p .ssh && cat >> .ssh/authorized_keys' < ~/.ssh/id_rsa.pub
```

## .ssh
- known_hosts
- authorized_keys
- config

### config
```
Host [Host]  // 配置名
  HostName [HostName]  // 服务器ip
  Port [22]  // 端口
  User [currentUser]  // 用户
  ProxyCommand [none]  // 代理命令
  IdentityFile [~/.ssh/id_rsa]  // 密钥文件
  PasswordAuthentication [no]  // 用户密码

ServerAliveInterval 60  // 每隔60秒发送一次请求给server，然后server响应，从而保持连接
ServerAliveCountMax 3  // 发出请求后，服务器端没有响应得次数达到3，就自动断开连接
ConnectTimeout=3  // 连接时超时时间
ConnectionAttempts=5  // 连接失败后重试次数
TCPKeepAlive no  // 保持tcp连接
StrictHostKeyChecking no // 是否记录密匙到known_hosts
```

#### ProxyCommand
```
ssh user@host -W %h:%p
ssh user@host -W $(echo %h|awk -F 'test' '{print $2}'):%p 2> /dev/null
```

#### Example
```
Host gateway
    HostName 192.168.0.1
    Port 8888
    User root
    ProxyCommand none
    IdentityFile ~/.ssh/id_rsa
    PasswordAuthentication no

Host product
    HostName 192.168.0.2
    Port 8888
    User root
    IdentityFile ~/.ssh/id_rsa_gateway
    ProxyCommand ssh -q -W gateway %h:%p
    // ProxyCommand ssh gateway nc %h %p
    PasswordAuthentication no
```


## Command
```
ssh -CfNg -L 7072:hisense-test-web:6379 hisense-paas1
// ssh -L <local port>:<remote host>:<remote port> <SSH hostname>
```
