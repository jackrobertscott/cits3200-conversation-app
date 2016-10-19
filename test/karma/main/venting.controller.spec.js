'use strict';

describe('VentingController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var VentingController;
  var $controller;
  var $state;

  beforeEach(inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    VentingController = $controller('VentingController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(VentingController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(VentingController.nonExistant).not.toBeDefined();
  });

  describe('.create()', function() {

    it('should exist', function() {
      expect(VentingController.create).toBeDefined();
    });

  });

});
