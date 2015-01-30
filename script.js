(function (){
	var app = angular.module('uxiApp', ['ngResource','ui.router'])
		app.controller('profileViewController', function($scope){
			$scope.sizeButton = '-'

			$scope.changeButton = function(){
				if (this.sizeButton === '-')
					this.sizeButton = '+'
				else
					this.sizeButton = '-'
			}
		})
		app.directive('userProfile', function(){
			return {
				restrict: 'E',
				template: '\
					<div ng-model=\"userProfileView\" ng-controller=\"profileViewController\" ng-class=\"{maxProfile: !hideUserData, minProfile: hideUserData}\">\
						<fieldset id=\"profileFieldset\" ng-class=\"{maxFieldset: !hideUserData, minFieldset: hideUserData}\">\
						<div class=\"profileHead\">\
							<label>user.lastName, user.firstName</label>\
							<hr>\
						</div>\
							<table ng-show=\"!hideUserData\" id=\"userData\">\
								<tr>\
									<th>Phone:</th>\
									<th>Email:</th>\
								</tr>\
								<tr>\
									<td>user.phone</td>\
									<td>user.email</td>\
								</tr>\
							</table>\
							<button type=\"button\" id=\"userButton\" ng-click=\"hideUserData = !hideUserData; changeButton()\">{{sizeButton}}</button>\
						</fieldset>\
					</div>\
				<html>'
			}
		})
})();

