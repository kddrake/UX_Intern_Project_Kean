app.directive('editFirstNameErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/errors/firstNameErrors.html"
	};
});

app.directive('editLastNameErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/errors/lastNameErrors.html"
	};
});

app.directive('editPhoneErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/errors/phoneErrors.html"
	};
});

app.directive('editEmailErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/errors/emailErrors.html"
	};
});