#!/bin/bash

# 用户和用户组设置
USER=apache
GROUP=apache

# 运行时目录 (次要的自生成文件)
mkdir Runtime
chown -R ${USER}.${GROUP} Runtime/
# 数据目录 (重要的自生成文件)
mkdir Data
chown -R ${USER}.${GROUP} Data/
# 公共访问的自生成文件
mkdir Public/dynamic
chown -R ${USER}.${GROUP} Public/dynamic/