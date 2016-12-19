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

class Member extends Admin
{
    use Render;

    public function changePasswd()
    {
        if(SR_IS_POST){


        }
        $this->display();
    }


}