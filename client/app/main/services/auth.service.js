(function() {
  angular
    .module('main')
    .factory('authService', authService);

  authService.$inject = [];

  /* @ngInject */
  function authService() {
    var service = {
      login: login,
      logout: logout,
    };

    return service;

    function login(username, password) {
      // send data to server and receive response
      // can set the session variable
    }

    function logout() {
      // might just need to delete the session user
    }
  }
})();
