<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 21:45
 */

namespace Web\Admin\Blog\Model;


class CommentModel extends BlogModel
{
    protected function tableName()
    {
        return 'comment';
    }

}