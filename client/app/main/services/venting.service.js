'use strict';

(function() {
  angular
    .module('main')
    .factory('ventingService', ventingService);

  /* @ngInject */
  function ventingService($firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref().child('venting');

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
