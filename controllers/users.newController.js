app.controller('users.newController', function($scope, $state, userService) {
	$scope.users = userService.users;
	$scope.user = userService.user;

	$scope.addUser = function(user) {
		userService.addUser(user);
		$state.go('home');
	};
});