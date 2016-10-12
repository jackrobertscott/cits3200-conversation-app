'use strict';

(function() {
  angular
    .module('main')
    .factory('authService', authService);

  /* @ngInject */
  function authService($q) {
    var service = {
      loginUser: loginUser,
    };

    return service;

    function loginUser(name, pw) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (name === 'user' && pw === 'secret') {
        deferred.resolve('Welcome ' + name + '!');
      } else {
        deferred.reject('Wrong credentials.');
      }
      promise.success = function(fn) {
        promise.then(fn);

        return promise;
      };
      promise.error = function(fn) {
        promise.then(null, fn);

        return promise;
      };

      return promise;
    }
  }
})();
