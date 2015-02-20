(function (){
	var app = angular.module('uxiApp', ['ngResource','ui.router'])
		app.controller('profileViewController', function($scope){
			$scope.sizeButton = '-'

			$scope.changeButton = function(){
				if (this.sizeButton === '-')
					this.sizeButton = '+'
				else
					this.sizeButton = '-'
			}
		})
		app.directive('userProfile', function(){
			return {
				restrict: 'E',
				templateUrl: 'partials/userProfile.html'
			}
		})
})();

