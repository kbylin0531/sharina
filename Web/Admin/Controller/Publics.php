<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/15/16
 * Time: 10:39 PM
 */
namespace Web\Admin\Controller;

use Sharin\Core\Controller\Redirect;
use Sharin\Core\Controller\Render;
use Sharin\Core\Response;
use Web\System\Sign\Sign;
use Web\System\Sign\SignModel;

class Publics
{
    use Render;
    use Redirect;

    protected $context = null;

    /**
     * @var Sign
     */
    protected $sign = null;

    public function __construct()
    {
        $this->sign = Sign::getInstance(SignModel::getInstance());
        if ($this->sign->getInfo()) {
            $this->redirect('Admin/Index/index');
        }
    }

    public function logout()
    {
        $this->sign->signOut();
        $this->display('login');
    }

    /**
     * get name-code pair of country
     */
    public function countries()
    {
        Response::cleanOutput();
        $content = file_get_contents(__DIR__ . '/../Data/countries.json');
        header('Content-Type:application/json; charset=utf-8');
        exit($content);
    }

    public function login($username = '', $password = '')
    {
        if (SR_IS_POST) {
            $result = $this->sign->signIn($username, $password);
            if (!$result) {
                $this->ajaxFailure($this->sign->error());
            } else {
                $this->redirect('Admin/Index/index');
            }
        }
        $this->display('login');
    }

    protected function ajaxSuccess($message)
    {
        Response::ajaxBack([
            'status' => 1,
            'message' => $message,
        ]);
    }

    protected function ajaxFailure($message)
    {
        Response::ajaxBack([
            'status' => 0,
            'message' => $message,
        ]);
    }
}