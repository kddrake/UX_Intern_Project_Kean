(function (){
	var app = angular.module('uxiApp');
		app.service('userService', function(promiseService) {
			var users = [];
			var currentUser = {}; 

			function getUser(id) {
				promiseService.get(id)
					.then(function(response) {
						currentUser = response;
						console.log("getUser: successful");
					}, function(error) {
						console.log(error);
					});
			};

			function addUser(user) {
				promiseService.create(user)
					.then(function (){
						currentUser = user;
						users = getUsers();
						console.log("addUser: successful")
					}, function(error) {
						console.log(error)
					}); 
			};

			function getUsers() {
				promiseService.list()
					.then(function(response) {
						users = response;
						console.log("getUsers: successful");
					}, function(error) {
						console.log(error);
					});
			};

			function removeUser(id) {
				promiseService.remove(id)
					.then(function() {
						console.log("removeUser: successful");
					}, function(error) {
						console.log(error);
					});
			};

			function updateUser(id) {
				promiseService.update(id)
					.then(function() {
						console.log("updateUser: successful");
					}, function(error) {
						console.log(error);
					});
			};	

			return {
				users: users,
				currentUser: currentUser,
				getUser: getUser,
				addUser: addUser,
				getUsers: getUsers,
				removeUser: removeUser,
				updateUser: updateUser
			}

		});
})();