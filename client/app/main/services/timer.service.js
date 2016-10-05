'use strict';

(function() {
  angular
    .module('main')
    .factory('timerService', timerService);

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
