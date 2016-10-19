'use strict';

describe('PrepareController', function() {

  // var config = {
  //   apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
  //   authDomain: 'cits3200-conversations.firebaseapp.com',
  //   databaseURL: 'https://cits3200-conversations.firebaseio.com',
  //   storageBucket: '',
  //   messagingSenderId: '992134189372'
  // };
  // firebase.initializeApp(config);

  beforeEach(angular.mock.module('main'));

  var PrepareController;
  var $controller;
  var $state;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    PrepareController = $controller('PrepareController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(PrepareController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(PrepareController.nonExistant).not.toBeDefined();
  });

  it('should have .submit() function', function() {
    expect(PrepareController.submit).toBeDefined();
  });

  it('should have .toggleListItem() function', function() {
    expect(PrepareController.toggleListItem).toBeDefined();
  });

  it('should have .isListItemShown() function', function() {
    expect(PrepareController.isListItemShown).toBeDefined();
  });

  it('should have .isItemComplete() function', function() {
    expect(PrepareController.isItemComplete).toBeDefined();
  });

  it('should have list items set', function() {
    expect(PrepareController.listItems).toBeDefined();
    expect(PrepareController.listItems.length).toEqual(5);
    expect(PrepareController.listItems[0].stepName).toBeDefined();
  });

});
