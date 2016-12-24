<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * User: asus
 * Date: 12/24/16
 * Time: 9:25 PM
 */

namespace Web\Pgy\Controller;


use Sharin\Core\Controller\Render;
use Sharin\Core\Response;
use Web\Admin\Controller\Admin;
use Web\Pgy\Model\LoanModel;

class Loan extends Admin
{

    use Render;

    public function index()
    {
        if (SR_IS_AJAX) {
            $list = LoanModel::getInstance()->getlist();
            Response::ajaxBack([
                'status' => 1,
                'data' => $list,
            ]);
        }
        $this->display();
    }


    //-----------------------AJAX---------------
    public function getinfo($id)
    {
        $info = LoanModel::getInstance()->getinfo($id);
        Response::ajaxBack([
            'status' => 1,
            'data' => $info,
        ]);
    }
}