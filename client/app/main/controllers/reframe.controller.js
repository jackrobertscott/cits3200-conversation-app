'use strict';

(function() {
  angular
    .module('main')
    .controller('ReframeController', ReframeController);

  /* @ngInject */
  function ReframeController($interval, reframeService) {
    var vm = this;
    vm.errors = [];
    vm.exampleCallToDB = exampleCallToDB;
    var MAX_TIPS = 3;
    var TIP_INDEX = 0;
    var SUBTIP_INDEX = 0;
    this.maxTips = 3;
    this.preparationTips = [{
      Tip: 'Remember to communicate your interests and acknowledge theirs',
      SubTip1: 'I am interested in...',
      SubTip2: 'They are interested in...'
    }, {
      Tip: 'Communicate what you think both of you can do to resolve the situation',
      SubTip1: 'I will be able to...',
      SubTip2: 'You maybe able to...'
    }, {
      Tip: 'Try not to talk about or reference',
      SubTip1: 'Don\'t talk about...',
      SubTip2: 'Be prepared for them to say...'
    }];
    this.currentTip = {
      Tip: this.preparationTips[TIP_INDEX].Tip,
      SubTip: this.preparationTips[TIP_INDEX].SubTip1
    };

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function changeTip() {
      if (TIP_INDEX + 1 < MAX_TIPS) {
        TIP_INDEX++;
      }
      else {
        TIP_INDEX = 0;
      }
      vm.currentTip.Tip = vm.preparationTips[TIP_INDEX].Tip,
      vm.preparationTips[TIP_INDEX].SubTip1;
    }
    function changeSubTip() {
      if (SUBTIP_INDEX === 0) {
        SUBTIP_INDEX = 1;
        vm.currentTip.SubTip = vm.preparationTips[TIP_INDEX].SubTip2;
      } else {
        SUBTIP_INDEX = 0;
        vm.currentTip.SubTip = vm.preparationTips[TIP_INDEX].SubTip1;
      }
    }

    $interval(changeTip, 10000);
    $interval(changeSubTip, 5001);

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
