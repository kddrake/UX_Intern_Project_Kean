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
				template:"<users-new></users-new>",
				controller:"users.newController"
			})
			.state('users.profile', {
				url:"/:id",
				template:"<users-profile user='user'></users-profile>",
				controller: "users.profileController"
			})
			.state('users.edit', {
				url:"/edit/:id",
				template:"<users-edit user='user'></users-edit>",
				controller: "users.editController"
			});
	});