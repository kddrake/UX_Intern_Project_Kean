app.service('userService', function(promiseFactory) {
	var users = []; 
	var user = {};

	function getUser(id) {
		promiseFactory.promises.get(id)
			.then(function(response) {
				current = response;
				return this.current;
			}, function(error) {
				console.log(error);
			});
	};

	//FUNCTIONAL
	function addUser(user) {
		promiseFactory.create(user)
			.then(function (){
				console.log("addUser: successful")
			}, function(error) {
				console.log(error)
			}); 
	};

	//NON-FUNCTIONAL
	function getUsers() {
		promiseFactory.list()
			.then(function(users) {
				return users;
			}, function(error) {
				console.log(error);
			});
	};

	function removeUser(id) {
		promiseFactory.remove(id)
			.then(function() {
				console.log("removeUser: successful");
			}, function(error) {
				console.log(error);
			});
	};

	function updateUser(id) {
		promiseFactory.update(id)
			.then(function() {
				console.log("updateUser: successful");
			}, function(error) {
				console.log(error);
			});
	};	

	return {
		users: this.users,
		user: this.user,
		
		getUser: getUser,
		addUser: addUser,
		//getUsers: getUsers,
		removeUser: removeUser,
		updateUser: updateUser
	}

});