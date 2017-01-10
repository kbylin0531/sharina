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
use Sharin\Library\Mailer;
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
                die;
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
            $data = [
                'username' => $username,
                'nickname' => $username,
                'password' => self::encryptPassword($password),
                'email' => $email,
                'sex' => $sex,
                'status' => 0,
            ];
            if ($model->insert($data)) {
                unset($data['password']);//删除密码
                $data['id'] = $model->lastInsertId();
                $query = Base64::encrypt(json_encode($data), 'iunpes');
                $actlink = SR_PUBLIC_FULL_URL . '/active_account?act=' . $query;
                $rmvlink = SR_PUBLIC_FULL_URL . '/active_account?rmv=' . $query;

                $content = self::loadTemplate('email_active', [
                    'act' => $actlink,
                    'rmv' => $rmvlink,
                    'email' => $email,
                ]);

                if (Mailer::send('Please active your account', $content, $email)) {
                    Response::success("A Email has sent to '{$email}',please active you account", ['redirect' => '/login']);
                } else {
                    Response::failure("Send email to '{$email}' failed");
                }
            } else {
                $message = $model->error();
                Response::failure($message);
            }
        }
        $this->display();
    }

    public static function loadTemplate($name, $search_replace)
    {
        $content = file_get_contents(__DIR__ . '/../Template/' . $name . '.tpl');
        $search = array_keys($search_replace);
        $replace = array_values($search_replace);
        foreach ($search as &$item) {
            $item = "{{{$item}}}";
        }
        return str_replace($search, $replace, $content);
    }

    public function activeAccount($act = null, $rmv = null)
    {
        if ($act) {
            $data = json_decode(Base64::decrypt(json_encode($act), 'iunpes'), true);
            //完整性对比
            $model = MemberModel::getInstance();
            $userinfo = $model->find($data['id']);

//            \Sharin\dumpout($userinfo,$data);
            if ($userinfo['username'] === $data['username'] and
                $userinfo['email'] === $data['email'] and
                intval($userinfo['status']) === intval($data['status'])
            ) {
                if ($model->update(['status' => 1], ['id' => $data['id']])) {
                    $this->success('激活成功', 3, 'Active', '/login');
                } else {
                    $this->failure('你的账户不存在或者已经被激活', 3, 'Active', '/signup');
                }
            } else {
                $this->failure('你访问的链接已经失效','Active', 3,  '/signup');
            }

        } elseif ($rmv) {

        } else {
            self::showError('你访问的链接被修改', 'Active Account', 403);
        }
    }

    private static function showError($detail, $title = '', $code)
    {
        \Sharin::template('code', [
            'code' => $code,
            'title' => $title,
            'detail' => $detail,
        ]);
    }


    public function resetPasswrod()
    {
        if (SR_IS_POST) {

        }
        $this->display();
    }

    private function _sendActiveEmail($email)
    {


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