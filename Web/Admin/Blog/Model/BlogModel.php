<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 20:35
 */

namespace Web\Admin\Blog\Model;
use Sharin\Database\Model;

abstract class BlogModel extends Model
{
    protected function tablePrefix()
    {
        return 'psrg_blog_';
    }

    protected function validateInsert($fields)
    {
        return true;
    }

    public function validateDelete($where)
    {
        return true;
    }

    protected function validateUpdate($fields, $where)
    {
        return true;
    }

}