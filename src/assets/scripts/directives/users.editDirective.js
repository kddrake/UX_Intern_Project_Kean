app.directive('usersEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../../temp/js/templates.js',
		scope: {
			modUser: '=',
			userName: '@',
			editUser: '&',
			redirect: '&'
		}
	};
});