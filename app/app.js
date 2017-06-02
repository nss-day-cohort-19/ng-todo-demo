"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/auth.html',
        controller: 'AuthCtrl'
    })
    .when('/taskList', {
        templateUrl: 'partials/task-list.html',
        controller: 'TaskListCtrl'
    })
    .when('/tasks/:taskId', {
        templateUrl: 'partials/task-detail.html',
        controller: 'TaskDetailCtrl'
    })
    .when('/tasks/:taskId/edit', {
        templateUrl: 'partials/task-form.html',
        controller: 'EditTaskCtrl'
    })
    .when('/newTask', {
        templateUrl: 'partials/task-form.html',
        controller: 'AddTaskCtrl'
    })
    .otherwise('/');
});

app.run(($location, FBCreds) =>{
    let creds = FBCreds;
    let AuthConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL : creds.databaseURL
    };

    firebase.initializeApp(AuthConfig);
});
