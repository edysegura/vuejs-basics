import data from './data.js'

const myApp = new Vue({
  el: '#my-app',
  data: {
    teamMembers: data
  }
})


// setInterval(() => myApp.teamMembers.reverse(), 1000);
