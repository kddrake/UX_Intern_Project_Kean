app.controller('listController', function($scope, promiseFactory, userService) {
	$scope.getUsers = function() {
		promiseFactory.list()
		.then(function(users) {
			$scope.users = users;
			userService.users = $scope.users;
		}, function(error) {
			console.log(error);
		});
	};

	$scope.getUsers();
});