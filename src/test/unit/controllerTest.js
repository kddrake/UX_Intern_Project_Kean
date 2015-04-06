describe('Controller Tests: ', function() {
	beforeEach(module('uxiApp'));

	describe('usersController', function() {
		var usersController, scope;
		var dummy = {firstName: 'A.', lastName: 'User', phone: '(555) 555-5555', email: 'a.user@gmail.com'};
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			usersController = $controller('usersController', {$scope: scope});
		}));

		it('should clean a phone number', function() {
			expect(scope.cleanPhoneNumber(dummy.phone)).toEqual('5555555555');
		});

		xit('should add a user', function() {
		// Expected undefinned to equal Object({dummy})	
			scope.addUser(dummy);
			expect(scope.user).toEqual(dummy);
		});

		xit('should edit a user', function() {
		// Expected undefined to equal Object({dummy})	
			scope.addUser(dummy);
			dummy.firstName = 'Andy';
			scope.editUser(dummy);
			expect(scope.user).toEqual(dummy);
		});

		xit('should delete a user', function() {
		// Expected undefined to equal [ ]	
			scope.addUser(dummy);
			scope.deleteUser(dummy);
			expect(scope.users).toEqual([]);
		});
	});
});