'use strict';

var app = angular.module('xitApp');

app.service('ProfileService', function($http) {
	
	this.emailSort = (email) => {
		return $http.get(`/api/tasks/${email}`);
}
	this.updateProfile = (user) => {
		console.log("SOMETHING")
		return $http.post('/api/tasks/updateProfile', user);
	}	
})


app.service('TaskService', function($http) {

	this.getAll = () => {
    	return $http.get('/api/tasks');
  	};

	this.create = task => {
    	return $http.post('/api/tasks', task);
  	}
	
	this.update = task => {
    	return $http.put(`/api/tasks/${task._id}`, task);
  	}

  	this.removeTask = (task) => {
  		return $http.delete(`/api/tasks/${task._id}`)
  }

})