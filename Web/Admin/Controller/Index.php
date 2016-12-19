<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/12/16
 * Time: 10:29 PM
 */
namespace Web\Admin\Controller;

use Sharin\Core\Controller\Render;

class Index extends Admin
{

    /**
     * @TODO:Think模板引擎会解析{'标签
     */
    use Render;

    public function index()
    {
        $this->display();
    }

    public function tables()
    {
        $this->display();
    }

    public function dashboard()
    {
        $this->display();
    }

}