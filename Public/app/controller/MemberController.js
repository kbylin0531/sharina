/**
 * Created by Lin on 2016/12/19.
 */
rdash.MemberController = {
    option_role: {
        config: {
            columns: [
                {
                    title: 'id',
                    data: 'id',
                    width: "2%"
                },
                {
                    title: 'pid',
                    data: 'pid',
                    width: "4%"
                },
                {
                    title: 'status',
                    data: 'status',
                    width: "6%"
                },
                {
                    title: 'comment',
                    data: 'comment',
                    width: "6%"
                },
                {
                    title: 'orderNo',
                    data: 'orderNo',
                    width: "6%"
                },
                {
                    title: 'name',
                    data: 'name',
                    width: "6%"
                }
            ]
        }
    },
    option_auth: {
        config: {
            columns: [
                {
                    title: 'id',
                    data: 'id',
                    width: "2%"
                },
                {
                    title: 'name',
                    data: 'name',
                    width: "4%"
                },
                {
                    title: 'value',
                    data: 'value',
                    width: "4%"
                },
                {
                    title: 'type',
                    data: 'type',
                    width: "6%"
                },
                {
                    title: 'comment',
                    data: 'comment',
                    width: "6%"
                },
                {
                    title: 'status',
                    data: 'status',
                    width: "6%"
                }
            ]
        }
    },
    option_member: {
        config: {
            columns: [
                {
                    title: 'id',
                    data: 'id',
                    width: "2%"
                },
                {
                    title: 'username',
                    data: 'username',
                    width: "4%"
                },
                {
                    title: 'email',
                    data: 'email',
                    width: "4%"
                },
                {
                    title: 'phone',
                    data: 'phone',
                    width: "6%"
                },
                {
                    title: 'nickname',
                    data: 'nickname',
                    width: "6%"
                },
                {
                    title: 'sex',
                    data: function (row) {
                        switch (row.sex) {
                            case "M":
                                return "男";
                            case "F":
                                return "女";
                            default:
                                return "-";
                        }
                    },
                    width: "6%"
                },
                {
                    title: 'birthday',
                    data: 'birthday',
                    width: "6%"
                },
                {
                    title: 'status',
                    data: function (row) {
                        switch (parseInt(row.status)) {
                            case 1:
                                return "啓用";
                            case 0:
                                return "禁用";
                            default:
                                return "-";
                        }
                    },
                    width: "6%"
                }
            ]
        }
    },
    rModal: null,
    aModal: null,
    mModal: null,
    iTable: null,
    run: function ($scope) {
        var env = this;
        $scope.index = "#/Admin/Member/index";
        $scope.member = "#/Admin/Member/member";
        $scope.role = "#/Admin/Member/role";
        $scope.auth = "#/Admin/Member/auth";
        $scope.roleauth = "#/Admin/Member/mapRoleAuth";
        $scope.memberrole = "#/Admin/Member/mapMemberRole";
        $scope.saveChange = function () {
            if ($scope.newpwd != $scope.rpnewpwd) {
                alert("密码不一致");
            } else {
                $.post("/Admin/Member/changePasswd", {"old": $scope.oldpwd, "new": $scope.newpwd}, function (data) {
                    alert(data.message);
                    if (data.status) {
                        location.href = "/Admin/Publics/logout";
                    }
                });
            }
        };
        $scope.switchManage = function (type) {
            location.href = $scope[type];
        };

        switch (location.hash) {
            /* 当前界面的hash，带# */
        }


        if ($("#ra").length) {
            var rTable, aTable, currentRole;
            window.ra_authorize = function (add, rid, aid) {
                console.log(add, rid, aid);
                $.get("/Admin/Member/addRoleAuth", function (data) {


                });
            };
            //关系设置页面
            isea.loader.use("datatables", function () {
                isea.datatables.solve(function () {
                    rTable = isea.datatables.create("#rTable", {
                        config: {
                            columns: [
                                {
                                    title: 'id',
                                    data: 'id',
                                    width: "2%"
                                },
                                {
                                    title: 'name',
                                    data: 'name',
                                    width: "6%"
                                }
                            ]
                        }
                    }).onDraw(null, function (tr) {
                        var data = rTable.data(tr);
                        //筛选
                        $.get("/Admin/Member/mapMemberRole?rid=" + (currentRole = data.id), function (data) {
                            aTable.load(data.data, true);
                        });
                    });
                    aTable = isea.datatables.create("#aTable", {
                        config: {
                            onselect:0,
                            columns: [
                                {
                                    title: 'id',
                                    data: 'id',
                                    width: "2%"
                                },
                                {
                                    title: 'name',
                                    data: 'name',
                                    width: "4%"
                                },
                                {
                                    title: 'type',
                                    data: 'type',
                                    width: "6%"
                                },
                                {
                                    title: 'auth',
                                    data: function (row) {
                                        return parseInt(row.auth) > 0 ? "√" : "";
                                    },
                                    width: "1%"
                                },
                                {
                                    title: "operation",
                                    data: function (row) {
                                        var params = row['rid'] + "," + row.id;
                                        if (parseInt(row.auth) > 0) {
                                            return '<button class="btn btn-sm btn-primary" href="javascript:ra_authorize(false,' + params + ');"> - </button>';
                                        } else {
                                            return '<button class="btn btn-sm btn-default" href="javascript:ra_authorize(true,' + params + ');"> + </button>';
                                        }
                                    },
                                    width: "5%"
                                }
                            ]
                        }
                    }).onDraw(null, function () {
                    });

                    $.get("/Admin/Member/role", function (data) {
                        rTable.load(data.data);
                    });
                })
            });
        } else if ($("#iTable").length) {
            function requestData() {
                $.get("/Admin/Member/" + getType(), function (data) {
                    if (data.status) {
                        env.iTable.load(data.data);
                    } else {
                        isea.notify.solve(function (env) {
                            env.show(data.message, true);
                        })
                    }
                });
            }

            function getType() {
                return $("#iTable").attr("data-type");
            }

            function getInfoSourceURL(id) {
                switch (getType()) {
                    case "role":
                        return "/Admin/Member/getRoleInfo?rid=" + id;
                    case "auth":
                        return "/Admin/Member/getAuthInfo?aid=" + id;
                    case "member":
                        return "/Admin/Member/getMemberInfo?mid=" + id;
                    default:
                        throw "A";
                }
            }

            var deleteRocord = function (row) {
                var outenv = env, tip, url;
                switch (getType()) {
                    case "role":
                        tip = "確定要刪除角色'" + row.name + "'?";
                        url = "/Admin/Member/deleteRole?id=" + row.id;
                        break;
                    case "auth":
                        tip = "確定要刪除權限'" + row.name + "'?";
                        url = "/Admin/Member/deleteAuth?id=" + row.id;
                        break;
                    case "member":
                        tip = "確定要刪除用戶'" + row.username + "'?";
                        url = "/Admin/Member/deleteMember?id=" + row.id;
                        break;
                    default:
                        throw "Bi";
                }
                if (confirm(tip)) {
                    $.get(url, function (data) {
                        isea.notify.solve(function (env) {
                            env.show(data.message, true);
                            if (data.status) {
                                outenv.iTable.remove(outenv.currentRow);
                            }
                        });
                    });
                }
            };

            //请求cutomer信息
            var requestInfo = function (id) {
                $.get(getInfoSourceURL(id), function (data) {
                    if (!data.status) {
                        if (data.message && ("_NO_LOGIN_" === data.message)) {
                            location.href = '/Admin/Publics/login';
                        } else {
                            isea.notify.solve(function (env) {
                                env.show("查询失败", true);
                            });
                        }
                    } else {
                        isea.loader.use("form", function () {
                            var selector, modal;
                            switch (getType()) {
                                case "role":
                                    selector = "#roleForm";
                                    modal = env.rModal.show();
                                    break;
                                case "auth":
                                    selector = "#authForm";
                                    modal = env.aModal.show();
                                    break;
                                case "member":
                                    selector = "#memberForm";
                                    modal = env.mModal.show();
                                    break;
                                default:
                                    throw "undefined type";
                            }
                            modal.onConfirm(updateInfo);
                            isea.form.fill(selector, data.data);
                        });
                    }
                });
            };

            var updateInfo = function () {
                var data, url, modal;
                switch (getType()) {
                    case "role":
                        data = $("#roleForm").serialize();
                        url = "/Admin/Member/updateRole";
                        modal = env.rModal;
                        break;
                    case "auth":
                        data = $("#authForm").serialize();
                        url = "/Admin/Member/updateAuth";
                        modal = env.aModal;
                        break;
                    case "member":
                        data = $("#memberForm").serialize();
                        url = "/Admin/Member/updateMember";
                        modal = env.mModal;
                        break;
                }
                var newdata = isea.client.parse(data);
                $.post(url, data, function (data) {
                    if (data.status) {
                        env.currentRow && env.iTable.update(newdata, env.currentRow);
                        modal.hide();
                    } else {
                        alert(data.message);
                    }
                });
            };

            var addRecord = function () {
                var data, url, modal;
                switch (getType()) {
                    case "role":
                        data = $("#roleForm").serialize();
                        url = "/Admin/Member/addRole";
                        modal = env.rModal;
                        break;
                    case "auth":
                        data = $("#authForm").serialize();
                        url = "/Admin/Member/addAuth";
                        modal = env.aModal;
                        break;
                    case "member":
                        data = $("#memberForm").serialize();
                        url = "/Admin/Member/addMember";
                        modal = env.mModal;
                        break;
                    default:
                        throw "AA";
                }
                $.post(url, data, function (data) {
                    if (data.status) {
                        modal.hide();
                        requestData();
                    } else {
                        alert(data.message);
                    }
                });
            };

            function buildTable() {
                env.iTable = isea.datatables.create("#iTable", env["option_" + getType()]).onDraw(function () {
                    isea.loader.use('jqcontextmenu', function () {
                        isea.jqcontextmenu.solve(function () {
                            isea.jqcontextmenu.create('#iTable tr', {
                                /* 右键编辑列 */
                                edit: {name: "edit", icon: "edit"},
                                add: {name: "add", icon: "add"},
                                delete: {name: "delete", icon: "delete"},
                                /* 分隔符號 */
                                sep1: "---------",
                                /* 右键刷新列表 */
                                refresh: {name: "refresh", icon: "fa-refresh"}
                            }, function (key) {
                                /* 事件绑定在tr上，所有target就是row */
                                switch (key) {
                                    case "edit":
                                        //customer和loan暂时没有区分
                                        var row = env.iTable.data(env.currentRow = $(this));
                                        row.id && requestInfo(row.id);
                                        break;
                                    case "add":
                                        isea.loader.use("form", function () {
                                            var selector, modal;
                                            switch (getType()) {
                                                case "role":
                                                    selector = "#roleForm";
                                                    modal = env.rModal.show();
                                                    break;
                                                case "auth":
                                                    selector = "#authForm";
                                                    modal = env.aModal.show();
                                                    break;
                                                case "member":
                                                    selector = "#memberForm";
                                                    modal = env.mModal.show();
                                                    break;
                                                default:
                                                    throw "undefined type";
                                            }
                                            modal.onConfirm(addRecord);
                                            isea.form.clean(selector);
                                        });
                                        break;
                                    case "delete":
                                        deleteRocord(env.iTable.data(env.currentRow = $(this)));
                                        break;
                                    case "refresh":
                                        //刷新列表数据
                                        requestData();
                                        break;
                                }
                            });
                        });
                    });

                });
                requestData();
                isea.loader.use("modal", function () {
                    isea.modal.solve(function () {
                        switch (getType()) {
                            case "role":
                                env.rModal = isea.modal.create("#roleModal", {width: 1024});
                                break;
                            case "auth":
                                env.aModal = isea.modal.create("#authModal", {width: 1024});
                                break;
                            case "member":
                                env.mModal = isea.modal.create("#memberModal", {width: 1024});
                                break;
                            default:
                                throw "AA";
                        }
                    });
                });
            }

            isea.loader.use("datatables", function () {
                isea.datatables.solve(buildTable);
            });

        }


    }
};
