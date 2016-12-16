<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/12/16
 * Time: 10:29 PM
 */
namespace Web\Admin\Controller;

use Sharin\Core\Controller\Redirect;
use Sharin\Core\Controller\Render;
use Web\System\Sign\Sign;
use Web\System\Sign\SignModel;

class Index
{

    use Render;
    use Redirect;
    /**
     * @var Sign
     */
    protected $sign = null;

    public function __construct()
    {
        $this->sign = Sign::getInstance(SignModel::getInstance());
        if (!$this->sign->getInfo()) {
            $this->redirect('Admin/Publics/login');
        }
    }


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