module.exports = function (dayCount = 1, date = new Date()) {
  let prevDay = new Date(date.getTime() - 24 * 3600000 * dayCount);
  return prevDay;
}