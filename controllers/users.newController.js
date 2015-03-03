app.controller('users.newController', function($scope, $state, promiseFactory, userService) {
	$scope.addUser = function(user) {
		userService.addUser(user);
		$scope.newUser = {};
		$state.go('home');
	}
});