<?php

return [
    //------------------------
    //For URL route
    //------------------------
    'URI_ROUTE_ON' => true,//总开关,是否对URI地址进行路由
    'STATIC_ROUTE_ON' => true,
    //静态路由规则
    'STATIC_ROUTE_RULES' => [
        '/hello' => 'Pgy@Index/auth',
        '/valid' => 'Pgy@Index/valid',

        '/home' => 'Home@Index/index',
        '/admin' => 'Admin@Index/index',
        '/login' => 'Member@Sign/signIn',
        '/logout' => 'Member@Sign/signOut',
        '/signup' => 'Member@Sign/signUp',
        '/forgot' => 'Member@Sign/resetPasswrod',
        '/active_account' => 'Member@Sign/activeAccount',

        //--------- OAuth2 --------------------------
        '/oauth2/authorize' => 'Member@OAuth2/authorize',
        '/oauth2/token' => 'Member@OAuth2/token',
        '/oauth2/getinfo' => 'Member@OAuth2/getinfo',
    ],
    'WILDCARD_ROUTE_ON' => false,
    //通配符路由规则,具体参考CodeIgniter
    'WILDCARD_ROUTE_RULES' => [],
    'REGULAR_ROUTE_ON' => false,
    //正则表达式 规则
    'REGULAR_ROUTE_RULES' => [],
];