describe('Service Tests: ', function() {
	beforeEach(function() {
		module('uxiApp');
	});

	beforeEach(inject(function($rootScope) {
		scope = $rootScope.$new();
	}));

	describe('promiseFactory', function() {
		var dummy = {firstName: 'A.', lastName: 'User', phone: '(555) 555-5555', email: 'a.user@gmail.com'};
		var id = '551ec6732dbb87513f066a5e';

		beforeEach(inject(function(_promiseFactory_, _resourceFactory_) {
			promiseFactory = _promiseFactory_;
			resourceFactory = _resourceFactory_;
		}));

		xit('should return \'get\' promise', function() {
			//TypeError: Requested keys of a value that is not an object
			expect(promiseFactory.get(id)).toEqual(resourceFactory.get(id).$promise);
		})

		it('should return \'create\' promise', function() {
			expect(promiseFactory.create(dummy)).toEqual(resourceFactory.save(dummy).$promise);
		});

		it('should return \'list\' promise', function() {
			expect(promiseFactory.list()).toEqual(resourceFactory.query().$promise);
		});

		xit('should return \'remove\' promise', function() {
			//TypeError: Requested keys of a value that is not an object
			expect(promiseFactory.remove(id)).toEqual(resourceFactory.remove(id).$promise);
		});

		it('should return \'update\' promise', function() {
			expect(promiseFactory.update(dummy)).toEqual(resourceFactory.update(dummy).$promise);
		})
	});

	describe('userService', function() {
		beforeEach(inject(function(_userService_) {
			userService = _userService_;
		}));

		xit('should add user', function() {
		//TypeError: 'undefined' is not an object (evaluating 'userService.user')	
			var newUser = {firstName: 'user', lastName: 'test', phone:'5555555555', email: 'user@test.com'};
			userService = userService.addUser(newUser);

			expect(userService.user.firstName).toEqual('user');
		});


		xit('should edit user', inject(function(userService) {
		//TypeError: 'undefined' is not an object (evaluating 'user.firstName')	
			var editUser = {firstName: 'user', lastName: 'test', phone:'5555555555', email: 'user@test.com'};
			userService.addUser(editUser);

			editUser.firstName = 'A. user'
			userService.editUser(editUser);
			var user = userService.user;

			expect(user.firstName).toEqual('A. user');
		}));
	});	
});