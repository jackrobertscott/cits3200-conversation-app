'use strict';

(function() {
  angular
    .module('main')
    .factory('reflectionService', reflectionService);

  /* @ngInject */
  function reflectionService() {
    var service = {
      example: example
    };

    return service;

    function example() {
      // code...
    }
  }
})();
