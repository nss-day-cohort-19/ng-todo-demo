"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory, $location) {
  $scope.getTaskList = function () {
    DataFactory.getTaskList()
    .then((tasks)=>{
        $scope.tasks = tasks;
        console.log("tasks", $scope.tasks);
    });
  };

  $scope.removeTask = function(id){
    DataFactory.removeTask(id)
    .then(()=>{
      $scope.getTaskList();
    });
  };

  $scope.getTaskList();

});


