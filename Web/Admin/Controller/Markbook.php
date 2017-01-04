<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/3
 * Time: 21:37
 */

namespace Web\Admin\Controller;


use Sharin\Core\Logger;
use Sharin\Core\Response;
use Web\Admin\Model\MarkBookModel;

class Markbook extends Admin
{

    public function index()
    {
        $this->display();
    }

    public function getlist()
    {
        $model = MarkBookModel::getInstance();
        $list = $model->getlist();
        Response::ajaxBack([
            'status' => 1,
            'data' => $list,
        ]);
    }

    public function delete($id)
    {
        $model = MarkBookModel::getInstance();
        if ($model->delete(['id' => $id])) {
            Response::ajaxBack(['status' => 1, 'message' => '删除成功']);
        }
        Logger::info([$id, $model->error()]);
        Response::ajaxBack(['status' => 0, 'message' => '删除失败']);
    }

    public function add($name, $category)
    {
        $model = MarkBookModel::getInstance();
        if ($model->insert([
            'add_time'=>date('Y-m-d H:i:s'),
            'name' => $name,
            'category' => $category,
        ])
        ) {
            Response::ajaxBack(['status' => 1, 'message' => '添加成功']);
        }
        Logger::info([$name, $category, $model->error()]);
        Response::ajaxBack(['status' => 0, 'message' => '添加失败']);
    }

    public function update($id, $name, $category)
    {
        $model = MarkBookModel::getInstance();
        if ($model->update(['name' => $name, 'category' => $category], ['id' => $id])) {
            Response::ajaxBack(['status' => 1, 'message' => '修改成功']);
        } else {
            Logger::info([$id, $name, $category, $model->error()]);
            Response::ajaxBack(['status' => 0, 'message' => '修改失败']);
        }
    }

    public function detail($id)
    {
        $model = new MarkBookModel();
        $info = $model->getById($id);
        $this->assign('info', $info);
        $this->display();
    }

    public function save($id, $content)
    {
        if (SR_IS_AJAX) {
            $model = new MarkBookModel();
            if ($model->update(['content' => $content], ['id' => $id])) {
                Response::ajaxBack([
                    'status' => 1,
                    'data' => '保存成功',
                ]);
            } else {
                Logger::debug([
                    $content, $id, $model->error()
                ]);
                Response::ajaxBack([
                    'status' => 0,
                    'data' => '保存失败',
                ]);
            }
        }
    }

}