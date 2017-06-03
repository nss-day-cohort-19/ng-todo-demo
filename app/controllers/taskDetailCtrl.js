"use strict";

app.controller('TaskDetailCtrl', function($scope, $location, $routeParams, DataFactory) {

	console.log("$routeParams", $routeParams);
	console.log("$routeParams", $routeParams.taskId);

  $scope.getTask = function() {
    // stuff goes here
    console.log("get task taskin'");
    DataFactory.getTask($routeParams.taskId)
    .then( (stuff) => {
    	$scope.task = stuff;
    	$scope.task.id = $routeParams.taskId;

    });
  };

  $scope.getTask();

});