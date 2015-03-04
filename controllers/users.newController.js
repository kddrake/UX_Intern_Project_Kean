app.controller('users.newController', function($scope, $state, promiseFactory, userService) {
	$scope.users = userService.users;
	$scope.user = userService.user;

	$scope.addUser = function(user) {
		promiseFactory.create(user)
			.then(function() {
				console.log("addUser: " + user.firstName + " " + user.lastName);
				$state.go('home.users');
			});
	};
});