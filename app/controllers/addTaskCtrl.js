"use strict";

app.controller('AddTaskCtrl', function($scope, DataFactory, $location, AuthFactory, $rootScope) {

  let user = AuthFactory.getUser();
  $rootScope.showSearch = false;

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