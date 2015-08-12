'use strict';

angular.module('app').controller('todoController', TodoController);

/* @ngInject */
/**
 * @class modules.todo.TodoController
 * @desc manages all Todo list functionality
 * @param $scope
 * @param $timeout
 * @param datacontext 
 * @constructor
 */
function TodoController($scope, $timeout, datacontext) {
  var vm = this;

  vm.changeItemStatus = changeItemStatus;
  vm.markAll = markAll;
  vm.addTodo = addTodo;

  activate();

  var timeout;
  $scope.$watch('vm.newTodo', function(newTodo) {
    if (!newTodo)
      return;
    if (timeout)
      $timeout.cancel(timeout);
    timeout = $timeout(function() {
      console.log('newTodo');
    }, 300)
  });

  function activate() {
    console.log('TodoController loaded!');
    datacontext.getTodoList()
      .then(function(data) {
        console.log('get todo list from server');
        vm.todoList = data;
        console.log(vm.todoList);
      });
  }

  function addTodo(newTodo) {
    console.log('new todo ' + newTodo);
    datacontext.createNewTodo({
      content: newTodo
    }).then(function(data) {
      vm.todoList.push(data);
    });
  }

  function updateTodoItem(item) {
    datacontext.updateTodo(item);
  }

  function changeItemStatus(item) {
    item.isDone = !item.isDone;
    updateTodoItem(item);
  }

  function markAll(isDone) {
    vm.todoList.forEach(function(item) {
      item.isDone = isDone;
    });
  }
}

TodoController.$inject = ['$scope', '$timeout', 'datacontext'];