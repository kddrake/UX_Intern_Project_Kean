app.controller('usersController', function($scope, $state, userService) {
	userService.getUsers();
	$scope.user = angular.copy(userService.user);
	$scope.newUser = angular.copy($scope.user);

	$scope.orderRadio = 'firstName';
	$scope.reverse = false;
	this.userInfo = {phone: false,
					 email: false};

	$scope.addUser = function(user) {
		userService.addUser(user);
	};

	$scope.selectUser = function() {
		$scope.user = this.user
	};

	$scope.editUser = function(user) {
		userService.editUser(user);
		userService.getUsers();
	};

	$scope.createEditUser = function() {
		$scope.modUser = angular.copy($scope.user);
	}

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
	};

	$scope.redirect = function() {
		if ($scope.user == null) {
			$state.go('users');
		};
	};

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})
});
