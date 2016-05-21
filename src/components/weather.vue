<template>
  <div class="weather-daily-high">{{weatherObj.dailyHigh}} &and;</div>
  <div class="weather-daily-low">{{weatherObj.dailyLow}} &or;</div>
  <div class="weather-daily-description">{{weatherObj.description}}</div>
</template>
  
<script>
  import CONSTANTS from '../constants'

  module.exports = {
    props: ['timeManager'],
    replace: false,
    data: function () {
      return {
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=' +
          CONSTANTS.zip +
          '&mode=json&cnt=1&units=' +
          CONSTANTS.units +
          '&appid=' +
          CONSTANTS.openweathermapKey,
        weatherObj: {
          dailyHigh: null,
          dailyLow: null,
          description: null
        }
      }
    },
    watch: {
      'timeManager.alerts.hour': function () {
        this.checkWeather()
      }
    },
    methods: {
      checkWeather: function () {
        var that = this
        this.$http({url: this.url, method: 'GET'}).then(function (res) {
          var json = res.data.list[0]
          that.weatherObj.dailyHigh = Math.round(json.temp.max)
          that.weatherObj.dailyLow = Math.round(json.temp.min)
          that.weatherObj.description = json.weather[0].main
          console.log(that.weatherObj)
        }, function (error) {
          console.log(error)
        })
      }
    }
  }

</script>