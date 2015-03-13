app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/users")
		$stateProvider
			.state('users', {
				url:"/users",
				templateUrl:"assets/partials/users.html",
				controller: "usersController"
			})
			.state('users.new', {
				url:"/new",
				templateUrl:"assets/partials/users.new.html",
				controller:"users.newController"
			})
			.state('users.profile', {
				url:"/:id",
				templateUrl:"assets/partials/users.profile.html",
				controller: "users.profileController"
			})
			.state('users.edit', {
				url:"/edit/:id",
				templateUrl:"assets/partials/users.edit.html",
				controller: "users.editController"
			});
	});