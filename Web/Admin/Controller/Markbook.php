<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/3
 * Time: 21:37
 */

namespace Web\Admin\Controller;


use Sharin\Core\Response;
use Web\Admin\Model\MarkBookModel;

class Markbook extends Admin
{

    public function index()
    {
        $this->display();
    }

    public function getMarkdown($mdid)
    {
        if (SR_IS_AJAX) {
            $model = new MarkBookModel();
            $content = $model->getById($mdid);

            $content ? Response::ajaxBack([
                'status' => 1,
                'data' => $content,
            ]) :
                Response::ajaxBack([
                    'status' => 0,
                    'data' => [
                        'content' => '',
                    ],
                ]);
        }
    }

}