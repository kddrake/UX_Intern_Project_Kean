app.service('userService', function($stateParams, promiseFactory) {
	var users = []; 
	var user = {};

	//fucntional
	function addUser(user) {
		promiseFactory.create(user)
			.then(function() {
				this.user = user;
				console.log("User added: " + user.firstName + " " + user.lastName);
			});
	};

	//functional
	function editUser(user) {
		promiseFactory.update(user)
			.then(function(updatedUser) {
				this.user = updatedUser;
				console.log("User edited: " + user.firstName + " " + user.lastName);
			}, function(error) {
				console.log(error);
			})
	}

	function setUser() {
		angular.forEach(this.users, function(usr) {
			if (usr._id == $stateParams.id) {
				this.user = usr;
				console.log("userService current user: " + this.user.firstName + " " + this.user.lastName);
			};
		});
	};

	//functional
	function deleteUser(user) {
		promiseFactory.remove({id: user._id})
			.then(function() {
				console.log("User deleted: " + user.firstName + " " + user.lastName);
			}, function(error) {
				console.log(error);
			});
	};

	//functional
	//$scope.users doesn't update
	function getUsers() {
		promiseFactory.list()
			.then(function(users) {
				this.users = users;
				console.log("Users retrieved from server");
			}, function(error) {
				console.log(error);
			});
	};
	
	return {
		users: this.users,
		user: this.user,

		addUser: addUser,
		editUser: editUser,
		setUser: setUser,
		deleteUser: deleteUser,
		getUsers: getUsers
	}

});