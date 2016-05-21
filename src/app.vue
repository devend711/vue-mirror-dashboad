<template>
  <div class="screen-container">
    <clock class="component" :time-manager="timeManager"></clock>
    <weather class="component" :time-manager="timeManager"></weather>
    <div class="center" id="bottom-img-container">
      <img class="max-width-100p" src="assets/images/color_ball.gif" />
    </div>
  </div>
</template>

<script>
import TimeManager from './objects/time_manager'

export default {
  data () {
    return {
      msg: 'Hello world!',
      timeManager: new TimeManager()
    }
  },
  ready: function () {
    this.timeManager.init()
  }
}
</script>