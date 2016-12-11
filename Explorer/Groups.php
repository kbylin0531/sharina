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
        parent::__construct(__DIR__ . '/system/group.php');
    }
}