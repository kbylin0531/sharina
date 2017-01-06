<?php
use Sharin\ClassLoader;
//调试模式
const SR_DEBUG_MODE_ON = true;
const SR_WECHAT_TOKEN = 'sharina';
const SR_WECHAT_ENCODINGAESKEY = 'IJFdGbPQu2dMXqiwua6CS5tJ9P17YrFEoSUtNnISGeW';
const SR_WECHAT_APPID = 'wxd10144c82235ff4f';
const SR_WECHAT_SECRECT = 'b2ef695342bbb9f9e513fbc7e1125a6b';

//--------------- VALIDATE BEGIN ------------------------
if (isset($_GET['echostr'])) {
    $signature = $_GET['signature'];
    $timestamp = $_GET['timestamp'];
    $nonce = $_GET['nonce'];

    $tmpArr = array(SR_WECHAT_TOKEN, $timestamp, $nonce);
    sort($tmpArr, SORT_STRING);
    $tmpStr = implode($tmpArr);
    $tmpStr = sha1($tmpStr);

    if ($tmpStr == $signature) {
        echo $_GET['echostr'];
    }
    die;
}
//--------------- VALIDATE END ------------------------

//包含web模块
include __DIR__ . '/../Sharin/web.inc';

//初始化
Sharin::register([
    'TEMPLATE_CACHE_DRIVER_INDEX' => 1,
]);

ClassLoader::rule('Library', 'ABS:' . realpath(__DIR__ . '/../../../share/'));

if (isset($_SERVER['PATH_INFO']) and $_SERVER['PATH_INFO'] === '/admin') {
    $url = SR_PUBLIC_URL . '/Admin/Index/index';
    header("refresh:0;url={$url}");
    exit();
}

//开启应用
Sharin::start();