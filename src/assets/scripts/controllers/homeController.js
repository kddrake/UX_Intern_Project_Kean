app.controller('homeController', function($state, userService) {
	userService.getUsers();
	$state.go('home.users');
});