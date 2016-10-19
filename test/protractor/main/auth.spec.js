'use strict';

describe('login page', function() {

  beforeEach(function() {
    browser.get('/#/login');
  });

  it('should have email and password inputs', function() {

    var $emailInput = element(by.model('vm.credentials.email'));
    var $passwordInput = element(by.model('vm.credentials.password'));

    $emailInput.sendKeys('example@email.com');
    expect($emailInput.getAttribute('value')).toEqual('example@email.com');

    $passwordInput.sendKeys('password');
    expect($passwordInput.getAttribute('value')).toEqual('password');

    // // weak
    // passwordInput.sendKeys('my');
    // expect(passwordStrength.getInnerHtml()).toEqual('weak');
    // expect(passwordStrength.getAttribute('class')).toContain('badge-assertive');
    //
    // // medium
    // passwordInput.sendKeys('test');
    // expect(passwordStrength.getInnerHtml()).toEqual('medium');
    // expect(passwordStrength.getAttribute('class')).toContain('badge-energized');
    //
    // // strong
    // passwordInput.sendKeys('tesyasdft');
    // expect(passwordStrength.getInnerHtml()).toEqual('strong');
    // expect(passwordStrength.getAttribute('class')).toContain('badge-balanced');

  });
});
