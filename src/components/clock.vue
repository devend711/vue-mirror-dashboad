<template>
  <div class="time-string">
    {{formattedTime}}
    <span class="pm-indicator" v-show="isPm">PM</span>
  </div>
</template>

<script>
  module.exports = {
    props: ['timeManager'],
    replace: false,
    computed: {
      formattedTime: function () {
        var minuteString = this.timeManager.alerts.minute.toString()
        if(minuteString.length === 1) {
          minuteString = "0" + minuteString
        }

        var hours = this.timeManager.alerts.hour
        if(hours > 12) {
          hours -= 12
        }

        var hourString = hours.toString()

        return hourString + ':' + minuteString
      },
      isPm: function () {
        return (this.timeManager.alerts.hour > 12)
      }
    }
  }
</script>