/**
 * Created by Lin on 2016/12/19.
 */
rdash.MemberController = {
    run: function ($scope) {

        $scope.saveChange = function () {
            if ($scope.change.newpwd != $scope.change.newpwdrp) {
                alert("aa");
            }
        }
    }
};