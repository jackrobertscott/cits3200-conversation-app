'use strict';

describe('ReframeController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var ReframeController;
  var $controller;
  var $state;
  var $ionicPopup;
  var $ionicLoading;
  var $rootScope;
  var $q;
  var authService;
  var reframeService;

  beforeEach(inject(function(_$controller_, _$state_, _$ionicPopup_, _$ionicLoading_, _$rootScope_, _$q_, _authService_, _reframeService_) {
    $controller = _$controller_;
    $state = _$state_;
    $ionicPopup = _$ionicPopup_;
    $ionicLoading = _$ionicLoading_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    authService = _authService_;
    reframeService = _reframeService_;
  }));

  beforeEach(function() {
    var deffered = $q.defer();
    spyOn(reframeService, 'getByUserId').and.returnValue({
      $add: function() {
        return deffered.promise;
      },
    });
    deffered.resolve();
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

  describe('.submit()', function() {

    beforeEach(function() {
      var deffered = $q.defer();
      spyOn($ionicPopup, 'alert').and.callThrough();
      spyOn($ionicLoading, 'show').and.returnValue(deffered.promise);
      spyOn($ionicLoading, 'hide').and.returnValue(deffered.promise);
      deffered.resolve();
    });

    it('should exist', function() {
      expect(ReframeController.submit).toBeDefined();
    });

    it('should alert if input are empty', function() {
      ReframeController.text = '';
      ReframeController.submit();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show + hide loading when inputs filled', function() {
      ReframeController.text = 'example input value';
      ReframeController.submit();
      $rootScope.$digest();
      expect($ionicLoading.show).toHaveBeenCalled();
      expect($ionicLoading.hide).toHaveBeenCalled();
    });

    it('should redirect to the reframe screen', function() {
      spyOn(authService, '$requireSignIn').and.callFake(function() {
        return true;
      });
      $state.go('reframe');
      $rootScope.$digest();
      expect($state.current.name).toEqual('reframe');

      ReframeController.text = 'example input value';
      ReframeController.submit();
      $rootScope.$digest();

      expect($state.current.name).toEqual('reflection.reframe');
    });

  });

  describe('.changeTip()', function() {

    it('should exist', function() {
      expect(ReframeController.changeTip).toBeDefined();
    });

    it('should be able to change the main tip', function() {
      ReframeController.changeTip();
      expect(ReframeController.currentTip.Tip).toEqual(ReframeController.preparationTips[1].Tip);
      ReframeController.changeTip();
      expect(ReframeController.currentTip.Tip).toEqual(ReframeController.preparationTips[2].Tip);
    });

  });

  describe('.changeSubTip()', function() {

    it('should exist', function() {
      expect(ReframeController.changeSubTip).toBeDefined();
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

  it('should have an array of preparation tips', function() {
    expect(ReframeController.preparationTips).toBeDefined();
    expect(ReframeController.preparationTips.length).toEqual(3);
  });

  it('should have set the current tip', function() {
    expect(ReframeController.currentTip).toBeDefined();
    expect(ReframeController.currentTip.Tip).toEqual(ReframeController.preparationTips[0].Tip);
    expect(ReframeController.currentTip.SubTip).toEqual(ReframeController.preparationTips[0].SubTip1);
  });

});
