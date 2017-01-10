<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/26
 * Time: 9:55
 */

namespace Web\Member\Model;

use Sharin\Database\Exceptions\DatabaseException;
use Sharin\Database\Model;

/**
 * Class RBCAModel
 * @method RBCAModel getInstance($index = null) static
 * @package Web\Member\Model
 */
class RBCAModel extends Model
{

    protected function tablePrefix()
    {
        return 'psr_rbca_';
    }

    protected function tableName()
    {
        return '';
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
     * 获取客户权限列表，列表中项'authed'=0时表示未授权
     * @param int $mid 客户ID
     * @return array 返回权限列表
     * @throws DatabaseException
     */
    public function getMemberAuthList($mid)
    {
        $sql = '
SELECT a.id,a.name,a.value,a.type,a.`status`,IFNULL(b.role_id,0) role_id,IFNULL(b.auth_id,0) authed 
FROM psr_rbca_auth a
LEFT JOIN (
	SELECT
		rmr.rid AS role_id,
		rra.aid AS auth_id
	FROM
		psr_rbca_rel_member_role rmr
	INNER JOIN psr_rbca_rel_role_auth rra ON rra.rid = rmr.rid
	WHERE
		rmr.mid = :mid
) b ON b.auth_id = a.id';
        $list = $this->query($sql, [':mid' => $mid]);
        if (false === $list) {
            throw new DatabaseException($this);
        } else {
            $temp = [];
            foreach ($list as $item) {
                $temp[$item['value']] = $item;
            }
            return $temp;
        }
    }

}