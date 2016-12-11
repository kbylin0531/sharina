<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 21:30
 */

namespace Web\Admin\Blog\Model;


class ArticleCategoryModel extends BlogModel
{
    protected function tableName()
    {
        return 'article_category';
    }

}