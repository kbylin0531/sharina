<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/19
 * Time: 22:00
 */
return [
    [
        'title' => 'NAVIGATION',
        'children' => [
            [
                'title' => 'Dashboard',
                'name' => 'tachometer',
                'icon' => 'tachometer',
                'path' => '/Admin/Index/dashboard',
            ],
            [
                'title' => 'Tables',
                'name' => 'table',
                'icon' => 'table',
                'path' => '/Admin/Index/tables',
            ],
            [
                'title' => 'BlogAdd',
                'name' => 'BlogAdd',
                'icon' => 'file-word-o',
                'path' => '/Admin/Blog/Article/add',
            ],
            [
                'title' => 'changePasswd',
                'name' => 'changePasswd',
                'icon' => 'user-o',
                'path' => '/Admin/Member/changePasswd',
            ],
        ]
    ]
];