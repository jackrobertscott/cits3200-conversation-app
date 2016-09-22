'use strict';

(function() {
  angular
    .module('main')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['$interval'/*, 'timerService'*/];

  /* @ngInject */
  function TimerController($interval/*, timerService*/) {
    var vm = this;
    var COUNT_TIME = 90;
    vm.errors = [];
    vm.count = COUNT_TIME;
    vm.stopCountdown = stopCountdown;
    vm.beginCountdown = beginCountdown;
    vm.resetCountdown = resetCountdown;
    var status;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function stopCountdown() {
      if (status) {
        $interval.cancel(status);
        status = undefined;
      }
    }

    function beginCountdown() {
      if (!status) {
        status = $interval(function() {
          if (vm.count > 0) {
            vm.count = vm.count - 1;
          } else {
            stopCountdown();
          }
        }, 1000);
      }
    }

    function resetCountdown() {
      stopCountdown();
      vm.count = COUNT_TIME;
    }
  }
})();
