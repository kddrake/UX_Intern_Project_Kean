(function (){
	var app = angular.module('uxiApp');
		app.controller('userController', function($scope) {
			$scope.users = [{name: 'User 1'},
							{name: 'User 2'},
							{name: 'User 3'},
							{name: 'User 4'}];
		})
})();