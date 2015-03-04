app.service('userService', function(promiseFactory) {
	var users = []; 
	var user = {};

	function getUsers() {
		promiseFactory.list()
			.then(function(users) {
				this.users = users;
			}, function(error) {
				console.log(error);
			});
	};
	
	return {
		users: this.users,
		user: this.user,

		getUsers: getUsers
	}

});