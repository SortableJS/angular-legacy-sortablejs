angular.module('exampleApp', ['wisboo-sortable'])
  .controller('Controller', function () {
    this.list1 = ['burgers', 'chips', 'hotdog', 'icecream'];
    this.list2 = ['pears', 'apples', 'oranges', 'pineapple'];

    this.sortableConf = {
      handle: 'li',
      forceFallback: false,
      group: 'food'
    };

    this.sortableConf2 = {
      handle: 'li',
      forceFallback: false,
      sort: false,
      group: {
        name: 'food',
        pull: 'clone',
        put: false
      }
    };
  });
