(function() {
  angular
    .module('main')
    .factory('ventingService', ventingService);

  ventingService.$inject = ['dependencies'];

  /* @ngInject */
  function ventingService(dependencies) {
    var service = {
      example: example
    };

    return service;

    function example() {

    }
  }
})();
