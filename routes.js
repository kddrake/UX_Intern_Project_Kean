app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/")
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl:"partials/home.html"
			})
			.state('home.users', {
				url:"users",
				templateUrl:"partials/users.html",
				controller: "usersController"
			})
			.state('home.users.new', {
				url:"/new",
				templateUrl:"partials/users.new.html",
				controller:"users.newController"
			})
			.state('home.users.profile', {
				url:"/:id",
				templateUrl:"partials/userProfile.html",
				controller: "profileController"
			})
			.state('home.users.edit', {
				url:"/edit/:id",
				templateUrl:"partials/userProfile.edit.html",
				controller: "profileController.edit"
			});
	});