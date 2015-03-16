app.controller('users.profileController', function($scope, $state, $timeout, userService) {
	if ($scope.user == null) {
		$state.go('users');
	}
});
