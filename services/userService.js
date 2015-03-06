app.service('userService', function($rootScope, $stateParams, promiseFactory) {
	var users = [];
	var user = {};
	var findUser = function(){
		var currentUser = {};
		angular.forEach(this.users, function(usr){
			if ($stateParams.id == usr._id){
				currentUser = usr;
			}
		})
		return currentUser;
	}
	var populateUsersList = function(){
		promiseFactory.list()
			.then(function(users) {
				this.users = users;
				$rootScope.$broadcast('UPDATE_USERS', users);
				console.log("Users retrieved from server");
			}, function(error) {
				console.log(error);
			});
	}

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
				populateUsersList();
				console.log("User edited: " + user.firstName + " " + user.lastName);
			}, function(error) {
				console.log(error);
			})
	}

	function setUser() {
		return findUser();
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
		populateUsersList();
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
