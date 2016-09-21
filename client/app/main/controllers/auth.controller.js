(function() {
  angular
    .module('main')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['authService'];

  /* @ngInject */
  function AuthController(authService) {
    var vm = this;
    vm.login = login;
    vm.logout = logout;
    vm.user = {};

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function login(username, password) {
      return authService.login(username, password);
    }

    function logout() {
      return authService.logout(username, password);
    }
  }
})();
