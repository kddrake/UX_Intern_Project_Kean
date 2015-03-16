app.controller('deleteModalController', function($scope, $modal, $log, userService) {
	$scope.user = userService.setUser();
	
	$scope.open = function(){
		var modalInstance = 
			$modal.open({
				templateUrl:'assets/partials/deleteModal.html',
				controller:'modalInstanceController',
				size: 'sm',
				resolve: {
					user: function() {
						retrun $scope.user;
					}
				}
			});
	};
});

app.controller('modalInstanceController', function ($scope, $modalInstance, user) {
	$scope.user = user;
	$scope.ok = function () {
		
		$modalInstance.close()
	}

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel')
	}
})