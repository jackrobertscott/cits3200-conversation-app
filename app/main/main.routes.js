'use strict';

(function() {
  angular
    .module('main')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    // ROUTING with ui.router
    // Set the starting url as '/'
    $urlRouterProvider.otherwise('/login');

    // Set up the routing states
    // The state is placed in the <ion-nav-view> in the index.html
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'main/templates/login.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'main/templates/signup.html',
        controller: 'AuthController',
        controllerAs: 'vm',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'main/templates/about.html',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'main/templates/menu.html',
        controller: 'AuthController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('venting', {
        url: '/venting',
        templateUrl: 'main/templates/venting.html',
        controller: 'VentingController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('timer', {
        url: '/timer',
        templateUrl: 'main/templates/timer.html',
        controller: 'TimerController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('timer-info', {
        url: '/timer-info',
        templateUrl: 'main/templates/timer-info.html',
        controller: 'TimerController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('prepare', {
        url: '/prepare',
        templateUrl: 'main/templates/prepare.html',
        controller: 'PrepareController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('reframe', {
        url: '/reframe',
        templateUrl: 'main/templates/reframe.html',
        controller: 'ReframeController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('reflection', {
        url: '/reflection',
        templateUrl: 'main/templates/reflection.html',
        controller: 'ReflectionController',
        controllerAs: 'vm',
        resolve: requireAuthenication(),
      })
      .state('reflection.prepare', {
        url: '/prepare',
        views: {
          'prepare': {
            templateUrl: 'main/templates/reflection.prepare.html',
          },
        },
      })
      .state('reflection.venting', {
        url: '/venting',
        views: {
          'venting': {
            templateUrl: 'main/templates/reflection.venting.html',
          },
        },
      })
      .state('reflection.reframe', {
        url: '/reframe',
        views: {
          'reframe': {
            templateUrl: 'main/templates/reflection.reframe.html',
          },
        },
      });
  }

  function requireAuthenication() {
    return {
      // controller will not be loaded until $requireSignIn resolves
      // authService refers to our $firebaseAuth wrapper in the factory below
      'currentAuth': ['authService', function(authService) {
        // $requireSignIn returns a promise so the resolve waits for it to complete
        // If the promise is rejected, it will throw a $stateChangeError (see above)
        return authService.$requireSignIn();
      }]
    };
  }
})();
