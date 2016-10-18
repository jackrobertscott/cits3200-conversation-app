'use strict';

(function() {
  angular
    .module('main')
    .controller('ReflectionController', ReflectionController);

  /* @ngInject */
  function ReflectionController(prepareService, reframeService, ventingService, currentAuth) {
    var vm = this;

    vm.errors = [];
    vm.getVentings = getVentings;
    vm.getReframes = getReframes;
    vm.getPrepares = getPrepares;
    vm.ventings;
    vm.reframes;
    vm.prepares;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
      vm.ventings = getVentings();
      vm.reframes = getReframes();
      vm.prepares = getPrepares();
    }

    function getVentings() {
      return ventingService.getByUserId(currentAuth.uid);
    }

    function getReframes() {
      return reframeService.getByUserId(currentAuth.uid);
    }

    function getPrepares() {
      return prepareService.getByUserId(currentAuth.uid);
    }
  }
})();
