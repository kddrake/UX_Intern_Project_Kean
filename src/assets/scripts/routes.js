app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/users")
		$stateProvider
			.state('users', {
				url:"/users",
				template:"<users></users>",
				controller: "usersController"
			})
			.state('users.new', {
				url:"/new",
				template:"<users-new add-user='addUser(user)'></users-new>",
				controller:"users.newController"
			}) 
			.state('users.profile', {
				url:"/:id",
				template:"<users-profile user='user' delete-user='deleteUser(user)'></users-profile>",
				controller: "users.profileController"
			})
			.state('users.edit', {
				url:"/edit/:id",
				template:"<users-edit user='user' edit-user='editUser(user)'></users-edit>",
				controller: "users.editController"
			});
	});