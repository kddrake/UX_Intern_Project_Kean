app.directive('usersProfile', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'assets/partials/users.profile.html',
		scope: {
			user: '=',
			deleteUser: '&'
		}
	};
});