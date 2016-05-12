'use strict';

var app = angular.module('xitApp');


app.controller('asd', function($scope, ProfileService, TaskService) {
// app.controller('profilesController', function($scope, ProfileService, TaskService) {
    console.log('profilesCtrl!');


    // TaskService.getAll($scope.tasks)
    // .then(res => {
    //     $scope.tasks = res.data;
    //     var tasks = $scope.tasks;
    // })

	
	ProfileService.getCurrent($scope.user.email)
	.then(res => {
        $scope.user.email = res.data; 

$scope.emailSort();
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.emailSort = function() {
    	var email = $scope.user.email;
    	console.log("YES")
    	ProvileService.emailSort(email)
    	.then( res => {
    		$scope.sortedTasks = res.data;
    		var tasks = $scope.tasks;
    		console.log('email:', email)
    	})
    }

});

app.controller('profilesController', function($rootScope, $scope, TaskService, ProfileService) {

	var email = $rootScope.user.email;
	$scope.user = $rootScope.user;
	$scope.href = $rootScope.user.href;
	

    	console.log("YES");
    	
    	ProfileService.emailSort(email)
    	.then( res => {
    		$scope.tasks = res.data;
    		var tasks = $scope.tasks;
    		console.log('tasks:', tasks)
    		console.log('email:', email)
    		console.log('user:', user);
    	})
 })
app.controller('tasksController', function($scope, TaskService, ProfileService) {
    console.log('tasksCtrl!');
    console.log($scope.user)

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
    	console.log('thistask:', $scope.thisTaskEdit)
        $scope.thisTaskEdit = null;
    }

    $scope.taskForm = true;

	$scope.showTaskForm = function() {
		$taskForm = true;
	}

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
    	console.log($scope.thisTaskEdit);
    	$scope.thisTaskForm = $scope.taskForm;  
    	$scope.tasks.push($scope.thisTaskForm);
    	$scope.updateTask();
    	$scope.thisTaskForm = "null";
    	$scope.taskForm = true;
    
  	}

  	$scope.updateTask = () => {
    	TaskService.update($scope.thisTaskForm)
      	.then(res => {
        	$scope.tasks.forEach((task, i) => {
        	  	if(task._id === res.data._id) {
        	    	$scope.tasks[i] = res.data;
          		}
        	})
        	$scope.thisTaskFrom = null;
      	})
  }

    $scope.removeTask = function(task) {
        TaskService.removeTask(task);
        $scope.tasks.splice(0, 1);
        location.reload;
    }

    $scope.editTask = (task) => {
    	$scope.editFormTask = angular.copy(task); 
    }

       

    $scope.openUserProfile = function(userId) {


    }
 })