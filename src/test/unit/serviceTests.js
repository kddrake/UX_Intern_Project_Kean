describe('Service Tests: ', function() {
	
	var user = {_id: 0001, firstName: 'A.', lastName: 'User', phone: '(555) 555-5555', email: 'a.user@gmail.com'};
	var $q, $rootScope;
	beforeEach(module('uxiApp'));
	beforeEach(inject(function(_$q_, _$rootScope_) {
		$q = _$q_;
		$rootScope = _$rootScope_;
	}));

	describe('userService ', function() {
		
		var userService, promiseFactory;
		beforeEach(inject(function (_userService_, _promiseFactory_){ 
			userService = _userService_;
			promiseFactory = _promiseFactory_;
		}));

		it('should add a user', function() {
	
		});

		it('should edit a user', function() {

		});

		it('should set current user', function() {

		});

		it('should delete a user', function() {

		});

		it('should get users', function() {
			
		});

	});

	describe('promiseFactory', function() {
		var resource;
		beforeEach(inject(function(_promiseFactory_) {
			promiseFactory = _promiseFactory_;
		}))

		it('should return a create promise', function() {

		});
	})
});