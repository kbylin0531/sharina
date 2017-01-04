<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/3
 * Time: 22:53
 */

namespace Web\Admin\Model;


use Sharin\Database\Exceptions\DatabaseException;

/**
 * Class MarkBookModel
 * @method MarkBookModel getInstance($index = null) static
 * @package Web\Admin\Model
 */
class MarkBookModel extends AdminModel
{
    protected function tableName()
    {
        return 'markbook';
    }

    public function getlist()
    {
        $list = $this->select();
        if (false === $list) {
            throw new DatabaseException($this);
        }
        return $list;
    }

    public function getById($id)
    {
        $record = $this->find($id);
        if (false === $record) {
            throw new DatabaseException($this);
        }
        return $record;
    }

}