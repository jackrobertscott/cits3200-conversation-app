'use strict';

describe('VentingController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var VentingController;
  var $controller;
  var $state;
  var $ionicPopup;
  var $ionicLoading;
  var $rootScope;
  var $q;
  var authService;
  var ventingService;

  beforeEach(inject(function(_$controller_, _$state_, _$ionicPopup_, _$ionicLoading_, _$rootScope_, _$q_, _authService_, _ventingService_) {
    $controller = _$controller_;
    $state = _$state_;
    $ionicPopup = _$ionicPopup_;
    $ionicLoading = _$ionicLoading_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    authService = _authService_;
    ventingService = _ventingService_;
  }));

  beforeEach(function() {
    var deffered = $q.defer();
    spyOn(ventingService, 'getByUserId').and.returnValue({
      $add: function() {
        return deffered.promise;
      },
    });
    deffered.resolve();
    VentingController = $controller('VentingController', {
      $state: $state,
      currentAuth: {
        uid: '12345',
      },
    });
  });

  // -------- TESTS --------

  it('should exist', function() {
    expect(VentingController).toBeDefined();
  });

  it('should not have .nonExistant() function', function() {
    expect(VentingController.nonExistant).not.toBeDefined();
  });

  describe('.create()', function() {

    beforeEach(function() {
      var deffered = $q.defer();
      spyOn($ionicPopup, 'alert').and.callThrough();
      spyOn($ionicLoading, 'show').and.returnValue(deffered.promise);
      spyOn($ionicLoading, 'hide').and.returnValue(deffered.promise);
      deffered.resolve();
    });

    it('should exist', function() {
      expect(VentingController.create).toBeDefined();
    });

    it('should alert if input are empty', function() {
      VentingController.text = '';
      VentingController.create();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show + hide loading when inputs filled', function() {
      VentingController.text = 'example input value';
      VentingController.create();
      $rootScope.$digest();
      expect($ionicLoading.show).toHaveBeenCalled();
      expect($ionicLoading.hide).toHaveBeenCalled();
    });

    it('should redirect to the timer info screen', function() {
      spyOn(authService, '$requireSignIn').and.callFake(function() {
        return true;
      });
      $state.go('venting');
      $rootScope.$digest();
      expect($state.current.name).toEqual('venting');

      VentingController.text = 'example input value';
      VentingController.create();
      $rootScope.$digest();

      expect($state.current.name).toEqual('timer-info');
    });

  });

});
