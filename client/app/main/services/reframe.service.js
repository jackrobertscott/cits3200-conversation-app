'use strict';

(function() {
  angular
    .module('main')
    .factory('reframeService', reframeService);

  /* @ngInject */
  function reframeService() {
    var service = {
      example: example
    };

    return service;

    function example() {
      // code...
    }
  }
})();
