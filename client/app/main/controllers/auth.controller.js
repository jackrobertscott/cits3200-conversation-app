'use strict';

(function() {
  angular
    .module('main')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['authService'];

  /* @ngInject */
  function AuthController(authService) {
    var vm = this;
    vm.errors = [];
    vm.exampleCallToDB = exampleCallToDB;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function exampleCallToDB() {
      authService.getMeData() // this is a Promise (read about it)
        .then(function(data) {
          vm.example = data;
        })
        .catch(function(error) {
          vm.errors.push(error);
        });
    }
  }
})();
