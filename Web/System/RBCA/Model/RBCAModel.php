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
use Sharin\Database\Model;

abstract class RBCAModel extends Model
{

    protected function tablePrefix()
    {
        return 'psr_rbca_';
    }

    public function getCount()
    {
        $count = $this->count();
        if (false === $count) {
            throw new DatabaseException($this);
        }
        return $count;
    }

}