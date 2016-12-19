/**
 * Created by Lin on 2016/12/19.
 */
rdash.MemberController = {
    run: function ($scope) {
        $scope.submit = function () {
            console.log($scope.firstName, $scope.lastName, $scope.repeatpwd);

        };
    }
};