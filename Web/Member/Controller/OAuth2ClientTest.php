<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/9
 * Time: 20:35
 */

namespace Web\Member\Controller;

use Sharin\Core\Request;
use Sharin\Core\Response;

define('SR_CLIENT_ID', '1');
define('SR_CLIENT_SECRET', 'abc');

class OAuth2ClientTest
{

    public function __construct()
    {
        $clientid = 1;
        $status = 'justfortest';
        $this->url = "http://sharina.me/oauth2/authorize?response_type=code&client_id={$clientid}&state={$status}";
    }


    public function index()
    {
        echo "<a href='{$this->url}'>使用oauth登录</a>";
    }

    public function receiveCode($code, $state, $error, $desc)
    {
        \Sharin\dump($code, $state, $error, $desc);
        if (!empty($error)) {
//            die('password .........');
            Response::redirect($this->url);
        }

        $result = OAuth2::getToken('1', 'abc', $code);
        $accessToken = $result['access_token'];

        $content = Request::doGet('http://sharina.me/oauth2/getinfo?access_token=' . $accessToken);

        \Sharin\dumpout($accessToken, json_decode($content,true));
    }


}