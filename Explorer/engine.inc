<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/11
 * Time: 10:48
 */
use Explorer\Util;
const KOD_VERSION = '3.23';
//----------------------------------------- CONFIG ----------------------------------------------------------------------
/**
 * @param $path
 * @return mixed
 */
function P($path)
{
    return str_replace('\\', '/', $path);
}

const ENTRY_FILE = 'explorer.php';
const SR_PATH_EXPLORER = __DIR__ . '/';//dirname(dirname(__FILE__))

$web_root = str_replace(P($_SERVER['SCRIPT_NAME']), '', SR_PATH_EXPLORER . ENTRY_FILE) . '/';
if (substr($web_root, -10) == 'explorer.php/') {//解决部分主机不兼容问题
    $web_root = P($_SERVER['DOCUMENT_ROOT']) . '/';
}

define('WEB_ROOT', $web_root);
define('HOST', (SR_IS_HTTPS ? 'https://' : 'http://') . $_SERVER['HTTP_HOST'] . '/');
define('APPHOST', HOST . str_replace(WEB_ROOT, '', SR_PATH_BASE));//程序根目录
define('TEMPLATE', SR_PATH_EXPLORER . 'template/');    //模版文件路径
define('CONTROLLER_DIR', SR_PATH_EXPLORER . 'controller/'); //控制器目录
define('LIB_DIR', SR_PATH_EXPLORER . 'lib/');        //库目录
define('CLASS_DIR', LIB_DIR . 'class/');            //内目录
define('CORER_DIR', LIB_DIR . 'core/');            //核心目录
define('LANGUAGE_PATH', SR_PATH_EXPLORER . 'i18n/');        //多语言目录

define('DATA_PATH', SR_PATH_BASE . 'Data/Explorer/');       //用户数据目录
Util::checkDir(DATA_PATH);
define('LOG_PATH', SR_PATH_RUNTIME . 'log/');         //日志目录
Util::checkDir(LOG_PATH);
define('USER_SYSTEM', DATA_PATH . 'system/');      //用户数据存储目录
Util::checkDir(USER_SYSTEM);
define('DATA_THUMB', SR_PATH_PUBLIC . 'dynamic/thumb/');       //缩略图生成存放
Util::checkDir(DATA_THUMB);

define('STATIC_JS', 'app');  //_dev(开发状态)||app(打包压缩)
define('STATIC_LESS', 'css');//less(开发状态)||css(打包压缩)
define('STATIC_PATH', './static/');//静态文件目录
//define('STATIC_PATH','http://static.kalcaddle.com/static/');//静态文件统分离,可单独将static部署到CDN

/*
 可以自定义【用户目录】和【公共目录】;移到web目录之外，
 可以使程序更安全, 就不用限制用户的扩展名权限了;
 */
define('USER_PATH', DATA_PATH . 'User/');        //用户目录
Util::checkDir(USER_PATH);
//自定义用户目录；需要先将data/User移到别的地方 再修改配置，例如：
//define('USER_PATH',   DATA_PATH .'/Library/WebServer/Documents/User');
define('PUBLIC_PATH', DATA_PATH . 'public/');     //公共目录
Util::checkDir(PUBLIC_PATH);
//公共共享目录,读写权限跟随用户目录的读写权限 再修改配置，例如：
//define('PUBLIC_PATH','/Library/WebServer/Documents/Public/');

/*
 * office服务器配置；默认调用的微软的接口，程序需要部署到外网。
 * 本地部署weboffice 引号内填写office解析服务器地址 形如:  http://---/view.aspx?src=
 */
const OFFICE_SERVER = 'https://view.officeapps.live.com/op/view.aspx?src=';

include(__DIR__ . '/lib/function/file.function.php');
include(__DIR__ . '/Controller.php');
include(__DIR__ . '/lib/function/common.function.php');

//--------------------------------------- SETTING BEGIN -------------------------------------------------------------------
//配置数据,可在setting_user.php中更改覆盖
$config = \Sharin\Configger::read('explorer');
//------------------------------------- PARSE_INCOMING BEGIN ------------------------------------------------------------------------------
/**
 * GET/POST数据统一入口
 * 将GET和POST的数据进行过滤，去掉非法字符以及hacker code，返回一个数组
 * 注意如果GET和POST有相同的Key，POST优先
 *
 * @return array $_GET和$_POST数据过滤处理后的值
 */

$_COOKIE = Util::stripslashesDeepin($_COOKIE);
$_GET = Util::stripslashesDeepin($_GET);
$_POST = Util::stripslashesDeepin($_POST);
$in = array();
$in = array_merge($_GET, $_POST);
$remote = array_get($in, 0);
$remote = explode('/', trim($remote[0], '/'));
$in['URLremote'] = $remote;
//------------------------------------- PARSE_INCOMING END ------------------------------------------------------------------------------

isset($in['PHPSESSID']) and session_id($in['PHPSESSID']);//office edit post

session_start();
session_write_close();//避免session锁定问题;之后要修改$_SESSION 需要先调用session_start()
$config['autorun'] = array(
    array('controller' => 'user', 'function' => 'loginCheck'),
    array('controller' => 'user', 'function' => 'authCheck')
);

//--------------------------------------- INTI LANG ------------------------------------------------------------------
//语言包加载：优先级：cookie获取>自动识别
//首次没有cookie则自动识别——存入cookie,过期时间无限
global $L;
if (isset($_COOKIE['kod_user_language'])) {
    $lang = $_COOKIE['kod_user_language'];
} else {//没有cookie
    $lang = \Sharin\Library\UserAgent::getClientLang(LANG_EN_US);
    setcookie('kod_user_language', $lang, time() + 3600 * 24 * 365);
}
define('LANGUAGE_TYPE', $lang ? str_replace(array('/', '\\', '..', '.'), '', $lang) : LANG_EN_US);
$GLOBALS['L'] = \Sharin\Core\Language::getLang(LANGUAGE_TYPE);

//--------------------------------------- INTI SETTING ------------------------------------------------------------------
global $config;
$setting_file = USER_SYSTEM . 'system_setting.php';
if (!file_exists($setting_file)) {//不存在则建立
    $setting = $config['setting_system_default'];
    $setting['menu'] = $config['setting_menu_default'];
    \Sharin\Library\FileCache::save($setting_file, $setting);
} else {
    $setting = \Sharin\Library\FileCache::load($setting_file);
}
if (!is_array($setting)) {
    $setting = $config['setting_system_default'];
}
if (!is_array($setting['menu'])) {
    $setting['menu'] = $config['setting_menu_default'];
}

$config['setting_system'] = $setting;//全局
$L['kod_name'] = $setting['system_name'];
$L['kod_name_desc'] = $setting['system_desc'];
if (isset($setting['powerby'])) {
    $L['kod_power_by'] = $setting['powerby'];
}

//加载用户自定义配置
is_file($setting_user = SR_PATH_BASE . 'config/setting_user.php') and require($setting_user);

global $in;

$URI = $in['URLremote'];

empty($URI[0]) and $URI[0] = $setting['first_in'];//设置默认控制器
empty($URI[1]) and $URI[1] = 'index';//设置默认控制器操作
define('ST', $URI[0]);
define('ACT', $URI[1]);

if (count($config['autorun']) > 0) {
    foreach ($config['autorun'] as $key => $var) {
        Util::appRun($var['controller'], $var['function']);
    }
}
Util::appRun(ST, ACT);