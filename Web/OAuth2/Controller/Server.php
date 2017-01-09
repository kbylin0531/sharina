<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/9
 * Time: 13:26
 */

namespace Web\OAuth2\Controller;


use Sharin\Core\Controller\Render;
use Sharin\Core\Response;
use Web\OAuth2\OAuth2PHP\SROAuth;

class Server
{
    use Render;

    public function addClient($client_id = null, $client_secret = null, $redirect_uri = null)
    {
        if (isset($client_id, $client_secret, $redirect_uri)) {
            $oauth = new SROAuth();
            $oauth->addClient($client_id, $client_secret, $redirect_uri);
            Response::success('OK');
        }
        $this->display();
    }

    public function authorize()
    {
        $oauth = new SROAuth();

        if ($_POST) {
            $oauth->finishClientAuthorization($_POST["accept"] == "Yep", $_POST);
        }
        $this->assign('params', $oauth->getAuthorizeParams());
        $this->display();
    }

    public function token()
    {
        $oauth = new SROAuth();
        $oauth->grantAccessToken();
    }

    public function verifyAccessToken()
    {
        $oauth = new SROAuth();
        $oauth->verifyAccessToken();
        // With a particular scope, you'd do:
        // $oauth->verifyAccessToken("scope_name");
    }

    public function install()
    {
        (new SROAuth())->install() ?
            Response::success('OK') :
            Response::failure('NO');
    }

}