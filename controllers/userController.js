(function (){
	var app = angular.module('uxiApp');
		app.controller('userController', function($scope, userService) {
			$scope.getUser = function(id) {
				userService.get(id)
					.then(function(response) {
						$scope.currentUser = response;
						console.log("getUser: successful");
					}, function(error) {
						console.log(error);
					});
			};

			$scope.addUser = function(user) {
				userService.create(user)
					.then(function (){
						$scope.users = getUsers();
						console.log("addUser: successful")
					}, function(error) {
						console.log(error)
					}); 
			};

			$scope.getUsers = function() {
				userService.list()
					.then(function(response) {
						$scope.users = response;
						console.log("getUsers: successful");
					}, function(error) {
						console.log(error);
					});
			};

			$scope.removeUser = function(id) {
				userService.remove(id)
					.then(function() {
						console.log("removeUser: successful");
					}, function(error) {
						console.log(error);
					});
			};

			$scope.updateUser = function(id) {
				userService.update(id)
					.then(function() {
						console.log("updateUser: successful");
					}, function(error) {
						console.log(error);
					});
			};		
		});
})();