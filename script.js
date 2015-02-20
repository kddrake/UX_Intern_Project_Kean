(function (){
	var app = angular.module('uxiApp', ['ngResource','ui.router'])
		app.directive('userProfile', function(){
			return {
				restrict: 'E',
				templateUrl: 'partials/userProfile.html'
			}
		})
})();

