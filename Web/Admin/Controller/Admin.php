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
    use Sharin\Core\Request;
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
            //登陆判断
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
            //权限判断
            $access_path = SR_REQUEST_MODULE . '/' . SR_REQUEST_CONTROLLER . '/' . SR_REQUEST_ACTION;
            $auth_list = Sign::getAuthList();
            if (isset($auth_list[$access_path])) {
                $auth = $auth_list[$access_path];
                //在权限管理内
                if (intval($auth['status']) === 0 or
                    intval($auth['authed']) > 0
                ) {
                    //允许访问
                } else {
                    $this->responsePermissionDeny($auth);
                }

            }
        }

        /**
         * 权限确实响应
         * @param array $authinfo 权限相关信息
         */
        private function responsePermissionDeny($authinfo)
        {
            $url = $authinfo['value'];
            $name = $authinfo['name'];
            $desc = "无法访问'{$url}'，你缺少'{$name}'的权限";
            Response::header(Response::HEADER_UTF8);
            if (SR_IS_AJAX) {
                Response::failure($desc);
            } else {
                \Sharin::template('error', [
                    'code' => 401,
                    'title' => 'Unauthorized',
                    'detail' => $desc,
                ]);
            }
        }

        public function _empty($action)
        {
            $this->display($action);
        }
    }
}
