(function (){
	var app = angular.module('uxiApp');
		app.controller('userController', function($scope, userService) {
			$scope.addUser = function(user) {
				userService.create(user)
					.then(function (){
						console.log(user)
					}, function(error) {
						console.log(error)
					}); 
			};
		});
})();