app.directive('usersNew', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../../temp/js/templates.js',
		scope: {
			users: '=',
			newUser: '=',
			addUser: '&',
			uniqueEmail: '@',
			checkEmail: '&',
		}
	};
});