app.controller('users.editController', function($scope, $state, userService, promiseFactory) {
	$scope.user = userService.setUser();
	console.log("user: ", $scope.user);

	$scope.editUser = function(user) {
		userService.editUser(user);
		userService.getUsers();
		$state.go('^.profile',{id: $scope.user._id});
	};
});
