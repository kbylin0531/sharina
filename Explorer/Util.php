<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/11
 * Time: 10:57
 */

namespace Explorer;


class Util
{

    /**
     * @param $dir
     * @return void
     */
    public static function checkDir($dir)
    {
        is_dir($dir) or mkdir($dir, 0700, true);
    }

    public static function stripslashesDeepin(&$value)
    {
        if (is_array($value)) { 
            foreach ($value as &$item) {
                self::stripslashesDeepin($item);
            }
        } else {
            $value = isset($value) ? stripslashes($value) : null;
        }
        return $value;
    }

    /**
     * 处理成标准目录
     * @param $path
     * @return mixed
     */
    public static function clearDir($path)
    {
        $path = self::_htmlspecial_decode($path);
        $path = str_replace('\\', '/', trim($path));
        if (strstr($path, '../')) {//preg耗性能
            $path = preg_replace('/\.+\/+/', '/', $path);
        }
        $path = preg_replace('/\/+/', '/', $path);
        return $path;
    }

    /**
     * 处理成用户目录，并且不允许相对目录的请求操作
     * @static
     * @param $path
     * @return mixed|string
     */
    public static function dir($path)
    {
        $path = self::clearDir(rawurldecode($path));
        $path = iconv_system($path);
        if (substr($path, 0, strlen('*recycle*/')) == '*recycle*/') {
            return USER_RECYCLE . str_replace('*recycle*/', '', $path);
        }
        if (substr($path, 0, strlen('*public*/')) == '*public*/') {
            return PUBLIC_PATH . str_replace('*public*/', '', $path);
        }
        if (substr($path, 0, strlen('*share*/')) == '*share*/') {
            return "*share*/";
        }
        $path = HOME . $path;
        if (is_dir($path)) $path = rtrim($path, '/') . '/';
        return $path;
    }


    public static function url2absolute($index_url, $preg_url)
    {
        if (preg_match('/[a-zA-Z]*\:\/\//', $preg_url)) return $preg_url;
        preg_match('/([a-zA-Z]*\:\/\/.*)\//', $index_url, $match);
        $index_url_temp = $match[1];

        foreach (explode('/', $preg_url) as $key => $var) {
            if ($key == 0 && $var == '') {
                preg_match('/([a-zA-Z]*\:\/\/[^\/]*)\//', $index_url, $match);
                $index_url_temp = $match[1] . $preg_url;
                break;
            }
            if ($var == '..') {
                preg_match('/([a-zA-Z]*\:\/\/.*)\//', $index_url_temp, $match);
                $index_url_temp = $match[1];
            } elseif ($var != '.') $index_url_temp .= '/' . $var;
        }
        return $index_url_temp;
    }

    /**
     * 将字符串转换成URL的编码，gbk的和utf8的 $to="gbk" 或"utf8"
     * @param $str
     * @param $to
     * @return string
     */
    function urlcode($str, $to)
    {
        if ($to == 'gbk') {
            $result = rawurlencode($str); //gbk字符(主要是中文)转换为url %BA%EC形式
        } else {
            $key = mb_convert_encoding($str, 'utf-8', 'gbk'); //对于百度utf8中文url
            $result = urlencode($key);
        }
        return $result;
    }

    public static function getCharset(&$str)
    {
        if ($str == '') return 'utf-8';
        //前面检测成功则，自动忽略后面
        $charset = strtolower(mb_detect_encoding($str, $GLOBALS['config']['check_charset']));
        if (substr($str, 0, 3) == chr(0xEF) . chr(0xBB) . chr(0xBF)) {
            $charset = 'utf-8';
        } else if ($charset == 'cp936') {
            $charset = 'gbk';
        }
        if ($charset == 'ascii') $charset = 'utf-8';
        return strtolower($charset);
    }

    /**
     * 扩展名权限判断 有权限则返回1 不是true
     * @static
     * @param $file
     * @return int
     */
    public static function checkExt($file)
    {
        if (strstr($file, '<') || strstr($file, '>') || $file == '') {
            return 0;
        }
        if ($GLOBALS['is_root'] == 1) return 1;
        $not_allow = $GLOBALS['auth']['ext_not_allow'];
        $ext_arr = explode('|', $not_allow);
        foreach ($ext_arr as $current) {
            if ($current !== '' && stristr($file, '.' . $current)) {//含有扩展名
                return 0;
            }
        }
        return 1;
    }

    /**
     * 处理成用户目录输出
     * @param $arr
     * @return void
     */
    public static function dirOut(&$arr)
    {
        self::clearXxs($arr);
        if (isset($GLOBALS['is_root']) && $GLOBALS['is_root']) return;
        if (is_array($arr)) {
            foreach ($arr['filelist'] as $key => $value) {
                $arr['filelist'][$key]['path'] = self::clearPrefix($value['path']);
            }
            foreach ($arr['folderlist'] as $key => $value) {
                $arr['folderlist'][$key]['path'] = self::clearPrefix($value['path']);
            }
        } else {
            $arr = self::clearPrefix($arr);
        }
    }

    /**
     * 前缀处理 非root用户目录/从HOME开始
     * @static
     * @param $path
     * @return mixed|string
     */
    public static function clearPrefix($path)
    {
        if (ST == 'share') {
            return str_replace(HOME, '', $path);
        }
        if (substr($path, 0, strlen(PUBLIC_PATH)) == PUBLIC_PATH) {
            return '*public*/' . str_replace(PUBLIC_PATH, '', $path);
        }
        if (substr($path, 0, strlen(USER_RECYCLE)) == USER_RECYCLE) {
            return '*recycle*/' . str_replace(USER_RECYCLE, '', $path);
        }
        return str_replace(HOME, '', $path);
    }

    public static function clearXxs(&$list)
    {
        if (is_array($list)) {
            foreach ($list['filelist'] as $key => $value) {
                $list['filelist'][$key]['ext'] = self::_htmlspecial($value['ext']);
                $list['filelist'][$key]['path'] = self::_htmlspecial($value['path']);
                $list['filelist'][$key]['name'] = self::_htmlspecial($value['name']);
            }
            foreach ($list['folderlist'] as $key => $value) {
                $list['folderlist'][$key]['path'] = self::_htmlspecial($value['path']);
                $list['folderlist'][$key]['name'] = self::_htmlspecial($value['name']);
            }
        } else {
            $list = self::_htmlspecial($list);
        }
    }


    private static function _htmlspecial($str)
    {
        return str_replace(
            array('<', '>', '"', "'"),
            array('&lt;', '&gt;', '&quot;', '&#039;', '&amp;'),
            $str
        );
    }


    private static function _htmlspecial_decode($str)
    {
        return str_replace(
            array('&lt;', '&gt;', '&quot;', '&#039;'),
            array('<', '>', '"', "'"),
            $str
        );
    }
}