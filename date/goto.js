module.exports = function (year = 0, month = 0, day = 0, hour = 0, minute = 0, seconds = 0) {
  return new Date(year, month - 1, day, hour, minute, seconds);
}