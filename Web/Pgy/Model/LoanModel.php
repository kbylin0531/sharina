<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/23
 * Time: 16:10
 */

namespace Web\Pgy\Model;


use Sharin\Core\Logger;

/**
 * Class LoanModel
 *
 *
 * @method LoanModel getInstance($index = null) static
 *
 * @package Web\Pgy\Model
 */
class LoanModel extends PgyModel
{
    protected function tableName()
    {
        return 'customer_jiekuan';
    }


    public function getlist()
    {
        $list = $this->fields(' cj.*,c.name,c.phone ')->table('customer_jiekuan cj')
            ->innerJoin('customers c on cj.wx_openid = c.wx_openid or cj.customer_id = c.id')//->limit(100)
            ->select();
        if (false === $list) {
            Logger::debug($this->error());
            $list = [];
        }
        return $list;
    }

    /**
     * 需要和上面的格式保持一直
     * 可以考虑方法合并
     * @param $id
     * @return array|bool|false
     */
    public function getinfo($id)
    {
        $info = $this->fields(' cj.*,c.name,c.phone ')->table('customer_jiekuan cj')
            ->innerJoin('customers c on cj.wx_openid = c.wx_openid or cj.customer_id = c.id')//->limit(100)
            ->where(['cj.id' => $id])
            ->find();
        if (false === $info) {
            Logger::debug([$info, $id]);
        } elseif (empty($info)) {
            //查不到此人信息
        } else {
            return $info;
        }
        return false;
    }

}