<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/29
 * Time: 9:40
 */
require __DIR__ . '/../Sharin/web.inc';
Sharin::register();

if (!\Web\System\Sign\Sign::getInstance(\Web\System\Sign\SignModel::getInstance())->getInfo()) {
    \Sharin\Core\Response::redirect(SR_PUBLIC_URL . 'Admin/Publics/login');
}