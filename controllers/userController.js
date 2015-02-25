(function (){
	var app = angular.module('uxiApp');
		app.controller('userController', function($scope, userService) {
			userService.list()
				.then(function(response) {
					$scope.users = response;
				}, function(error) {
					console.log(error);
				});
		});
})();