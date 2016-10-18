'use strict';

describe('Reflection Controller', function() {

  beforeEach(angular.mock.module('main'));

  var ReflectionController;
  var $controller;
  var $state;

  beforeEach(angular.mock.inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
  }));

  beforeEach(function() {
    ReflectionController = $controller('ReflectionController', { $state: $state });
  });

    /*-----SPECS-------*/
  it('should exist', function() {
    expect(ReflectionController).toBeDefined();
  });

  // it('should have login function go to menu', function() {
  //   expect($state).toBeDefined('menu');
  // });
});
