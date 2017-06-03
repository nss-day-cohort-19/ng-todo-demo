"use strict";

const app = angular.module('TodoApp', ["ngRoute"]);

//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        }else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});


app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/auth.html',
        controller: 'AuthCtrl'
    })
    .when('/taskList', {
        templateUrl: 'partials/task-list.html',
        controller: 'TaskListCtrl',
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
    .when('/newTask', {
        templateUrl: 'partials/task-form.html',
        controller: 'AddTaskCtrl',
        resolve: {isAuth}
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
