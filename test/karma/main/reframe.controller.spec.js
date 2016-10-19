'use strict';

describe('ReframeController', function() {

  // var config = {
  //   apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
  //   authDomain: 'cits3200-conversations.firebaseapp.com',
  //   databaseURL: 'https://cits3200-conversations.firebaseio.com',
  //   storageBucket: '',
  //   messagingSenderId: '992134189372'
  // };
  // firebase.initializeApp(config);

  beforeEach(angular.mock.module('main'));

  var ReframeController;
  var $controller;
  var $state;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    ReframeController = $controller('ReframeController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(ReframeController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(ReframeController.nonExistant).not.toBeDefined();
  });

  it('should have .submit() function', function() {
    expect(ReframeController.submit).toBeDefined();
  });

  it('should have .changeTip() function', function() {
    expect(ReframeController.changeTip).toBeDefined();
  });

  it('should have .changeSubTip() function', function() {
    expect(ReframeController.changeSubTip).toBeDefined();
  });

  it('should have an array of preparation tips', function() {
    expect(ReframeController.preparationTips).toBeDefined();
    expect(ReframeController.preparationTips.length).toEqual(3);
  });

  it('should have set the current tip', function() {
    expect(ReframeController.currentTip).toBeDefined();
    expect(ReframeController.currentTip.Tip).toEqual(ReframeController.preparationTips[0].Tip);
    expect(ReframeController.currentTip.SubTip).toEqual(ReframeController.preparationTips[0].SubTip1);
  });

  it('should be able to change the main tip', function() {
    ReframeController.changeTip();
    expect(ReframeController.currentTip.Tip).toEqual(ReframeController.preparationTips[1].Tip);
    ReframeController.changeTip();
    expect(ReframeController.currentTip.Tip).toEqual(ReframeController.preparationTips[2].Tip);
  });

  it('should be able to change the sub tip', function() {
    ReframeController.changeSubTip();
    expect(ReframeController.currentTip.SubTip).toEqual(ReframeController.preparationTips[0].SubTip2);
    ReframeController.changeTip();
    ReframeController.changeSubTip();
    expect(ReframeController.currentTip.SubTip).toEqual(ReframeController.preparationTips[1].SubTip1);
    ReframeController.changeSubTip();
    expect(ReframeController.currentTip.SubTip).toEqual(ReframeController.preparationTips[1].SubTip2);
  });

});
