'use strict';

var app = angular.module('xitApp');


app.controller('profilesController', function($rootScope, $scope, TaskService, ProfileService) {

	var email = $rootScope.user.email;
	$scope.user = $rootScope.user;
	$scope.profilePic = $rootScope.user.customData.profilePic;
	
    	
    ProfileService.emailSort(email)
    .then(res => {
    	$scope.tasks = res.data;
    	var tasks = $scope.tasks;
    })


    $scope.updateProfile = function(thisProfileEdit){
        ProfileService.updateProfile(thisProfileEdit)
        .then(res => {
    	   $scope.user = res.data;
    	   $scope.thisProfileEdit = "";
    	   $scope.showForm = false;
    	   location.reload;
        })
    }   

    $scope.cancelEdit = () => {
    $scope.thisProfileEdit = null;
    $scope.taskForm = true;
    };

 })

app.controller('tasksController', function($scope, TaskService, ProfileService) {

$scope.taskForm = true;

    TaskService.getAll($scope.tasks)
    .then(res => {
        $scope.tasks = res.data;
        var tasks = $scope.tasks;

    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.addTask = function(thisTaskEdit) {
    	TaskService.create($scope.thisTaskEdit);
    	$scope.tasks.push($scope.thisTaskEdit);
        $scope.thisTaskEdit = null;
        $scope.taskForm = true;
    }

    // $scope.taskForm = true;


    // $scope.showTaskForm = function() {
    //     $taskForm = true;
    // }

    $scope.showTaskForm = function() {
        if($scope.taskForm = false) {
    $scope.taskForm = true;  
        } else {
    $scope.taskForm = false;
        };
    };


    $scope.tasks = [];
    $scope.saveTaskForm = function(thisTaskEdit) {
        TaskService.create($scope.thisTaskEdit);
        $scope.thisTaskForm = $scope.taskForm;  
        $scope.tasks.push($scope.thisTaskForm);
        $scope.updateTask();
        $scope.thisTaskForm = "null";
        $scope.taskForm = true;
    
    }

    $scope.editTask = (task) => {
        $scope.thisTaskEdit = task;
        $scope.showTaskForm(); 
        $scope.editFormTask = angular.copy(task); 
    }

    $scope.cancel = () => {
        $scope.thisTaskEdit = null;
        $scope.taskForm = true; 
    };

  	$scope.saveChanges = (thisTaskEdit) => {
    	TaskService.update(thisTaskEdit) 	
      	.then(res => {
        	$scope.tasks.forEach((task, i) => {
        	  	if(task._id === res.data._id) {
        	    	$scope.tasks[i] = res.data;
          		}
        	})
  
        	$scope.tasks.push($scope.thisTaskEdit);
        	$scope.thisTaskEdit = null;
            $scope.taskForm = true; 

      	})
    }



    $scope.removeTask = function(task) {
        TaskService.removeTask(task);
        $scope.tasks.splice(0, 1);
        location.reload;
    }



       

    $scope.openUserProfile = function(userId) {


    }
 })