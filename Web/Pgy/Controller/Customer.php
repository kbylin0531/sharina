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
use Sharin\Core\Logger;
use Sharin\Core\Response;
use Web\Admin\Controller\Admin;
use Web\Pgy\Model\CustomerModel;

class Customer extends Admin
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

    //-----------------------AJAX---------------
    public function getinfo($id)
    {
        $info = CustomerModel::getInstance()->getinfo($id);
        Response::ajaxBack([
            'status' => 1,
            'data' => $info,
        ]);
    }

    /**
     * 修改客户信息
     */
    public function updateCustomerInfo()
    {
        if (!empty($_POST['id'])) {
            $id = $_POST['id'];
            unset($_POST['id']);
            $model = CustomerModel::getInstance();
            $rst = $model->update($_POST, ['id' => $id]);
            if ($rst) {
                Response::ajaxBack([
                    'status' => 1,
                    'message' => '修改成功',
                ]);
            } else {
                Logger::error([$_POST, $id, $model->error()]);
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '系统出错',
                ]);
            }
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '填写的信息不完整',
        ]);
    }

}