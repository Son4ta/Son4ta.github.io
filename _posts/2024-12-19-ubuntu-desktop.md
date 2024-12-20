---
layout: post
title: 【服务器远程桌面】安装ubuntu-desktop与Xrdp
date: 2024-12-19 21:32:13
description: 记录我在服务器上安装ubuntu-desktop与Xrdp
tags: Remote Desktop Ubuntu
categories: Experience
tabs: true
---
我叼，没桌面太难受了，怎么办？

(具体教程)[https://isaac-sim.github.io/IsaacLab/main/source/setup/installation/pip_installation.html]

## 首先，pip安装Gnome与Xfce
```shell

sudo apt update
sudo apt-get upgrade
sudo apt install ubuntu-desktop

sudo apt install xubuntu-desktop
```

## 然后是安装 Xrdp
```shell
sudo apt install xrdp
# 一旦安装完成，Xrdp 服务将会自动启动。你可以输入下面的命令，验证它：
sudo systemctl status xrdp
# SysVinit：如果您的系统使用 SysVinit 作为 init 系统
sudo service xrdp status
```

