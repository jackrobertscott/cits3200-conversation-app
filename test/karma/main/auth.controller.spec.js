/* global firebase:true */
'use strict';

describe('AuthController', function() {

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

  // -------- TESTS --------

  it('should exist', function() {
    expect(AuthController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(AuthController.nonExistant).not.toBeDefined();
  });

  it('should have .login() function', function() {
    expect(AuthController.login).toBeDefined();
  });

  it('should have .logout() function', function() {
    expect(AuthController.logout).toBeDefined();
  });

  it('should have .signup() function', function() {
    expect(AuthController.signup).toBeDefined();
  });

  it('should have empty credentials', function() {
    var c = AuthController.credentials;
    expect(c).toBeDefined();
    expect(c.email).toEqual('');
    expect(c.password).toEqual('');
  });

  // it('should be $state "login"', function() {
  //   $state.go('login');
  //   $rootScope.digest();
  //   console.log($state.current);
  //   expect($state.current).toEqual('login');
  // });

});
