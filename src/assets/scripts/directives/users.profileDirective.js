app.directive('usersProfile', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../../temp/js/templates.js',
		scope: {
			user: '=',
			deleteUser: '&',
			createEditUser: '&',
			openModal:'&',
			redirect: '&'
		}
	};
});