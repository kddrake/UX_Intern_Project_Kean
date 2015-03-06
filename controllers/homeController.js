app.controller('homeController', function($state, $timeout, userService) {
	userService.getUsers();
	$state.go('home.users');
});