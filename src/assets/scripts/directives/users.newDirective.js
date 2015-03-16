app.directive('usersNew', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'assets/partials/users.new.html',
		scope: {
			addUser: '&'
		}
	};
});