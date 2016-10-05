(function() {
  'use strict';

  angular
    .module('main')
    .run(authenticate);

  /** @ngInject */
  function authenticate($log, $rootScope, $state, $cookies) {
    var changeStart = $rootScope.$on('$stateChangeStart', function(event, toState) {
      // If the state requires authetication and not logged in then redirect
      var session = $cookies.getObject('auth');
      if (toState.data && toState.data.authenticate && (!session || !session.username)) {
        event.preventDefault();
        $log.error('Access denied: page requires user to be authenticated');
        $state.go('auth');
      }
    });
    $rootScope.$on('$destroy', changeStart);
  }
})();
