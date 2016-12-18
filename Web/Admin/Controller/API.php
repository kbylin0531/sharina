<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/16
 * Time: 22:04
 */

namespace Web\Admin\Controller;


use Sharin\Core\Response;

class API
{
    public function getSideMenu()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
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
                    ]
                ],
            ],
        ]);
    }

    public function getMemberInfo()
    {
        Response::ajaxBack([
            'status' => 1,
            'data' => [
                'avatar' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADhElEQVRoQ+2YgZFPQQzGv6sAFaACVIAKUAEqQAWoABWgAlSAClABKkAFzO8mmcns7Xub7P+942Zk5ua4l93Nl3zJJnukMy5HZ9x+/QcQInhe0i1JN+znUhPdb5I+SHor6d1Wkd8iAhj+QNJDSfw7Iz8lPZf0NKO8pnMogNuSXnYM/yIJj3+2w69KIiJXOlG5E/TKeA4BgNfxost3SU+MIni4J4C4Z9E6FxTuS3pVtl6aTmIMfRwOhAqAWTK8tQ2qsQdOcJkCMRMBaPPGTv1lHiUxZ4RoQEGXa1U6VQHgua+B8zetsswY72siCCJ4uRDJMoXg6V07+VGTA4eAiJSEjvw/JZUIkIB4H6HKUFm2FKrWRfN+OgoVANT5Z2bxFtRpwUcqpRO6AuCTeZ3EzV5YlQix5w9bwE1NsRhKBcBv2+21VZ7h5hMKVDPaESRlW0rJepv3tnEpyYogYjKnbEspNQD24L/jjABS5/xrAOIluRuAdIUo0gf1GAFKKaV1VbIRiBVizxygn/L+KGVbSslc4FUoXeJG3ut891JNZ9sORN3tKgBiG3Gh0q8kgcSb/oW13MOlFQAxwfagUaRPuiutAMAbdIsMIuWuceDK6P00fdK3XTg89ivcmoyDW4hzn71S5dMPrUaAdbwsXLcNyAvK6iHCQINjkHKBmAFAuBnWfaadBUFpxnhv2mjReZLJjqXHiGcAsI5ZgEg4CAAx4PC3jGA0rbmXyinjDwHAWrzlDZ4bDRAiAhXaWxRj6TShSxyG8DhVZ3jr9jwzGwHGSsreaC5wOoz0MJ4Ilh8HqgBa3uIUBhy8zjefl9dohD6GYjRTXnwfKudTBQAGQhkPP4bQfHFo9DTUQoffLnyHXvxEL7MnIOIbEzqU0lQyZwG0xpN0JOIUbzvhATCO8KfHNIgMgNZ4EpRETHkoU5JMh3OoYhEEyb0qGQC8wnmt3nMextAWxLCpGwGIrcN0rR55sfneglhtLdYAxGdEEhaebsX5ESbOoj9COJPprCtrAOJ4t+Uz4sh4/x7b68Xz1wDwyEQUSu1t1rqEHmfjfe6JxSgsAYjc/xved3zDZ5YlAPGFbI/xMRGAY5XhmLkEwOnzsblRswdvqeev1l0a9QDECrDH7FsFF5P5BBt6AGKbXBrvqpYl9Vef9XsAYuKkXweSxsyoRYeeeBUc3cQzB57qmv8ATtXdncP+AF2mwjF7erenAAAAAElFTkSuQmCC',
                'username' => 'Lin',
                'menu' => [
                    //menu groups
                    [
                        'title' => 'Profile',
                        'url' => '#',
                    ],
                    [
                        'title' => 'Setting',
                        'url' => '#',
                    ],
                    [
                        'title' => 'Change password',
                        'url' => '#',
                    ],
                    [
                        'title' => 'Sign out',
                        'url' => '/Admin/Publics/logout',
                    ],
                ],
            ],
        ]);
    }

}