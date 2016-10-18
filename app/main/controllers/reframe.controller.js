'use strict';

(function() {
  angular
    .module('main')
    .controller('ReframeController', ReframeController);

  /* @ngInject */
  function ReframeController($interval, reframeService, currentAuth, $ionicLoading, $ionicPopup, $state) {
    var vm = this;
    var MAX_TIPS = 3;
    var TIP_INDEX = 0;
    var SUBTIP_INDEX = 0;

    vm.errors = [];
    vm.reframes;
    vm.text = '';
    vm.maxTips = MAX_TIPS;
    vm.preparationTips = [{
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
    vm.currentTip = {
      Tip: this.preparationTips[TIP_INDEX].Tip,
      SubTip: this.preparationTips[TIP_INDEX].SubTip1
    };
    vm.submit = submit;

    activate();

    function activate() {
      vm.reframes = reframeService.getByUserId(currentAuth.uid);
      /*
       * Setting the interval for when the tips change
       */
      function slideAlong() {
        $('.loading-slide').animate({
          width: '100%',
        }, 10000, function() {
          $(this).css('width', '0');
        });
      }
      slideAlong();
      $interval(function() {
        changeTip();
        slideAlong();
      }, 10000);
      $interval(changeSubTip, 5000);
    }

    /*
     * Function for changing which tip is changing.
     * Goes through the array of objects preparationTips one at a time
     * If it gets to the end of the array returns to the start
     */

    function changeTip() {
      if (TIP_INDEX + 1 < MAX_TIPS) {
        TIP_INDEX++;
      } else {
        TIP_INDEX = 0;
      }
      vm.currentTip.Tip = vm.preparationTips[TIP_INDEX].Tip; //changing to the new tip
    }

    /*
     * Function for changing the sub tip from two possible.
     * Checks if it is in the first or second subtip then changes to the other
     */
    function changeSubTip() {
      if (SUBTIP_INDEX === 0) {
        SUBTIP_INDEX = 1;
        vm.currentTip.SubTip = vm.preparationTips[TIP_INDEX].SubTip2;
      } else {
        SUBTIP_INDEX = 0;
        vm.currentTip.SubTip = vm.preparationTips[TIP_INDEX].SubTip1;
      }
    }

    function submit() {
      if (!vm.text.trim()) {
        return $ionicPopup.alert({
          title: 'Inputs Missing',
          template: 'Please fill in all inputs.'
        });
      }
      $ionicLoading.show().then(function() {
        vm.reframes.$add({
          text: vm.text,
          createdAt: Date.now(),
          userId: currentAuth.uid,
        }).then(function() {
          $ionicLoading.hide();
          vm.text = '';
          $state.go('reflection.reframe');
        }).catch(function() {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'Submission Failed',
            template: 'Sorry for the inconvinience.'
          });
        });
      });
    }
  }
})();
