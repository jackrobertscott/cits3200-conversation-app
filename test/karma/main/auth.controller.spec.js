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

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var AuthController;
  var $controller;
  var $state;
  var $ionicPopup;
  var $ionicLoading;
  var authService;
  var $rootScope;

  beforeEach(inject(function(_$controller_, _$state_, _$ionicPopup_, _$ionicLoading_, _$rootScope_, _authService_) {
    $controller = _$controller_;
    $state = _$state_;
    $ionicPopup = _$ionicPopup_;
    $ionicLoading = _$ionicLoading_;
    $rootScope = _$rootScope_;
    authService = _authService_;
  }));

  beforeEach(function() {
    AuthController = $controller('AuthController', {
      $state: $state
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(AuthController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(AuthController.nonExistant).not.toBeDefined();
  });

  describe('.login()', function() {

    it('should exist', function() {
      expect(AuthController.login).toBeDefined();
    });

    it('should alert when inputs empty', function() {
      spyOn($ionicPopup, 'alert').and.callThrough();
      AuthController.login();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show loading screen when full inputs are submitted', function() {
      spyOn($ionicLoading, 'show').and.callThrough();
      AuthController.credentials.email = 'wrong@email.com';
      AuthController.credentials.password = 'password';
      AuthController.login();
      expect($ionicLoading.show).toHaveBeenCalled();
    });

  });

  describe('.logout()', function() {

    it('should exist', function() {
      expect(AuthController.logout).toBeDefined();
    });

    it('should call the .$signOut() function in authService', function() {
      spyOn(authService, '$signOut').and.callThrough();
      AuthController.logout();
      expect(authService.$signOut).toHaveBeenCalled();
    });

  });

  describe('.signup()', function() {

    it('should exist', function() {
      expect(AuthController.signup).toBeDefined();
    });

    it('should alert when inputs empty', function() {
      spyOn($ionicPopup, 'alert').and.callThrough();
      AuthController.signup();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show loading screen when full inputs are submitted', function() {
      spyOn($ionicLoading, 'show').and.callThrough();
      AuthController.credentials.email = 'wrong@email.com';
      AuthController.credentials.password = 'password';
      AuthController.signup();
      expect($ionicLoading.show).toHaveBeenCalled();
    });

  });

  it('should have empty credentials', function() {
    var c = AuthController.credentials;
    expect(c).toBeDefined();
    expect(c.email).toEqual('');
    expect(c.password).toEqual('');
  });

  it('should redirect to login page if not authenticated', function() {
    $state.go('menu');
    $rootScope.$digest();
    expect($state.current.name).toEqual('login');
  });

  it('should load the signup screen', function() {
    $state.go('signup');
    $rootScope.$digest();
    expect($state.current.name).toBe('signup');
  });

  it('should load the login screen', function() {
    $state.go('login');
    $rootScope.$digest();
    expect($state.current.name).toBe('login');
  });

});
