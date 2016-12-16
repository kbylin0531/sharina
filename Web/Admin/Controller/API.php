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
                            'icon' => 'tachometer',
                            'href' => '/',
                            'path' => '/Admin/Index/dashboard',
                        ],
                        [
                            'title' => 'Tables',
                            'icon' => 'table',
                            'href' => '/tables',
                            'path' => '/Admin/Index/tables',
                        ],
                    ]
                ],
            ],
        ]);
    }

}