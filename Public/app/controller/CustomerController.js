/**
 * Created by linzh on 2016/12/22.
 */
rdash.CustomerController = {
    run: function ($scope) {
        if ($("#dtable").length) {
            isea.loader.load([
                'http://cdn.bootcss.com/datatables/1.10.13/css/dataTables.bootstrap.min.css',
                'http://cdn.bootcss.com/datatables/1.10.13/js/jquery.dataTables.min.js',
                'http://cdn.bootcss.com/datatables/1.10.13/js/dataTables.bootstrap.min.js'
            ], function () {
                isea.loader.use('datatables', function () {
                    var dtable = isea.datatables.create("#dtable", {
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
                                title: 'operation',
                                data: function () {
                                    return '<a href="javascript:void(0);" class="edit">edit</a>';
                                }
                            }
                        ]
                    }).onDraw(function () {
                        $(".edit").unbind("click").click(function () {
                            isea.loader.use('layer',function () {
                                isea.loader.use("modal",function () {
                                    var modal = isea.modal.create("#imodal",{
                                        confirm:function () {

                                        }
                                    });
                                    modal.show();
                                });
                            });
                        });
                    });
                    $.get("/Pgy/Customer/index", {}, function (data) {
                        dtable.load(data.data);
                    });
                });
            });
        }
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
    }
};