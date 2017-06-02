"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/task-list.html',
		controller: 'TaskListCtrl'
	})
	.when('/tasks/newtask', {
		templateUrl: 'partials/task-form.html',
		controller: 'AddTaskCtrl'
	})
	.when('/tasks/:taskId', {
		templateUrl: 'partials/task-detail.html',
		controller: 'TaskDetailCtrl'
	})
	.when('/tasks/:taskId/edit', {
		templateUrl: 'partials/task-form.html',
		controller: 'EditTaskCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
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