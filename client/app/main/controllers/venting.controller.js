(function() {
  angular
    .module('main')
    .controller('VentingController', VentingController);

  VentingController.$inject = ['ventingService'];

  /* @ngInject */
  function VentingController(ventingService) {
    var vm = this;
    vm.message = '';

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function saveMessage() {
      // ventingService.saveMessage(vm.message);
    }
  }
})();
