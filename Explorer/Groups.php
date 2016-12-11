<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/11
 * Time: 16:27
 */

namespace Explorer;


use Sharin\Library\FileCache;
use Sharin\Traits\Singleton;

class Groups extends FileCache
{
    use Singleton;

    function __construct()
    {
        $file = DATA_PATH . '/system/group.php';
        if(!is_file($file)){
            copy(__DIR__.'/backup/group.php',$file);
        }
        parent::__construct(DATA_PATH . '/system/group.php');
    }
}