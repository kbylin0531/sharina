<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/16
 * Time: 22:04
 */

namespace Web\Admin\Controller;


use Sharin\Configger;
use Sharin\Core\Response;

class API extends Admin
{

    public function getSideMenu()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'sidemenu' => Configger::load('sidemenu'),
                'footmenu' => Configger::load('footmenu'),
            ],
        ]);
    }

    public function getSiteinfo()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'userinfo' => $this->sign->getInfo(),
                'usermenu' => Configger::load('usermenu'),
            ],
        ]);
    }

}