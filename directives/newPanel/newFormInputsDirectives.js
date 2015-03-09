app.directive('firstNameInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/input/firstNameInput.html"
	};
});

app.directive('lastNameInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/input/lastNameInput.html"
	};
});

app.directive('phoneInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/input/phoneInput.html"
	};
});

app.directive('emailInput', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/newPanel/form/input/emailInput.html"
	};
});