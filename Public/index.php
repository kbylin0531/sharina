<?php
use Sharin\ClassLoader;
//调试模式
const SR_DEBUG_MODE_ON = true;
const SR_WECHAT_TOKEN = 'sharina';
const SR_WECHAT_ENCODINGAESKEY = '';
const SR_WECHAT_APPID = 'wx2b0d34d6bc1868bd';
const SR_WECHAT_SECRECT = 'ba729640ef32323f3767e57641aee821';

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