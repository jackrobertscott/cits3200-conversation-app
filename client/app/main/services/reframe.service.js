'use strict';

(function() {
  angular
    .module('main')
    .factory('reframeService', reframeService);

  /* @ngInject */
  function reframeService($firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref().child('reframe');

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
