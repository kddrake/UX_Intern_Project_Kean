describe('Service Tests: ', function() {
	var user = {firstName: 'A.', lastName: 'User', phone: '(555) 555-5555', email: 'a.user@gmail.com'};
	beforeEach(module('uxiApp'));

	describe('userService ', function() {
		var userService, promiseFactory, rootScope;
		beforeEach(inject(function (_userService_, _promiseFactory_, $rootScope){ 
			userService = _userService_;
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
			spyOn(userService, 'populateUsersList').and.returnValue([user,]);
			var users = [];

			userService.getUsers;
			expect(userService.users).toContain(user);
		});

	});
});