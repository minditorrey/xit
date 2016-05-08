var app = angular.module('myFaceApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('users', {
			url: '/',
			templateUrl: '/templates/users.html',
			controller: 'usersController'
		})
		.state('register', {
			url: '/register',
			templateUrl: '/templates/users.html',
			controller: 'usersController'
		})



	$urlRouterProvider.otherwise('/');

});