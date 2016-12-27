/**
 * Created by linzh on 2016/12/22.
 */

/**
 * 蒲公英原始數據管理控制器
 * 各個頁面的數據對應一張數據表，如果有需要關聯的字段，需要在修改操作中將其餘字段unset,否則修改操作一定會失敗
 * @type object
 */
rdash.PgyRawDataController = {
    lOptions: {
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
                    title: 'phone',
                    data: 'phone',
                    width: "4%"
                },
                {
                    title: 'wx_openid',
                    data: 'wx_openid',
                    width: "6%"
                },
                {
                    title: 'customer_id',
                    data: 'customer_id',
                    width: "6%"
                },
                {
                    title: 'amount',
                    data: 'amount',
                    width: "6%"
                },
                {
                    title: 'jkdate',
                    data: 'jkdate',
                    width: "6%"
                },
                {
                    title: 'hkdate',
                    data: 'hkdate',
                    width: "6%"
                },
                {
                    title: 'hthkdate',
                    data: 'hthkdate',
                    width: "6%"
                },
                {
                    title: 'status',
                    data: function (row) {
                        switch (parseInt(row.status)) {
                            case 0:
                                return "未还款";
                                break;
                            case 1:
                                return "已还款";
                                break;
                            case 2:
                                return "有逾期";
                                break;
                            default:
                                return "";
                        }
                    },
                    width: "6%"
                },
                {
                    title: 'category',
                    data: function (row) {
                        switch (row.category) {
                            case "0":
                                return "首借";//1为2为
                                break;
                            case "1":
                                return "延期";
                                break;
                            case "2":
                                return "续借";
                                break;
                            default:
                                return "";
                        }
                    },
                    width: "6%"
                },
                {
                    title: 'note',
                    data: 'note',
                    width: "20%"
                }
            ]
        }
    },
    cOption: {
        config: {
            columns: [
                {
                    title: 'ID',
                    data: 'id',
                    width: "2%"
                },
                {
                    title: 'name',
                    data: 'name',
                    width: "6%"
                },
                {
                    title: 'phone',
                    data: 'phone',
                    width: "6%"
                },
                {
                    title: 'sex',
                    data: function (row) {
                        return parseInt(row.sex) == 1 ? '男' : '女';
                    },
                    width: "2%"
                },
                {
                    title: 'idCard',
                    data: 'idCard',
                    width: "6%"
                },
                {
                    title: 'type',
                    data: 'type',
                    width: "6%"
                },
                {
                    title: 'csnote',
                    data: 'csnote',
                    width: "20%"
                }
                // {
                //     title: 'operation',
                //     data: function () {
                //         return '<a href="javascript:void(0);" class="edit">edit</a>';
                //     }
                // }
            ]
        }
    },

    //客户modal和借款modal
    cModal: null,
    jModal: null,

    //当前的表格
    iTable: null,
    //客户数据和借款数据
    iData: {},


    currentRow: null,
    run: function () {
        // isea.notify.solve(function (env) {
        //     env.show("当前处于测试环境");
        // });

        var env = this;

        var iTable = $("#iTable");

        if (iTable.length) {

            //页面类型：customer|loan
            function getType() {
                return $("#iTable").attr("data-type");
            }

            function getDataSourceURL() {
                switch (getType()) {
                    case "customer":
                        return "/Pgy/Customer/index";
                        break;
                    case "loan":
                        return "/Pgy/Loan/index";
                        break;
                    default:
                        throw "undefined type";
                }
            }

            //请求表单数据
            function getFromInfoURL(id) {
                switch (getType()) {
                    case "customer":
                        return "/Pgy/Customer/getinfo?id=" + id;
                        break;
                    case "loan":
                        return "/Pgy/Loan/getinfo?id=" + id;
                        break;
                    default:
                        throw "undefined type";
                }
            }

            function getTableOptions() {
                switch (getType()) {
                    case "customer":
                        return env.cOption;
                        break;
                    case "loan":
                        return env.lOptions;
                        break;
                    default:
                        throw "undefined type";
                }
            }

            /**
             * 刷新列表数据
             * @param force bool 是否强制刷新，默认是undefined即false
             */
            function refreshTableData(force) {
                var type = getType();
                if (force || !(type in env.iData) || !env.iData[type]) {
                    isea.loading.show();
                    $.get(getDataSourceURL(), function (data) {
                        isea.loading.hide();
                        var type = getType();
                        //當請求上一個頁面的數據抵達時頁面切換到下一個，不將數據加載到當前的iTable中
                        if (type == data.type) {
                            env.iData[type] = data.data;
                            env.iTable.load(env.iData[type]);
                        }
                    });
                } else {
                    env.iTable.load(env.iData[type]);
                }
            }

            //请求cutomer信息
            var requestInfo = function (id) {
                $.get(getFromInfoURL(id), function (data) {
                    if (!data.status) {
                        if (data.message && ("_NO_LOGIN_" === data.message)) {
                            location.href = '/Admin/Publics/login';
                        } else {
                            alert('查询失败');
                        }
                    } else {
                        isea.loader.use("form", function () {
                            var selector;
                            switch (getType()) {
                                case "customer":
                                    selector = "#customerForm";
                                    env.cModal.show();
                                    break;
                                case "loan":
                                    selector = "#loanForm";
                                    env.jModal.show();
                                    break;
                                default:
                                    throw "undefined type";
                            }
                            isea.form.fill(selector, data.data);
                        });
                    }
                });
            };

            isea.loader.use("modal", function () {
                isea.modal.solve(function () {
                    switch (getType()) {
                        case "customer":
                            env.cModal = isea.modal.create("#customerModal", {
                                width: 1024,//宽度固定为1024px
                                confirm: function () {
                                    var data = $("#customerForm").serialize();
                                    var newdata = isea.client.parse(data);
                                    console.log(data, newdata);
                                    $.post("/Pgy/Customer/updateInfo", data, function (data) {
                                        if (data.status) {
                                            env.currentRow && env.iTable.update(newdata, env.currentRow);
                                            env.cModal.hide();
                                        } else {
                                            alert(data.message);
                                        }
                                    });
                                }
                            });
                            break;
                        case "loan":
                            env.jModal = isea.modal.create("#loanModal", {
                                width: 1024,//宽度固定为1024px
                                confirm: function () {
                                    var data = $("#loanForm").serialize();
                                    var newdata = isea.client.parse(data);
                                    console.log(data, newdata);
                                    $.post("/Pgy/Loan/updateInfo", data, function (data) {
                                        if (data.status) {
                                            env.currentRow && env.iTable.update(newdata, env.currentRow);
                                            env.jModal.hide();
                                        } else {
                                            alert(data.message);
                                        }
                                    });
                                }
                            });
                            break;
                        default:
                            throw "undefined type";
                    }
                });
            }).use('datatables', function () {
                isea.datatables.solve(function () {
                    env.iTable = isea.datatables.create("#iTable", getTableOptions()).onDraw(function () {
                        isea.loader.use('jqcontextmenu', function () {
                            isea.jqcontextmenu.solve(function () {
                                isea.jqcontextmenu.create('#iTable tr', {
                                    /* 右键编辑列 */
                                    edit: {name: "edit", icon: "edit"},
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
                                        case "refresh":
                                            //刷新列表数据
                                            refreshTableData(true);
                                            break;
                                    }
                                });
                            });
                        });
                    });
                    refreshTableData(false);
                });
            });
        }

    }
};