'use strict';

(function() {
  angular
    .module('main')
    .controller('PrepareController', PrepareController);

  /* @ngInject */
  function PrepareController(prepareService) {
    var vm = this;
    vm.errors = [];
    vm.listItems = [{
      stepName: 'Consider Each Others Wants',
      contents: {
        input1label: 'What do you want?',
        input1: null,
        input2label: 'What do they want?',
        input2: null,
        explanation: 'These are the positions you both hold going into the conversation. This is also your first step in building curiosity, considering the issue from their perspective as well as your own.',
        completed: false
      }
    }, {
      stepName: 'Why Do Each of You Want That',
      contents: {
        input1label: 'What are your interests?',
        input1: null,
        input2label: 'What are their interests?',
        input2: null,
        explanation: 'Considering each others interests is important. If you dont know their interests going into the conversation that could be a goal for you, dont assume their interests.',
        completed: false
      }
    }, {
      stepName: 'What are the alternatives?',
      contents: {
        input1label: 'What will happen to you if this doesn\'t happen ?',
        input1: null,
        input2label: 'What will happen to them if this doesn\'t happen?',
        input2: null,
        explanation: 'What results if the conversation doesn\'t happen, is there anything either of you can do independtly to improve the situation. If these options are good maybe reconsider the conversation ',
        completed: false
      }
    }, {
      stepName: 'How can it be resolved?',
      contents: {
        input1label: 'What can you do to resolve the situation?',
        input1: null,
        input2label: 'What can they do to resolve the situation',
        input2: null,
        explanation: 'Consider how both of you can act to resolve the situation working together',
        completed: false
      }
    }, {
      stepName: 'Behaviours to avoid?',
      contents: {
        input1label: 'What comments will the other person makethat you are likely to respond negatively to?',
        input1: null,
        input2label: 'What might you say or do that they will respond negatively to?',
        input2: null,
        explanation: 'Preparation for these comments is important, if you are likely to respond negatively to something anticipate it and minimise the impact of it. Also minimise your own use of these comments.',
        completed: false
      }
    }];

    activate();

    function activate() {
      // things you want to do/initialise (like variables) from things like services (ask Jack)
      // can usually ignore this function
    }

    vm.toggleListItem = function(listItem) {
      if (listItem.contents.input1 !== null && listItem.contents.input1 !== '' &&
        listItem.contents.input2 !== null && listItem.contents.input2 !== '') {
        listItem.contents.completed = true;
      }
      if (this.isListItemShown(listItem)) {
        this.shownListItem = null;

      } else {
        this.shownListItem = listItem;
      }
    };

    vm.isListItemShown = function(listItem) {
      return this.shownListItem === listItem;
    };

    vm.isItemComplete = function(listItem) {
      return listItem.contents.completed;
    };
  }
})();
