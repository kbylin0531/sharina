/**
 * Created by linzh on 2016/12/22.
 */
rdash.CustomerController = {
    lOptions: {
        config: {
            columns: [
                {
                    title: 'id',
                    data: 'id',
                    width: "2%"
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
                        switch (row.status) {
                            case 0:
                                return "未还款";
                                break;
                            case 1:
                                return "";//已还款
                                break;
                            case 2:
                                return "有逾期";
                                break;
                        }
                        return "";
                    },
                    width: "6%"
                },
                {
                    title: 'category',
                    data: function (row) {
                        switch (row.category) {
                            case 0:
                                return "首借";//1为2为
                                break;
                            case 1:
                                return "延期";
                                break;
                            case 2:
                                return "续借";
                                break;
                        }
                        return "";
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
    run: function ($scope) {
        var env = this;

        var iTable = $("#iTable");

        if (iTable.length) {

            //页面类型：customer|loan
            function getType() {
                return $("#iTable").attr("data-type");
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

            //请求cutomer信息
            var requestInfo = function (id) {
                $.get(getFromInfoURL(id), function (data) {
                    if (!data.status) {
                        alert('查不到此人信息');
                    } else {
                        isea.loader.use("form", function () {
                            var selector;
                            var modal;
                            switch (getType()) {
                                case "customer":
                                    selector = "#customerForm";
                                    modal = env.cModal;
                                    break;
                                case "loan":
                                    selector = "#loanForm";
                                    modal = env.jModal;
                                    break;
                                default:
                                    throw "undefined type";
                            }
                            isea.form.fill(selector, data.data);
                            modal.show();
                        });
                    }
                });
            };

            isea.loader.use("modal", function () {
                switch (getType()) {
                    case "customer":
                        env.cModal = isea.modal.create("#customerModal", {
                            width: 1024,//宽度固定为1024px
                            confirm: function () {
                                $.post("/Pgy/Customer/updateCustomerInfo", $("#customerForm").serialize(), function (data) {
                                    alert(data.message);
                                    data.status && env.cModal.hide();
                                });
                            }
                        });
                        break;
                    case "loan":
                        env.jModal = isea.modal.create("#loanModal", {
                            width: 1024,//宽度固定为1024px
                            confirm: function () {
                                $.post("/Pgy/Customer/updateLoanInfo", $("#loanForm").serialize(), function (data) {
                                    alert(data.message);
                                    data.status && env.cModal.hide();
                                });
                            }
                        });
                        break;
                    default:
                        throw "undefined type";
                }
            }).use('datatables', function () {
                isea.datatables.solveDependence(function () {
                    env.iTable = isea.datatables.create("#iTable", getTableOptions()).onDraw(function () {
                        isea.loader.use('jqcontextmenu', function () {
                            isea.jqcontextmenu.solve(function () {
                                isea.jqcontextmenu.create('#iTable tr', {
                                    edit: {name: "edit", icon: "edit"}
                                }, function (key) {
                                    //时间绑定在tr上，所有target就是row
                                    var row = env.iTable.data($(this));
                                    switch (key) {
                                        case "edit":
                                            //customer和loan暂时没有区分
                                            row.id && requestInfo(row.id);
                                            break;

                                    }
                                });
                            });
                        });
                    });
                    if (!(getType() in env.iData)) {
                        var url;
                        switch (getType()) {
                            case "customer":
                                url = "/Pgy/Customer/index";
                                break;
                            case "loan":
                                url = "/Pgy/Loan/index";
                                break;
                        }
                        url && $.get(url, function (data) {
                            env.iTable.load(env.iData[getType()] = data.data);
                        });
                    } else {
                        env.iTable.load(env.iData[getType()]);
                    }
                });
            });
        }

    }
};