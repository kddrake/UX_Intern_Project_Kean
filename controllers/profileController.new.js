app.controller('profileController.new', function($scope, userService) {		
	$scope.addUser = function(user) {
		userService.addUser(user);
		$state.go('home.users');
	}
});