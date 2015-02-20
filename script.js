(function (){
	var app = angular.module('uxiApp', ['ngResource','ui.router'])
		app.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/")
			$stateProvider
				.state('home', {
					url: "/",
					templateUrl:"partials/home.html"
				});
		});
		app.directive('userProfile', function(){
			return {
				restrict: 'E',
				templateUrl: 'partials/userProfile.html'
			}
		})
})();

