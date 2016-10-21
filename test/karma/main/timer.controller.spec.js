'use strict';

describe('TimerController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var TimerController;
  var $controller;
  var $state;
  var $interval;
  var $ionicPopup;
  var audioOriginal;
  var audioMock;

  beforeEach(inject(function(_$controller_, _$state_, _$interval_, _$ionicPopup_) {
    $controller = _$controller_;
    $state = _$state_;
    $interval = _$interval_;
    $ionicPopup = _$ionicPopup_;
  }));

  beforeEach(function() {
    // this is needed to allow audio
    audioOriginal = window.Audio;
    audioMock = {
      play: jasmine.createSpy('play'),
      pause: jasmine.createSpy('pause'),
      stop: jasmine.createSpy('stop'),
      addEventListener: jasmine.createSpy('addEventListener'),
    };
    window.Audio = function() {
      return audioMock;
    };
    TimerController = $controller('TimerController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  afterEach(function() {
    window.Audio = audioOriginal;
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(TimerController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(TimerController.nonExistant).not.toBeDefined();
  });

  describe('.beginCountdown()', function() {

    it('should exist', function() {
      expect(TimerController.beginCountdown).toBeDefined();
    });

    it('should count down over time', function() {
      TimerController.beginCountdown();
      $interval.flush(1001);
      expect(TimerController.count).toEqual(89);
      $interval.flush(1001);
      expect(TimerController.count).toEqual(88);
      $interval.flush(10001);
      expect(TimerController.count).toEqual(78);
    });

    it('should stop when it reaches 0', function() {
      TimerController.beginCountdown();
      $interval.flush(1001);
      expect(TimerController.count).toEqual(89);
      $interval.flush(100001);
      expect(TimerController.count).toEqual(0);
    });

    it('should popup modal when reaches 0', function() {
      spyOn($ionicPopup, 'show').and.callThrough();
      TimerController.beginCountdown();
      $interval.flush(100001);
      expect($ionicPopup.show).toHaveBeenCalled();
    });

  });

  describe('.stopCountdown()', function() {

    it('should exist', function() {
      expect(TimerController.stopCountdown).toBeDefined();
    });

    it('should change the status to false', function() {
      TimerController.beginCountdown();
      expect(TimerController.active).toEqual(true);
      TimerController.stopCountdown();
      expect(TimerController.active).toEqual(false);
    });

  });

  describe('.resetCountdown()', function() {

    it('should exist', function() {
      expect(TimerController.resetCountdown).toBeDefined();
    });

  });

});
