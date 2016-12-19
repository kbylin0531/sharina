<?php
/**
 * Repository: https://github.com/kbylin0531/psrg7_newest.git
 * User: Linzh
 * Date: 11/12/16
 * Time: 10:29 PM
 */
namespace Web\Admin\Controller;

use Sharin\Core\Controller\Render;

class Index extends Admin
{

    /**
     * @TODO:Think模板引擎会解析{'标签
     */
    use Render;

    public function index()
    {
        $cdn = [
            'styles' => [
                'http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css',
                'http://cdn.bootcss.com/font-awesome/4.5.0/css/font-awesome.min.css',
                'http://cdn.bootcss.com/materialize/0.97.8/css/materialize.min.css',
                '/static/components/rdash-ui/dist/css/rdash.css',
            ],
            'scripts' => [
                'http://cdn.bootcss.com/angular.js/1.5.9/angular.min.js',
                'http://cdn.bootcss.com/angular-ui-bootstrap/1.0.3/ui-bootstrap-tpls.min.js',
                'http://cdn.bootcss.com/angular-ui-bootstrap/1.0.3/ui-bootstrap-tpls.min.js',
                'http://cdn.bootcss.com/angular-ui-router/0.3.2/angular-ui-router.min.js',
                'http://cdn.bootcss.com/jquery/2.2.4/jquery.min.js',
                'http://cdn.bootcss.com/materialize/0.97.8/js/materialize.min.js',
                '/isea/index.js',
                '/static/js/dashboard.js',
            ],

        ];


        $this->assign('cdn', $cdn);
        $this->display();
    }

    public function tables()
    {
        $this->display();
    }

    public function dashboard()
    {
        $this->display();
    }

}