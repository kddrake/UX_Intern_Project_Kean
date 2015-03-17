app.directive('usersEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'assets/partials/users.edit.html',
		scope: {
			modUser: '=',
			userName: '@',
			editUser: '&',
			redirect: '&'
		}
	};
});