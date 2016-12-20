<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/20
 * Time: 15:13
 */

namespace Web\Admin\Model;

use Sharin\Database\Model;

abstract class AdminModel extends Model
{
    protected function tablePrefix()
    {
        return 'psr_';
    }

}