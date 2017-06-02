"use strict";

app.controller('AddTaskCtrl', function($scope, DataFactory, $location) {

  $scope.Task = {
    task: "",
    dependencies: "",
    dueDate: "",
    urgency: "",
    assignedTo: "",
    location: ""
  };

  $scope.isCompleted = false;

  $scope.submitTask = function(){
    DataFactory.addTask($scope.Task)
    .then((response)=>{
        console.log("post response", response);
        $location.path("/taskList");
    });
  };

});
