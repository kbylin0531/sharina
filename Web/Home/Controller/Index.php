<?php
namespace Web\Home\Controller;

use Sharin\Core\Controller\Render;

class Index
{

    use Render;

    public function index()
    {
        $this->assign('info', [
            'author' => 'linzh',
            'address' => 'https://github.com/lichtung/Sharin',
        ]);
        $this->display();

        die('a');
    }

}