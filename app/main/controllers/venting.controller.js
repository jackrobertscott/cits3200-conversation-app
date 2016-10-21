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

    /**
     * This acts like the controllers constructor
     */
    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
      vm.ventings = ventingService.getByUserId(currentAuth.uid);
    }

    /**
     * Validate and save the form's data to the server
     */
    function create() {
      if (!vm.text.trim()) {
        return $ionicPopup.alert({
          title: 'Inputs Missing',
          template: 'Please fill in all inputs.'
        });
      }
      $ionicLoading.show().then(function() {
        vm.ventings.$add({
          text: vm.text,
          createdAt: Date.now(),
          userId: currentAuth.uid,
        }).then(function() {
          $ionicLoading.hide();
          vm.text = '';
          $state.go('timer-info');
        }).catch(function() {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'Submission Failed',
            template: 'Sorry for the inconvinience.'
          });
        });
      });
    }
  }
})();
