(function() {
  angular
    .module('main')
    .controller('TimerController', TimerController);

  TimerController.$inject = ['timerService'];

  /* @ngInject */
  function TimerController(timerService) {
    var vm = this;
    vm.time = 0;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function startCountDown() {
      // code...
    }
  }
})();
