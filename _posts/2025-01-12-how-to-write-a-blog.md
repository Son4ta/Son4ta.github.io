---
layout: portfolio_post
title: "Keeping Training Sessions Alive with tmux"
date: 2025-01-12 17:56:13
description: "A short guide to creating, detaching, and recovering terminal sessions after an SSH disconnect."
tags: [Remote, Ubuntu, Server, tmux]
categories: Experience
---

Losing a training run halfway through because an SSH connection dropped was enough motivation to learn tmux.

## Separate the session from the terminal

A process launched directly from an SSH shell can receive a hangup when the connection closes. Whether it survives depends on how it was started and how it handles that signal. tmux provides a persistent terminal session on the server that you can detach from and reconnect to later.

It also supports multiple windows and split panes inside a session. More than one client can attach to the same session when shared access is appropriate.

## The essential commands

Create a named session:

```bash
tmux new -s training
```

Start the training command inside it. To detach, press **Ctrl+b**, release both keys, then press **d**. You can also run:

```bash
tmux detach
```

After reconnecting over SSH, list the sessions and attach:

```bash
tmux list-sessions
tmux attach -t training
```

A session can also be addressed by its numeric ID:

```bash
tmux attach -t 0
```

Rename a session or deliberately end one:

```bash
tmux rename-session -t 0 new-name
tmux kill-session -t training
```

Killing the session ends the terminal context containing the jobs, so it is different from detaching.

## My minimal workflow

```bash
# On the server:
tmux new -s my_session
# Run the training command, then press Ctrl+b followed by d.

# After a later SSH login:
tmux attach-session -t my_session
```

When there is only one session, `tmux attach` is enough. The session survives a client disconnect; it does not survive a server shutdown or guarantee that the training program itself will not fail.
