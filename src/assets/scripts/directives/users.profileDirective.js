app.directive('usersProfile', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'partials/views/users.profile.html',
		scope: {
			user: '=',
			deleteUser: '&',
			createEditUser: '&',
			openModal:'&',
			redirect: '&'
		}
	};
});