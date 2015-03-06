app.controller('users.profileController', function($scope, $state, $stateParams, $timeout, userService) {
	$scope.user = userService.setUser();
	
	$scope.exitButton = function() {
		$state.go('home.users');
	}

	$scope.editButton = function() {
		$state.go('home.users.edit',{id: $scope.user._id});
	};

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
		$state.go('home.users');
	};
});
