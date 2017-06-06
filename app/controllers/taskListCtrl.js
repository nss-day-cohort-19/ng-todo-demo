"use strict";

app.controller('TaskListCtrl', function($scope, DataFactory, $location, AuthFactory, SearchTermData) {

  $scope.searchText = SearchTermData;
  let user = AuthFactory.getUser();

  $scope.getTaskList = function () {
    // get the task list
    DataFactory.getTaskList(user)
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

  $scope.updateComplete = function(whichOne){
    let tmpObj = {isCompleted:true};
    DataFactory.editTask(whichOne, tmpObj)
    .then( () => {
      $scope.getTaskList();
    });
  };

$scope.getTaskList();

});