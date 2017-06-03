"use strict";

app.controller('EditTaskCtrl', function($scope, $routeParams, DataFactory, $location) {

  $scope.Task = {
    task: "",
    dependencies: "",
    dueDate: "",
    urgency: "",
    assignedTo: "",
    location:""
  };


    DataFactory.getTask($routeParams.taskId)
    .then((item)=>{
        $scope.Task = item;
        console.log($scope.Task);
        $scope.Task.id = $routeParams.taskId;
    });

  $scope.submitTask = function(){
    DataFactory.editTask($routeParams.taskId, $scope.Task)
    .then((response)=>{
        console.log("post response", response);
        $location.path("/taskList");
    });
  };

});
