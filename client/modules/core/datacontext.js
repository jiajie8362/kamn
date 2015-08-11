'use strict';

var httpendpoint = '/api';

angular.module('app').factory('datacontext', datacontext);

/* @ngInject */
function datacontext($http) {
  var service = {
    getTodoList: getTodoList,
    createNewTodo: createNewTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
  };

  return service;

  function getTodoList() {
    console.log('datacontext.getTodoList');
    return $http({
        method: 'GET',
        url: httpendpoint + '/todos'
      }).then(function(data, status, headers, config) {
        return data.data;
      })
      .catch(function(data, status, headers, config) {
        console.log('XHR failed for get todo list');
      })
  }

  function createNewTodo(item) {
    console.log('datacontext.createNewTodo');
      return $http({
        method: 'POST',
        url: httpendpoint + '/todos',
        data: item
      }).then(function(data, status, headers, config) {
        return data.data;
      })
      .catch(function(data, status, headers, config) {
        console.log('XHR failed for update todo item');
      })
  }

  function updateTodo(item) {
    console.log('datacontext.updateTodo');
    return $http({
        method: 'PUT',
        url: httpendpoint + '/todos',
        data: item
      }).then(function(data, status, headers, config) {
        return data.data;
      })
      .catch(function(data, status, headers, config) {
        console.log('XHR failed for update todo item');
      })
  }

  function deleteTodo() {
    console.log('datacontext.deleteTodo');
  }
}

datacontext.$inject = ['$http'];