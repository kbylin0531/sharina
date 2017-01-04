/**
 * Created by Lin on 2017/1/4.
 */
rdash.MarkbookController = {
    run: function () {

        var mTable, mModal;

        //加载数据
        var loadData = function () {
            $.get("/Admin/Markbook/getlist", function (data) {
                if (data.status) {
                    mTable.load(data.data);
                }
            });
        };

        isea.loader.use("modal", function () {
            isea.modal.solve(function () {
                mModal = isea.modal.create("#mModal");
            });
        });
        isea.notify.solve();


        var deleteRecord = function () {
            var row = mTable.selected();
            if (false === row) {
                return isea.notify.show('请选择要删除的行');
            }
            var data = mTable.data(row);

            if (confirm("確定要刪除'" + data.name + "'?")) {
                $.get("/Admin/Markbook/delete?id=" + data.id, function (data) {
                    isea.notify.show(data.message);
                    if (data.status) {
                        mTable.remove(row);
                    }
                });
            }
        };

        var editRecord = function () {
            isea.loader.use("form", function () {
                var row = mTable.selected();
                if (false === row) {
                    isea.notify.show('请选择一行进行编辑');
                } else {
                    var data = mTable.data(mTable.selected());
                    console.log(data, mTable.selected());
                    isea.form.fill("#mForm", data);
                    mModal.onConfirm(function () {
                        var data = $("#mForm").serialize();
                        var newdata = isea.client.parse(data);
                        $.post("/Admin/Markbook/update", data, function (data) {
                            isea.notify.show(data.message);
                            if (data.status) {
                                mTable.update(newdata, mTable.selected());
                                mModal.hide();
                            }
                        });
                    }).show();
                }
            });
        };

        var addRecord = function () {
            isea.loader.use("form", function () {
                isea.form.clean("#mForm");
                mModal.onConfirm(function () {
                    var data = $("#mForm").serialize();
                    $.post("/Admin/Markbook/add", data, function (data) {
                        isea.notify.show(data.message);
                        if (data.status) {
                            mModal.hide();
                            loadData();
                        }
                    });
                }).show();
            });
        };


        isea.loader.use("datatables", function () {
            isea.datatables.solve(function () {
                mTable = isea.datatables.create("#mTable", {
                    onselect: 1,
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
                                title: 'category',
                                data: 'category',
                                width: "6%"
                            },
                            {
                                title: 'add_time',
                                data: 'add_time',
                                width: "6%"
                            },
                            {
                                title: 'upd_time',
                                data: 'upd_time',
                                width: "6%"
                            }
                        ]
                    }
                }).onDraw(function () {
                    isea.loader.use("jqcontextmenu", function () {
                        isea.jqcontextmenu.solve(function () {
                            isea.jqcontextmenu.create("#mTable tbody>tr", {
                                update: {name: "update", icon: "edit"},
                                edit: {name: "edit", icon: "edit"},
                                add: {name: "add", icon: "add"},
                                delete: {name: "delete", icon: "delete"},
                                sep1: "---------",
                                refresh: {name: "refresh", icon: "fa-refresh"}
                            }, function (key) {
                                switch (key) {
                                    case "update":
                                        editRecord();
                                        break;
                                    case "edit":
                                        var row = mTable.selected();
                                        if(!row){
                                            isea.notify.show("请选择行进行编辑",true);
                                        }else{
                                            window.open("/Admin/Markbook/detail?id="+mTable.data(row).id);
                                        }
                                        break;
                                    case "add":
                                        addRecord();
                                        break;
                                    case "refresh":
                                        loadData();
                                        break;
                                    case "delete":
                                        deleteRecord();
                                        break;
                                    default:
                                        throw "undefined " + key;
                                }
                            });
                        });
                    });
                });

                loadData();


            });
        });

    }
};