(function (){
	var app = angular.module('uxiApp');
		app.service('promiseService', function(userFactory) {
			function get(id) {
				return userFactory.get(id).$promise;
			};

			function create(user) {
				return userFactory.save(user).$promise;
			};

			function list() {
				return userFactory.query().$promise;
			};

			function remove(id) {
				return userFactory.remove(id).$promise;
			};

			function update(id) {
				return userFactory.update(id).$promise;
			};

			return {
				get: get,
				create: create,
				list: list,
				remove: remove,
				update: update
			}

		});
})();