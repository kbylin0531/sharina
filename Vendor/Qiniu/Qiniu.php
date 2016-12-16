<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/14
 * Time: 13:52
 */

namespace Vendor\Qiniu;
require_once __DIR__ . '/functions.php';

class Qiniu
{

    public static function classLoader($class)
    {
        $path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
        $file = __DIR__ . '/src/' . $path . '.php';

        if (file_exists($file)) {
            require_once $file;
        }
    }

}
spl_autoload_register('classLoader');