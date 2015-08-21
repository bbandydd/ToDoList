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
    			$scope.showLogin();
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

    $scope.showLogin = function(){
        $scope.type = 'login';
    };

    $scope.login = function(){
        Parse.User.logOut();
    	Parse.User.logIn($scope.userid, $scope.password, {
            success: function(user){
                $scope.showToDoList();

                $scope.$apply();
            },
            error: function(user, error){
                console.log(error);
            }
        });
    };

    $scope.showToDoList = function(){
        $scope.type = 'todolist';

        var currentUser = Parse.User.current();
        
        $scope.name = currentUser.attributes.name;
    };
});