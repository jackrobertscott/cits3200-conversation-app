'use strict';

describe('conversations module', function() {

  beforeEach(angular.mock.module('main'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('authentication controller', function() {

    var AuthController;

    beforeEach(function() {
      AuthController = $controller('AuthController');
    });

      /*-----SPECS-------*/
    it('should exist', function() {
      expect(AuthController).toBeDefined();
    });

    it('should have login function', function() {
      expect(AuthController.login).toBeDefined();
    });
  });

});
