'use strict';

var httpendpoint = '/api';

angular.module('app').factory('datacontext', datacontext);

/* @ngInject */
function datacontext($http) {
  var service = {
    getTodoList: getTodoList,
    createNewTodo: createNewTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
  };

  return service;

  function getTodoList() {
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

  function createNewTodo() {

  }

  function updateTodo() {

  }

  function getTodoList() {

  }
}

datacontext.$inject = ['$http'];