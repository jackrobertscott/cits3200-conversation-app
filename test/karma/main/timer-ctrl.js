'use strict';

describe('Timer Controller', function() {

  beforeEach(angular.mock.module('main'));

  var TimerController;
  var $controller;
  var $state;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    TimerController = $controller('TimerController', { $state: $state });
  });

    /*-----SPECS-------*/
  it('should exist', function() {
    expect(TimerController).toBeDefined();
  });

  it('should have stop-count-down function', function() {
    expect(TimerController.stopCountdown).toBeDefined();
  });

  it('should have begin-count-down function', function() {
    expect(TimerController.beginCountdown).toBeDefined();
  });

  it('should have reset-count-down function', function() {
    expect(TimerController.resetCountdown).toBeDefined();
  });
  // it('should have login function go to menu', function() {
  //   expect($state).toBeDefined('menu');
  // });
});
