<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/30
 * Time: 20:37
 */

namespace Web\Admin\Blog\ActiveRecord;

/**
 * Class ArticleAR
 *
 * //general
 * @property string $title
 * @property int $mid
 * @property int $cateid
 * @property string $author
 * @property string $content
 * @property string $outline
 * //default
 * @property bool $is_show
 * @property bool $is_delete
 * @property bool $is_top
 * @property bool $is_original
 *
 * @property int $visits
 * @property string $addtime
 * @property string $edit_time
 * @property int $like
 * @property int $dislike
 *
 * @package Web\Admin\Blog\ActiveRecord
 */
class ArticleAR extends BlogAR
{
    protected function rules()
    {
        // TODO: Implement rules() method.
    }

    protected function tableName()
    {
        return 'article';
    }



}