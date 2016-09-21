(function() {
  angular
    .module('main', [
      'ionic',
      'ngCordova',
      'ui.router',
    ])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    // ROUTING with ui.router
    // Set the starting url as '/'
    $urlRouterProvider.otherwise('/');

    // Set up the routing states
    // The state is placed in the <ion-nav-view> in the index.html
    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'main/templates/auth.html',
        controller: 'AuthController',
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
      });
  }
})();
