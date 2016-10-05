'use strict';

(function() {
  angular
    .module('main')
    .controller('AuthController', AuthController);

  /* @ngInject */
  function AuthController(authService, $state, $ionicPopup, $cookies) {
    var vm = this;
    vm.errors = [];
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.login = login;
    vm.logOut = logOut;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function login() {
      authService.loginUser(vm.credentials.username, vm.credentials.password).success(function() {
        $cookies.putObject('auth', vm.credentials);
        $state.go('menu');
      }).error(function() {
        $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }

    function logOut() {
      console.log('hello');
      $cookies.remove('auth');
      $state.go('auth');
    }
  }
})();
