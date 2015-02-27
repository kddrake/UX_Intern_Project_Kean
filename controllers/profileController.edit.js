app.controller('profileController.edit', function($scope, userService) {		
	$scope.users = userService.users;
	$scope.currentUser = userService.currentUser;
});