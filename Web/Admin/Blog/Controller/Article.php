<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/17
 * Time: 18:59
 */

namespace Web\Admin\Blog\Controller;


use Sharin\Core\Controller\Render;

class Article
{
    use Render;

    public function add()
    {
        $this->display();
    }
}