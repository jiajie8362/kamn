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
  var todo3 = new todoItem();
  todo3.title = "East dinner";
  todo3.isDone = true
  vm.todoList = [todo1, todo2,todo3];

  vm.changeItemStatus = changeItemStatus;
  vm.markAll = markAll;
  
  activate();

  function todoItem() {
    this.title = '';
    this.isDone = false;
  }

  function activate() {
    console.log('TodoController loaded!');
  }

  function changeItemStatus(item){
    item.isDone = !item.isDone;
  }

  function markAll(isDone){
    vm.todoList.forEach(function(item){
      item.isDone = isDone;
    });
  }
}