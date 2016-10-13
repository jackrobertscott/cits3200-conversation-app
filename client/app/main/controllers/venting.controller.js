'use strict';

(function() {
  angular
    .module('main')
    .controller('VentingController', VentingController);

  /* @ngInject */
  function VentingController(ventingService, currentAuth, $ionicLoading, $ionicPopup, $state) {
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
      if (!vm.text.trim()) {
        return $ionicPopup.alert({
          title: 'Inputs Missing',
          template: 'Please fill in all inputs.'
        });
      }
      $ionicLoading.show();
      vm.ventings.$add({
        text: vm.text,
        createdAt: Date.now(),
        userId: currentAuth.uid,
      }).then(function() {
        $ionicLoading.hide();
        vm.text = '';
        $state.go('timer');
      }).catch(function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Submission Failed',
          template: 'Sorry for the inconvinience.'
        });
      });
    }
  }
})();
