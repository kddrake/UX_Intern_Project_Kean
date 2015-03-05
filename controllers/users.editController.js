app.controller('users.editController', function($scope, $state, userService, promiseFactory) {		
	$scope.users = userService.users;
	$scope.user = userService.user;

	$scope.editUser = function(user) {
		userService.editUser(user);
		$state.go('^.profile');
	};
});