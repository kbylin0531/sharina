<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/19
 * Time: 19:06
 */

namespace Web\Admin\Controller;


use Sharin\Core\Controller\Render;
use Sharin\Core\Response;

class Member extends Admin
{
    use Render;

    public function changePasswd($old = null, $new = null)
    {
        if (SR_IS_POST) {


            Response::ajaxBack([$old, $new]);
            die();
        }
        $this->display();
    }


}