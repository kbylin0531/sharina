<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/19
 * Time: 11:27
 */

namespace Web\Admin\Controller;

use Sharin\Core\Controller\Redirect;
use Sharin\Core\Response;
use Web\System\Sign\Sign;
use Web\System\Sign\SignModel;

class Admin
{

    use Redirect;
    /**
     * @var Sign
     */
    protected $sign = null;

    public function __construct()
    {
        $this->sign = Sign::getInstance(SignModel::getInstance());
        if (!$this->sign->getInfo()) {
            if (SR_IS_AJAX) {
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '_NO_LOGIN_',
                ]);
            } else {
                $this->redirect('Admin/Publics/login');
            }
        }
    }
}