<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/12/16
 * Time: 10:29 PM
 */
namespace Web\Admin\Controller;

use Sharin\Configger;
use Sharin\Core\Controller\Render;

class Index extends Admin
{

    public function index()
    {
        $this->assign('cdn', Configger::load('cdn'));
        $this->display();
    }

}