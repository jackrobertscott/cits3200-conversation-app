'use strict';

describe('PrepareController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var PrepareController;
  var $controller;
  var $state;
  var $ionicPopup;
  var $ionicLoading;
  var $rootScope;
  var $q;
  var authService;
  var prepareService;

  beforeEach(inject(function(_$controller_, _$state_, _$ionicPopup_, _$ionicLoading_, _$rootScope_, _$q_, _authService_, _prepareService_) {
    $controller = _$controller_;
    $state = _$state_;
    $ionicPopup = _$ionicPopup_;
    $ionicLoading = _$ionicLoading_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    authService = _authService_;
    prepareService = _prepareService_;
  }));

  beforeEach(function() {
    var deffered = $q.defer();
    spyOn(prepareService, 'getByUserId').and.returnValue({
      $add: function() {
        return deffered.promise;
      },
    });
    deffered.resolve();
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

  describe('.submit()', function() {

    beforeEach(function() {
      var deffered = $q.defer();
      spyOn($ionicPopup, 'alert').and.callThrough();
      spyOn($ionicLoading, 'show').and.returnValue(deffered.promise);
      spyOn($ionicLoading, 'hide').and.returnValue(deffered.promise);
      deffered.resolve();
    });

    it('should exist', function() {
      expect(PrepareController.submit).toBeDefined();
    });

    it('should alert if input are empty', function() {
      PrepareController.listItems[0].contents.input1 = '';
      PrepareController.submit();
      expect($ionicPopup.alert).toHaveBeenCalled();
    });

    it('should show + hide loading when inputs filled', function() {
      PrepareController.listItems[0].contents.input1 = 'example input value';
      PrepareController.submit();
      $rootScope.$digest();
      expect($ionicLoading.show).toHaveBeenCalled();
      expect($ionicLoading.hide).toHaveBeenCalled();
    });

    it('should redirect to the reframe screen', function() {
      spyOn(authService, '$requireSignIn').and.callFake(function() {
        return true;
      });
      $state.go('prepare');
      $rootScope.$digest();
      expect($state.current.name).toEqual('prepare');

      PrepareController.listItems[0].contents.input1 = 'example input value';
      PrepareController.submit();
      $rootScope.$digest();

      expect($state.current.name).toEqual('reframe');
    });

  });

  describe('.toggleListItem()', function() {

    it('should exist', function() {
      expect(PrepareController.toggleListItem).toBeDefined();
    });

  });

  describe('.isListItemShown()', function() {

    it('should exist', function() {
      expect(PrepareController.isListItemShown).toBeDefined();
    });

    it('should return true if list item is show', function() {
      PrepareController.shownListItem = PrepareController.listItems[0];
      expect(PrepareController.isListItemShown(PrepareController.listItems[0])).toBeTruthy();
    });

    it('should return false if list item is not show', function() {
      PrepareController.shownListItem = PrepareController.listItems[0];
      expect(PrepareController.isListItemShown(PrepareController.listItems[1])).toBeFalsy();
    });

  });

  describe('.isItemComplete()', function() {

    it('should exist', function() {
      expect(PrepareController.isItemComplete).toBeDefined();
    });

    it('should return true if item complete', function() {
      PrepareController.listItems[0].contents.completed = true;
      expect(PrepareController.isItemComplete(PrepareController.listItems[0])).toBeTruthy();
    });

    it('should return false if item is not complete', function() {
      PrepareController.listItems[0].contents.completed = false;
      expect(PrepareController.isItemComplete(PrepareController.listItems[0])).toBeFalsy();
    });

  });

  it('should have list items set', function() {
    expect(PrepareController.listItems).toBeDefined();
    expect(PrepareController.listItems.length).toEqual(5);
    expect(PrepareController.listItems[0].stepName).toBeDefined();
  });

});
