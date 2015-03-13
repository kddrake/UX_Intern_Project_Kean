app.controller('users.profileController', function($scope, $state, userService) {
	$scope.user = userService.setUser();
	
	$scope.editButton = function() {
		$state.go('users.edit',{id: $scope.user._id});
	};

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
		$state.go('users');
	};
});
