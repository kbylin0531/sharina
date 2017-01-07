<?php
/**
 * Created by linzhonghuang.
 * Github: git@github.com:lichtung/Sharina.git
 * Email: 784855684@qq.com
 * Date: 2016/12/19
 * Time: 19:06
 */

namespace Web\Admin\Controller;

use Sharin\Core\Logger;
use Sharin\Core\Response;
use Sharin\Database\Exceptions\DatabaseException;
use Web\System\Exceptions\PasswordGetFailedException;
use Web\System\RBCA\Model\AuthModel;
use Web\System\RBCA\Model\MemberModel;
use Web\System\RBCA\Model\RoleAuthModel;
use Web\System\RBCA\Model\RoleModel;

class Member extends Admin
{

    public function index()
    {
        $this->assign([
            'm' => MemberModel::getInstance()->getCount(),
            'r' => RoleModel::getInstance()->getCount(),
            'a' => AuthModel::getInstance()->getCount(),
        ]);
        $this->display();
    }

    public function mapMemberRole($rid = null)
    {
        if (SR_IS_AJAX) {
            $status = 1;
            try {
                $model = RoleAuthModel::getInstance();
                $list = $model->getAuthById($rid);
            } catch (DatabaseException $exception) {
                $list = [];
                $status = 0;
            }
            Response::ajaxBack([
                'data' => $list,
                'status' => $status,
            ]);
        }
        $this->display();
    }

