'use strict';

describe('module: main, controller: AuthenticationCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AuthenticationCtrl;
  beforeEach(inject(function ($controller) {
    AuthenticationCtrl = $controller('AuthenticationCtrl');
  }));

  it('should do something', function () {
    expect(!!AuthenticationCtrl).toBe(true);
  });

});
