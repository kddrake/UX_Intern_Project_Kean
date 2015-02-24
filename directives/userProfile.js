(function (){
	var app = angular.module('uxiApp')
		app.directive('userProfile', function(){
			return {
				restrict: 'E',
				templateUrl: 'partials/userProfile.html'
			};
		});
})();