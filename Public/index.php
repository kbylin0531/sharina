<?php
//调试模式
const SR_DEBUG_MODE_ON = true;
//包含web模块
include __DIR__.'/../Sharin/web.inc';


//初始化
Sharin::register();


if(isset($_SERVER['PATH_INFO']) and $_SERVER['PATH_INFO'] === '/admin'){
    $url = SR_PUBLIC_URL.'/Admin/Index/index';
//    \Sharin\Core\Response::redirect($url);
    header("refresh:0;url={$url}");
    exit();
}

//开启应用
Sharin::start();