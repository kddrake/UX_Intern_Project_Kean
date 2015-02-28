app.controller('profileController', function($scope, $stateParams, promiseFactory, userService) {		
	$scope.users = userService.users;
	
	$scope.setUser = function() {
		for (var user in $scope.users) {
			if ($scope.users[user]._id === $stateParams.id) {
				$scope.user = $scope.users[user];
				userService.user = $scope.user;
			};
		};
	};

	$scope.setUser();
});