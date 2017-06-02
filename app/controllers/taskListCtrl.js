"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory) {
  $scope.getTaskList = function () {
    DataFactory.getTaskList()
    .then((tasks)=>{
        $scope.tasks = tasks;
        console.log("tasks", $scope.tasks);
    });
  };

  $scope.removeTask = function () {
    // remove a task
    DataFactory.getTaskList();
  };

  $scope.getTaskList();
});
