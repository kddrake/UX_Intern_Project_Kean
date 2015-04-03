describe('User Service', function(){
	it('should add user', inject(function (userService) {
		var user = {firstName: 'A', lastName: 'B', phone: '5555555555', email: 'ab@ab.com'};
		expect(userService.addUser(user)).toBe({firstName: 'A', lastName: 'B', phone: '5555555555', email: 'ab@ab.com'});
	});
});