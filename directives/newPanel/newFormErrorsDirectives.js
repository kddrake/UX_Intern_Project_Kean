app.directive('newFirstNameErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/errors/firstNameErrors.html"
	};
});

app.directive('newLastNameErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/errors/lastNameErrors.html"
	};
});

app.directive('newPhoneErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/errors/phoneErrors.html"
	};
});

app.directive('newEmailErrors', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/errors/emailErrors.html"
	};
});