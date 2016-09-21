(function() {
  angular
    .module('main')
    .factory('ventingService', ventingService);

  ventingService.$inject = [];

  /* @ngInject */
  function ventingService() {
    var service = {
      example: example
    };

    return service;

    function example() {

    }
  }
})();
