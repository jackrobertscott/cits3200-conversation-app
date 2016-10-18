'use strict';

(function() {
  angular
    .module('main')
    .config(config);

  /* @ngInject */
  function config() {
    var config = {
      apiKey: 'AIzaSyDc37qyP5l9JExJRL4B5QAiTLFhu81hWmo',
      authDomain: 'cits3200-conversations.firebaseapp.com',
      databaseURL: 'https://cits3200-conversations.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '992134189372'
    };
    firebase.initializeApp(config);
  }
})();
