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
    rModal: null,
    aModal: null,
    iTable: null,
    run: function ($scope) {
        var env = this;
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

        if ($("#iTable").length) {
            function requestData() {
                var url;
                switch (getType()) {
                    case "role":
                        url = "/Admin/Member/role";
                        break;
                    case "auth":
                        url = "/Admin/Member/auth";
                        break;
                    default:
                        throw "BILIBILI";
                }
                $.get(url, function (data) {
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
                            var selector;
                            switch (getType()) {
                                case "role":
                                    selector = "#roleForm";
                                    env.rModal.show();
                                    break;
                                case "auth":
                                    selector = "#authForm";
                                    env.aModal.show();
                                    break;
                                default:
                                    throw "undefined type";
                            }
                            env.rModal.onConfirm(updateInfo);
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
                                            var selector;
                                            switch (getType()) {
                                                case "role":
                                                    selector = "#roleForm";
                                                    env.rModal.show();
                                                    break;
                                                case "auth":
                                                    selector = "#authForm";
                                                    env.aModal.show();
                                                    break;
                                                default:
                                                    throw "undefined type";
                                            }
                                            env.rModal.onConfirm(addRecord);
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
