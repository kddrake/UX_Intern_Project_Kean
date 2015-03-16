app.controller('usersController', function($scope, userService) {
	userService.getUsers();
	$scope.user = angular.copy(userService.user);
	$scope.orderRadio = 'firstName';
	$scope.reverse = false;
	this.userInfo = {phone: false,
					 email: false};

	$scope.addUser = function(user) {
		console.log(user);
		userService.addUser(user);
	};

	$scope.selectUser = function() {
		$scope.user = this.user
	};

	$scope.editUser = function(user) {
		userService.editUser(user);
		userService.getUsers();
	};

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
	};

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})
});
