app.controller('users.profileController', function($scope, $state, $stateParams, promiseFactory, userService) {		
	$scope.users = userService.users;
	$scope.user = userService.user;

	$scope.exit = function() {
		$state.go('home.users');
	}

	$scope.setUser = function() {
		for (var user in $scope.users) {
			if ($scope.users[user]._id === $stateParams.id) {
				$scope.user = $scope.users[user];
				userService.user = $scope.user;
			};
		};
	};

	$scope.deleteUser = function(user) {
		promiseFactory.remove({id: user._id})
			.then(function() {
				console.log("deleteUser: " + user.firstName + " " + user.lastName);
				userService.getUsers();
				$scope.users = userService.users;
				$state.go('home.users');
			})
		};

	$scope.editUser = function() {
		$state.go('home.users.edit');
	}

	$scope.setUser();
});