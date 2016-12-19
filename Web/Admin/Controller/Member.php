<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/19
 * Time: 19:06
 */

namespace Web\Admin\Controller;


use Sharin\Core\Controller\Render;
use Sharin\Core\Logger;
use Sharin\Core\Response;
use Web\System\Exceptions\PasswordGetFailedException;

class Member extends Admin
{
    use Render;

    public function changePasswd($old = null, $new = null)
    {
        if (SR_IS_POST) {
            try {
                if (md5(sha1($old)) === $this->sign->getPassword() and
                    $this->sign->changePassword($new)
                ) {
                    Response::ajaxBack([
                        'status' => 1,
                        'message' => '_CHANGE_PWD_SUCCESS_',
                    ]);
                }

                Response::ajaxBack([
                    'status' => 0,
                    'message' => '_OLD_PASSWD_ERROR_',
                ]);
            } catch (PasswordGetFailedException $exception) {
                Logger::error([
                    'PasswordNotSetException'
                ]);
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '_LOGIN_INFO_NOT_FOUNT_',
                ]);
            }
            die();
        }
        $this->display();
    }


}