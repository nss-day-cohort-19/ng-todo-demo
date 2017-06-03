"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

  const addTask = ( newObj ) => {
    return $q( (resolve, reject) => {
      let object = JSON.stringify(newObj);
      $http.post(`${FBCreds.databaseURL}/items.json`, object)
      .then ( (itemID) => {
        resolve(itemID);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  const editTask = ( taskID, editedObj ) => {
    return $q( (resolve, reject) => {
      let newObj = JSON.stringify(editedObj);
      $http.patch(`${FBCreds.databaseURL}/items/${taskID}.json`, newObj)
      .then( (itemObj) => {
        resolve(itemObj);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  const getTask = ( taskID ) => {
    return $q( (resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/items/${taskID}.json`)
      .then( (itemObj) => {
        resolve(itemObj.data);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  const getTaskList = () => {
    let tasks = [];
    return $q( (resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/items.json`)
      .then( (itemObj) => {
        let itemCollection = itemObj.data;
        console.log("itemCollection", itemCollection);
       Object.keys(itemCollection).forEach( (key) => {
          itemCollection[key].id = key;
          tasks.push(itemCollection[key]);
        });
        resolve(tasks);
        })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  const removeTask = ( taskID ) => {
    return $q ( (resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/items/${taskID}.json`)
      .then( (response) => {
        resolve(response);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };

  return {
    addTask,
    getTask,
    editTask,
    getTaskList,
    removeTask
  };

});