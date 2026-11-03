---
layout: portfolio_post
title: "A Remote Ubuntu Desktop with Xfce and VNC"
date: 2024-12-19 21:32:13
description: "Setting up a graphical desktop on a FunHPC server and reaching it through an SSH tunnel."
tags: [Remote, Desktop, Ubuntu]
categories: Experience
---

Some simulator debugging is easier with a desktop. These notes describe the Xfce and TightVNC setup I used on a FunHPC container, based on the [platform's VNC guide](https://www.funhpc.com/#/documentation/Exampleflow/vncserver).

## Install the desktop packages

These are Ubuntu packages installed with APT, rather than Python packages:

```bash
sudo apt update
sudo apt install xorg openbox xfce4 xfce4-goodies tightvncserver
```

The original container ran as root. If a minimal container has not set `USER`, initialize it for the actual account:

```bash
export USER="$(id -un)"
```

## Configure the VNC session

Start VNC once and set its password when prompted:

```bash
vncserver
```

Then stop that first display before changing its startup file:

```bash
vncserver -kill :1
vim ~/.vnc/xstartup
```

In Vim, press `i` to edit, `Esc` to leave insert mode, and `:wq` to save. The relevant Xfce startup commands are:

```bash
xrdb "$HOME/.Xresources"
startxfce4 &
```

Make the file executable, then launch the desktop at the desired size:

```bash
chmod +x ~/.vnc/xstartup
vncserver -localhost -geometry 1280x960
```

The first display is usually `:1`, corresponding to port `5901`.

## Create the tunnel from the local computer

Run the following on your own computer, replacing the placeholders with the SSH connection details provided by the platform:

```bash
ssh -p SSH_PORT -N -L 5901:localhost:5901 USER@SERVER_HOST
```

The command remains in the foreground and may print nothing after authentication. That is normal: it is maintaining the forwarding connection. On first connection, check the server's host-key fingerprint against the platform's information before accepting it.

My original post included a temporary cloud hostname, port, and connection transcript. Those were specific to that instance; the parameterized command above is the reusable part.

## Connect the VNC viewer

Install a client such as [RealVNC Viewer](https://www.realvnc.com/en/connect/download/viewer/), connect to:

```text
localhost:5901
```

and enter the VNC password configured earlier. Keep the SSH tunnel open for the duration of the desktop session.
