<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/22
 * Time: 13:12
 */

namespace Web\Pgy\Controller;


use Sharin\Core\Controller\Render;
use Sharin\Core\Response;
use Web\Pgy\Model\CustomerModel;

class Customer
{

    use Render;

    public function index()
    {
        if (SR_IS_AJAX) {
            $list = CustomerModel::getInstance()->getlist();
            Response::ajaxBack([
                'status' => 1,
                'data' => $list,
            ]);
        }
        $this->display();
    }

    public function getinfo($id)
    {
        $info = CustomerModel::getInstance()->getinfo($id);
        Response::ajaxBack([
            'status' => 1,
            'data' => $info,
        ]);
    }

}