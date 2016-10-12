'use strict';

(function() {
  angular
    .module('main')
    .controller('VentingController', VentingController);

  /* @ngInject */
  function VentingController(ventingService, $firebaseArray) {
    var vm = this;

    vm.errors = [];
    vm.venting = '';
    vm.ventings = [];
    vm.create = create;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
      var ref = firebase.database().ref().child('ventings');
      vm.ventings = $firebaseArray(ref);
    }

    function create() {
      if (vm.venting.trim()) {
        vm.ventings.$add({
          text: vm.venting,
          createdAt: Date.now(),
        });
        vm.venting = '';
      }
    }
  }
})();
