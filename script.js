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
					templateUrl:"partials/users.html"
				})
				.state('home.users.profile', {
					url:"/:_id",
					templateUrl:"partials/userProfile.html"
				});
		});
})();

