"use strict";

app.controller('AddTaskCtrl', function($scope, DataFactory, $location, AuthFactory) {

  let user = AuthFactory.getUser();


  $scope.Task = {
    task: "",
    dependencies: "",
    dueDate: "",
    urgency: "",
    assignedTo: "",
    location: "",
    isCompleted : false,
    uid: user
  };



  $scope.submitTask = function(){
    DataFactory.addTask($scope.Task)
    .then((response)=>{
        console.log("post response", response);
        $location.path("/taskList");
    });
  };

});
