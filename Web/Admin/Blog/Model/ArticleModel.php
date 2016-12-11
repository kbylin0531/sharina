<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/28
 * Time: 20:34
 */

namespace Web\Admin\Blog\Model;


class ArticleModel extends BlogModel
{
    protected function tableName()
    {
        return 'article';
    }

    /**
     * 刷新校验喜欢和不喜欢的人数,
     * 用于修正累积性的错误
     * @return bool
     */
    protected function refreshLikeAndDislike()
    {
        $sql = '
UPDATE {{article}} a
SET `like` = (
	SELECT COUNT(*) AS is_like FROM {{favorite}} al
	WHERE al.aid = a.id AND is_like = 1
), dislike = (
	SELECT COUNT(*) AS dis_like  FROM {{favorite}} al
	WHERE al.aid = a.id AND is_like = 0
);';
        return false !== $this->exec($sql);
    }

    /**
     * 获取文章,根据文章ID
     * @param int $id
     * @return array|false
     */
    public function get($id)
    {
        return $this->where(['id' => $id])->find();
    }

    /**
     * 添加文章
     * @param string $title
     * @param string $content
     * @param int $cateid
     * @param int $author
     * @param int $is_show
     * @param int $is_delete
     * @param int $is_top
     * @param int $is_original
     * @param null|string $outline
     * @return false|int
     */
    public function add($title, $content, $cateid, $author, $is_show = 1, $is_delete = 0, $is_top = 0, $is_original = 1, $outline = null)
    {
        if (!isset($outline)) {
            $outline = mb_substr(strip_tags($content), 0, 400);
        }
        return $this->fields([
            'title' => $title,
            'content' => $content,
            'outline' => $outline,
            'cateid' => $cateid,//未作外键约束
            'author' => $author,
            'is_show' => $is_show,
            'is_delete' => $is_delete,
            'is_original' => $is_original,
            'is_top' => $is_top,
        ])->insert();
    }

    /**
     * 根据文章ID删除文章
     * @param int $id
     * @return false|int
     */
    public function del($id)
    {
        return $this->fields([
            'is_delete' => 1,
        ])->where(['id' => $id])->update();
    }

    public function hide($id)
    {
        return $this->fields([
            'is_shown' => 1,
        ])->where(['id' => $id])->update();
    }

    public function edit($id, $title = null, $content = null, $cateid = null, $author = null, $is_show = null, $is_delete = null, $is_top = null, $is_original = null, $outline = null)
    {
        $fields = [];
        isset($title) and $fields['title'] = $title;
        isset($cateid) and $fields['cateid'] = $cateid;
        isset($author) and $fields['author'] = $author;
        isset($is_top) and $fields['is_top'] = $is_top;
        isset($is_original) and $fields['is_original'] = $is_original;
        isset($is_delete) and $fields['is_delete'] = $is_delete;
        isset($is_show) and $fields['is_show'] = $is_show;
        isset($outline) and $fields['title'] = $outline;
        if (isset($content)) {
            $fields['content'] = $content;
            //如果不是显式地修改outline,则附带修改outline
            isset($outline) or $fields['outline'] = mb_substr(strip_tags($content), 0, 400);
        }

        if (empty($fields)) {
            $this->error = '{_NO_FIELD_TO_UPDATE_}';
            return false;
        }
        return $this->fields($fields)->where(['id' => $id])->update();
    }

}