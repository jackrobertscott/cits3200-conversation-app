(function() {
  angular
    .module('main')
    .controller('PrepareController', PrepareController);

  PrepareController.$inject = ['prepareService'];

  /* @ngInject */
  function PrepareController(prepareService) {
    var vm = this;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }
  }
})();
