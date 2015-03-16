app.controller('users.profileController', function($scope, $state, $timeout, userService) {
	//$scope.user = userService.setUser();
	
	if ($scope.user == null) {
		$state.go('users');
	}

	$scope.editButton = function() {
		$state.go('users.edit',{id: $scope.user._id});
	};

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
		$state.go('users');
	};
});
