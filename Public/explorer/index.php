<?php

//require __DIR__ . '/../../Sharin/web.inc';
//Sharin::register();
//
//if (!\Web\System\Sign\Sign::getInstance(\Web\System\Sign\SignModel::getInstance())->getInfo()) {
//    \Sharin\Core\Response::redirect(SR_PUBLIC_URL . 'Admin/Publics/login');
//} else {
//    $member = \Explorer\Member::getInstance();
//    $user = $member->get('admin');
//    if ($user['status'] == 0) {//初始化app
//        $app = init_controller('app');
//        $app->init_app($user);
//    }
//    $_SESSION['kod_login'] = true;
//    $_SESSION['kod_user'] = $user;
//    setcookie('kod_name', $user['name'], time() + 3600 * 24 * 365);
////setcookie('kod_token', md5($user['password'] . \Sharin\Library\UserAgent::getIp()), time() + 3600 * 24 * 365);
//}


include('./config/config.php');
$app = new Application();
init_config();
$app->run();
