"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory, $location) {
  $scope.getTaskList = function () {
    // get the task list
    DataFactory.getTaskList()
    .then( (tasks) => {
    	$scope.tasks = tasks;
    	console.log("tasks", $scope.tasks);
    });
  };

  $scope.removeTask = function ( taskID ) {
    // remove a task
    DataFactory.removeTask( taskID )
    .then( () => {
      $scope.getTaskList();
    });
  };

$scope.getTaskList();

});