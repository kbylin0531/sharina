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
use Web\Member\Controller\Sign;

class API extends Admin
{
    public function getMenu()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'inside' => [
                    //member
                    '/Admin/Member/member',
                    '/Admin/Member/role',
                    '/Admin/Member/auth',
                    '/Admin/Member/mapRoleAuth',
                    '/Admin/Member/mapMemberRole',

                ],
                'sidemenu' => [
                    [
                        'title' => 'Dashboard',
                        'icon' => 'tachometer',
                        'path' => '/Admin/Index/dashboard',
                    ],
//                    [
//                        'title' => 'Tables',
//                        'icon' => 'table',
//                        'path' => '/Admin/Index/tables',
//                    ],
//                    [
//                        'title' => 'BlogAdd',
//                        'icon' => 'file-word-o',
//                        'path' => '/Admin/Blog/Article/add',
//                    ],
                    [
                        'title' => 'Customer',
                        'icon' => 'user-o',
                        'path' => '/Pgy/Customer/index',
                    ],
                    [
                        'title' => 'Loan',
                        'icon' => 'share-square',
                        'path' => '/Pgy/Loan/index',
                    ],
                    [
                        'title' => 'Member',
                        'icon' => 'toggle-on',
                        'path' => '/Admin/Member/index',
                    ],
                    [
                        'title' => 'Markbook',
                        'icon' => 'bookmark',
                        'path' => '/Admin/Markbook/index',
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
                            'url' => '/logout',
                        ],
                    ],
                ],
                'footmenu' => [
                    [
                        'title' => 'Github',
                        'url' => 'https://github.com/lichtung/sharina',
                        'target' => '_blank',
                    ], [
                        'title' => 'Database',
                        'url' => '/database.php',
                        'target' => '_blank',
                    ], [
                        'title' => 'Explorer',
                        'url' => '/explorer.php',
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
            'data' => Sign::getInfo(),
        ]);
    }

}