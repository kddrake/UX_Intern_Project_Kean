app.controller('usersController', function($scope, userService) {
	userService.getUsers();
	$scope.user = angular.copy(userService.user);
	$scope.orderRadio = 'firstName';
	$scope.reverse = false;

	this.userInfo = {phone: false,
					 email: false};

	$scope.deleteUser = function(user) {
		console.log("Delete User");
		userService.deleteUser(user);
	};

	$scope.selectUser = function() {
		$scope.user = this.user
	}

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})
});
