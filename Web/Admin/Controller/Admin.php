<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/19
 * Time: 11:27
 */
namespace {
    const URL_ENCRYPT_KEY = 'Timeline is free responsive template by templatemo.';

}
namespace Web\Admin\Controller {

    use Sharin\Core\Controller\Redirect;
    use Sharin\Core\Controller\Render;
    use Sharin\Core\Response;
    use Sharin\Library\Base64x;
    use Web\Member\Controller\Sign;

    /**
     * Class Admin 后台基类
     * @package Web\Admin\Controller
     */
    class Admin
    {

        use Redirect;
        /**
         * 繼承者們無需use Render，否則會報錯“Fatal error: Cannot override final method ”
         */
        use Render;

        public function __construct()
        {
            if (!Sign::getInfo()) {
                if (SR_IS_AJAX) {
                    Response::ajaxBack([
                        'status' => 0,
                        'message' => '_NO_LOGIN_',
                    ]);
                } else {
                    //记录来源页面
                    $from = Base64x::encode(SR_PUBLIC_FULL_URL . $_SERVER['REQUEST_URI'], /* 同域名下完成解析 */
                        'sharina');
                    Response::redirect('/login?refer' . urlencode($from));
                }
            }
        }

        public function empty($action)
        {
            $this->display($action);
        }
    }
}
