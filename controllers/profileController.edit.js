app.controller('profileController.edit', function($scope, userService) {		
	$scope.users = userService.users;
	$scope.user = userService.user;
});