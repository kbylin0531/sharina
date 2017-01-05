<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/5
 * Time: 14:17
 */

namespace Web\Pgy\Controller;

use Sharin\Developer;

class Index
{

    public function valid()
    {
        Developer::closeTrace();
        $echoStr = $_GET['echostr'];
        //valid signature , option
        if ($this->checkSignature()) {
            exit($echoStr);
        }
    }

    private function checkSignature()
    {

        $signature = $_GET['signature'];
        $timestamp = $_GET['timestamp'];
        $nonce = $_GET['nonce'];

        $tmpArr = array(SR_WECHAT_TOKEN, $timestamp, $nonce);
        // use SORT_STRING rule
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode($tmpArr);
        $tmpStr = sha1($tmpStr);

        if ($tmpStr == $signature) {
            return true;
        } else {
            return false;
        }
    }

}