app.controller('users.editController', function($scope, $state, userService) {
	//$scope.user = userService.setUser();
	$scope.userBeforeEdit = angular.copy($scope.user);
	if ($scope.user == null) {
		$state.go('users');
	}
});