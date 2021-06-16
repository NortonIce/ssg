#!/bin/bash
tmux kill-server\;
tmux new-session -d -s my_session 'node index.js'
tmux detach -s my_session

