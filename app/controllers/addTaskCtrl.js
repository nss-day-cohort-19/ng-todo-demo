"use strict";

app.controller('AddTaskCtrl', function($scope, DataFactory, $location, AuthFactory) {

  let user = AuthFactory.getUser();

  $scope.task = {
  	assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "",
    uid: user
  };

  $scope.submitTask = function () {
    // stuff goes here
    console.log("$scope.task", $scope.task);
    DataFactory.addTask($scope.task)
    .then ( (data) => {
    	$location.path("/task-list");
    });
    // $scope.task = {};
  };

});