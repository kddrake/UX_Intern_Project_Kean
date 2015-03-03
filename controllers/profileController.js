app.controller('profileController', function($scope, $state, $stateParams, promiseFactory, userService) {		
	$scope.users = userService.users;
	
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
				$state.go('home');
			})
		};

	$scope.editUser = function() {
		$state.go('home.users.edit');
	}

	$scope.setUser();
});