app.directive('editFirstNameInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/input/firstNameInput.html"
	};
});

app.directive('editLastNameInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/input/lastNameInput.html"
	};
});

app.directive('editPhoneInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/input/phoneInput.html"
	};
});

app.directive('editEmailInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/editPanel/form/input/emailInput.html"
	};
});