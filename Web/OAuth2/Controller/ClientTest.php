<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/9
 * Time: 13:56
 */

namespace Web\OAuth2\Controller;

define('SR_CLIENT_ID', '1');
define('SR_CLIENT_SECRET', 'abc');

class ClientTest
{


    public function index()
    {
        $clientid = 1;
        $status = 'justfortest';
        echo "<a href='http://sharina.com/OAuth2/Index/authorize?response_type=code&client_id={$clientid}&state={$status}'>使用oauth登录</a>";
    }

    public function receiveCode($code, $state, $error, $desc)
    {
        \Sharin\dump($code, $state, $error, $desc);
        if (!empty($error)) {
            die($desc . '................');
        }


        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'http://sharina.com/OAuth2/Index/token');
        /*CURLOPT_USERPWD主要用来破解页面访问控制的
        *例如平时我们所以htpasswd产生页面控制等。*/
        curl_setopt($ch, CURLOPT_USERPWD, SR_CLIENT_ID . ':' . SR_CLIENT_SECRET);
        curl_setopt($ch, CURLOPT_HTTPGET, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'grant_type' => 'authorization_code',
            'code' => $code
        ]);
        $result = curl_exec($ch);
        curl_close($ch);
        $result = json_decode($result, true);
        $accessToken = $result['access_token'];

        \Sharin\dumpout($accessToken, $result);

        $content = self::get('http://sharina.com/OAuth2/Index/resource?access_token=' . $accessToken);

        \Sharin\dumpout("OAUTH服务器返回：{$content}");

    }

    /**
     * 检查文件如果文件不存在则创建一个空的文件，并且解决上层目录的问题
     * @param string $file 文件路径
     * @return bool
     * @throws \Exception 无权限时抛出异常
     */
    public static function touch($file)
    {
        $dir = dirname($file);
        if (!is_dir($dir)) {
            if (!mkdir($dir, 0777, true)) {
                throw new \Exception("创建目录失败'$dir'!");
            }
        }
        if (!is_writable($dir)) {
            if (!chmod($dir, 0777)) {
                throw new \Exception("修改目录权限失败'$dir'!");
            }
        }
        return touch($file);
    }


    public static function get($url, $cookie = '', $header = false, array $opts = [])
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, $header); //将头文件的信息作为数据流输出
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        if ($cookie) {
            if (strpos($cookie, '/') === 0) {
                self::touch($cookie);
            }
            curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie);
            curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie);
        }
        if ($opts) foreach ($opts as $k => $v) {
            curl_setopt($ch, $k, $v);
        }

        $content = curl_exec($ch);
        curl_close($ch);
        return false === $content ? '' : (string)$content;
    }


}