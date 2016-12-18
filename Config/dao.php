<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/11
 * Time: 22:24
 */


/**
 * 创建和授权账户
 * CREATE USER 'sr'@'127.0.0.1' IDENTIFIED BY '123456';
 * GRANT ALL ON sharin.* TO 'sr'@'127.0.0.1';
 * FLUSH PRIVILEGES;
 *
 */
return [
    DRIVER_DEFAULT_INDEX => 0,
    DRIVER_CLASS_LIST => [
        'Sharin\\Database\\Dao\\MySQL',
    ],
    DRIVER_CONFIG_LIST => [
        [
            DAO_DBNAME => 'sharin',//选择的数据库
            DAO_USERNAME => 'lin',
            DAO_PASSWORD => 'asusen',
            DAO_HOST => '127.0.0.1',
            DAO_PORT => '3306',
            DAO_CHARSET => 'UTF8',
            DAO_DSN => null,//默认先检查差DSN是否正确,直接写dsn而不设置其他的参数可以提高效率，也可以避免潜在的bug
            DAO_OPTIONS => [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,//默认异常模式
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,//结果集返回形式
            ],
        ]
    ],
    //禁止访问的PDO函数的名称
    'forbidden' => [
        'forbid', 'getColumnMeta'
    ],


];