app.controller('usersController', function($scope, promiseFactory, userService) {
	userService.getUsers();
	$scope.user = angular.copy(userService.user);

	this.userInfo = {phone: false,
					 email: false};

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
	};

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})
});
