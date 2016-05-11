'use strict';

var app = angular.module('xitApp');


app.controller('profilesController', function($scope, $user) {
    console.log('profileCtrl!');
    $user.get()
    .then(user => {
    	console.log('user:', user);
    })
    .catch(err => {
    	console.error(err);
    })

});

app.controller('tasksController', function($scope) {
    console.log('tasksCtrl!');

	// $scope.showTable = ()

    $scope.editTask = (task) => {
    $scope.editFormTask = angular.copy(task); 
    }

    $scope.openUserProfile = function(userId) {


    }
 //    $scope.removeTask = () => {
 //    if($scope.houses.dogs !== -1) {
 //        HouseSvc.removeDog($scope.house, $scope.selectedDog)
 //        .then (res => {
 //            $scope.selectedDog = "";
 //            $scope.house = "";
 //        })
 //    }
	// }
 //    else {
 //        alert("There is no dog in this house!");
 //        $scope.selectedDog = "";
 //        $scope.house = "";    
 //    }
    

});