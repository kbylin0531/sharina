<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2017/1/9
 * Time: 19:08
 */

namespace Web\Member\Controller;


use Sharin\Core\Controller\Redirect;
use Sharin\Core\Controller\Render;
use Sharin\Core\Cookie;
use Sharin\Core\Logger;
use Sharin\Core\Response;
use Sharin\Core\Session;
use Sharin\Database\Exceptions\DatabaseException;
use Sharin\Developer;
use Sharin\Library\Base64;
use Web\Member\Model\MemberModel;
use Web\Member\Model\SignModel;

class Sign
{
    use Render, Redirect;

    public function signIn(string $username = '', string $password = '', int $expire = ONE_DAY)
    {
        if (SR_IS_POST) {
            self::$info = self::doSignIn($username, $password, $expire);
            if (self::$info) {
                if (isset($_GET['refer'])) {
                    $refer = Base64::decrypt($_GET['refer'], 'sharina');
                    Response::redirect($refer);
                } else {
                    Response::redirect('/admin');
                }
            } else {
                $this->failure('_ACCOUNT_OR_PASSWORD_FAILED_');
            }
        }
        $this->display();
    }

    /**
     * sign out the current member
     */
    public function signOut()
    {
        self::doSignOut();
        Response::redirect('/login');
    }


    public function signUp($username = '', $password = '', $email = '', $sex = 1)
    {
        if (SR_IS_POST) {
            $model = MemberModel::getInstance();
            //TODO:verify
            if ($model->insert([
                'username' => $username,
                'nickname' => $username,
                'password' => self::encryptPassword($password),
                'email' => $email,
                'sex' => $sex,
            ])
            ) {
                Response::success('OK', ['redirect' => '/login']);
            } else {
                $message = $model->error();
                Response::failure($message);
            };
        }
        $this->display();
    }

    public function resetPasswrod()
    {
        if (SR_IS_POST) {

        }
        $this->display();
    }


//--------------------------------------------------------------- static -------------------------------------------------//\

    /**
     * 登陆信息
     * @var array
     */
    private static $info = null;

    /**
     * @return SignModel
     */
    private static function getModel()
    {
        static $model = null;
        if (null === $model) {
            $model = new SignModel();
        }
        return $model;
    }

    /**
     * @param $password
     * @return string
     */
    private static function encryptPassword($password)
    {
        return md5(sha1($password));
    }

    /**
     * the key to save session and encrypt key
     * @return string
     */
    private static function getKey()
    {
        return md5(static::class);
    }

    /**
     * 获取当前登录的账户的信息
     * @param string|null $tname name of user info like username or
     * @param null $replacement
     * @return array|null 信息不存在时返回$replacement
     */
    public static function getInfo($tname = null, $replacement = null)
    {
        if (!self::$info) {
            if (self::$info = self::getInfoFromMemory(self::getKey())) {
                Developer::trace('load Login info from session or cookie!');
            } else {
                return $replacement;
            }
        }
        return $tname ?
            (isset(self::$info[$tname]) ? self::$info[$tname] : $replacement) :
            (isset(self::$info) ? self::$info : $replacement);
    }


    /**
     * try get some info from memory (session or cookie) by the key.
     * And it will try cookie if session is empty,if cookie is set,the session will also set .
     * if session and cookie both empty,it means the any sign path of member is not set.
     * @param $key
     * @return mixed|null
     */
    public static function getInfoFromMemory($key)
    {
        $info = Session::get($key);//return null if not set
        if (!$info) {
            //未登录时检查cookie中是否记录账户要求rememeber的未过期的信息
            $cookie = Cookie::get($key);
            if ($cookie) {
                $info = unserialize(Base64::decrypt($cookie, $key));
                Session::set($key, $info);
            } else {
                return null;
            }
        }
        return $info;
    }


    /**
     * 获取登录后的加密密码
     * @return string
     * @return string|false 用户不存在时返回false
     * @throws DatabaseException
     */
    public static function getPassword()
    {
        if ($info = self::getModel()->getInfo(self::$info['username'])) {
            return $info['password'];
        } else {
            return false;
        }
    }

    /**
     * do login action
     * @param string $username
     * @param string $password
     * @param int $expire expire of login info cache by browser and server-session
     * @return bool the error message will be set if any error occur
     */
    public static function doSignIn($username, $password, $expire = ONE_DAY)
    {
        if (null === self::$info) {
            $model = self::getModel();
            if (false !== ($info = $model->signIn($username, $password))) {
                unset($info['password']);

                //remember
                $key = self::getKey();
                Session::set($key, self::$info = $info);
                if ($expire) {
                    Cookie::set($key, Base64::encrypt(serialize($info), $key), $expire);
                }

                return true;
            }
            Logger::getLogger('login')->info([$username, $password, self::$error = $model->error()]);
            return false;
        } else {
            self::$error = 'Session do not expire!';
        }
        return false;
    }


    /**
     * 修改账户密码
     * @param string $password
     * @return bool
     */
    public static function changePassword($password)
    {
        if ($id = self::$info['id']) {
            if (self::getModel()->changePassword($id, self::encryptPassword($password))) {
                return true;
            } else {
                self::$error = self::getModel()->error();
            }
        } else {
            self::$error = '无法获取登录信息';
        }
        return false;
    }

    private static $error = '';


    public static function doSignOut()
    {
        self::$info = null;
        self::$error = '';//清空错误信息
        $key = self::getKey();
        Session::delete($key);
        Cookie::clear($key);
        return self::getModel()->signOut();
    }

}