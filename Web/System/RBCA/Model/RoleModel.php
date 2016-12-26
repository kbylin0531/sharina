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

    /**
     * 添加一个角色
     * @param string $title
     * @param string $name
     * @param bool $status
     * @param string $comment
     * @param int $orderNo
     * @param int $pid
     * @return bool
     */
    public function add(string $title, string $name, bool $status = true, string $comment = '', int $orderNo = 0, int $pid = 0): bool
    {
        $rst = $this->insert([
            'title' => $title,
            'name' => $name,
            'status' => $status ? 1 : 0,
            'comment' => $comment,
            'orderNo' => $orderNo,
            'pid' => $pid,
        ]);
        if (false === $rst) {
            return false;
        }
        return $rst > 0;
    }

    /**
     * 重命名title
     * @param string $newvalue
     * @param int $id
     * @return bool
     */
    public function renameTitleById(string $newvalue, int $id): bool
    {
        $rst = $this->update(['title' => $newvalue], [$this->pk => $id]);
        if (false === $rst) {
            return false;
        }
        return $rst;
    }

    /**
     * 重命名title
     * @param string $newvalue
     * @param string $name
     * @return bool
     */
    public function renameTitleByName(string $newvalue, string $name): bool
    {
        $rst = $this->update(['title' => $newvalue], ['name' => $name]);
        if (false === $rst) {
            return false;
        }
        return $rst;
    }
}