<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/30
 * Time: 16:31
 */

namespace Web\System\RBCA\Model;


use Sharin\Database\Exceptions\DatabaseException;

/**
 * Class RoleAuthModel
 *
 * @method RoleAuthModel getInstance($index = null) static
 *
 * @package Web\System\RBCA\Model
 */
class RoleAuthModel extends RBCAModel
{
    protected function tableName()
    {
        return 'rel_role_auth';
    }

    public function getAuthById($rid)
    {
        $list = $this->where(['rid' => $rid])->select();
        if (false === $list) {
            throw new DatabaseException($this);
        }
        return $list;
    }

}