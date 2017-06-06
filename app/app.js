"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then( (userExists) => {
		if(userExists){
			console.log("Authenticated, go ahead");
			resolve();
		}else {
			console.log("Authentication reject, GO AWAY");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/task-list', {
		templateUrl: 'partials/task-list.html',
		controller: 'TaskListCtrl',
		resolve: {isAuth}
	})
	.when('/tasks/newtask', {
		templateUrl: 'partials/task-form.html',
		controller: 'AddTaskCtrl',
		resolve: {isAuth}
	})
	.when('/tasks/:taskId', {
		templateUrl: 'partials/task-detail.html',
		controller: 'TaskDetailCtrl',
		resolve: {isAuth}
	})
	.when('/tasks/:taskId/edit', {
		templateUrl: 'partials/task-form.html',
		controller: 'EditTaskCtrl',
		resolve: {isAuth}
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});