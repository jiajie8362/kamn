'use strict';

angular.module('app').controller('todoController', TodoController);

/* @ngInject */
/**
 * @class modules.todo.TodoController
 * @desc manages all Todo list functionality
 * @param $scope
 * @constructor
 */
function TodoController(datacontext) {
  var vm = this;

  vm.changeItemStatus = changeItemStatus;
  vm.markAll = markAll;
  vm.addTodo = addTodo;

  activate();

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
      vm.todoList.push(newTodo);
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

TodoController.$inject = ['datacontext'];