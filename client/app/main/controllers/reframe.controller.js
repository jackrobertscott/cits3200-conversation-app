'use strict';

(function() {
  angular
    .module('main')
    .controller('ReframeController', ReframeController);

  /* @ngInject */
  function ReframeController(reframeService) {
    var vm = this;
    vm.errors = [];
    vm.exampleCallToDB = exampleCallToDB;
    this.preparationTips = [{
      interestsTip: 'Remember to focus on iterests',
    }];

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function exampleCallToDB() {
      reframeService.getMeData() // this is a Promise (read about it)
        .then(function(data) {
          vm.example = data;
        })
        .catch(function(error) {
          vm.errors.push(error);
        });
    }
  }
})();
