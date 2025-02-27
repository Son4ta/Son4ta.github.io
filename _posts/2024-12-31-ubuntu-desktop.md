---
layout: post
title: 【FunHPC服务器远程桌面】安装x11、桌面环境和vncserver
date: 2024-12-19 21:32:13
description: 记录我在FunHPC服务器上安装远程桌面
tags: Remote Desktop Ubuntu
categories: Experience
tabs: true
---
我叼，没桌面太难受了，怎么办？

[具体教程，FunHPC官方文档](https://www.funhpc.com/?msclkid=279b82507c861dc09fbee5678c99ce10#/documentation/Exampleflow/vncserver)

## 首先，pip安装x11、桌面环境和tightvncserver
```shell

sudo apt update
sudo apt-get upgrade
# 安装x11
apt-get update && apt-get install xorg openbox -y
# 安装面环境
apt-get update && apt-get install xfce4 xfce4-goodies -y
# 安装tightvncserver
apt-get install tightvncserver -y
# vncserver 进程需要依赖用户环境变量 USER
export USER=root 
```

## VNC配置
```shell
# 当输入完之后继续在终端输入vncserver，用来配置密码
vncserver
...配置密码

# 停止刚刚新建的虚拟化桌面 配置VNC Server
vncserver -kill :1
```
## 配置VNC Server
修改xstartup文件
```shell
vim ~/.vnc/xstartup
```
 `i`编辑、 `esc`退出、 `:wq`保存
```shell
# 将下面的内容加入到xstartup文件的后面
xrdb $HOME/.Xresources 
startxfce4 &
```
```shell
chmod +x ~/.vnc/xstartup
```
启动新的虚拟化桌面
```shell
vncserver -geometry 1280x960
``` 
## 配置`本地`计算机
请注意！是本地，即你的电脑，笨蛋
```shell
ssh -p 端口号 -NL 5901:localhost:5901 网址
# eg
ssh -p 41536 -NL 5901:localhost:5901 root@5fwng6ia9oqm2c1nsnow.deepln.com
``` 
当你输入密码后，什么也不显示也没有发生报错，就表示已经完成本地端口转发。
```shell
C:\Users\xxxx>ssh -p 41536 -NL 5901:localhost:5901 root@5fwng6ia9oqm2c1nsnow.deepln.com
The authenticity of host '[5fwng6ia9oqm2c1nsnow.deepln.com]:41536 ([111.6.167.250]:41536)' can't be established.
ED25519 key fingerprint is SHA256:P9xKXT5+v0JHtUvyqT3E0zlAA1p0UbLn2J5c2tFsoN8.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[5fwng6ia9oqm2c1nsnow.deepln.com]:41536' (ED25519) to the list of known hosts.
root@5fwng6ia9oqm2c1nsnow.deepln.com's password:
Permission denied, please try again.
root@5fwng6ia9oqm2c1nsnow.deepln.com's password:（右键可以复制）
# 这里什么都没有，只有回车，就对了
```

## 本地安装VCN
[本地安装VCN Viewer](https://www.realvnc.com/en/connect/download/viewer)
打开VNC Viewer，输入VNC Viewer及用户名。
```shell
#输入VNC Viewer及Name
VNC Viewer:localhost:5901
Name:root
```
输入密码，自此，完成了VNC可视化容器实例。