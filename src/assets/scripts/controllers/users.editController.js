app.controller('users.editController', function($scope, $state, userService) {
	//$scope.user = userService.setUser();
	$scope.userBeforeEdit = angular.copy($scope.user);
	console.log($scope.userBeforeEdit);
	if ($scope.user == null) {
		$state.go('users');
	}
});