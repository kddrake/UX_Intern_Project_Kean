app.controller('profileController.edit', function($scope, $state, userService, promiseFactory) {		
	$scope.users = userService.users;
	$scope.user = userService.user;

	$scope.clearForm = function() {
	
	};

	$scope.editUser = function(user) {
		promiseFactory.update(user)
			.then(function() {
				$scope.user = user;
				userService.user = $scope.user;
				console.log("editUser: " + user.firstName + " " + user.lastName);
				$scope.user= {};
				$state.go('home');
			});
	};
});