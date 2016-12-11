<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/30
 * Time: 20:41
 */

namespace Web\Admin\Blog\ActiveRecord;

use Sharin\Database\ActiveRecord;

abstract class BlogAR extends ActiveRecord
{
    protected function tablePrefix()
    {
        return 'psrg_blog_';
    }

}