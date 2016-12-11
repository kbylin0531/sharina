<?php
//调试模式
const SR_DEBUG_MODE_ON = true;
//包含web模块
include __DIR__.'/../Sharin/web.inc';

//初始化
Sharin::register();
//开启应用
Sharin::start();