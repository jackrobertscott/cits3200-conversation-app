'use strict';

describe('PrepareController', function() {

  beforeEach(module('main'));
  // this loads in all the template files
  beforeEach(module('ngHtml2Js'));

  var PrepareController;
  var $controller;
  var $state;

  beforeEach(inject(function(_$controller_, _$state_) {
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

  describe('.submit()', function() {

    it('should exist', function() {
      expect(PrepareController.submit).toBeDefined();
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

  });

  describe('.isItemComplete()', function() {

    it('should exist', function() {
      expect(PrepareController.isItemComplete).toBeDefined();
    });

  });

  it('should have list items set', function() {
    expect(PrepareController.listItems).toBeDefined();
    expect(PrepareController.listItems.length).toEqual(5);
    expect(PrepareController.listItems[0].stepName).toBeDefined();
  });

});
