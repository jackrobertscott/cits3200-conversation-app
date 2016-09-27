'use strict';

(function() {
  angular
    .module('main')
    .factory('prepareService', prepareService);

  prepareService.$inject = [];

  /* @ngInject */
  function prepareService() {
    var service = {
      example: example
    };

    return service;

    function example() {
      // code...
    }
  }
})();
