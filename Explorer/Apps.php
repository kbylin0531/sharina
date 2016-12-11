<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/11
 * Time: 16:26
 */

namespace Explorer;


use Sharin\Library\FileCache;
use Sharin\Traits\Singleton;

class Apps extends FileCache
{
    use Singleton;

    function __construct()
    {
        parent::__construct(DATA_PATH . '/system/apps.php');
    }

}