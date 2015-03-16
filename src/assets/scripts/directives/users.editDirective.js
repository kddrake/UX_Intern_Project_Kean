app.directive('usersEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'assets/partials/users.edit.html',
		scope: {
			user: '=',
			editUser: '&'
		}
	};
});