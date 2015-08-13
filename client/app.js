'use strict';

/**
 * Top level module. Lists all the other modules as dependencies.
 */

angular.module('app', [
  'ui.router',
  'ngMessages'

]).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/otherwise");

  $stateProvider.
  state('login', {
    url: '/login',
    templateUrl: 'modules/login/login.html',
    title: 'login',
    controller: 'loginController',
    controllerAs: 'vm'
  }).
  state('register', {
    url: '/register',
    templateUrl: 'modules/register/register.html',
    title: 'register',
    controller: 'registerController',
    controllerAs: 'vm'
  }).
  state('todo', {
    url: '/todo',
    templateUrl: 'modules/todo/todo.html',
    title: 'todo',
    controller: 'todoController',
    controllerAs: 'vm'
  }).
  state('otherwise', {
    url: '/login',
    templateUrl: 'modules/login/login.html',
    title: 'login',
    controller: 'loginController',
    controllerAs: 'vm'
  })
});