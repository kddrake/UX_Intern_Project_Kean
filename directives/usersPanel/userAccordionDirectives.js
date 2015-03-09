app.directive('userAccordion', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/usersPanel/userAccordion.html"
	};
});

app.directive('userButtonBar', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/usersPanel/userButtonBar.html"
	};
});

app.directive('userInfoPanel', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/usersPanel/userInfoPanel.html"
	}
})