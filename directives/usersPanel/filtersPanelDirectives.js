app.directive('filtersPanel', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/usersPanel/filtersPanel.html"
	};
});

app.directive('filterCheckboxes', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/usersPanel/filterCheckboxes.html"
	};
});

app.directive('userSearch', function() {
	return {
		restrict: 'E',
		templateUrl:"partials/bootstrap-items/usersPanel/userSearch.html"
	};
});