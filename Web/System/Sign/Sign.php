<?php
/**
 * Repository: https://github.com/kbylin0531/Sharin.git
 * User: Linzh
 * Date: 11/13/16
 * Time: 2:53 PM
 */
namespace Web\System\Sign;

use Sharin\Component;
use Sharin\Core\Cookie;
use Sharin\Core\Session;
use Sharin\Developer;
use Sharin\Library\Base64;
use Sharin\Traits\Singleton;
use Web\System\Exceptions\PasswordNotSetException;

/**
 * Class SignAddon sign in/out addon
 *
 * There is three public method usable:
 *  1. getInfo() used to get userinfo or check if user has sign in
 *  2. signIn() do the login action and remember user info into memory which cookie is for a long memory and session is for short
 *  3. signOut() clean the memory of user info and this login
 *
 * @method Sign getInstance(SignInterface $interface = null) static
 *
 *
 * @package Web\System\Sign
 */
class Sign extends Component
{
    use Singleton;
    /**
     * @var SignInterface 登录登出器
     */
    private $interface = null;
    /**
     * @var array 用户的登录信息
     */
    private $info = null;
    /**
     * @var string 账户等里密码
     */
    private $password = null;
    /**
     * @var null|string
     */
    private $error = null;

    /**
     * @return string|null 获取错误信息
     */
    public function getError()
    {
        return $this->error;
    }

    public function __construct(SignInterface $interface = null)
    {
        $this->interface = $interface;
    }

    public static function encryptPassword($password)
    {
        return md5(sha1($password));
    }

    /**
     * the key to save session and encrypt key
     * @return string
     */
    private function getKey()
    {
        return md5(static::class);
    }

    /**
     * 获取当前登录的账户的信息
     * @param string|null $tname name of user info like username or
     * @param null $replacement
     * @return array|null 信息不存在时返回$replacement
     */
    public function getInfo($tname = null, $replacement = null)
    {
        if (!$this->info) {
            if ($this->info = self::getInfoFromMemory($this->getKey())) {
                Developer::trace('load Login info from session or cookie!');
            } else {
                return $replacement;
            }
        }
        return $tname ?
            (isset($this->info[$tname]) ? $this->info[$tname] : $replacement) :
            (isset($this->info) ? $this->info : $replacement);
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
     * @throws PasswordNotSetException
     */
    public function getPassword()
    {
        if (empty($this->password)) {
            throw new PasswordNotSetException($this->info);
        }
        return $this->password;
    }

    /**
     * do login action
     * @param string $username
     * @param string $password
     * @param int $expire expire of login info cache by browser and server-session
     * @return bool the error message will be set if any error occur
     */
    public function signIn($username, $password, $expire = 0)
    {
        if (!isset($this->info)) {
            if (false !== ($info = $this->interface->signIn($username, $password))) {
                $this->password = $info['password'];
                unset($info['password']);
                $this->remember($this->info = $info, $expire);
                return true;
            } else {
                self::error($this->interface->error());
                return false;
            }
        } else {
            self::error('Last session has not sign out!');
            return false;
        }
    }

    /**
     * 修改账户密码
     * @param string $password
     * @return bool
     */
    public function changePassword($password)
    {
        if ($id = $this->info['id']) {
            if ($this->interface->changePassword($id, self::encryptPassword($password))) {
                return true;
            } else {
                $this->error = $this->interface->error();
            }
        } else {
            $this->error = '无法获取登录信息';
        }
        return false;
    }

    /**
     * sign out the current member
     * @return bool
     */
    public function signOut()
    {
        $this->info = null;
        self::error('');//清空错误信息
        $this->forgot();
        return $this->interface->signOut();
    }

    public function signUp()
    {
        //TODO:
    }


    /**
     * remember the login info of current menber
     * @param array $info
     * @param int $expire
     * @return void
     */
    protected function remember($info, $expire = 0)
    {
        $key = $this->getKey();
        Session::set($key, $info);
        if ($expire) {
            Cookie::set($key, Base64::encrypt(serialize($info), $key), $expire);
        }
    }

    /**
     * remember the login info of current menber
     * @return void
     */
    protected function forgot()
    {
        $key = $this->getKey();
        Session::delete($key);
        Cookie::clear($key);
    }

}