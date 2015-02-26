(function (){
	var app = angular.module('uxiApp');
		app.controller('listController', function($scope, userService, userFactory) {
			userService.list()
				.then(function(response) {
					$scope.users = response;
				}, function(error) {
					console.log(error);
				});
		});
})();