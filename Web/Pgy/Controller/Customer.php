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
use Sharin\Database\Dao;
use Web\Admin\Controller\Admin;
use Web\Pgy\Model\CustomerModel;
use Web\Pgy\Model\PgyModel;

class Customer extends Admin
{

    public function index()
    {
        if (SR_IS_AJAX) {
            $this->getlist();
        }
        $this->display();
    }


    //-----------------------AJAX---------------

    public function getlist()
    {
        $list = CustomerModel::getInstance()->getlist();
        Response::ajaxBack([
            'status' => 1,
            'data' => $list,
            'type' => 'customer',
        ]);
    }

    /**
     * @param mixed $draw //获取Datatables发送的参数 必要,这个值作者会直接返回给前台
     * @param $draw
     * @param string $order 排序
     * @param string $search 获取前台传过来的过滤条件
     * @param int $start 从多少开始
     * @param int $length 数据长度
     */
    public function getlistOnServerSide($draw, $order, $search, $start, $length)
    {
        $list = CustomerModel::getInstance()->getlistByCustom($draw, $order, $search, $start, $length);
        Response::ajaxBack($list);
    }


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
                if ('' === $v) unset($_POST[$k]);
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