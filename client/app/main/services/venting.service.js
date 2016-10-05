'use strict';

(function() {
  angular
    .module('main')
    .factory('ventingService', ventingService);

  /* @ngInject */
  function ventingService() {
    var service = {
      example: example
    };

    return service;

    function example() {
      // code...
    }
  }
})();
