(function (){
	var app = angular.module('uxiApp');
		app.service('userService', function(userFactory) {
			function create(user) {
				return userFactory.save(user).$promise;
			}

			function get(id) {
				return userFactory.get(id).$promise;
			}

			function list() {
				return userFactory.query().$promise;
			};


			return {
				create: create,
				get: get,
				list: list
			}

		});
})();