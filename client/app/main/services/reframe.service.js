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
      getByUserId: getByUserId,
    };

    return service;

    function get() {
      return $firebaseArray(ref);
    }

    function getById(id) {
      return $firebaseObject(ref.child(id));
    }

    function getByUserId(id) {
      return $firebaseArray(ref.orderByChild('userId').equalTo(id));
    }
  }
})();
