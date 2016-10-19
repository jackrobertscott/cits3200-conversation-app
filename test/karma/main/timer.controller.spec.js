'use strict';

describe('TimerController', function() {

  // var config = {
  //   apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
  //   authDomain: 'cits3200-conversations.firebaseapp.com',
  //   databaseURL: 'https://cits3200-conversations.firebaseio.com',
  //   storageBucket: '',
  //   messagingSenderId: '992134189372'
  // };
  // firebase.initializeApp(config);

  beforeEach(angular.mock.module('main'));

  var TimerController;
  var $controller;
  var $state;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    TimerController = $controller('TimerController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(TimerController).toBeDefined();
  });

  it('should have .stopCountdown() function', function() {
    expect(TimerController.stopCountdown).toBeDefined();
  });

  it('should have .beginCountdown() function', function() {
    expect(TimerController.beginCountdown).toBeDefined();
  });

  it('should have .resetCountdown() function', function() {
    expect(TimerController.resetCountdown).toBeDefined();
  });

  it('should have change status when started and stopped', function() {
    TimerController.beginCountdown();
    expect(TimerController.active).toEqual(true);
    TimerController.stopCountdown();
    expect(TimerController.active).toEqual(false);
  });

  // it('should count the clock down when timer started', function(done) {
  //   TimerController.beginCountdown();
  //   setTimeout(function() {
  //     expect(TimerController.count).toEqual(89);
  //     done();
  //   }, 1500);
  // });

});
