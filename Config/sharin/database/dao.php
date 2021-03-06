<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/20
 * Time: 21:11
 */
const MY_MARIA_ADDR = '';
const MY_MARIA_USER = '';
const MY_MARIA_PASSWD = '';
const MY_MARIA_PORT = 3306;

return [
    DRIVER_DEFAULT_INDEX => 'sharin',
    DRIVER_CLASS_LIST => [
        'sharin' => 'Sharin\\Database\\Dao\\MySQL',
        'pgyxwd' => 'Sharin\\Database\\Dao\\MySQL',
        'locale' => 'Sharin\\Database\\Dao\\MySQL',
    ],
    DRIVER_CONFIG_LIST => [
        'sharin' => [
            DAO_DBNAME => 'sharin',//选择的数据库
            DAO_USERNAME => MY_MARIA_USER,
            DAO_PASSWORD => MY_MARIA_PASSWD,
            DAO_HOST => MY_MARIA_ADDR,
            DAO_PORT => MY_MARIA_PORT,
            DAO_CHARSET => 'UTF8',
            DAO_DSN => null,//默认先检查差DSN是否正确,直接写dsn而不设置其他的参数可以提高效率，也可以避免潜在的bug
            DAO_OPTIONS => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,//默认异常模式
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,//结果集返回形式
            ],
        ],
        'pgyxwd' => [
            DAO_DBNAME => 'pgyxwd',//选择的数据库
//            DAO_USERNAME => MY_MARIA_USER,
//            DAO_PASSWORD => MY_MARIA_PASSWD,
//            DAO_HOST => MY_MARIA_ADDR,
//            DAO_PORT => MY_MARIA_PORT,
            DAO_USERNAME => 'lin',
            DAO_PASSWORD => '',
            DAO_HOST => '',
            DAO_PORT => '',
            DAO_CHARSET => 'UTF8',
            DAO_DSN => null,//默认先检查差DSN是否正确,直接写dsn而不设置其他的参数可以提高效率，也可以避免潜在的bug
            DAO_OPTIONS => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,//默认异常模式
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,//结果集返回形式
            ],
        ],
        'locale'    => [
            DAO_DBNAME => 'pgyxwd',//选择的数据库
            DAO_USERNAME => 'root',
            DAO_PASSWORD => '123456',
            DAO_HOST => '127.0.0.1',
            DAO_PORT => '13306',
            DAO_CHARSET => 'UTF8',
            DAO_DSN => null,//默认先检查差DSN是否正确,直接写dsn而不设置其他的参数可以提高效率，也可以避免潜在的bug
            DAO_OPTIONS => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,//默认异常模式
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,//结果集返回形式
            ],
        ],
    ],
    //禁止访问的PDO函数的名称
    'forbidden' => [
        'forbid', 'getColumnMeta'
    ],
];