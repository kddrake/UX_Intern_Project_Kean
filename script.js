(function (){
	var app = angular.module('uxiApp', ['ngResource','ui.router'])
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
					controller: "listController"
				})
				.state('home.users.new', {
					url:"/new",
					templateUrl:"partials/newUserProfile.html",
					controller: "userController"
				})
				.state('home.users.profile', {
					url:"/:id",
					templateUrl:"partials/userProfile.html",
					controller: "userController"
				})
				.state('home.users.edit', {
					url:"/edit/:id",
					templateUrl:"partials/editUserProfile.html",
					controller: "userController"
				});
		});
})();

