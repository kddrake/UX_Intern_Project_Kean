app.controller('usersController', function($scope, promiseFactory, userService) {
	$scope.user = userService.user;

	promiseFactory.list()
		.then(function(users) {
			$scope.users = users;
			userService.users = $scope.users;
	}, function(error) {
		console.log(error);
	});

	$scope.$on('UPDATE_USERS', function(event, newUsersList){
		console.log("users: ", newUsersList)
		$scope.users = newUsersList;
	})

});
