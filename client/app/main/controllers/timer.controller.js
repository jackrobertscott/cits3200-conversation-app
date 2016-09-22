'use strict';

(function() {
  angular
    .module('main')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['timerService'];

  /* @ngInject */
  function TimerController(timerService) {
    var vm = this;
    vm.errors = [];
    vm.exampleCallToDB = exampleCallToDB;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function exampleCallToDB() {
      timerService.getMeData() // this is a Promise (read about it)
        .then(function(data) {
          vm.example = data;
        })
        .catch(function(error) {
          vm.errors.push(error);
        });
    }
  }
})();