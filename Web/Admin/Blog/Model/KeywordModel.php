<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 21:31
 */

namespace Web\Admin\Blog\Model;

/**
 * Class KeywordModel
 * manage table of 'rel_keyword_article' and 'keyword'
 * @package Web\Admin\Blog\Model
 */
class KeywordModel extends BlogModel
{
    protected function tableName()
    {
        return 'keyword';
    }

}