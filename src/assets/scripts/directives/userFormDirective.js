app.directive('userForm', function() {
	return {
		restrict: 'E',
		templateUrl: function(elem, attr) {
			return 'partials/forms/'+attr.type+'Form.html'
		}
	};
})