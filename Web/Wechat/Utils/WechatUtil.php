<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/6
 * Time: 12:23
 */

namespace Web\Wechat\Utils;


use Library\Wechat\Wechat;
use Sharin\Core\Session;

class WechatUtil
{
    public static function getOpenid()
    {
        $openid = Session::get('openid');
        if (!$openid) {
            if (!empty($_GET['openid'])) {
                $openid = $_GET['openid'];
            } else {
                $wechat = new Wechat();
                if (isset($_GET['code'])) {
                    $access_token = $wechat->getOauthAccessToken();
                    $userinfo = $wechat->getOauthUserinfo($access_token['access_token'], $access_token['openid']);

                    $openid = $userinfo['openid'];

                    Session::set('wx_info', [
                        'openid' => $openid,
                        'weixin_name' => $userinfo['nickname'],
                        'weixin_touxiang' => $userinfo['headimgurl'],
                        'weixin_sex' => $userinfo['sex'],
                        'weixin_shenfen' => $userinfo["province"],
                    ]);

                } else {
                    header('Location: ' . $wechat->getOauthRedirect(SR_PUBLIC_FULL_URL . $_SERVER['REQUEST_URI'], '123', 'snsapi_userinfo'));
                    die;
                }
            }
            Session::set('wx_openid', $openid);
        }
        return $openid;
    }


}