app.controller('modalController', function($scope, $modal, $log) {
	$scope.open = function(size) {
		var modalInstance = $modal.open({
			templateUrl: 'assets/partials/deleteModal.html',
			controller: 'modalInstanceController',
			size: size,
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selctedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		})
	}
});

app.controller('modalInstanceController', function($scope, $modalInstance, $state, user, userService){
	$scope.user = user;

	$scope.ok = function() {
		userService.deleteUser($scope.user);
		$modalInstance.close();
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
});