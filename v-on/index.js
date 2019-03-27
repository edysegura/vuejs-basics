'use strict'

const myApp = new Vue({
  el: '#my-app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
})
