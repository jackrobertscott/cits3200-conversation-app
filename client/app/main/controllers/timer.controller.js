'use strict';

(function() {
  angular
    .module('main')
    .controller('TimerController', TimerController);

  /* @ngInject */
  function TimerController($interval /*, timerService*/ ) {
    var vm = this;
    var COUNT_TIME = 90;
    var status;

    vm.errors = [];
    vm.count = COUNT_TIME;
    vm.active = false;
    vm.stopCountdown = stopCountdown;
    vm.beginCountdown = beginCountdown;
    vm.resetCountdown = resetCountdown;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function stopCountdown() {
      if (status) {
        $interval.cancel(status);
        vm.active = false;
        $('.rainbow .line').css('-webkit-animation-play-state', 'paused');
        status = undefined;
      }
    }

    function beginCountdown() {
      if (!status) {
        vm.active = true;
        $('.rainbow .line').css('-webkit-animation-play-state', 'running');
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
