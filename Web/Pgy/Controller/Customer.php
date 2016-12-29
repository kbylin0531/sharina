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

    public function index()
    {
        if (SR_IS_AJAX) {
            $list = CustomerModel::getInstance()->getlist();
            Response::ajaxBack([
                'status' => 1,
                'data' => $list,
                'type' => 'customer',
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

    public function add()
    {
        $model = CustomerModel::getInstance();
        foreach ($_POST as $key => &$item) {
//            if ($key !== 'note') {
                '' === $item and $item = null;
//            }
        }
        if ($model->insert($_POST)) {
            Response::ajaxBack([
                'status' => 1,
                'data' => $model->getinfo($model->lastInsertId()),//列表数据量过大，直接刷新显得不合理
            ]);
        }
        Logger::error([$_POST, $model->error()]);
        Response::ajaxBack([
            'status' => 0,
            'message' => $model->error(),
        ]);
    }

    /**
     * 修改客户信息
     */
    public function updateInfo()
    {
        if (!empty($_POST['id'])) {
            $id = $_POST['id'];
            unset($_POST['id']);
            $model = CustomerModel::getInstance();
            foreach ($_POST as $k => $v) {
                if (empty($v)) unset($_POST[$k]);
                if ($v == 'null') unset($_POST[$k]);
            }
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