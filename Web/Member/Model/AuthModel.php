<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/26
 * Time: 11:40
 */

namespace Web\Member\Model;


use Sharin\Database\Exceptions\DatabaseException;

/**
 * Class AuthModel
 *
 * @method AuthModel getInstance($index=null) static
 *
 * @package Web\System\RBCA\Model
 */
class AuthModel extends RBCAModel
{
    protected function tableName()
    {
        return 'auth';
    }

    /**
     * 获取权限列表
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