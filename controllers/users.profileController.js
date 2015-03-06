app.controller('users.profileController', function($scope, $state, $stateParams, $timeout, userService) {


	$scope.user = userService.setUser();
	console.log("user: ",$scope.user);

	$scope.exitButton = function() {
		$state.go('home.users');
	}

	$scope.editButton = function() {
		$state.go('home.users.edit',{id: $scope.user._id});
	};

	// $scope.setUser = function() {
	// 	userService.setUser();
	// 	$scope.user = userService.user;
	// 	console.log("From controller:\n" +
	// 				"  $scope.user: " + $scope.user +
	// 				"\n  userService.user: " + userService.user);
	// };

	$scope.deleteUser = function(user) {
		userService.deleteUser(user);
		$state.go('home');
	};

	// $scope.setUser();
});
