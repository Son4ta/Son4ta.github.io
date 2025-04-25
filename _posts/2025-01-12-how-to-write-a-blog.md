---
layout: post
title: 服务器使用——Tmux 保活进程
date: 2025-01-12 17:56:13
description: ssh连接偶遇网络问题，丢包之高恐怖如斯，拼尽全力仍无法重连训练中断
tags: Remote Desktop Ubuntu Server
categories: Experience
tabs: true
---
我叼，我练了一半你跟我说进程挂了，忍不了
## Tmux?
命令行的典型使用方式是，打开一个终端窗口（terminal window，以下简称"窗口"），在里面输入命令。用户与计算机的这种临时的交互，称为一次"会话"（session） 。

会话的一个重要特点是，窗口与其中启动的进程是连在一起的。打开窗口，会话开始；关闭窗口，会话结束，会话内部的进程也会随之终止，不管有没有运行完。

一个典型的例子就是，SSH 登录远程计算机，打开一个远程窗口执行命令。这时，网络突然断线，再次登录的时候，是找不回上一次执行的命令的。因为上一次 SSH 会话已经终止了，里面的进程也随之消失了。

为了解决这个问题，会话与窗口可以"解绑"：窗口关闭时，会话并不终止，而是继续运行，等到以后需要的时候，再让会话"绑定"其他窗口。
Tmux 就是会话与窗口的"解绑"工具，将它们彻底分离。

（1）它允许在单个窗口中，同时访问多个会话。这对于同时运行多个命令行程序很有用。

（2） 它可以让新窗口"接入"已经存在的会话。

（3）它允许每个会话有多个连接窗口，因此可以多人实时共享会话。

（4）它还支持窗口任意的垂直和水平拆分。

## 使用

```shell
# 新建会话
tmux new -s <session-name>
# 接入会话
tmux attach -t 0 # 编号
tmux attach -t <session-name> # 名称
# 分离会话
Ctrl+b d # 分开按 记得松手
tmux detach
# 杀死某个会话
tmux kill-session -t <session-name> # 名称 也可编号
# 重命名会话
tmux rename-session -t 0 <new-name>
```
## 最简操作流程
```shell
# 新建会话 
tmux new -s my_session。
# 在 Tmux 窗口运行所需的程序。
Ctrl+b d #会话分离。
# 下次使用时，重新连接到会话
tmux attach-session -t my_session
tmux attach # 只有一个会话，也行
```
