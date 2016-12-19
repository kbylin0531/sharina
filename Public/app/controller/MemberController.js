/**
 * Created by Lin on 2016/12/19.
 */
rdash.MemberController = {
    run: function ($scope) {
        var modal = $('#modal');
        $scope.changePwd = function () {
            if ($scope.newpwd != $scope.repeatpwd) {
                $scope.title = "Warn";
                $scope.content = "New password do not be same";
                modal.openModal();
                return false;
            } else {
                $.post("", {}, function (data) {

                });
            }
        };
    }
};