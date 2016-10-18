'use strict';

(function() {
  angular
    .module('main')
    .factory('timerService', timerService);

  /* @ngInject */
  function timerService($firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref().child('timer');

    var service = {
      get: get,
      getById: getById,
    };

    return service;

    function get() {
      return $firebaseArray(ref);
    }

    function getById(id) {
      return $firebaseObject(ref.child(id));
    }
  }
})();
