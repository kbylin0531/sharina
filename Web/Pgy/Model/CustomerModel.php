<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharin.git
 * Email: 784855684@qq.com
 * Date: 2016/12/22
 * Time: 13:14
 */

namespace Web\Pgy\Model;

use Sharin\Core\Logger;

/**
 * Class CustomerModel
 *
 * @method CustomerModel getInstance($index = null) static
 *
 * @package Web\Pgy\Model
 */
class CustomerModel extends PgyModel
{
    protected function tableName()
    {
        return 'customers';
    }

    public function getlist()
    {
        $list = $this->fields('id,wx_openid,name,phone,sex,idCard,type,csnote')//->limit(100)
        ->select();
        if (false === $list) {
            Logger::debug($this->error());
            $list = [];
        }
        return $list;
    }


    /**
     * 自定义查询
     * @param mixed $draw //获取Datatables发送的参数 必要,这个值作者会直接返回给前台
     * @param $draw
     * @param string $order 排序
     * @param string $search 获取前台传过来的过滤条件
     * @param int $start 从多少开始
     * @param int $length 数据长度
     * @return array
     */
    public function getlistByCustom($draw, $order, $search, $start, $length)
    {

        $order_column = $order['0']['column'];//那一列排序，从0开始
        $order_dir = $order['0']['dir'];//ase desc 升序或者降序

        //拼接排序sql
        $orderSql = "";
        if (isset($order_column)) {
            $i = intval($order_column);
            $map = [
                'id',
                'convert(name using gbk)',
                'wx_openid',
                'phone',
                'sex',
                'idCard',
                'type',
                'csnote',
                'id',
                'id',
            ];
            $orderSql = isset($map[$i]) ? " ORDER BY {$map[$i]} {$order_dir}" : '';
        }

        $error = 0;

        //分页
        $limitSql = '';
        $limitFlag = isset($_GET['start']) && $length != -1;
        if ($limitFlag) {
            $limitSql = " LIMIT " . intval($start) . ", " . intval($length);
        }

        //where
        $search = trim($search['value']);
        $whereSql = '';
        if ($search) {
            foreach (['wx_openid', 'phone', 'idCard'] as $field) {
                $whereSql .= " `$field` like '%{$search}%' or";
            }
            $whereSql = ' WHERE ' . rtrim($whereSql, 'ro');
        }


        //定义查询数据总记录数sql
        $sumSql = "SELECT count(id) as s FROM customers ";
        $sumSql .= $whereSql;
        $result = $this->query($sumSql);
        if (empty($result)) {
            Logger::fatal([$result, $sumSql, $this->error()]);
            $recordsTotal = 0;
            $error = 1;
        } else {
            $recordsTotal = intval($result[0]['s']);
        }

        //query data
        $totalResultSql = "SELECT id,wx_openid,name,phone,sex,idCard,type,csnote FROM customers $whereSql   $orderSql   $limitSql";
        $infos = $this->query($totalResultSql);
        Logger::debug($totalResultSql);
        if (false === $infos) {
            Logger::fatal([
                $totalResultSql,
                $this->error()
            ], true);
            $error = 1;
            $infos = [];
        }

        return [
            'error' => $error,
            "draw" => intval($draw),
            "recordsTotal" => intval($recordsTotal),
            "recordsFiltered" => intval($recordsTotal),
            "data" => $infos
        ];
    }

}