<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/22
 * Time: 13:14
 */

namespace Web\Pgy\Model;

use Sharin\Core\Logger;

/**
 * Class CustomerModel
 *
 * @method CustomerModel getInstance($index = null) static
 *
 * @package Web\Pgy\Model
 */
class CustomerModel extends PgyModel
{
    protected function tableName()
    {
        return 'customers';
    }

    public function getlist()
    {
        $list = $this->fields('id,name,phone,sex,idCard')->limit(100)->select();
        if (false === $list) {
            Logger::debug($this->error());
            $list = [];
        }
        return $list;
    }
}