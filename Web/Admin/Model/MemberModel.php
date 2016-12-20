<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/20
 * Time: 15:11
 */

namespace Web\Admin\Model;


use Sharin\Core\Logger;
use Sharin\Database\Model;

/**
 * Class MemberModel
 * @method MemberModel getInstance($index = null) static
 * @package Web\Admin\Model
 */
class MemberModel extends Model
{
    protected function tableName()
    {
        return 'member';
    }

    /**
     * 获取客户列表
     * @return array
     */
    public function getlist()
    {
        $list = $this->select();
        if (false === $list) {
            Logger::debug($this->error());
            $list = [];
        }
        return $list;
    }


}