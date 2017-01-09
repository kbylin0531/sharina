<?php
/**
 * Created by PhpStorm.
 * User: linzh
 * Date: 2017/1/9
 * Time: 11:44
 */

namespace Web\OAuth2\Controller;


use OAuth2\Autoloader;
use OAuth2\GrantType\AuthorizationCode;
use OAuth2\GrantType\ClientCredentials;
use OAuth2\Request;
use OAuth2\Response;
use OAuth2\Server;
use OAuth2\Storage\Pdo;
use Sharin\Core\Controller\Render;
use Sharin\Core\Response as SResponse;
use Sharin\Developer;
use Web\OAuth2\Model\OAuthModel;

require __DIR__ . '/../OAuth2/Autoloader.php';

/**
 * Class Index 重量级
 * @package Web\OAuth2\Controller
 */
class Index
{

    use Render;

    private $server = null;

    public function __construct()
    {
        Developer::closeTrace();

        $dsn = 'mysql:dbname=sharin;host=121.42.60.123';
        $username = 'lin';
        $password = 'asusen';

        // error reporting (this is a demo, after all!)
        ini_set('display_errors', 1);
        error_reporting(E_ALL);

        // Autoloading (composer is preferred, but for this example let's just do this)
        Autoloader::register();

        // $dsn is the Data Source Name for your database, for exmaple "mysql:dbname=my_oauth2_db;host=localhost"
        $storage = new Pdo(array('dsn' => $dsn, 'username' => $username, 'password' => $password));

        // Pass a storage object or array of storage objects to the OAuth2 server class
        $server = new Server($storage);

        // Add the "Client Credentials" grant type (it is the simplest of the grant types)
        $server->addGrantType(new ClientCredentials($storage));

        // Add the "Authorization Code" grant type (this is where the oauth magic happens)
        $server->addGrantType(new AuthorizationCode($storage));
        $this->server = $server;
    }

    //---------------------------------- SERVER  --------------------------------------------

    public function install()
    {
        $model = OAuthModel::getInstance();
        if ($model->install() !== false) {
            SResponse::success('OK');
        } else {
            SResponse::success('failed');
        }
    }

    /**
     * 添加客户端
     * @param $id
     * @param $secret
     * @param $url
     */
    public function addclient($id, $secret, $url)
    {
        $model = OAuthModel::getInstance();
        $model->addClient($id, $secret, $url) ? SResponse::success('OK') : SResponse::failure('NO');
    }

    /**
     * token管理
     *
     * PHP-CURL:
     *  CURLOPT_USERPWD     -   A username and password formatted as "[username]:[password]" to use for the connection.
     *
     * 测试命令：curl -u [client_id]:[client_secret] http://sharina.com/OAuth2/Index/token -d 'grant_type=client_credentials'
     * 成功返回：{"access_token":"899f66f614e4aea212f91cc20387e0b14fdc2075","expires_in":3600,"token_type":"Bearer","scope":null}
     * 失败返回：{"error":"invalid_client","error_description":"The client credentials are invalid"}
     */
    public function token()
    {
        /** @var Response $response */
        $response = $this->server->handleTokenRequest(Request::createFromGlobals());
        $response->send();
    }

    /**
     * 根据token获取资源
     * 该token具有一定时效性,如3600秒
     * 测试地址：http://sharina.com/OAuth2/Index/resource?access_token=XXX
     */
    public function resource()
    {
        $server = $this->server;
        // Handle a request for an OAuth2.0 Access Token and send the response to the client
        if ($server->verifyResourceRequest(Request::createFromGlobals())) {
            //TODO:通过验证
            SResponse::success('You accessed my APIs!');
        } else {
            SResponse::failure($server->getResponse()->getStatusText());
        }
    }

    /**
     * 认证控制 - 授权
     * 客户端需要跳转到: http://sharina.com/OAuth2/Index/authorize?response_type=code&client_id=[client_id]&state=[client_status]
     * 认证成功则返回：www.baidu.com?code=c744861030fa5a3f01c63ccbb5f07eca0eb2c5c4&state=abc
     *          即重定向到设定的接受页面：并提供code和自定义的状态参数state
     * 认证失败时返回：http://sharina.com/OAuth2/ClientTest/receiveCode?error=access_denied&error_description=The+user+denied+access+to+your+application&state=justfortest
     * @param string $client_id 客户注册时的client_id
     * @param string $state 客户自定义的status
     * @param string $response_type
     */
    public function authorize($client_id, $state, $response_type = 'code')
    {
        // include our OAuth2 Server object

        $request = Request::createFromGlobals();
        $response = new Response();

        // validate the authorize request
        if (!$this->server->validateAuthorizeRequest($request, $response)) {
            $response->send();
            die;
        }
        if (SR_IS_POST) {
            //-------------------------------------------------------------------
            if ($_POST['username'] === 'admin' and $_POST['password'] === '123456') {
                $pass = true;
            } else {
                $pass = false;
            }
            //-------------------------------------------------------------------

            $this->server->handleAuthorizeRequest($request, $response, $pass,$client_id);

            $location = $response->getHttpHeader('Location');

            $pos = strpos($location, '?');
            $redirect_uri = substr($location, 0, $pos);//接受URL地址,其他参数将排在'？'后面
            parse_str(substr($location, $pos + 1), $responseParameter);

            $params = ['state' => $state];
            if ($pass) {
                //code,state
                $params['error'] = '';
                $params['desc'] = '';
                $params['code'] = $responseParameter['code']??'';
            } else {
                $params['error'] = $responseParameter['error']??'';
                $params['desc'] = $responseParameter['error_description']??'';
                $params['code'] = '';
                //error,error_description,state
            }
            SResponse::redirect($redirect_uri . '?' . http_build_query($params));//location中带了code和status参数
        }

        // display an authorization form
        $this->assign([
            'client_id' => $client_id,
            'state' => $state,
            'response_type' => $response_type,
        ]);
        $this->display();
    }
}