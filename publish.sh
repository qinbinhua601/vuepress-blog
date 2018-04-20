#!/bin/bash

cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:qinbinhua601/vuepress-blog.git master:gh-pages