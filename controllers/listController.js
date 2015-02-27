(function (){
	var app = angular.module('uxiApp');
		app.controller('listController', function($scope, userService) {
			$scope.users = userService.users;
			userService.getUsers();
		});
})();