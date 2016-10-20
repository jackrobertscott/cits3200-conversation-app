/* global firebase:true */
'use strict';

describe('AuthController', function() {

  // firebase has to be initialed otherwise it breaks...
  // this is kinda hacky
  var config = {
    apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
    authDomain: 'cits3200-conversations.firebaseapp.com',
    databaseURL: 'https://cits3200-conversations.firebaseio.com',
    storageBucket: '',
    messagingSenderId: '992134189372'
  };
  firebase.initializeApp(config);

  // load the main (angular) module
  beforeEach(module('main'));
  // this loads in all the template files so you don't get annoying errors
  beforeEach(module('ngHtml2Js'));

  var AuthController;
  var $controller;
  var $state;
  var $ionicPopup;
  var $ionicLoading;
  var $rootScope;
  var $q;
  var authService;

  beforeEach(inject(function(_$controller_, _$state_, _$ionicPopup_, _$ionicLoading_, _$rootScope_, _$q_, _authService_) {
    $controller = _$controller_;
    $state = _$state_;
    $ionicPopup = _$ionicPopup_;
    $ionicLoading = _$ionicLoading_;
    $rootScope = _$rootScope_;
    authService = _authService_;
    $q = _$q_;
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

    beforeEach(function() {
      // we are passing 'resolved' promises to these functions as that's what they usually return
      // without these promises passed in, the 2nd and 3rd functions wont be called
      var deffered = $q.defer();
      spyOn($ionicLoading, 'show').and.returnValue(deffered.promise);
      spyOn(authService, '$signInWithEmailAndPassword').and.returnValue(deffered.promise);
      spyOn($ionicLoading, 'hide').and.returnValue(deffered.promise);
      deffered.resolve();
    });

    it('should exist', function() {
      expect(AuthController.login).toBeDefined();
    });

    it('should alert when inputs empty', function() {
      // spying on functions allow you to check if they are being called
      // they also allow you to pass fake return values back
      // .callThrough() just makes it call normaly
      spyOn($ionicPopup, 'alert').and.callThrough();
      AuthController.login();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show + hide loading screen around calling service', function() {
      AuthController.credentials.email = 'wrong@email.com';
      AuthController.credentials.password = 'password';
      AuthController.login();
      // call digest so that the function is called all the way through
      $rootScope.$digest();

      expect($ionicLoading.show).toHaveBeenCalled();
      expect(authService.$signInWithEmailAndPassword).toHaveBeenCalled();
      expect($ionicLoading.hide).toHaveBeenCalled();
    });

    it('should relocate to the menu page', function() {
      $rootScope.$digest();
      expect($state.current.name).toEqual('login');
      spyOn(authService, '$requireSignIn').and.returnValue(true);

      AuthController.credentials.email = 'wrong@email.com';
      AuthController.credentials.password = 'password';
      AuthController.login();
      $rootScope.$digest();

      expect($state.current.name).toEqual('menu');
    });

  });

  describe('.signup()', function() {

    beforeEach(function() {
      var deffered = $q.defer();
      spyOn($ionicLoading, 'show').and.returnValue(deffered.promise);
      spyOn(authService, '$createUserWithEmailAndPassword').and.returnValue(deffered.promise);
      spyOn($ionicLoading, 'hide').and.returnValue(deffered.promise);
      deffered.resolve();
    });

    it('should exist', function() {
      expect(AuthController.signup).toBeDefined();
    });

    it('should alert when inputs empty', function() {
      spyOn($ionicPopup, 'alert').and.callThrough();
      AuthController.signup();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show + hide loading screen around calling service', function() {
      AuthController.credentials.email = 'wrong@email.com';
      AuthController.credentials.password = 'password';
      AuthController.signup();
      $rootScope.$digest();

      expect($ionicLoading.show).toHaveBeenCalled();
      expect(authService.$createUserWithEmailAndPassword).toHaveBeenCalled();
      expect($ionicLoading.hide).toHaveBeenCalled();
    });

    it('should relocate to the menu page', function() {
      $rootScope.$digest();
      expect($state.current.name).toEqual('login');
      spyOn(authService, '$requireSignIn').and.returnValue(true);

      AuthController.credentials.email = 'wrong@email.com';
      AuthController.credentials.password = 'password';
      AuthController.signup();
      $rootScope.$digest();

      expect($state.current.name).toEqual('menu');
    });

  });

  describe('.logout()', function() {

    it('should exist', function() {
      expect(AuthController.logout).toBeDefined();
    });

    it('should call .$signOut() and relocate to the login page', function() {
      spyOn(authService, '$requireSignIn').and.returnValue(true);
      $state.go('menu');
      $rootScope.$digest();
      expect($state.current.name).toEqual('menu');

      var deffered = $q.defer();
      spyOn(authService, '$signOut').and.returnValue(deffered.promise);
      deffered.resolve();

      AuthController.logout();
      $rootScope.$digest();

      expect(authService.$signOut).toHaveBeenCalled();
      expect($state.current.name).toEqual('login');
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
    // when you change state, you need to digest to update the actual state
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
