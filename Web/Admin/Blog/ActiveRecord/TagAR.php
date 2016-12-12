<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/12
 * Time: 20:13
 */

namespace Web\Admin\Blog\ActiveRecord;

/**
 * Class TagAR
 *
 * @property int $name tagname
 *
 * @package Web\Admin\Blog\ActiveRecord
 */
class TagAR extends BlogAR
{


    public function __construct($id = null)
    {
        parent::__construct();
        if (isset($id)) {
            $this->_where[$this->primaryKey] = $id;
        }
    }


    public function create($name){

    }
    public function find(){

    }

    protected function rules()
    {
        return [];
    }

    public function tableName()
    {
        return 'tag';
    }
}