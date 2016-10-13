'use strict';

(function() {
  angular
    .module('main')
    .controller('AuthController', AuthController);

  /* @ngInject */
  function AuthController(authService, $state, $ionicPopup, $log) {
    var vm = this;

    vm.errors = [];
    vm.credentials = {
      email: '',
      password: ''
    };
    vm.login = login;
    vm.logOut = logOut;
    vm.signup = signup;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function login() {
      if (!vm.credentials.email.trim() || !vm.credentials.password) {
        return $ionicPopup.alert({
          title: 'Inputs Missing',
          template: 'Please fill in all inputs.'
        });
      }
      authService.$signInWithEmailAndPassword(vm.credentials.email, vm.credentials.password).then(function() {
        $state.go('menu');
      }).catch(function(error) {
        $ionicPopup.alert({
          title: 'Login Failed',
          template: 'Please check your credentials.'
        });
        $log.error('Authentication failed:', error);
      });
    }

    function logOut() {
      authService.$signOut().then(function() {
        $state.go('login');
      });
    }

    function signup() {
      if (!vm.credentials.email.trim() || !vm.credentials.password) {
        return $ionicPopup.alert({
          title: 'Inputs Missing',
          template: 'Please fill in all inputs.'
        });
      }
      authService.$createUserWithEmailAndPassword(vm.credentials.email, vm.credentials.password).then(function() {
        $state.go('menu');
      }).catch(function(error) {
        $ionicPopup.alert({
          title: 'Sign Up Failed',
          template: 'Please check your inputs are correct or try again later.'
        });
        $log.error(error);
      });
    }
  }
})();
