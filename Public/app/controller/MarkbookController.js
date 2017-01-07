/**
 * Created by Lin on 2017/1/4.
 */
rdash.MarkbookController = {
    run: function () {

        var page = (function () {

            return {
                url: {
                    source: "/Admin/Markbook/getlist",
                    delete: "/Admin/Markbook/delete",
                    update: "/Admin/Markbook/update",
                    add: "/Admin/Markbook/add"
                },
                selector: {
                    table: "#mTable",
                    modal: "#mModal",
                    form: "#mForm"
                },
                pattern: {
                    remove: "確定要刪除'{$name}'?"
                },
                dtopts: {
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
                            },
                            {
                                title: 'operation',
                                data: function (row) {
                                    var url = "/Admin/Markbook/detail?id=" + row.id;
                                    return '<a href="' + url + '" target="_blank">编辑</a>';

                                },
                                width: "6%"
                            }
                        ]
                    }
                }
            };
        })();

        isea.bundle.init("table", page);
    }
};