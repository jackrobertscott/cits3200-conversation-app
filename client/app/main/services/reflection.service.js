'use strict';

(function() {
  angular
    .module('main')
    .factory('reflectionService', reflectionService);

  reflectionService.$inject = [];

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
