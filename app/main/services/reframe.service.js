/* global firebase:true */
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

    /**
     * Get all the database entities
     * @return {Array} reframes
     */
    function get() {
      return $firebaseArray(ref);
    }

    /**
     * Get a single entity by it's ID
     * @param  {string} id entity id
     * @return {Object} reframe
     */
    function getById(id) {
      return $firebaseObject(ref.child(id));
    }

    /**
     * Get an array of entities for given userId
     * @param  {string} id user id
     * @return {Array} reframes
     */
    function getByUserId(id) {
      return $firebaseArray(ref.orderByChild('userId').equalTo(id));
    }
  }
})();
