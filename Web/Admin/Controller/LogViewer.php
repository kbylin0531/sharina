<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/26
 * Time: 12:41
 */
namespace Web\Admin\Controller;

use Sharin\Core\Storage;

class LogViewer
{

    public function getlist(){
        $dir = SR_PATH_RUNTIME.'Log/';
        $list = Storage::readdir($dir,true);
        \Sharin\dumpout($list);
    }

}