app.controller('usersController', function($scope, promiseFactory, userService) {
	userService.getUsers();
	$scope.user = angular.copy(userService.user);
	$scope.userInfo = {phone: false,
					   email: false};
	$scope.filterBy = {firstName: false, 
					   lastName: false, 
					   phone: false, 
					   email: false};
	
	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
	};

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})

	$scope.clearFilter = function(filter) {
		if (filter === 'first') {
			$scope.filterBy = null;
		} else if (filter === 'last') {
			$scope.filterBy.lastName = null;
		} else if (filter === 'phone') {
			$scope.filterBy.phone = null;
		} else {
			$scope.filterBy.email = null;
		};
	};

});
