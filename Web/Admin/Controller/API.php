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

class API extends Admin
{
    public function getMenu()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'sidemenu' => [
                    [
                        'title' => 'Dashboard',
                        'icon' => 'tachometer',
                        'path' => '/Admin/Index/dashboard',
                    ],
                    [
                        'title' => 'Tables',
                        'icon' => 'table',
                        'path' => '/Admin/Index/tables',
                    ],
                    [
                        'title' => 'BlogAdd',
                        'icon' => 'file-word-o',
                        'path' => '/Admin/Blog/Article/add',
                    ],
                    [
                        'title' => 'Member',
                        'icon' => 'user-o',
                        'path' => '/Admin/Member/index',
                    ],
                ],
                'usermenu' => [
                    'route' => [
                        //menu groups
                        [
                            'title' => 'Profile',
                            'path' => '/Admin/Member/profile',
                        ],
                        [
                            'title' => 'Setting',
                            'path' => '/Admin/Member/setting',
                        ],
                        [
                            'title' => 'Reset password',
                            'path' => '/Admin/Member/changePasswd',
                        ],
                    ],
                    'link' => [
                        [
                            'title' => 'Sign out',
                            'url' => '/Admin/Publics/logout',
                        ],
                    ],
                ],
                'footmenu' => [
                    [
                        'title' => 'Github',
                        'url' => '#',
                        'target' => '_blank',
                    ], [
                        'title' => 'About',
                        'url' => '#',
                    ], [
                        'title' => 'Support',
                        'url' => '#',
                        'target' => '_blank',
                    ],
                ],
            ],
        ]);
    }

    public function getInfo()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => $this->sign->getInfo(),
        ]);
    }

}