'use strict';

var app = angular.module('xitApp');

app.service('UserService', function($http) {
	this.register = userObj => {
		return $http.post('/api/tasks/register', userObj);	
	};


})


app.service('TaskService', function($http) {

})