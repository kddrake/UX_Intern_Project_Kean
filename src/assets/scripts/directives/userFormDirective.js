app.directive('userForm', function() {
	return {
		restrict: 'E',
		templateUrl: function(elem, attr) {
			return 'assets/partials/forms/'+attr.type+'Form.html'
		}
	};
})