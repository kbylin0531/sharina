/**
 * Created by Lin on 2016/12/19.
 */
rdash.MemberController = {
    roleTableOptions: {
        config: {
            columns: [
                {
                    title: 'id',
                    data: 'id',
                    width: "2%"
                },
                {
                    title: 'title',
                    data: 'title',
                    width: "4%"
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
    rModal: null,
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
        }


        if ($("#iTable").length) {

            function requestData() {
                //請求頁面數據
                $.get("/Admin/Member/role", function (data) {
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
                return $("#iTable").attr("data-type")
            }

            function getInfoSourceURL(id) {
                switch (getType()) {
                    case "role":
                        return "/Admin/Member/getRoleInfo?rid=" + id;
                    default:
                        throw "A";
                }
            }

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
                                default:
                                    throw "undefined type";
                            }
                            env.rModal.onConfirm(updateRole);
                            isea.form.fill(selector, data.data);
                        });
                    }
                });
            };


            isea.loader.use("modal", function () {
                isea.modal.solve(function () {
                    env.rModal = isea.modal.create("#roleModal", {width: 1024});
                });
            });

            var updateRole = function () {
                var data = $("#roleForm").serialize();
                var newdata = isea.client.parse(data);
                $.post("/Admin/Member/updateRole", data, function (data) {
                    if (data.status) {
                        env.currentRow && env.iTable.update(newdata, env.currentRow);
                        env.rModal.hide();
                    } else {
                        alert(data.message);
                    }
                });
            };

            var addRole = function () {
                var data = $("#roleForm").serialize();
                $.post("/Admin/Member/addRole", data, function (data) {
                    if (data.status) {
                        env.rModal.hide();
                        requestData();
                    } else {
                        alert(data.message);
                    }
                });
            };

            isea.loader.use("datatables", function () {
                isea.datatables.solve(function () {
                    env.iTable = isea.datatables.create("#iTable", env.roleTableOptions).onDraw(function () {
                        isea.loader.use('jqcontextmenu', function () {
                            isea.jqcontextmenu.solve(function () {
                                isea.jqcontextmenu.create('#iTable tr', {
                                    /* 右键编辑列 */
                                    edit: {name: "edit", icon: "edit"},
                                    add: {name: "add", icon: "add"},
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
                                                    default:
                                                        throw "undefined type";
                                                }
                                                env.rModal.onConfirm(addRole);
                                                isea.form.clean(selector);
                                            });
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
                });
            });

        }


    }
};
