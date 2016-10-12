'use strict';

(function() {
  angular
    .module('main')
    .factory('ventingService', ventingService);

  /* @ngInject */
  function ventingService() {
    var service = {
      create: create
    };

    return service;

    function create() {
      // code...
    }
  }
})();
