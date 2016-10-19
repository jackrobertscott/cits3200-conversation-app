'use strict';

describe('VentingController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var VentingController;
  var $controller;
  var $state;
  var $rootScope;
  var authService;

  beforeEach(inject(function(_$controller_, _$state_, _$rootScope_, _authService_) {
    $controller = _$controller_;
    $state = _$state_;
    $rootScope = _$rootScope_;
    authService = _authService_;
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

  it('should load the venting screen when authenticated', function() {
    // this prevents the authService redirecting when not logged in
    spyOn(authService, '$requireSignIn').and.returnValue(true);
    $state.go('venting');
    $rootScope.$digest();
    expect($state.current.name).toBe('venting');
  });

});
