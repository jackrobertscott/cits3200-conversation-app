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

    /**
     * This acts like the controllers constructor
     */
    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    /**
     * Stop the countdown timer
     * Stop the audio
     */
    function stopCountdown() {
      if (status) {
        $interval.cancel(status);
        vm.active = false;
        vm.sound.pause();
        $('.rainbow .line').css('-webkit-animation-play-state', 'paused');
        status = undefined;
      }
    }

    /**
     * Start the countdown timer
     * Start the audio
     */
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

    /**
     * Reset the countdown to 90 seconds
     */
    function resetCountdown() {
      stopCountdown();
      vm.count = COUNT_TIME;
      vm.sound.stop();
    }

    /**
     * Increment the motivation counter and prepare audio
     */
    function motivate() {
      vm.motivation.count = vm.motivation.count + 1;
      if (vm.motivation.count === 10) {
        vm.motivation.sound.play();
        vm.motivation.count = 0;
      }
    }
  }
})();
