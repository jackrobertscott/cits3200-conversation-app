'use strict';

(function() {
  angular
    .module('main')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['authService', '$state', '$ionicPopup', '$cookies'];

  /* @ngInject */
  function AuthController(authService, $state, $ionicPopup, $cookies) {
    var vm = this;
    vm.errors = [];
    vm.credentials = {
      username: '',
      password: ''
    };
    vm.exampleCallToDB = exampleCallToDB;
    vm.login = login;
    vm.logOut = logOut;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function login() {
      authService.loginUser(vm.credentials.username, vm.credentials.password).success(function(data) {
        $cookies.put('auth', JSON.stringify(vm.credentials));
        $state.go('menu');
      }).error(function() {
        $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }

    function logOut() {
      $cookies.remove('auth');
      $state.go('auth');
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
