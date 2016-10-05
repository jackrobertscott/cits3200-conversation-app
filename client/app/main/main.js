'use strict';

(function() {
  angular
    .module('main', [
      'ngCookies',
      'ionic',
      'ngCordova',
      'ui.router',
    ])
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    // ROUTING with ui.router
    // Set the starting url as '/'
    $urlRouterProvider.otherwise('/login');

    // Set up the routing states
    // The state is placed in the <ion-nav-view> in the index.html
    $stateProvider
      .state('auth', {
        url: '/login', //
        templateUrl: 'main/templates/auth.html', //login.html
        controller: 'AuthController',  //LoginCtrl
        controllerAs: 'vm',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'main/templates/menu.html',
      })
      .state('venting', {
        url: '/venting',
        templateUrl: 'main/templates/venting.html',
        controller: 'VentingController',
        controllerAs: 'vm',
      })
      .state('timer', {
        url: '/timer',
        templateUrl: 'main/templates/timer.html',
        controller: 'TimerController',
        controllerAs: 'vm',
      })
      .state('prepare', {
        url: '/prepare',
        templateUrl: 'main/templates/prepare.html',
        controller: 'PrepareController',
        controllerAs: 'vm',
      })
      .state('reflection', {
        url: '/reflection',
        templateUrl: 'main/templates/reflection.html',
        controller: 'ReflectionController',
        controllerAs: 'vm',
      });
  }
})();
