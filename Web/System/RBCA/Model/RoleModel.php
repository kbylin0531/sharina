<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/26
 * Time: 9:55
 */

namespace Web\System\RBCA\Model;

use Sharin\Database\Exceptions\DatabaseException;

/**
 * Class RoleModel 角色模型
 *
 * @method RoleModel getInstance($index = null) static
 *
 * @package Web\System\RBCA\Model
 */
class RoleModel extends RBCAModel
{
    protected function tableName()
    {
        return 'role';
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
     * @param string $name
     * @return array
     * @throws DatabaseException
     */
    public function getByName(string $name): array
    {
        $info = $this->where(['name' => $name])->find();
        if (false === $info) {
            throw new DatabaseException($this);
        }
        return $info;
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