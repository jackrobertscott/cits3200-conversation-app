'use strict';

(function() {
  angular
    .module('main')
    .factory('reflectionService', reflectionService);

  /* @ngInject */
  function reflectionService($firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref().child('reflection');

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
