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
    modal: null,
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

        (function () {
            var activeIndex;
            switch (location.hash) {
                /* 当前界面的hash，带# */
                case $scope.member:
                    activeIndex = 0;
                    break;
                case $scope.role:
                    activeIndex = 1;
                    break;
                case $scope.auth:
                    activeIndex = 2;
                    break;
                case $scope.roleauth:
                    activeIndex = 0;
                    break;
                case $scope.memberrole:
                    activeIndex = 1;
                    break;
                default:
                    return;
            }
            var nav;
            if ((nav = $("#nav")).length) {
                nav.html(isea.bootstrap.navtab([
                    {
                        href: "#/Admin/Member/member",
                        title: "Member"
                    },
                    {
                        href: "#/Admin/Member/role",
                        title: "Role"
                    },
                    {
                        href: "#/Admin/Member/auth",
                        title: "Auth"
                    }
                ], activeIndex));
            }
            if ((nav = $("#navr")).length) {
                nav.html(isea.bootstrap.navtab([
                    {
                        href: "#/Admin/Member/mapRoleAuth",
                        title: "Member"
                    },
                    {
                        href: "#/Admin/Member/mapMemberRole",
                        title: "Role"
                    }
                ], activeIndex));
            }
        })();

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
                            onselect: 0,
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

            var page = (function () {
                var form_selector, modal_selector, add_url, upd_url, get_url, del_url,
                    type = $("#iTable").attr("data-type");
                switch (type) {
                    case "role":
                        form_selector = "#roleForm";
                        modal_selector = "#roleModal";
                        add_url = "/Admin/Member/addRole";
                        upd_url = "/Admin/Member/updateRole";
                        get_url = "/Admin/Member/getRoleInfo";
                        del_url = "/Admin/Member/deleteRole";
                        break;
                    case "auth":
                        form_selector = "#authForm";
                        modal_selector = "#authModal";
                        add_url = "/Admin/Member/addAuth";
                        upd_url = "/Admin/Member/updateAuth";
                        get_url = "/Admin/Member/getAuthInfo";
                        del_url = "/Admin/Member/deleteAuth";
                        break;
                    case "member":
                        form_selector = "#memberForm";
                        modal_selector = "#memberModal";
                        add_url = "/Admin/Member/addMember";
                        upd_url = "/Admin/Member/updateMember";
                        get_url = "/Admin/Member/getMemberInfo";
                        del_url = "/Admin/Member/deleteMember";
                        break;
                    default:
                        throw "undefined type";
                }

                return {
                    url: {
                        src: "/Admin/Member/" + type,
                        add: add_url,
                        upd: upd_url,
                        get: get_url,
                        del: del_url
                    },
                    type: type,
                    selector: {
                        form: form_selector,
                        modal: modal_selector
                    },
                    optionName: "option_" + type
                };
            })();

            isea.loader.use("modal", function () {
                isea.modal.solve(function () {
                    env.modal = isea.modal.create(page.selector.modal, {width: 1024});
                });
            }).use("datatables", function () {

                var actions = {
                    requestData: function () {
                        $.get(page.url.src, function (data) {
                            if (data.status) {
                                env.iTable.load(data.data);
                            } else {
                                isea.notify.solve(function (env) {
                                    env.show(data.message, true);
                                })
                            }
                        });
                    },
                    editRow: function (that) {
                        if(!that) that = this;
                        //customer和loan暂时没有区分
                        var row = env.iTable.data(env.currentRow = $(that));
                        row.id && $.get(page.url.get, {id: row.id}, function (data) {
                            if (!data.status) {
                                if (data.message && ("_NO_LOGIN_" === data.message)) {
                                    location.href = '/Admin/Publics/login';
                                } else {
                                    isea.notify.solve(function (ntf) {
                                        ntf.show("查询失败", true);
                                    });
                                }
                            } else {
                                isea.loader.use("form", function () {
                                    env.modal.onConfirm(function () {
                                        var data = $(page.selector.form).serialize();

                                        var newdata = isea.client.parse(data);
                                        $.post(page.url.upd, data, function (data) {
                                            if (data.status) {
                                                env.currentRow && env.iTable.update(newdata, env.currentRow);
                                                env.modal.hide();
                                            } else {
                                                isea.notify.solve(function (ntf) {
                                                    ntf.show(data.message, true);
                                                });
                                            }
                                        });
                                    }).show();
                                    isea.form.fill(page.selector.form, data.data);
                                });
                            }
                        });
                    },
                    addRow: function () {
                        isea.loader.use("form", function () {
                            env.modal.onConfirm(function () {
                                $.post(page.url.add, $(page.selector.form).serialize(), function (data) {
                                    if (data.status) {
                                        env.modal.hide();
                                        actions.requestData();
                                    } else {
                                        alert(data.message);
                                    }
                                });
                            }).show();
                            isea.form.clean(page.selector.form);
                        });
                    },
                    deleteRow: function (that) {
                        if(!that) that = this;
                        var row = env.iTable.data(env.currentRow = $(that));
                        if (confirm("删除的数据将无法恢复，请确认操作")) {
                            $.get(page.url.del, {id: row.id}, function (data) {
                                isea.notify.solve(function () {
                                    isea.notify.show(data.message, true);
                                    if (data.status) {
                                        env.iTable.remove(env.currentRow);
                                    }
                                });
                            });
                        }
                    }
                };

                isea.datatables.solve(function () {
                    env.iTable = isea.datatables.create("#iTable", env[page.optionName]).onDraw(function () {
                        isea.loader.use('jqcontextmenu', function () {
                            isea.jqcontextmenu.solve(function () {
                                isea.jqcontextmenu.create('#iTable tr', {
                                        /* 右键编辑列 */
                                        editRow: {name: "edit", icon: "edit"},
                                        addRow: {name: "add", icon: "add"},
                                        deleteRow: {name: "delete", icon: "delete"},
                                        /* 分隔符號 */
                                        sep1: "---------",
                                        /* 右键刷新列表 */
                                        requestData: {name: "refresh", icon: "fa-refresh"}
                                    },
                                    function (key) {
                                        key in actions && eval(";actions." + key + "(this);");
                                    });
                            });
                        });
                    });
                    actions.requestData();
                });
            });

        }


    }
};