    public function changePasswd($old = null, $new = null)
    {
        if (SR_IS_POST) {
            try {
                if (md5(sha1($old)) === $this->sign->getPassword() and
                    $this->sign->changePassword($new)
                ) {
                    Response::ajaxBack([
                        'status' => 1,
                        'message' => '_CHANGE_PWD_SUCCESS_',
                    ]);
                }

                Response::ajaxBack([
                    'status' => 0,
                    'message' => '_OLD_PASSWD_ERROR_',
                ]);
            } catch (PasswordGetFailedException $exception) {
                Logger::error([
                    'PasswordNotSetException'
                ]);
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '_LOGIN_INFO_NOT_FOUNT_',
                ]);
            }
            die();
        }
        $this->display();
    }

    public function member()
    {
        if (SR_IS_AJAX) {
            $model = MemberModel::getInstance();
            try {
                Response::ajaxBack([
                    'status' => 1,
                    'data' => $model->getlist(),
                ]);
            } catch (DatabaseException $e) {
                Logger::getLogger('controller')->error($e->getMessage());
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '獲取數據發生了錯誤',
                ]);
            }
        }
        $this->display();
    }

    public function role()
    {
        if (SR_IS_AJAX) {
            $model = RoleModel::getInstance();
            try {
                Response::ajaxBack([
                    'status' => 1,
                    'data' => $model->getlist(),
                ]);
            } catch (DatabaseException $e) {
                Logger::getLogger('controller')->error($e->getMessage());
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '獲取數據發生了錯誤',
                ]);
            }
        }
        $this->display();
    }

    public function auth()
    {
        if (SR_IS_AJAX) {
            $model = AuthModel::getInstance();
            try {
                Response::ajaxBack([
                    'status' => 1,
                    'data' => $model->getlist(),
                ]);
            } catch (DatabaseException $e) {
                Logger::getLogger('controller')->error($e->getMessage());
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '獲取數據發生了錯誤',
                ]);
            }
        }
        $this->display();
    }

    public function getMemberInfo($id)
    {
        $model = MemberModel::getInstance();
        try {
            Response::ajaxBack([
                'status' => 1,
                'data' => $model->getById($id),
            ]);
        } catch (DatabaseException $exception) {
            Logger::getLogger('controller')->error($exception->getMessage());
            Response::ajaxBack([
                'status' => 0,
                'message' => '查詢失敗',
            ]);
        }
    }

    public function getAuthInfo($id)
    {
        $model = AuthModel::getInstance();
        try {
            Response::ajaxBack([
                'status' => 1,
                'data' => $model->getById($id),
            ]);
        } catch (DatabaseException $exception) {
            Logger::getLogger('controller')->error($exception->getMessage());
            Response::ajaxBack([
                'status' => 0,
                'message' => '查詢失敗',
            ]);
        }
    }

    public function getRoleInfo($id)
    {
        $model = RoleModel::getInstance();
        try {
            Response::ajaxBack([
                'status' => 1,
                'data' => $model->getById($id),
            ]);
        } catch (DatabaseException $exception) {
            Logger::getLogger('controller')->error($exception->getMessage());
            Response::ajaxBack([
                'status' => 0,
                'message' => '查詢失敗',
            ]);
        }
    }

    public function updateAuth()
    {
        if (!empty($_POST['id'])) {
            $id = $_POST['id'];
            unset($_POST['id']);
            $model = AuthModel::getInstance();
            foreach ($_POST as $k => $v) {
                if ('' === $v or $v == 'null') unset($_POST[$k]);
            }
            $rst = $model->update($_POST, ['id' => $id]);
            if ($rst) {
                Response::ajaxBack([
                    'status' => 1,
                    'message' => '修改成功',
                ]);
            } else {
                Logger::error([$_POST, $id, $model->error()]);
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '系统出错',
                ]);
            }
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '填写的信息不完整',
        ]);
    }

    public function updateMember()
    {

        if (!empty($_POST['id'])) {
            $id = $_POST['id'];
            unset($_POST['id']);
            $model = MemberModel::getInstance();
            foreach ($_POST as $k => $v) {
                if ('' === $v or $v == 'null') unset($_POST[$k]);
            }
            $rst = $model->update($_POST, ['id' => $id]);
            if ($rst) {
                Response::ajaxBack([
                    'status' => 1,
                    'message' => '修改成功',
                ]);
            } else {
                Logger::error([$_POST, $id, $model->error()]);
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '系统出错',
                ]);
            }
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '填写的信息不完整',
        ]);
    }

    public function updateRole()
    {
        if (!empty($_POST['id'])) {
            $id = $_POST['id'];
            unset($_POST['id']);
            $model = RoleModel::getInstance();
            foreach ($_POST as $k => $v) {
                if ('' === $v or $v == 'null') unset($_POST[$k]);
            }
            $rst = $model->update($_POST, ['id' => $id]);
            if ($rst) {
                Response::ajaxBack([
                    'status' => 1,
                    'message' => '修改成功',
                ]);
            } else {
                Logger::error([$_POST, $id, $model->error()]);
                Response::ajaxBack([
                    'status' => 0,
                    'message' => '系统出错',
                ]);
            }
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '填写的信息不完整',
        ]);
    }

    public function addMember()
    {
        $model = MemberModel::getInstance();
        Response::ajaxBack([
            'status' => $model->insert($_POST) ? 1 : 0,
        ]);
    }

    public function addRole()
    {
        $model = RoleModel::getInstance();
        Response::ajaxBack([
            'status' => $model->insert($_POST) ? 1 : 0,
        ]);
    }

    public function addAuth()
    {
        $model = AuthModel::getInstance();
        Response::ajaxBack([
            'status' => $model->insert($_POST) ? 1 : 0,
        ]);
    }

    public function deleteMember($id)
    {
        $model = MemberModel::getInstance();
        if ($model->delete(['id' => $id])) {
            Response::ajaxBack([
                'status' => 1,
                'message' => '刪除成功',
            ]);
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '刪除失敗',
        ]);
    }

    public function deleteAuth($id)
    {
        $model = AuthModel::getInstance();
        if ($model->delete(['id' => $id])) {
            Response::ajaxBack([
                'status' => 1,
                'message' => '刪除成功',
            ]);
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '刪除失敗',
        ]);
    }

    public function deleteRole($id)
    {
        $model = RoleModel::getInstance();
        if ($model->delete(['id' => $id])) {
            Response::ajaxBack([
                'status' => 1,
                'message' => '刪除成功',
            ]);
        }
        Response::ajaxBack([
            'status' => 0,
            'message' => '刪除失敗',
        ]);
    }


    //---------------------------------

}