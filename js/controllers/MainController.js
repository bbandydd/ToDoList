Parse.initialize("Qd1kVD44ra56EPyUwWHhcZQurkEfcd9OSg9CpmVD", "MbJ2G2ZxpMqmO1tCuMduukzaSOVcdFhJQHhUVAVW");

app.controller('MainController', function MainController($scope){
    $scope.type = 'login';

    $scope.showRegister = function(){
        $scope.type = 'register';
    };

    $scope.register = function(){
    	var user = new Parse.User();
    	user.set("username", $scope.register_userid);
    	user.set("password", $scope.register_password);

    	//其他欄位
    	user.set("name", $scope.register_name);
    	user.set("phone", $scope.register_phone);

    	//註冊
    	user.signUp(null, {
    		success: function(user){
    			$scope.showToDoList();
    			$scope.$apply();
    			alert('註冊成功');
    		},
    		error: function(user, error){
    			if (error.message.indexOf('already taken') != -1)
    				alert('帳號重複');
    			else
    				alert(error.message);
    		}
    	});
    };

    $scope.$watch('type', function(newValue, oldValue){
    	console.log(newValue + ', ' + oldValue);
    }, true);

    $scope.showLogin = function(){
        $scope.type = 'login';
    };

    $scope.login = function(){
    	//console.log('login');
    };

    $scope.showToDoList = function(){
        $scope.type = 'todolist';
    };
});