app.directive('usersNew', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/views/users.new.html',
		scope: {
			users: '=',
			newUser: '=',
			addUser: '&',
			uniqueEmail: '@',
			checkEmail: '&',
		}
	};
});