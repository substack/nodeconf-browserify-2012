#!/bin/bash
kill $(ps aux|grep chrome|grep -- --proxy|perl -nle'print $1 if /^\S+\s+(\d+)/')
node /home/substack/projects/schoolbus/example/form/server.js
