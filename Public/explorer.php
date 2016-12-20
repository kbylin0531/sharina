<?php
/**
 * @link http://www.kalcaddle.com/
 * @author warlee | e-mail:kalcaddle@qq.com
 * @copyright warlee 2014.(Shanghai)Co.,Ltd
 * @license http://kalcaddle.com/tools/licenses/license.txt
 */
namespace {

    use Sharin\Core\Response;
    use Web\System\Sign\Sign;
    use Web\System\Sign\SignModel;

    require __DIR__ . '/../Sharin/web.inc';
    Sharin::register();

    $info = Sign::getInstance(new SignModel())->getInfo();
    if(empty($info)){
        Response::redirect('/Admin/Publics/login');

    }

    require __DIR__ . '/../Explorer/engine.inc';

}