'use strict';

(function() {
  angular
    .module('main')
    .factory('authService', authService);

  /* @ngInject */
  function authService($firebaseAuth) {
    return $firebaseAuth();
  }
})();
