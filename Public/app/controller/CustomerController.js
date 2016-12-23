/**
 * Created by linzh on 2016/12/22.
 */
rdash.CustomerController = {
    infoModal: null,
    customerlist: null,
    customerTableOpts: {
        columns: [
            {
                title: 'ID',
                data: 'id',
                width: "6%"
            },
            {
                title: 'name',
                data: 'name',
                width: "10%"
            },
            {
                title: 'phone',
                data: 'phone',
                width: "10%"
            },
            {
                title: 'sex',
                data: function (row) {
                    return parseInt(row.sex) == 1 ? '男' : '女';
                },
                width: "6%"
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
            },

            {
                title: 'operation',
                data: function () {
                    return '<a href="javascript:void(0);" class="edit">edit</a>';
                }
            }
        ]
    },
    run: function ($scope) {

        var env = this;

        //当前页面是客户列表
        if ($("#customerlist").length) {
            isea.loader.use("modal", function () {
                env.infoModal = isea.modal.create("#imodal", {
                    width: 1024,//宽度固定为1024px
                    confirm: function () {

                    }
                });
            }).use('datatables', function () {
                isea.datatables.solveDependence(function () {
                    env.customerlist = isea.datatables.create("#customerlist", env.customerTableOpts).onDraw(
                        function () {
                            $(".edit").unbind("click").click(function () {
                                var row = env.customerlist.data($(this).closest('tr'));
                                $.get("/Pgy/Customer/getinfo?id=" + row.id, function (data) {
                                    console.log(data);
                                    if (!data.status) {
                                        alert('查不到此人信息');
                                    } else {
                                        isea.loader.use("form", function () {
                                            env.infoModal.show();
                                            isea.form.fill("#customerinfoForm", data.data);
                                        });
                                    }
                                });
                            });
                            isea.loader.load([
                                'http://cdn.bootcss.com/jquery-contextmenu/2.4.1/jquery.contextMenu.min.css',
                                'http://cdn.bootcss.com/jquery-contextmenu/2.4.1/jquery.contextMenu.min.js',
                                'http://cdn.bootcss.com/jquery-contextmenu/2.4.1/jquery.ui.position.min.js'
                            ], function () {
                                $.contextMenu({
                                    selector: '#customerlist tr',
                                    callback: function (key, options) {
                                        console.log(key, options);
                                    },
                                    items: {
                                        edit: {name: "Edit", icon: "edit"},
                                        cut: {name: "Cut", icon: "cut"},
                                        copy: {name: "Copy", icon: "copy"},
                                        paste: {name: "Paste", icon: "paste"},
                                        delete: {name: "Delete", icon: "delete"},
                                        user: {name: "Delete", icon: "fa-user-o"},
                                        sep1: "---------",
                                        quit: {
                                            name: "Quit", icon: function () {
                                                return 'context-menu-icon context-menu-icon-quit';
                                            }
                                        }
                                    }
                                });
                            });
                        });
                    $.get("/Pgy/Customer/index", function (data) {
                        //https://datatables.net/examples/server_side/row_details.html 列详情
                        env.customerlist.load(data.data);
                    });
                });
            });
        }
    }
};