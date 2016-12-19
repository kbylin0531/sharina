<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/16
 * Time: 22:04
 */

namespace Web\Admin\Controller;


use Sharin\Core\Response;
use Web\System\Sign\Sign;

class API
{
    public function getSideMenu()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                [
                    'title' => 'NAVIGATION',
                    'children' => [
                        [
                            'title' => 'Dashboard',
                            'name' => 'tachometer',
                            'icon' => 'tachometer',
                            'path' => '/Admin/Index/dashboard',
                        ],
                        [
                            'title' => 'Tables',
                            'name' => 'table',
                            'icon' => 'table',
                            'path' => '/Admin/Index/tables',
                        ],
                        [
                            'title' => 'BlogAdd',
                            'name' => 'BlogAdd',
                            'icon' => 'file-word-o',
                            'path' => '/Admin/Blog/Article/add',
                        ],
                    ]
                ],
            ],
        ]);
    }

    public function getSiteinfo()
    {
        $userinfo = Sign::getInstance()->getInfo();
        if (null === $userinfo) {
            Response::ajaxBack([
                'status' => 0,
                'message' => '_NO_LOGIN_',
            ]);
        } else {
            Response::ajaxBack([
                'status' => 1,
                'data' => [
                    'userinfo' => $userinfo,
                    'usermenu' => [
                        //menu groups
                        [
                            'title' => 'Profile',
                            'url' => '#',
                        ],
                        [
                            'title' => 'Setting',
                            'url' => '#',
                        ],
                        [
                            'title' => 'Change password',
                            'url' => '#',
                        ],
                    ],
                    'generalmenu' => [
                        [
                            'title' => 'Sign out',
                            'url' => '/Admin/Publics/logout',
                        ],
                    ],
                ],
            ]);
        }
    }

}