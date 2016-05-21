import Vue from 'vue'
import App from './app.vue'

import Clock from './components/clock.vue'
Vue.component('clock', Clock)


new Vue({
  el: 'body',
  components: { App }
})