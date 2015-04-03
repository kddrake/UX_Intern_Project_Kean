describe('Routes', function() {
	//Mock module
	beforeEach(module('app'));

	var location, route, rootScope;
	beforeEach(
		inject(_$location_,_$route_, _$rootScope_) {
			location = _$location_;
			route = _$route_;
			rootScope = _$rootScope_;
		});

	//Test code
});