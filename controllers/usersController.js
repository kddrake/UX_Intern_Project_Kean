app.controller('usersController', function($scope, promiseFactory, userService) {
	promiseFactory.list()
		.then(function(users) {
			$scope.users = users;
			userService.users = $scope.users;
	}, function(error) {
		console.log(error);
	});

});