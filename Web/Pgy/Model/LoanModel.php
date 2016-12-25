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
        $list = $this->fields(' * ')//->limit(100)
            ->select();
        if (false === $list) {
            Logger::debug($this->error());
            $list = [];
        }
        return $list;
    }

}