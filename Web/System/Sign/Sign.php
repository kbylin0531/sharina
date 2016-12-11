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
use Sharin\Core\SEK;
use Sharin\Core\Session;
use Sharin\Developer;
use Sharin\Library\Base64;
use Sharin\Traits\Singleton;

/**
 * Class SignAddon sign in/out addon
 *
 * There is three public method usable:
 *  1. getInfo() used to get userinfo or check if user has sign in
 *  2. signIn() do the login action and remember user info into memory which cookie is for a long memory and session is for short
 *  3. signOut() clean the memory of user info and this login
 *
 * Class Sign
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

    public function __construct(SignInterface $interface)
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
            if ($this->info = SEK::getInfoFromMemory($this->getKey())) {
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