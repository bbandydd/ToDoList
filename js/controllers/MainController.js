app.controller('MainController', function MainController($scope){
    $scope.type = 'unlogin';

    $scope.showRegister = function(){
        $scope.type = 'register';
    };

    $scope.showLogin = function(){
        $scope.type = 'unlogin';
    };
});