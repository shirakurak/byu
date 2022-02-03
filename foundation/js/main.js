(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      newName: '',
      name : 'shirakura', 
      names: [
        'name 1',
        'name 2',
        'name 3'
      ]
    },
    methods: {
      addName: function() {
        this.names.push(this.newName);
        this.newName = '';
      }
    }
  });
})();