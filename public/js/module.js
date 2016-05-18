var app = angular.module('xitApp', ['ui.router', 'stormpath', 'stormpath.templates']);

app.run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'home'
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', { 
			url: '/', 
			templateUrl: '/templates/home.html',
			controller: 'tasksController' 
		})
    	.state('login', { 
    		url: '/login', 
    		templateUrl: '/templates/login.html' 
    	})
    	.state('register', { 
    		url: '/register', 
    		templateUrl: '/templates/register.html' 
    	})
		.state('tasks', {
			url: '/tasks',
			templateUrl: '/templates/tasks.html',
			controller: 'tasksController',
			sp: {
				authenticate: true
			}
		})
		.state('profiles', {
			url: '/profiles',
			templateUrl: '/templates/profiles.html',
			controller: 'profilesController',
			sp: {
				authenticate: true
			}
		})



	$urlRouterProvider.otherwise('/');

});