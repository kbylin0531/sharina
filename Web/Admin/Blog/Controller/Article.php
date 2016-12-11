<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/22/16
 * Time: 10:24 PM
 */
namespace Web\Admin\Blog\Controller;

/**
 * Class Article 文章管理
 * @package Web\Admin\Controller
 */
class Article extends Index
{

    //文章列表
    public function index()
    {
        $this->display();
    }

}