<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/30
 * Time: 16:31
 */

namespace Web\Member\Model;


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
        $rid = intval($rid);
        $list = $this->fields("ra.*,ifnull(rra.aid,0) as auth,{$rid} as rid")
            ->table('{{auth}} ra')
            ->leftOuterJoin("{{rel_role_auth}}  rra on rra.aid = ra.id and rra.rid = $rid")
            ->select();
        if (false === $list) {
            throw new DatabaseException($this);
        }
        return $list;
    }

}