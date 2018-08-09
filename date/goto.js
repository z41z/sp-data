module.exports = function (year = 0, month = 0, day = 0) {
  return new Date(year, month - 1, day);
}