'use strict';

angular.module('app').controller('todoController', TodoController);

/* @ngInject */
/**
 * @class modules.todo.TodoController
 * @desc manages all Todo list functionality
 * @param $scope
 * @constructor
 */
function TodoController() {
  var vm = this;

  var todo1 = new todoItem();
  todo1.title = "East breakfast";
  var todo2 = new todoItem();
  todo2.title = "East Lunch";

  vm.todoList = [todo1, todo2];

  activate();

  function todoItem() {
    this.title = '';
    this.isDone = false;
  }

  function activate() {
    console.log('TodoController loaded!');
  }
}