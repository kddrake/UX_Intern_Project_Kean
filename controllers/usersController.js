app.controller('usersController', function($scope, promiseFactory, userService) {
	$scope.user = angular.copy(userService.user);

	promiseFactory.list()
		.then(function(users) {
			$scope.users = users;
			userService.users = $scope.users;
	}, function(error) {
		console.log(error);
	});

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
	};

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		$scope.users = angular.copy(newUsersList);
	})
});
