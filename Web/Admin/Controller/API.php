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
    public function getSideMenu()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'sidemenu' => [
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
                            [
                                'title' => 'Member',
                                'name' => 'Member',
                                'icon' => 'user-o',
                                'path' => '/Admin/Member/index',
                            ],
                        ]
                    ]
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

    public function getSiteinfo()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'userinfo' => $this->sign->getInfo(),
                'usermenu' => [
                    'personal' => [
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
                            'title' => 'Reset password',
                            'url' => '#/changePasswd',
                        ],
                    ],
                    'common' => [
                        [
                            'title' => 'Sign out',
                            'url' => '/Admin/Publics/logout',
                        ],
                    ],
                ],
            ],
        ]);
    }

}