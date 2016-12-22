/**
 * Created by linzh on 2016/12/22.
 */
rdash.CustomerController = {
    run: function ($scope) {

        //当前页面是客户列表
        if ($("#customerlist").length) {
            isea.loader.load([
                'http://cdn.bootcss.com/datatables/1.10.13/css/dataTables.bootstrap.min.css',
                'http://cdn.bootcss.com/datatables/1.10.13/js/jquery.dataTables.min.js',
                'http://cdn.bootcss.com/datatables/1.10.13/js/dataTables.bootstrap.min.js'
            ], function () {
                var infoModal, customerlist;
                isea.loader.use("modal", function () {
                    infoModal = isea.modal.create("#imodal", {
                        width: 1024,//宽度固定为1024px
                        confirm: function () {

                        }
                    });
                });

                isea.loader.use('datatables', function () {
                    customerlist = isea.datatables.create("#customerlist", {
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
                                    return row.sex == '1' ? '男' : '女';
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
                    }).onDraw(function () {
                        $(".edit").unbind("click").click(function () {
                            var row = customerlist.data($(this).closest('tr'));
                            $.get("/Pgy/Customer/getinfo?id=" + row.id, function (data) {
                                if (!data) {
                                    alert('查不到此人信息');
                                } else {
                                    isea.loader.use("form", function () {
                                        isea.form.fill("#customerinfoForm", data.data);
                                        infoModal.show();
                                    });
                                }
                            });
                        });
                    });
                    $.get("/Pgy/Customer/index", {}, function (data) {
                        //https://datatables.net/examples/server_side/row_details.html 列详情
                        customerlist.load(data.data);
                    });
                });
            });
        }
    }
};