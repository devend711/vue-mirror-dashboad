import Vue from 'vue'
import App from './app.vue'

import Clock from './components/clock.vue'
Vue.component('clock', Clock)

import Weather from './components/weather.vue'
Vue.component('weather', Weather)

Vue.use(require('vue-resource'));

require('./assets/fonts/mononoki.scss');
require("./assets/styles/style.scss")

require("./assets/images/pyramid_animation.gif");

new Vue({
  el: 'body',
  components: { App }
})