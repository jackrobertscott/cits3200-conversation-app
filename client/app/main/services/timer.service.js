(function() {
  angular
    .module('main')
    .factory('timerService', timerService);

  timerService.$inject = [];

  /* @ngInject */
  function timerService() {
    var service = {
      example: example
    };

    return service;

    function example() {
      // code...
    }
  }
})();
