/**
 * Created by Lin on 2016/12/17.
 */
// angular.module('myApp', []).controller('editor', function () {
// });
rdash.controller("ArticleAddCtrler", function ($scope) {
    function run() {
        $('.summernote').summernote({
            height: 300,   //set editable area's height
            codemirror: { // codemirror options
                theme: 'monokai'
            }
        });
    }

    var flag = false;

    if (flag) {
        run();
    } else {
        isea.loader.load([
            "http://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js",
            "http://cdn.bootcss.com/summernote/0.8.2/summernote.css",
            "http://cdn.bootcss.com/summernote/0.8.2/summernote.min.js"
        ], function () {
            flag = true;
            run();
        });
    }
});