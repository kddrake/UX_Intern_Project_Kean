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
				template:"<users-new new-user='newUser' add-user='addUser(newUser)'></users-new>",
				controller:"users.newController"
			}) 
			.state('users.profile', {
				url:"/:id",
				template:"<users-profile user='user' delete-user='deleteUser(user)' create-edit-user='createEditUser()' redirect='redirect()'></users-profile>",
				controller: "users.profileController"
			})
			.state('users.edit', {
				url:"/edit/:id",
				template:"<users-edit mod-user='modUser' user-name='{{user.firstName + \" \" + user.lastName}}' edit-user='editUser(modUser)' redirect='redirect()'></users-edit>",
				controller: "users.editController"
			});
	});