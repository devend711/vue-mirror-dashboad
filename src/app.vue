<template>
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
    this.timeManager.startClock()
  }
}
</script>