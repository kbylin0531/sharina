<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/22
 * Time: 13:12
 */

namespace Web\Pgy\Model;


use Sharin\Core\Logger;
use Sharin\Database\Model;

abstract class PgyModel extends Model
{

    public function __construct()
    {
        parent::__construct('pgyxwd');
    }

    protected function tablePrefix()
    {
        return '';
    }

    public function getinfo($id)
    {
        $info = $this->find($id);
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