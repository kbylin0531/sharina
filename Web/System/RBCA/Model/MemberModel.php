<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * User: asus
 * Date: 12/29/16
 * Time: 9:24 PM
 */

namespace Web\System\RBCA\Model;


use Sharin\Database\Exceptions\DatabaseException;
use Sharin\Database\Model;

/**
 * Class MemberModel
 * @method MemberModel getInstance($index = null) static
 * @package Web\System\RBCA\Model
 */
class MemberModel extends Model
{
    public function tablePrefix()
    {
        return 'psr_';
    }

    public function tableName()
    {
        return 'member';
    }

    /**
     * 获取列表
     * @return array
     * @throws DatabaseException
     */
    public function getlist(): array
    {
        $list = $this->select();
        if (false === $list) {
            throw new DatabaseException($this);
        }
        return $list;
    }

    public function getCount()
    {
        $count = $this->count();
        if (false === $count) {
            throw new DatabaseException($this);
        }
        return $count;
    }

    /**
     * @param int $id
     * @return array
     * @throws DatabaseException
     */
    public function getById(int $id): array
    {
        $info = $this->find($id);
        if (false === $info) {
            throw new DatabaseException($this);
        }
        return $info;
    }

}