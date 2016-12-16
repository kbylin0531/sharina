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
                //hash => path
                '/' => '/Admin/Index/dashboard',
                '/tables' => '/Admin/Index/tables',
            ],
        ]);
    }

}