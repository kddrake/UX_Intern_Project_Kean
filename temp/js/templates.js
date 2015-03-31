app.run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partials/deleteModal.html',
    "<div class=\"modal-header modal-header-danger\">\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<h4 class=\"modal-title\">\n" +
    "\t\t\t\tDelete User: {{user.firstName + \" \" + user.lastName}}?\n" +
    "\t\t\t</h4>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<button class=\"btn btn-danger\" \n" +
    "\t\t\t\t\tng-click=\"ok()\">Delete</button>\n" +
    "\t\t\t<a ui-sref=\"users.profile({id: user._id})\"\n" +
    "\t\t  \t   class=\"btn btn-primary\"\n" +
    "\t\t   \t   ng-click=\"cancel()\">Cancel</a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/forms/editForm.html',
    "<form name=\"editForm\" class=\"form-horizontal\">\n" +
    "\t<div class=\"row\">\t\n" +
    "\t\t<div class=\"col-md-12\">\t\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': editForm.first.$valid,\n" +
    "\t\t\t\t \t\t\t'has-error': editForm.first.$invalid &&\n" +
    "\t\t\t\t \t\t\t\t\t\t editForm.first.$dirty}\">\n" +
    "\t\t\t\t<label for=\"firstName\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">First Name:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\t\n" +
    "\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t<input type=\"text\"  \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"first\"\n" +
    "\t\t\t\t\t\t\t   id=\"firstName\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"modUser.firstName\" \n" +
    "\t\t\t\t\t\t\t   placeholder=\"{{user.firstName}}\"\n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-maxlength=32>\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"editForm.first.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"editForm.first.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       editForm.first.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\"\n" +
    "\t\t ng-show=\"editForm.first.$invalid &&\n" +
    "\t\t \t      editForm.first.$dirty\">\n" +
    "\t\t<div class=\"col-md-7 col-md-offset-5\">\n" +
    "\t\t\t<div class=\"panel panel-xs panel-danger\">\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t ng-show=\"editForm.first.$error.required\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A first name is required.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t   ng-show=\"editForm.first.$error.maxlength\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A first name cannot be longer than 32 characters.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\t\n" +
    "\t\t<div class=\"col-md-12\">\t\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': editForm.last.$valid,\n" +
    "\t\t\t\t \t\t\t'has-error': editForm.last.$invalid &&\n" +
    "\t\t\t\t \t\t\t\t\t\t editForm.last.$dirty}\">\t\n" +
    "\t\t\t\t<label for=\"lastName\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">Last Name:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\t\n" +
    "\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"last\"\n" +
    "\t\t\t\t\t\t\t   id=\"lastName\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"modUser.lastName\" \n" +
    "\t\t\t\t\t\t\t   placeholder=\"{{user.lastName}}\"\n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-maxlength=32>\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"editForm.last.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"editForm.last.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       editForm.last.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\"\n" +
    "\t\t ng-show=\"editForm.last.$invalid &&\n" +
    "\t\t \t      editForm.last.$dirty\">\n" +
    "\t\t<div class=\"col-md-7 col-md-offset-5\">\n" +
    "\t\t\t<div class=\"panel panel-xs panel-danger\">\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t ng-show=\"editForm.last.$error.required\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A last name is required.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t   ng-show=\"editForm.last.$error.maxlength\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A last name cannot be longer than 32 characters.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\t\n" +
    "\t\t<div class=\"col-md-12\">\t\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': editForm.phone.$valid,\n" +
    "\t\t\t\t \t    \t'has-error': editForm.phone.$invalid &&\n" +
    "\t\t\t\t \t    \t\t\t\t editForm.phone.$dirty}\">\t\n" +
    "\t\t\t\t<label for=\"phone\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">Phone Number:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\n" +
    "\t\t\t\t\t<div class=\"input-group\">\t\n" +
    "\t\t\t\t\t\t<input type=\"tel\" \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"phone\"\n" +
    "\t\t\t\t\t\t\t   id=\"phone\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"modUser.phone\"\n" +
    "\t\t\t\t\t\t\t   placeholder=\"{{user.phone}}\" \n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-minlength=10\n" +
    "\t\t\t\t\t\t\t   ng-maxlength=15>\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"editForm.phone.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"editForm.phone.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       editForm.phone.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\"\n" +
    "\t\t ng-show=\"editForm.phone.$invalid &&\n" +
    "\t\t \t      editForm.phone.$dirty\">\n" +
    "\t\t<div class=\"col-md-7 col-md-offset-5\">\n" +
    "\t\t\t<div class=\"panel panel-xs panel-danger\">\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t ng-show=\"editForm.phone.$error.required\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A phone number is required.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t   ng-show=\"editForm.phone.$error.minlength\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A phone number cannot be less than 10 characters.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"panel-heading panel-danger\"\n" +
    "\t\t\t\t\t   ng-show=\"editForm.phone.$error.maxlength\">\n" +
    "\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t<small>A phone number cannot be longer than 15 characters.</small>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\t\n" +
    "\t\t<div class=\"col-md-12\">\t\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': editForm.email.$valid,\n" +
    "\t\t\t\t \t\t\t'has-error': editForm.email.$invalid &&\n" +
    "\t\t\t\t \t\t\t\t\t\t editForm.email.$dirty}\">\t\n" +
    "\t\t\t\t<label for=\"email\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">Email Address:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\n" +
    "\t\t\t\t\t<p class=\"form-control-static\">{{modUser.email}}</p>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    " \t<a ui-sref=\"users\"\n" +
    "\t   class=\"btn btn-default btn-warning pull-right\"\n" +
    "\t   ng-disabled=\"editForm.$invalid\"\n" +
    "\t   ng-click=\"editUser(modUser)\">Apply Changes</a>\n" +
    "</form>"
  );


  $templateCache.put('partials/forms/newForm.html',
    "<form name=\"newForm\" class=\"form-horizontal\">\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': newForm.first.$valid,\n" +
    "\t\t\t\t \t\t\t'has-error': newForm.first.$invalid &&\n" +
    "\t\t\t\t \t\t\t\t\t\t newForm.first.$dirty}\">\n" +
    "\t\t\t\t<label for=\"firstName\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">First Name:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\t\n" +
    "\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t<input type=\"text\"  \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"first\"\n" +
    "\t\t\t\t\t\t\t   id=\"firstName\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"newUser.firstName\" \n" +
    "\t\t\t\t\t\t\t   placeholder=\"First name\"\n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-maxlength=32>\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.first.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.first.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       newForm.first.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel panel-xs panel-danger\"\n" +
    "\t\t\t\t\t\t ng-show=\"newForm.first.$dirty && newForm.first.$invalid\">\n" +
    "\t\t\t\t\t\t<div ng-messages=\"newForm.first.$error\">\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"required\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>A first name is required</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"maxlength\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>A first name cannot be longer than 32 characters</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': newForm.last.$valid,\n" +
    "\t\t\t\t \t\t\t'has-error': newForm.last.$invalid &&\n" +
    "\t\t\t\t \t\t\t\t\t\t newForm.last.$dirty}\">\t\n" +
    "\t\t\t\t<label for=\"lastName\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">Last Name:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\t\n" +
    "\t\t\t\t\t<div class=\"input-group\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"last\"\n" +
    "\t\t\t\t\t\t\t   id=\"lastName\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"newUser.lastName\" \n" +
    "\t\t\t\t\t\t\t   placeholder=\"Last name\"\n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-maxlength=32>\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.last.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.last.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       newForm.last.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel panel-xs panel-danger\"\n" +
    "\t\t\t\t\t\t ng-show=\"newForm.last.$dirty && newForm.last.$invalid\">\n" +
    "\t\t\t\t\t\t<div ng-messages=\"newForm.last.$error\">\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"required\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>A last name is required</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"maxlength\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>A last name cannot be longer than 32 characters</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': newForm.phone.$valid,\n" +
    "\t\t\t\t \t    \t'has-error': newForm.phone.$invalid &&\n" +
    "\t\t\t\t \t    \t\t\t\t newForm.phone.$dirty}\">\t\n" +
    "\t\t\t\t<label for=\"phone\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">Phone Number:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\n" +
    "\t\t\t\t\t<div class=\"input-group\">\t\n" +
    "\t\t\t\t\t\t<input type=\"tel\" \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"phone\"\n" +
    "\t\t\t\t\t\t\t   id=\"phone\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"newUser.phone\" \n" +
    "\t\t\t\t\t\t\t   placeholder=\"xxx-xxx-xxxx\"\n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-pattern=\"/^\\(?(\\d{3})\\)?[-|' ']?(\\d{3})[-|' ']?(\\d{4})$/\">\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.phone.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.phone.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       newForm.phone.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel panel-xs panel-danger\"\n" +
    "\t\t\t\t\t\t ng-show=\"newForm.phone.$dirty && newForm.phone.$invalid\">\n" +
    "\t\t\t\t\t\t<div ng-messages=\"newForm.phone.$error\">\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"required\" class=>\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>An phone number is required.</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"pattern\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>A phone number must match any combination the following patters: xxxxxxxxxx, xxx xxx xxxx, xxx-xxx-xxxx</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"form-group\"\n" +
    "\t\t\t\t ng-class=\"{'has-success': newForm.email.$valid && newForm.email.$dirty,\n" +
    "\t\t\t\t \t\t\t'has-error': newForm.email.$invalid && newForm.email.$dirty}\">\t\n" +
    "\t\t\t\t<label for=\"email\"\n" +
    "\t\t\t\t\t   class=\"col-md-5 form-label\">Email Address:</label>\n" +
    "\t\t\t\t<div class=\"col-md-7\">\n" +
    "\t\t\t\t\t<div class=\"input-group\">\t\n" +
    "\t\t\t\t\t\t<input type=\"email\" \n" +
    "\t\t\t\t\t\t\t   class=\"form-control input-sm\"\n" +
    "\t\t\t\t\t\t\t   name=\"email\"\n" +
    "\t\t\t\t\t\t\t   id=\"email\"\n" +
    "\t\t\t\t\t\t\t   placeholder=\"user@domain.com\"\n" +
    "\t\t\t\t\t\t\t   ng-model=\"newUser.email\"\n" +
    "\t\t\t\t\t\t\t   ng-change=\"checkEmail(newUser.email)\"\n" +
    "\t\t\t\t\t\t\t   required\n" +
    "\t\t\t\t\t\t\t   ng-minlength=6>\n" +
    "\t\t\t\t\t\t<span class=\"input-group-addon input-addon\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.email.$valid\"></span>\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle form-control-feedback input-glyphicon\"\n" +
    "\t\t\t\t\t\t\t\t  ng-show=\"newForm.email.$invalid &&\n" +
    "\t\t\t\t\t\t\t  \t\t       newForm.email.$dirty\"></span>\n" +
    "\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel panel-xs panel-danger\"\n" +
    "\t\t\t\t\t\t ng-show=\"newForm.email.$dirty && newForm.email.$invalid\">\n" +
    "\t\t\t\t\t\t<div ng-messages=\"newForm.email.$error\">\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"required\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>An email address is required</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"minlength\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>An email address must contain more 5 characters.</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div ng-message=\"email\">\n" +
    "\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\n" +
    "\t\t\t\t\t\t\t\t<small>An email address must follow the pattern: user@domain</small>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<a ui-sref=\"users\" \n" +
    "\t   class=\"btn btn-success pull-right\"\n" +
    "\t   ng-disabled=\"newForm.$invalid || newForm.$pristine || !uniqueEmail\"\n" +
    "\t   ng-click=\"addUser(newUser)\">Add User</a>\n" +
    "</form>"
  );


  $templateCache.put('partials/users.edit.html',
    "<div class=\"panel panel-warning\">\n" +
    "\t<div class=\"panel-heading\">\n" +
    "\t\t<h1 class=\"panel-title\">\n" +
    "\t\t\t<b>Edit: </b>\n" +
    "\t\t\t{{userName}}\n" +
    "\t\t\t<a ui-sref=\"users\" \n" +
    "\t   \t\t   class=\"close\">\n" +
    "\t   \t\t   <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "\t   \t\t</a>\n" +
    "\t   </h1>\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-body panel-default\">\n" +
    "\t\t<user-form type=\"edit\"></user-form>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/users.html',
    "<div class=\"row\">\n" +
    "\t<div class=\"col-md-4\">\n" +
    "\t\t<div class=\"panel panel-primary fixed-panel\">\n" +
    "\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t<h3 class=\"panel-title\">\n" +
    "\t\t\t\t\tUsers\n" +
    "\t\t\t\t\t<div class=\"btn-group pull-right\" role=\"group\">\n" +
    "\t\t\t\t\t\t<button type=\"button\" \n" +
    "\t\t\t\t\t\t \t     class=\"btn btn-info btn-xs\"\n" +
    "\t\t\t\t\t\t\t\t ng-click=\"filters = !filters\"\n" +
    "\t\t\t\t\t\t\t\t tooltip=\"Display Filters\"\n" +
    "\t\t\t\t\t\t\t\t tooltip-placement=\"bottom\"\n" +
    "\t\t\t\t\t\t\t\t tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t\t\t\t\t\t tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t\t\t\t\t\t tooltip-append-to-body=\"true\">\n" +
    "\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-search\"></span>\n" +
    "\t\t\t\t\t\t</button>\n" +
    "\t\t\t\t\t\t<a ui-sref=\"users.new\"\n" +
    "\t\t\t\t\t   \t   class=\"btn btn-success btn-xs\"\n" +
    "\t\t\t\t\t   \t   tooltip=\"Add User\"\n" +
    "\t\t\t\t\t\t   tooltip-placement=\"bottom\"\n" +
    "\t\t\t\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t\t\t\t   tooltip-append-to-body=\"true\">\n" +
    "\t\t\t\t\t   \t\t<span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</h3>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"panel-body panel-info\">\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-12 fixed-panel-scroll\">\t\n" +
    "\t\t\t\t\t\t<accordion close-others=\"true\">\n" +
    "\t\t\t\t\t\t\t<accordion-group heading=\"{{user.firstName + ' ' + user.lastName}}\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-repeat=\"user in users | filter: search | orderBy: orderRadio: reverse\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row userButtonBar\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\t\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-sm btn-group-justified\" role=\"group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-info\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"userInfo.phone\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"phone = !phone\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip=\"View Phone Number\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-placement=\"top\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-append-to-body=\"true\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   btn-checkbox>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-phone\"></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-info\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"userInfo.email\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"email = !email\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip=\"View Email Address\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-placement=\"top\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   tooltip-append-to-body=\"true\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   btn-checkbox>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-envelope\"></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-sm btn-group-justified\" role=\"group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"users.profile({id: user._id})\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"selectUser()\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip=\"View {{user.firstName}}'s Profile\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-placement=\"top\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-append-to-body=\"true\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   class=\"btn btn-info btn-sm\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-eye-open\"></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a ui-sref=\"users.edit({id: user._id})\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"selectUser(); createEditUser()\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip=\"Edit {{user.firstName}}'s Profile\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-placement=\"top\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   tooltip-append-to-body=\"true\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t   class=\"btn btn-warning\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-pencil\"></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\t\t\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-info\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-show=\"phone\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading user-panel-header\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"panel-title\">Phone</h5>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body user-panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t{{user.phone}}\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-info\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-show=\"email\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading user-panel-header\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"panel-title\">Email</h5>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body user-panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t{{user.email}}\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</accordion-group>\n" +
    "\t\t\t\t\t\t</accordion>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col-md-8\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-8\"\n" +
    "\t\t\t\t ng-show=\"filters\">\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t<div class=\"panel panel-info\">\n" +
    "\t\t\t\t\t\t\t<div class=\"panel-body panel-filter\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row\">\t\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-info filter-panel\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading search-panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\tSearch By\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t    class=\"btn close pull-right\" \n" +
    "\t\t\t\t\t\t\t   \t\t   \t\t   \t\tng-click=\"filters = !filters\">\n" +
    "\t\t\t\t\t\t\t   \t\t   \t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "\t\t\t\t\t\t\t   \t\t\t\t</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-xs btn-group-justified\" role=\"group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"filterBy.firstName\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"filterFirst = !filterFirst;\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   \t\t\t search.firstName = ''\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   btn-checkbox>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tFirst\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"filterBy.lastName\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"filterLast = !filterLast; \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   \t\t\t search.lastName = ''\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   btn-checkbox>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tLast\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"filterBy.phone\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"filterPhone = !filterPhone;; \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   \t\t\t search.phone = ''\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   btn-checkbox>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tPhone\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"filterBy.email\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-click=\"filterEmail = !filterEmail;;\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   \t\t\t search.email = ''\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   btn-checkbox>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tEmail\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row\">\t\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\t\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group search-bars\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-show=\"filterFirst\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon user-search-addon\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<b>F</b>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"search.firstName\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Search by first name\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group search-bars\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-show=\"filterLast\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon user-search-addon\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<b>L</b>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"search.lastName\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Search by last name\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group search-bars\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-show=\"filterPhone\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon user-search-addon\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-phone\"></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"search.phone\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Search by phone\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"input-group search-bars\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t ng-show=\"filterEmail\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon user-search-addon\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-envelope\"></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   class=\"form-control\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   ng-model=\"search.email\" \n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t   placeholder=\"Search by email\">\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-info filter-panel\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading filter-panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\tOrder By\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel panel-info filter-panel\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading filter-panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\tSort By\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-xs btn-group-justified\" role=\"group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" ng-model=\"orderRadio\" btn-radio=\"'firstName'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tFirst\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" ng-model=\"orderRadio\" btn-radio=\"'lastName'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tLast\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" ng-model=\"orderRadio\" btn-radio=\"'phone'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tPhone\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" ng-model=\"orderRadio\" btn-radio=\"'email'\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tEmail\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group-xs btn-group-justified\" role=\"group\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" ng-model=\"reverse\" btn-radio=\"false\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tIn Order\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<label class=\"btn btn-primary\" ng-model=\"reverse\" btn-radio=\"true\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\tReverse\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</label>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t<div ui-view></div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('partials/users.new.html',
    "<div class=\"panel panel-success\">\n" +
    "\t<div class=\"panel-heading\">\n" +
    "\t\t<h1 class=\"panel-title\">\n" +
    "\t\t\t<b>New User</b>\n" +
    "\t\t\t<a ui-sref=\"users\" \n" +
    "\t   \t\t   class=\"close\">\n" +
    "\t   \t\t   <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "\t   \t\t</a>\n" +
    "\t   </h1>\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-body panel-default\">\n" +
    "\t\t<user-form type=\"new\"></user-form>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('partials/users.profile.html',
    "<div class=\"panel panel-primary\">\n" +
    "\t<div class=\"panel-heading\">\n" +
    "\t\t<h1 class=\"panel-title\">\n" +
    "\t\t\t<b>{{user.firstName + \" \" + user.lastName}}</b>\n" +
    "\t\t\t<a ui-sref=\"users\" \n" +
    "\t   \t\t   class=\"close\">\n" +
    "\t   \t\t   <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "\t   \t\t</a>\n" +
    "\t   \t</h1>\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-body\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-info\">\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h3 class=\"panel-title\">Phone</h3>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t{{user.phone}}\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t<div class=\"panel panel-info\">\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h3 class=\"panel-title\">Email</h3>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t{{user.email}}\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"panel-footer panel-info\">\n" +
    "\t\t\t<a ui-sref=\"users.edit({id: user._id})\" \n" +
    "\t\t\t   class=\"btn btn-warning pull-right\"\n" +
    "\t\t\t   ng-click=\"createEditUser()\"\n" +
    "\t\t\t   tooltip=\"Edit {{user.firstName}}'s Profile\"\n" +
    "\t\t\t   tooltip-placement=\"bottom\"\n" +
    "\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t   tooltip-append-to-body=\"true\">\n" +
    "\t\t\t\t<span class=\"glyphicon glyphicon-pencil\"></span>\n" +
    "\t\t\t</a>\n" +
    "\t  \t\t<a ui-sref=\"users\"\n" +
    "\t  \t\t   class=\"btn btn-danger\" \n" +
    "\t  \t\t   ng-click=\"openModal('sm')\"\n" +
    "\t  \t\t   tooltip=\"Delete {{user.firstName}}'s Profile\"\n" +
    "\t\t\t   tooltip-placement=\"bottom\"\n" +
    "\t\t\t   tooltip-trigger=\"mouseenter\"\n" +
    "\t\t\t   tooltip-popup-delay=\"1000\"\n" +
    "\t\t\t   tooltip-append-to-body=\"true\">\n" +
    "\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n" +
    "\t\t\t</a>\n" +
    "\t</div>\n" +
    "</div>\n"
  );
}]);
