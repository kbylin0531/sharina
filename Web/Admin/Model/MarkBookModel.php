<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/3
 * Time: 22:53
 */

namespace Web\Admin\Model;


use Sharin\Database\Exceptions\DatabaseException;

class MarkBookModel extends AdminModel
{
    protected function tableName()
    {
        return 'markbook';
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