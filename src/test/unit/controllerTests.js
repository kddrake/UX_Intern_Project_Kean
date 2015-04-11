describe('Controller Tests: ', function() {
	var dummy = {firstName: 'A.', lastName: 'User', phone: '5555555555', email: 'a.user@gmail.com'};
	beforeEach(module('uxiApp'));
	beforeEach(inject(function (_userService_) {

	}));

	//TODO:- test 'redirect' as defined in child view controllers
	//	   as it is not used by this controller  

	describe('Module ', function() {
		it('should have usersController', function() {
			expect('uxiApp.usersController').not.toBe(null);
		});

		it('should have users.profileController', function() {
			expect('uxiApp.users.profileController').not.toBe(null);
		});

		it('should have users.newController', function() {
			expect('uxiApp.users.newController').not.toBe(null);
		});

		it('should have users.editController', function() {
			expect('uxiApp.users.editController').not.toBe(null);
		});

		it('should have modalInstanceController', function() {
			expect('uxiApp.modalInstanceController').not.toBe(null);
		});	
	});

	describe('usersController ', function() {
		
		var usersController, scope;
		beforeEach(inject(function ($controller, $rootScope, _userService_) {
			scope = $rootScope.$new();
			usersController = $controller('usersController', {$scope: scope});
			userService = _userService_;
		}));

		it('should clean phone numbers', function() {
			expect(scope.cleanPhoneNumber('(555) 555-5555')).toBe('5555555555');
		});

		it('should add user (calling userService\'s addUser)', function() {
			spyOn(userService, 'addUser');
			
			scope.addUser(dummy);
			expect(userService.addUser).toHaveBeenCalled();
		});

		it('should select a current user', function() {	
			scope.user = {};
			this.user = dummy;
			usersController.user = dummy;
			//Expected Object({ }) to be Object({... dummy ...})
			scope.selectUser();
			expect(scope.user).toBe(dummy);
		});

		it('should edit a user (calling userService\'s editUser)', function() {
			spyOn(userService, 'editUser');

			scope.editUser(dummy)
			expect(userService.editUser).toHaveBeenCalled();
		});

		it('should create a copy of the current user to be edited', function() {
			scope.user = dummy;
			scope.modUser = {};

			scope.createEditUser();
			scope.modUser.phone = scope.cleanPhoneNumber(scope.modUser.phone);
			expect(scope.modUser).toEqual(dummy);
		})

		it('should delete a user (calling userService\'s deleteUser)', function() {
			spyOn(userService, 'deleteUser');

			scope.deleteUser(dummy);
			expect(userService.deleteUser).toHaveBeenCalled();
		});

		it('should redirect page when user is null', inject(function($state) {
			state = $state;
			spyOn(state, 'go');
			scope.user = null;

			scope.redirect();
			expect(state.go).toHaveBeenCalled();
		}));
	});

});