app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/")
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl:"assets/partials/home.html",
				controller: "homeController"
			})
			.state('home.users', {
				url:"users",
				templateUrl:"assets/partials/users.html",
				controller: "usersController"
			})
			.state('home.users.new', {
				url:"/new",
				templateUrl:"assets/partials/users.new.html",
				controller:"users.newController"
			})
			.state('home.users.profile', {
				url:"/:id",
				templateUrl:"assets/partials/users.profile.html",
				controller: "users.profileController"
			})
			.state('home.users.edit', {
				url:"/edit/:id",
				templateUrl:"assets/partials/users.edit.html",
				controller: "users.editController"
			});
	});