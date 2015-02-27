app.controller('listController', function($scope, userService) {
	$scope.users = userService.users;
	userService.getUsers();
});