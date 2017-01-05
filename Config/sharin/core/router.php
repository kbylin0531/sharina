<?php

return [
    //------------------------
    //For URL route
    //------------------------
    'URI_ROUTE_ON' => true,//总开关,是否对URI地址进行路由
    'STATIC_ROUTE_ON' => true,
    //静态路由规则
    'STATIC_ROUTE_RULES' => [
        '/hello' => [
            'm' => 'Pgy',
            'c' => 'Index',
            'a' => 'auth',
        ],
        '/valid' => [
            'm' => 'Pgy',
            'c' => 'Index',
            'a' => 'valid',
        ],
    ],
    'WILDCARD_ROUTE_ON' => false,
    //通配符路由规则,具体参考CodeIgniter
    'WILDCARD_ROUTE_RULES' => [],
    'REGULAR_ROUTE_ON' => false,
    //正则表达式 规则
    'REGULAR_ROUTE_RULES' => [],
];