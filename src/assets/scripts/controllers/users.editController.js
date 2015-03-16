app.controller('users.editController', function($scope, $state, userService) {
	//$scope.user = userService.setUser();
	if ($scope.user == null) {
		$state.go('users');
	}

	$scope.userBeforeEdit = angular.copy($scope.user);

	$scope.editUser = function(user) {
		userService.editUser(user);
		userService.getUsers();
		$state.go('users.profile',{id: $scope.user._id});
	};
});