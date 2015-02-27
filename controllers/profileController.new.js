app.controller('profileController.new', function($scope, userService) {		
	$scope.users = userService.users;
	$scope.currentUser = userService.currentUser;

	$scope.addUser = function(user) {
		userService.addUser(user);
		//clear form
		//return to profile with
		//  new user as current user
	}
});