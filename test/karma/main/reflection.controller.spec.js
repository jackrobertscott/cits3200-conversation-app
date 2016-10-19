'use strict';

describe('ReflectionController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var ReflectionController;
  var $controller;
  var $state;
  var ventingService;
  var prepareService;
  var reframeService;

  beforeEach(inject(function(_$controller_, _$state_, _ventingService_, _prepareService_, _reframeService_) {
    $controller = _$controller_;
    $state = _$state_;
    ventingService = _ventingService_;
    prepareService = _prepareService_;
    reframeService = _reframeService_;
  }));

  beforeEach(function() {
    // these spies are before the controller constructor because they are
    // called when the controller is constructed
    spyOn(ventingService, 'getByUserId').and.callThrough();
    spyOn(prepareService, 'getByUserId').and.callThrough();
    spyOn(reframeService, 'getByUserId').and.callThrough();
    ReflectionController = $controller('ReflectionController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(ReflectionController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(ReflectionController.nonExistant).not.toBeDefined();
  });

  it('should have .getVentings() function', function() {
    expect(ReflectionController.getVentings).toBeDefined();
  });

  describe('.getVentings()', function() {

    it('should exist', function() {
      expect(ReflectionController.getVentings).toBeDefined();
    });

    it('should fill the ventings array', function() {
      expect(ReflectionController.ventings).toBeDefined();
      expect(ReflectionController.ventings.length).toBeDefined();
    });

  });

  describe('.getReframes()', function() {

    it('should exist', function() {
      expect(ReflectionController.getReframes).toBeDefined();
    });

    it('should fill the reframes array', function() {
      expect(ReflectionController.reframes).toBeDefined();
      expect(ReflectionController.reframes.length).toBeDefined();
    });

  });

  describe('.getPrepares()', function() {

    it('should exist', function() {
      expect(ReflectionController.getPrepares).toBeDefined();
    });

    it('should fill the prepares array', function() {
      expect(ReflectionController.prepares).toBeDefined();
      expect(ReflectionController.prepares.length).toBeDefined();
    });

  });

  it('should have called ventingService.getByUserId()', function() {
    expect(ventingService.getByUserId).toHaveBeenCalled();
  });

  it('should have called prepareService.getByUserId()', function() {
    expect(prepareService.getByUserId).toHaveBeenCalled();
  });

  it('should have called reframeService.getByUserId()', function() {
    expect(reframeService.getByUserId).toHaveBeenCalled();
  });

});
