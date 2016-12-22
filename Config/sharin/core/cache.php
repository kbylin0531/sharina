<?php

return [
    DRIVER_DEFAULT_INDEX => 1,
    DRIVER_CLASS_LIST => [
        'Sharin\\Core\\Cache\\Memcached',
        'Sharin\\Core\\Cache\\Redis',
    ],
    DRIVER_CONFIG_LIST => [
        [
            'host' => 'localhost',
            'port' => 11211,
            'expire' => 0,
            'prefix' => '',
            'timeout' => 1000, // 超时时间（单位：毫秒）
            'persistent' => true,
            'length' => 0,
        ],
        [
            'host' => '127.0.0.1',
            'port' => 6379,
            'password' => '',
            'timeout' => 0,
            'expire' => 0,
            'persistent' => false,
            'prefix' => '',
        ],
    ],
    //5分钟
    'DEFAULT_CACHE_EXPIRE' => 300,

    'expire' => 3600,
    'cache_subdir' => true,
    'path_level' => 1,
    'prefix' => '',
    'length' => 0,

    'path' => SR_PATH_RUNTIME . '/cache/file/',
];