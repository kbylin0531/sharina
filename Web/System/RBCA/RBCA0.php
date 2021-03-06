<?php
/**
 * Created by PhpStorm.
 * User: Lin
 * Date: 2016/11/25
 * Time: 21:52
 */

namespace Web\RBCA;

/**
 * Class RBCA0 RBCA0
 * @package Sharin\Addon\Auth\Implementation
 */
class RBCA0
{

//--------------------------------------- Insert --------------------------------------------------------------
    /**
     * 创建角色
     * @param string $name 角色名称
     * @param string $description 角色描述信息
     * @return bool
     */
    public function createRole($name, $description = '')
    {
        return true;
    }

    /**
     * 创建权限
     * @param string $name 权限标识
     * @param string $type 权限类型，默认'U'表示URL资源
     * @return bool
     */
    public function createAuth($name, $type = 'U')
    {
        return true;
    }

    /**
     * 为用户添加角色
     * @param int $mid member id
     * @param int $rid role id
     * @return bool
     */
    public function addMemberRole($mid, $rid)
    {
        return true;
    }

    /**
     * 为角色添加权限
     * @param int $rid role id
     * @param int $aid auth id
     * @return bool
     */
    public function addRoleAuth($rid, $aid)
    {
        return true;
    }

//--------------------------------------- Select --------------------------------------------------------------

    public function getRoles()
    {
    }


    /**
     * @param int $mid memberid
     * @return array
     */
    public function getMemberRoles($mid)
    {

        return [];
    }

    /**
     * @param int $rid role id
     * @return array
     */
    public function getRoleAuthes($rid)
    {
        return [];
    }

    /**
     * @param $mid
     * @return array
     */
    public function getMemberAuthes($mid)
    {
        return [];
    }
//--------------------------------------- Delete --------------------------------------------------------------
    /**
     * @param $mid
     * @param $rid
     * @return bool
     */
    public function removeMemberRole($mid, $rid)
    {
        return false;
    }


}