'use strict';

(function() {
  angular
    .module('main')
    .controller('AuthController', AuthController);

  /* @ngInject */
  function AuthController(authService, $state, $ionicPopup, $log, $ionicLoading) {
    var vm = this;

    vm.errors = [];
    vm.credentials = {
      email: '',
      password: ''
    };
    vm.login = login;
    vm.logout = logout;
    vm.signup = signup;

    activate();

    /**
     * This acts like the controllers constructor
     */
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
      } else {
        $ionicLoading.show().then(function() {
          authService.$signInWithEmailAndPassword(vm.credentials.email, vm.credentials.password).then(function() {
            $ionicLoading.hide();
            $state.go('menu');
          }).catch(function(error) {
            $ionicLoading.hide().then(function() {
              $ionicPopup.alert({
                title: 'Login Failed',
                template: error.message || 'Please check your credentials.'
              });
            });
            $log.error('Authentication failed:', error);
          });
        });
      }
    }

    function logout() {
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
      } else {
        $ionicLoading.show().then(function() {
          authService.$createUserWithEmailAndPassword(vm.credentials.email, vm.credentials.password).then(function() {
            $ionicLoading.hide();
            $state.go('menu');
          }).catch(function(error) {
            $log.error(error);
            $ionicLoading.hide().then(function() {
              $ionicPopup.alert({
                title: 'Sign Up Failed',
                template: error.message || 'Please check your inputs are correct or try again later.'
              });
            });
          });
        });
      }
    }
  }
})();
