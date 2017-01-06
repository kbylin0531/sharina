<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/6
 * Time: 10:29
 */

namespace Web\Wechat\Controller;

use Web\Wechat\Utils\WechatUtil;

class Index
{
    public function index()
    {
        echo WechatUtil::getOpenid();
        echo "<h1>Hello</h1>";
    }

}