"use strict";

app.controller('TaskDetailCtrl', function($scope, $location, $routeParams, DataFactory) {

    console.log($routeParams.taskId);

  $scope.getTask = function() {
    // stuff goes here
    DataFactory.getTask($routeParams.taskId)
    .then((item)=>{
        $scope.task = item;
        console.log($scope.task);
        $scope.task.id = $routeParams.taskId;
    });
  };

  $scope.getTask();
});
