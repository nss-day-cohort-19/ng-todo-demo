"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

  const addTask = (newObj) => {
    let newTask = JSON.stringify(newObj);
      return $q((resolve,reject)=>{
      $http.post(`${FBCreds.databaseURL}/items/.json`, newTask)
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  const editTask = (taskId, editedTask) => {
    let newObj = JSON.stringify(editedTask);
  return $q((resolve,reject)=>{
      $http.patch(`${FBCreds.databaseURL}/items/${taskId}.json`, newObj)
      .then(function(itemObject){
        resolve(itemObject);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };

  const getTask = (taskId) => {
    return $q((resolve,reject)=>{
      $http.get(`${FBCreds.databaseURL}/items/${taskId}.json`)
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      });
    });
  };


  const getTaskList = (user) => {
    let tasks = [];
    return $q((resolve,reject)=>{
      $http.get(`${FBCreds.databaseURL}/items.json`)
      .then((itemObject)=>{
        console.log("itemObject",itemObject.data.uid);
        if(itemObject.data === null){
          resolve(null);
          console.log("ITS NULL BITCH");
        }else{
          let itemCollection = itemObject.data;
          console.log("itemCollection", itemCollection);
          Object.keys(itemCollection).forEach((key)=>{
            itemCollection[key].id = key;
            tasks.push(itemCollection[key]);
          });
          resolve(tasks);
        }
      })

      .catch((error)=>{
        reject(error);
      });
    });
  };

  const removeTask = (taskId) => {
    return $q((resolve, reject)=>{
      $http.delete(`${FBCreds.databaseURL}/items/${taskId}.json`)
      .then((response)=>{
        resolve(response);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };



  return {
    addTask,
    getTask,
    editTask,
    getTaskList,
    removeTask,
  };

});
