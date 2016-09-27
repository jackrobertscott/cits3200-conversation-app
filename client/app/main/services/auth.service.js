'use strict';

(function() {
  angular
    .module('main')
    .factory('authService', authService);

  authService.$inject = [];

  /* @ngInject */
  function authService() {
    var service = {
      example: example
    };

    return service;

    function example() {
      // code...
    }
  }
})();
