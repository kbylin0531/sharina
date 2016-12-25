<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * User: asus
 * Date: 12/25/16
 * Time: 9:16 PM
 */

namespace Web\Admin\Controller;


use Sharin\Core\Controller\Render;

class Auth extends Admin
{
    use Render;

    public function index()
    {
        $this->display();
    }
}