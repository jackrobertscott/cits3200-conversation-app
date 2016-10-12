'use strict';

(function() {
  angular
    .module('main')
    .controller('VentingController', VentingController);

  /* @ngInject */
  function VentingController(ventingService) {
    var vm = this;

    vm.errors = [];
    vm.text = '';
    vm.ventings;
    vm.create = create;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
      vm.ventings = ventingService.get();
    }

    function create() {
      if (vm.text.trim()) {
        vm.ventings.$add({
          text: vm.text,
          createdAt: Date.now(),
        });
        vm.text = '';
      }
    }
  }
})();
