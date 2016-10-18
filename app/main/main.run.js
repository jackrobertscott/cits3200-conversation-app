'use strict';

(function() {
  angular
    .module('main')
    .run(checkAuth);

  /* @ngInject */
  function checkAuth($log, $rootScope, $state) {
    var changeError = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireSignIn promise is rejected
      // and redirect the user back to the home page
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
        $log.error('State requires user to be authenticated; which it is not');
      }
    });
    $rootScope.$on('$destroy', changeError);
  }
})();
