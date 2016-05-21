function TimeManager() {
  this.alerts = {
    second: 1,
    minute: 1,
    hour: 1,
    day: 1
  }
}

TimeManager.prototype.init = function () {
  var currentTime = new Date()
  this.alerts.second = currentTime.getSeconds()
  this.alerts.minute = currentTime.getMinutes()
  this.alerts.hour = currentTime.getHours()
  this.alerts.day = 1
  this.startClock()
}

TimeManager.prototype.startClock = function () {
  var that = this;
  setTimeout(function () {
    that.alertSecond()
    that.startClock()
  }, 1000)
}

TimeManager.prototype.alertSecond = function () {
  this.alerts.second += 1
  if(this.alerts.second >= 60) {
    this.alerts.second = 0
    this.alerts.minute += 1
  }
}

TimeManager.prototype.alertMinute = function () {
  this.alerts.minute += 1
  if(this.alerts.minute >= 60) {
    this.alerts.minute = 0
    this.alerts.hour += 1
  }
}

TimeManager.prototype.alertHour = function () {
  this.alerts.hour += 1
  if(this.alerts.hour >= 24) {
    this.alerts.hour = 0
    this.alerts.day *= -1
  }
}

export default TimeManager