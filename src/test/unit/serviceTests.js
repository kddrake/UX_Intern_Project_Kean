describe('Service Tests:', function() {
	
	var user = {_id: 0001, firstName: 'A.', lastName: 'User', phone: '(555) 555-5555', email: 'a.user@gmail.com'};
	var users = [user, {_id: 0002, firstName: 'B.', lastName: 'User', phone:'5555555555', email:'b.user@gmail.com'}];
	var $q, $rootScope;
	beforeEach(module('uxiApp'));
	beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
		
		getHandler = $httpBackend.whenGET('http://localhost:24149/users').respond(users);
		postHandler = $httpBackend.whenPOST('http://localhost:24149/users').respond(user);
		putHandler = $httpBackend.whenPUT('http://localhost:24149/users/1').respond(user);
		deleteHandler = $httpBackend.whenDELETE('http://localhost:24149/users/1').respond(users[1]);
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('userService', function() {

		beforeEach(inject(function (_userService_) {
			userService = _userService_;
		}));

		it('should get users list from database via GET/QUERY request', function() {
			$httpBackend.expect('GET', 'http://localhost:24149/users');
			userService.getUsers();
			$httpBackend.flush();
		});

		it('should add a user to database via POST request', function() {
			$httpBackend.expect('POST', 'http://localhost:24149/users');
			userService.addUser();
			$httpBackend.flush();
		});

		it('should edit a user and save to database via PUT request', function() {
			$httpBackend.expect('PUT', 'http://localhost:24149/users/1');
			userService.editUser(user);
			$httpBackend.flush();
		});

		it('should delete a user from database via DELETE request', function() {
			$httpBackend.expect('DELETE', 'http://localhost:24149/users/1');
			userService.deleteUser(user);
			$httpBackend.flush();
		});

	});

});