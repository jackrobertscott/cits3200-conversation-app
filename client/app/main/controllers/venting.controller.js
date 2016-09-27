'use strict';

(function() {
  angular
    .module('main')
    .controller('VentingController', VentingController);

  VentingController.$inject = ['ventingService'];

  /* @ngInject */
  function VentingController(ventingService) {
    var vm = this;
    vm.errors = [];
    vm.exampleCallToDB = exampleCallToDB;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function exampleCallToDB() {
      ventingService.getMeData() // this is a Promise (read about it)
        .then(function(data) {
          vm.example = data;
        })
        .catch(function(error) {
          vm.errors.push(error);
        });
    }
  }
})();
