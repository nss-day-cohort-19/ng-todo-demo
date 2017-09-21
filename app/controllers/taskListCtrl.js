"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory, $location, AuthFactory, SearchTermData) {

  $scope.searchText = SearchTermData;
  console.log("searchText", $scope.searchText);


  let user = AuthFactory.getUser();

  $scope.getTaskList = function () {
    DataFactory.getTaskList(user)
    .then((tasks)=>{
        if(tasks === null){
          $scope.tasks = [{
            isEmpty: true
          }];
        }else{
          $scope.tasks = tasks;
        }
        console.log("tasks", $scope.tasks);
    });
  };

  $scope.removeTask = function(id){
    DataFactory.removeTask(id)
    .then(()=>{
      $scope.getTaskList();
    });
  };

  $scope.isComplete = function(taskId){
    let isCompleteTask = {};
    DataFactory.getTask(taskId)
    .then((item)=>{
      $scope.isCompleteTask = item;
      isCompleteTask.isCompleted = true;

      console.log("isCompleteTask", isCompleteTask, "taskId", taskId);
      DataFactory.editTask(taskId, isCompleteTask)
      .then((response)=>{
        console.log(response);
        $scope.getTaskList();
      });
    });
  };

  $scope.getTaskList();

});


