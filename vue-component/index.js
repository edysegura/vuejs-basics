'use strict'

Vue.component('app-grocery-list', {
  props: ['list'],
  template: `
    <ol>
      <app-grocery-item
        v-for="item in list"
        v-bind:item="item"
        v-bind:key="item.id"
      ></app-grocery-item>
    </ol>`
})

Vue.component('app-grocery-item', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
})

const myApp = new Vue({
  el: '#my-app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
