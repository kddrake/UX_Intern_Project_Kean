(function (){
	var app = angular.module('uxiApp');
		app.controller('profileViewController', function($scope){
			$scope.sizeButton = '-'

			$scope.changeButton = function(){
				if (this.sizeButton === '-')
					this.sizeButton = '+'
				else
					this.sizeButton = '-'
			}
		});
})();