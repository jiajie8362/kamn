'use strict';

angular.module('app').controller('ShellController', ShellController);

/* @ngInject */
function ShellController() {
  var vm = this;

  activate();
  
  function activate() {
    console.log('ShellController loaded!');
  }
}
