app.directive('usersEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/views/users.edit.html',
		scope: {
			modUser: '=',
			userName: '@',
			editUser: '&',
			redirect: '&'
		}
	};
});