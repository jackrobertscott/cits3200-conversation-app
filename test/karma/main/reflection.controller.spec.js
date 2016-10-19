'use strict';

describe('ReflectionController', function() {

  // var config = {
  //   apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
  //   authDomain: 'cits3200-conversations.firebaseapp.com',
  //   databaseURL: 'https://cits3200-conversations.firebaseio.com',
  //   storageBucket: '',
  //   messagingSenderId: '992134189372'
  // };
  // firebase.initializeApp(config);

  beforeEach(angular.mock.module('main'));

  var ReflectionController;
  var $controller;
  var $state;
  var ventingService;
  var prepareService;
  var reframeService;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_, _ventingService_, _prepareService_, _reframeService_) {
    $controller = _$controller_;
    $state = _$state_;
    ventingService = _ventingService_;
    prepareService = _prepareService_;
    reframeService = _reframeService_;
  }));

  beforeEach(function() {
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

  it('should fill the ventings array', function() {
    expect(ReflectionController.ventings).toBeDefined();
    expect(ReflectionController.ventings.length).toBeDefined();
  });

  it('should have .getReframes() function', function() {
    expect(ReflectionController.getReframes).toBeDefined();
  });

  it('should fill the reframes array', function() {
    expect(ReflectionController.reframes).toBeDefined();
    expect(ReflectionController.reframes.length).toBeDefined();
  });

  it('should have .getPrepares() function', function() {
    expect(ReflectionController.getPrepares).toBeDefined();
  });

  it('should fill the prepares array', function() {
    expect(ReflectionController.prepares).toBeDefined();
    expect(ReflectionController.prepares.length).toBeDefined();
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
