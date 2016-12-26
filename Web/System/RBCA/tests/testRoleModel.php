<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/26
 * Time: 10:17
 */
include __DIR__ . '/../../../../Sharin/console.inc';
$result = [];
$model = new \Web\System\RBCA\Model\RoleModel();
//\Sharin\dumpout($model->getlist());

$result[] = $model->add('Hello', 'Man', 1, 'aaa', 11, 1);
$result[] = $model->getByName('Man');

\Sharin\dumpout($result);
