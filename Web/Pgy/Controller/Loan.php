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
use Sharin\Core\Logger;
use Sharin\Core\Response;
use Web\Admin\Controller\Admin;
use Web\Pgy\Model\LoanModel;

class Loan extends Admin
{

    public function index()
    {
        if (SR_IS_AJAX) {
            $list = LoanModel::getInstance()->getlist();
            Response::ajaxBack([
                'status' => 1,
                'data' => $list,
                'type' => 'loan',//標注數據類型
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

    public function delete($id)
    {
        $model = LoanModel::getInstance();
        if ($model->delete(['id' => $id])) {
            Response::ajaxBack(['status' => 1]);
        } else {
            Logger::fatal([$id, '删除借款记录失败']);
            Response::ajaxBack(['status' => 0]);
        }

    }

    public function add()
    {
        $model = LoanModel::getInstance();
        empty($_POST['paydate']) and $_POST['paydate'] = null;
        foreach ($_POST as $key=>&$item) {
            if($key !== 'note'){
                '' === $item and $item = null;
            }
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
            unset($_POST['name']);
            unset($_POST['phone']);
            foreach ($_POST as $k => $v) {
                if (empty($v)) unset($_POST[$k]);
                if ($v == 'null') unset($_POST[$k]);
            }
            $model = LoanModel::getInstance();
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