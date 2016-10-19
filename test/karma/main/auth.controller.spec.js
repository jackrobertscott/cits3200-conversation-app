'use strict';

describe('authentication controller', function() {

  var config = {
    apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
    authDomain: 'cits3200-conversations.firebaseapp.com',
    databaseURL: 'https://cits3200-conversations.firebaseio.com',
    storageBucket: '',
    messagingSenderId: '992134189372'
  };
  firebase.initializeApp(config);

  beforeEach(angular.mock.module('main'));

  var AuthController;
  var $controller;
  var $state;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    AuthController = $controller('AuthController', { $state: $state });
  });

    /*-----SPECS-------*/
  it('should exist', function() {
    expect(AuthController).toBeDefined();
  });

  // it('should have login function go to menu', function() {
  //   expect($state).toBeDefined('menu');
  // });

  it('should have login function', function() {
    expect(AuthController.login).toBeDefined();
  });

  it('should not have poopie function', function() {
    expect(AuthController.poopie).not.toBeDefined();
  });

});
