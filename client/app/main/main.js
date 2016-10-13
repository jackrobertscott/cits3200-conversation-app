'use strict';

(function() {
  angular
    .module('main', [
      'ngCookies',
      'ionic',
      'ngCordova',
      'ui.router',
      'firebase',
    ])
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    // ROUTING with ui.router
    // Set the starting url as '/'
    $urlRouterProvider.otherwise('/login');

    var config = {
      apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
      authDomain: 'cits3200-conversations.firebaseapp.com',
      databaseURL: 'https://cits3200-conversations.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '992134189372'
    };
    firebase.initializeApp(config);

    // Set up the routing states
    // The state is placed in the <ion-nav-view> in the index.html
    $stateProvider
      .state('auth', {
        url: '/login', //
        templateUrl: 'main/templates/auth.html', //login.html
        controller: 'AuthController', //LoginCtrl
        controllerAs: 'vm',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'main/templates/menu.html',
        controller: 'AuthController',
        controllerAs: 'vm',
        data: {
          authenticate: true,
        },
      })
      .state('venting', {
        url: '/venting',
        templateUrl: 'main/templates/venting.html',
        controller: 'VentingController',
        controllerAs: 'vm',
        data: {
          authenticate: true,
        },
      })
      .state('timer', {
        url: '/timer',
        templateUrl: 'main/templates/timer.html',
        controller: 'TimerController',
        controllerAs: 'vm',
        data: {
          authenticate: true,
        },
      })
      .state('prepare', {
        url: '/prepare',
        templateUrl: 'main/templates/prepare.html',
        controller: 'PrepareController',
        controllerAs: 'vm',
        data: {
          authenticate: true,
        },
      })
      .state('reflection', {
        url: '/reflection',
        templateUrl: 'main/templates/reflection.html',
        controller: 'ReflectionController',
        controllerAs: 'vm',
        data: {
          authenticate: true,
        },
      })
      .state('reframe', {
        url: '/reframe',
        templateUrl: 'main/templates/reframe.html',
        controller: 'ReframeController',
        controllerAs: 'vm',
        data: {
          authenticate: true,
        },
      });
  }
})();
