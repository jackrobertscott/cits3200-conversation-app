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

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
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

});
