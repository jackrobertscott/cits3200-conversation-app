/* global $:true */
'use strict';

(function() {
  angular
    .module('main')
    .controller('TimerController', TimerController);

  /* @ngInject */
  function TimerController($interval, $ionicPopup, $state, ngAudio) {
    var vm = this;
    var COUNT_TIME = 90;
    var status;

    vm.errors = [];
    vm.count = COUNT_TIME;
    vm.active = false;
    vm.stopCountdown = stopCountdown;
    vm.beginCountdown = beginCountdown;
    vm.resetCountdown = resetCountdown;
    vm.sound = ngAudio.load('main/assets/audio/calm.mp3');
    vm.motivation = {
      count: 0,
      sound: ngAudio.load('main/assets/audio/motivation.mp3'),
    };
    vm.motivate = motivate;

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    function stopCountdown() {
      if (status) {
        $interval.cancel(status);
        vm.active = false;
        vm.sound.pause();
        $('.rainbow .line').css('-webkit-animation-play-state', 'paused');
        status = undefined;
      }
    }

    function beginCountdown() {
      if (!status) {
        vm.active = true;
        vm.sound.play();
        $('.rainbow .line').css('-webkit-animation-play-state', 'running');
        status = $interval(function() {
          if (vm.count > 0) {
            vm.count = vm.count - 1;
          } else {
            stopCountdown();
            $ionicPopup.show({
              title: 'Time Finished',
              template: 'Would you like to restart the countdown or move on?',
              buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
                text: 'Restart',
                type: 'button-calm',
                onTap: function() {
                  resetCountdown();
                  beginCountdown();
                }
              }, {
                text: 'Next',
                type: 'button-positive',
                onTap: function() {
                  $state.go('prepare');
                }
              }]
            });
          }
        }, 1000);
      }
    }

    function resetCountdown() {
      stopCountdown();
      vm.count = COUNT_TIME;
      vm.sound.stop();
    }

    function motivate() {
      vm.motivation.count = vm.motivation.count + 1;
      if (vm.motivation.count === 10) {
        vm.motivation.sound.play();
        vm.motivation.count = 0;
      }
    }
  }
})();
