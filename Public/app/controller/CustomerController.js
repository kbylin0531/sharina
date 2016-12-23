/**
 * Created by linzh on 2016/12/22.
 */
rdash.CustomerController = {
    loanlist: null,
    loadCache: null,
    loanTableOpts: {
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
    customerCache: null,
    customerTableOpts: {
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


    type: null,//表示这个页面哪个页面
    iModal: null,
    iTable: null,
    iData: {},
    run: function ($scope) {
        var env = this;

        var iTable = $("#iTable");
        if (iTable.length) {
            //页面类型：customer|loan
            env.type = iTable.attr("data-type");

            //请求cutomer信息
            var requestInfo = function (id) {
                $.get("/Pgy/Customer/getinfo?id=" + id, function (data) {
                    console.log(data);
                    if (!data.status) {
                        alert('查不到此人信息');
                    } else {
                        isea.loader.use("form", function () {
                            isea.form.fill("#iForm", data.data);
                            env.iModal.show();
                        });
                    }
                });
            };

            isea.loader.use("modal", function () {
                env.iModal = isea.modal.create("#iModal", {
                    width: 1024,//宽度固定为1024px
                    confirm: function () {
                        var url;
                        switch (env.type) {
                            case "customer":
                                url = "/Pgy/Customer/updateCustomerInfo";
                                break;
                            case "":
                                url = "/Pgy/Customer/updateLoanInfo";
                                break;
                        }
                        url && $.post(url, $("#iForm").serialize(), function (data) {
                            alert(data.message);
                            if (data.status) {
                                env.iModal.hide();
                            }
                        });
                    }
                });
            }).use('datatables', function () {
                isea.datatables.solveDependence(function () {
                    var opts;
                    switch (env.type) {
                        case "customer":
                            opts = env.customerTableOpts;
                            break;
                        case "loan":
                            opts = env.loanTableOpts;
                            break;
                    }
                    if (opts) env.iTable = isea.datatables.create("#iTable", opts).onDraw(
                        function () {
                            isea.loader.use('jqcontextmenu', function () {
                                isea.jqcontextmenu.solve(function () {
                                    isea.jqcontextmenu.create('#iTable tr', {
                                        edit: {name: "edit", icon: "edit"}
                                    }, function (key) {
                                        //时间绑定在tr上，所有target就是row
                                        var row = env.iTable.data($(this));
                                        switch (env.type) {
                                            case "customer":
                                                switch (key) {
                                                    case "edit":
                                                        row.id && requestInfo(row.id);
                                                        break;
                                                }
                                                break;

                                        }
                                    });
                                });
                            });
                        });

                    if (!(env.type in env.iData)) {
                        var url;
                        switch (env.type) {
                            case "customer":
                                url = "/Pgy/Customer/index";
                                break;
                            case "loan":
                                url = "/Pgy/Customer/loan";
                                break;
                        }
                        url && $.get(url, function (data) {
                            env.iTable.load(env.iData[env.type] = data.data);
                        });
                    } else {
                        env.iTable.load(env.iData[env.type]);
                    }
                });
            });
        }

    }
};