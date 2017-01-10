<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/10
 * Time: 14:24
 */

namespace Web\Member\Model;


use Sharin\Database\Exceptions\DatabaseException;

/**
 * Class MemberRoleModel
 *
 * @method MemberRoleModel getInstance($index = null) static
 *
 * @package Web\Member\Model
 */
class MemberRoleModel extends RBCAModel
{
    protected function tableName()
    {
        return 'rel_member_role';
    }

    /**
     * SELECT prr.*,IFNULL(prrr.rid,0) as role,prr.id as mid
     * FROM psr_rbca_role prr
     * LEFT OUTER JOIN psr_rbca_rel_member_role prrr on prrr.mid = prr.id and prr.id = 2
     *
     * @param $mid
     * @return array|false
     * @throws DatabaseException
     */
    public function getRoleById($mid)
    {
        $mid = intval($mid);
        $list = $this->fields("r.*,IFNULL(rr.rid,0) as role,{$mid} as mid")
            ->table('{{role}} r')
            ->leftOuterJoin("{{rel_member_role}} rr on rr.rid = r.id and rr.mid = {$mid}")
            ->select();
        if (false === $list) {
            throw new DatabaseException($this);
        }
        return $list;
    }
}